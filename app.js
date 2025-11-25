let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let pyodide = null;
let shuffledQuestions = [...questions];
let userAnswers = {};
let allQuestions = [...questions]; // Keep original questions
let selectedCategory = 'all';

// Initialize Pyodide for Python code execution
async function initPyodide() {
    if (!pyodide) {
        pyodide = await loadPyodide();
    }
    return pyodide;
}

// Initialize the app
function init() {
    populateCategoryFilter();
    updateTotalQuestions();
    renderQuestionList();
    loadQuestion(0);
    initPyodide();
    
    // Event listeners
    document.getElementById('submit-mc-btn').addEventListener('click', submitMultipleChoice);
    document.getElementById('submit-code-btn').addEventListener('click', submitCode);
    document.getElementById('run-code-btn').addEventListener('click', runCode);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    document.getElementById('reset-btn').addEventListener('click', resetProgress);
    document.getElementById('shuffle-btn').addEventListener('click', shuffleQuestions);
    document.getElementById('category-filter').addEventListener('change', filterByCategory);
}

// Populate category dropdown
function populateCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    const categories = new Set();
    
    // Get all unique categories
    allQuestions.forEach(q => {
        if (q.category) {
            categories.add(q.category);
        }
    });
    
    // Sort categories and add to dropdown
    const sortedCategories = Array.from(categories).sort();
    sortedCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Filter questions by category
function filterByCategory() {
    selectedCategory = document.getElementById('category-filter').value;
    
    if (selectedCategory === 'all') {
        shuffledQuestions = [...allQuestions];
    } else {
        shuffledQuestions = allQuestions.filter(q => q.category === selectedCategory);
    }
    
    // Reset to first question
    currentQuestionIndex = 0;
    updateTotalQuestions();
    renderQuestionList();
    if (shuffledQuestions.length > 0) {
        loadQuestion(0);
    } else {
        document.getElementById('question-text').textContent = 'No questions found in this category.';
    }
}

// Update total questions count
function updateTotalQuestions() {
    document.getElementById('total-questions').textContent = shuffledQuestions.length;
}

// Render question list in sidebar
function renderQuestionList() {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';
    
    shuffledQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        if (index === currentQuestionIndex) {
            item.classList.add('active');
        }
        if (userAnswers[q.id]) {
            item.classList.add('completed');
        }
        const categoryBadge = q.category ? `<span class="category-badge">${q.category}</span>` : '';
        item.innerHTML = `
            <span>Q${q.id}: ${q.type === 'multiple-choice' ? 'MC' : 'Code'}</span>
            ${categoryBadge}
        `;
        item.addEventListener('click', () => loadQuestion(index));
        questionList.appendChild(item);
    });
}

// Load a question
function loadQuestion(index) {
    if (index < 0 || index >= shuffledQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = shuffledQuestions[index];
    
    // Reset UI
    document.getElementById('feedback-container').classList.add('hidden');
    document.getElementById('multiple-choice-container').classList.add('hidden');
    document.getElementById('code-container').classList.add('hidden');
    document.getElementById('code-output').textContent = '';
    document.getElementById('code-output').className = 'code-output';
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-number').textContent = index + 1;
    
    // Update question type badge
    const badge = document.getElementById('question-type-badge');
    badge.textContent = question.type === 'multiple-choice' ? 'Multiple Choice' : 'Code Writing';
    badge.className = `question-type-badge ${question.type === 'multiple-choice' ? 'multiple-choice' : 'code-writing'}`;
    
    // Show appropriate container
    if (question.type === 'multiple-choice') {
        loadMultipleChoice(question);
    } else {
        loadCodeQuestion(question);
    }
    
    // Update question list
    renderQuestionList();
    
    // Load previous answer if exists
    if (userAnswers[question.id]) {
        if (question.type === 'multiple-choice') {
            const option = document.querySelector(`input[value="${userAnswers[question.id]}"]`);
            if (option) {
                option.checked = true;
                option.parentElement.classList.add('selected');
                document.getElementById('submit-mc-btn').disabled = false;
            }
        } else {
            document.getElementById('code-editor').value = userAnswers[question.id];
            document.getElementById('submit-code-btn').disabled = false;
        }
    }
}

// Load multiple choice question
function loadMultipleChoice(question) {
    const container = document.getElementById('multiple-choice-container');
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = index;
        radio.id = `option-${index}`;
        
        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        optionDiv.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
                opt.querySelector('input').checked = false;
            });
            optionDiv.classList.add('selected');
            radio.checked = true;
            selectedAnswer = index;
            document.getElementById('submit-mc-btn').disabled = false;
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    container.classList.remove('hidden');
    selectedAnswer = null;
    document.getElementById('submit-mc-btn').disabled = true;
}

// Load code writing question
function loadCodeQuestion(question) {
    const container = document.getElementById('code-container');
    container.classList.remove('hidden');
    document.getElementById('code-editor').value = '';
    document.getElementById('submit-code-btn').disabled = true;
    
    // Enable submit button when code is typed
    document.getElementById('code-editor').addEventListener('input', function() {
        if (this.value.trim().length > 0) {
            document.getElementById('submit-code-btn').disabled = false;
        } else {
            document.getElementById('submit-code-btn').disabled = true;
        }
    });
}

// Submit multiple choice answer
function submitMultipleChoice() {
    if (selectedAnswer === null) return;
    
    const question = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Show feedback
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const explanation = document.getElementById('explanation');
    
    feedbackMessage.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
    feedbackMessage.className = isCorrect ? 'correct' : 'incorrect';
    explanation.textContent = question.explanation;
    
    // Mark options
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correctAnswer) {
            opt.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
        opt.style.pointerEvents = 'none';
    });
    
    // Update score
    if (isCorrect && !userAnswers[question.id]) {
        score++;
        document.getElementById('score').textContent = score;
    }
    
    // Store answer
    userAnswers[question.id] = selectedAnswer;
    
    // Show feedback
    feedbackContainer.classList.remove('hidden');
    document.getElementById('submit-mc-btn').disabled = true;
    
    renderQuestionList();
}

// Run code (for testing)
async function runCode() {
    const code = document.getElementById('code-editor').value.trim();
    const output = document.getElementById('code-output');
    
    if (!code) {
        output.textContent = 'Please write some code first.';
        output.className = 'code-output error';
        return;
    }
    
    try {
        await initPyodide();
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);
        
        pyodide.runPython(code);
        const result = pyodide.runPython('sys.stdout.getvalue()');
        
        if (result.trim()) {
            output.textContent = result;
            output.className = 'code-output success';
        } else {
            // Try to get any defined functions
            const functionName = extractFunctionName(code);
            if (functionName) {
                output.textContent = `Function '${functionName}' defined successfully. Use "Submit Solution" to test it against test cases.`;
                output.className = 'code-output success';
            } else {
                output.textContent = 'Code executed successfully (no output). Make sure you define a function.';
                output.className = 'code-output success';
            }
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
        output.className = 'code-output error';
    }
}

// Extract function name from code
function extractFunctionName(code) {
    const functionMatch = code.match(/def\s+(\w+)\s*\(/);
    if (functionMatch) {
        return functionMatch[1];
    }
    // Fallback: try to find function name from question
    const question = shuffledQuestions[currentQuestionIndex].question;
    if (question.includes('fibonacci')) return 'fibonacci';
    if (question.includes('reverse_string')) return 'reverse_string';
    if (question.includes('is_palindrome')) return 'is_palindrome';
    if (question.includes('find_max')) return 'find_max';
    if (question.includes('count_words')) return 'count_words';
    if (question.includes('remove_duplicates')) return 'remove_duplicates';
    return null;
}

// Submit code answer
async function submitCode() {
    const question = shuffledQuestions[currentQuestionIndex];
    const code = document.getElementById('code-editor').value.trim();
    
    if (!code) return;
    
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const explanation = document.getElementById('explanation');
    const output = document.getElementById('code-output');
    
    // Extract function name
    const functionName = extractFunctionName(code);
    if (!functionName) {
        feedbackMessage.textContent = '✗ Error: Could not find function definition. Please define a function.';
        feedbackMessage.className = 'incorrect';
        output.textContent = 'Make sure your code defines a function using "def function_name(...):"';
        output.className = 'code-output error';
        explanation.textContent = question.explanation;
        feedbackContainer.classList.remove('hidden');
        return;
    }
    
    try {
        await initPyodide();
        
        // Test the code against test cases
        let allPassed = true;
        let testResults = [];
        
        for (let testCase of question.testCases) {
            try {
                // Clear previous state - reload Pyodide for clean environment
                pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
`);
                
                // Prepare test environment
                let testInput = testCase.input;
                let testInputCode;
                
                // Handle different input types
                if (typeof testInput === 'string') {
                    testInputCode = `test_input = ${JSON.stringify(testInput)}`;
                } else if (Array.isArray(testInput)) {
                    testInputCode = `test_input = ${JSON.stringify(testInput)}`;
                } else if (typeof testInput === 'number') {
                    testInputCode = `test_input = ${testInput}`;
                } else {
                    testInputCode = `test_input = ${JSON.stringify(testInput)}`;
                }
                
                const testCode = `
${code}

# Test case
${testInputCode}
try:
    result = ${functionName}(test_input)
    import json
    if isinstance(result, (dict, list)):
        print(json.dumps(result))
    else:
        print(result)
except Exception as e:
    print(f"ERROR: {e}")
`;
                
                pyodide.runPython(testCode);
                const result = pyodide.runPython('sys.stdout.getvalue()').trim();
                
                // Check for errors
                if (result.startsWith('ERROR:')) {
                    allPassed = false;
                    testResults.push(`Error: ${result}`);
                    continue;
                }
                
                // Parse result
                let parsedResult;
                try {
                    parsedResult = JSON.parse(result);
                } catch {
                    // Try to parse as boolean or number
                    if (result === 'True') parsedResult = true;
                    else if (result === 'False') parsedResult = false;
                    else if (!isNaN(result) && result !== '') parsedResult = Number(result);
                    else parsedResult = result;
                }
                
                // Compare results
                let passed;
                if (testCase.compareFunction) {
                    passed = testCase.compareFunction(parsedResult, testCase.expected);
                } else {
                    // Deep comparison
                    passed = JSON.stringify(parsedResult) === JSON.stringify(testCase.expected);
                }
                
                if (!passed) {
                    allPassed = false;
                    testResults.push(`✗ Test failed: Input ${JSON.stringify(testInput)}, Expected ${JSON.stringify(testCase.expected)}, Got ${JSON.stringify(parsedResult)}`);
                } else {
                    testResults.push(`✓ Test passed: Input ${JSON.stringify(testInput)}`);
                }
            } catch (error) {
                allPassed = false;
                testResults.push(`✗ Error in test case: ${error.message}`);
            }
        }
        
        // Show results
        if (allPassed) {
            feedbackMessage.textContent = '✓ All tests passed! Great job!';
            feedbackMessage.className = 'correct';
            if (!userAnswers[question.id]) {
                score++;
                document.getElementById('score').textContent = score;
            }
        } else {
            feedbackMessage.textContent = '✗ Some tests failed. Check your solution.';
            feedbackMessage.className = 'incorrect';
        }
        
        output.textContent = testResults.join('\n');
        output.className = allPassed ? 'code-output success' : 'code-output error';
        explanation.textContent = question.explanation;
        
        // Store answer
        userAnswers[question.id] = code;
        
        feedbackContainer.classList.remove('hidden');
        document.getElementById('submit-code-btn').disabled = true;
        
        renderQuestionList();
        
    } catch (error) {
        feedbackMessage.textContent = '✗ Error executing code';
        feedbackMessage.className = 'incorrect';
        output.textContent = `Error: ${error.message}`;
        output.className = 'code-output error';
        explanation.textContent = question.explanation;
        feedbackContainer.classList.remove('hidden');
    }
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        // Show completion message
        alert('Congratulations! You\'ve completed all questions!');
    }
}

// Reset progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        score = 0;
        userAnswers = {};
        currentQuestionIndex = 0;
        document.getElementById('score').textContent = '0';
        if (shuffledQuestions.length > 0) {
            loadQuestion(0);
        }
    }
}

// Shuffle questions
function shuffleQuestions() {
    if (confirm('Shuffle questions? This will reset your progress.')) {
        // Shuffle current filtered questions
        shuffledQuestions = [...shuffledQuestions].sort(() => Math.random() - 0.5);
        score = 0;
        userAnswers = {};
        currentQuestionIndex = 0;
        document.getElementById('score').textContent = '0';
        updateTotalQuestions();
        renderQuestionList();
        if (shuffledQuestions.length > 0) {
            loadQuestion(0);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);
