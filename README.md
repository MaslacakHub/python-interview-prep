# Python Interview Prep App

A modern, interactive web application to help you prepare for Python interviews with multiple-choice questions and code-writing challenges.

## Features

- 🎯 **Multiple Choice Questions**: Test your knowledge with interactive multiple-choice questions
- 💻 **Code Writing Challenges**: Write Python code and get instant feedback on correctness
- 🎨 **Modern UI**: Beautiful, responsive design with dark theme
- 📊 **Progress Tracking**: Track your score and see which questions you've completed
- 🔀 **Question Shuffling**: Randomize question order for varied practice
- ✅ **Instant Feedback**: Get immediate feedback with explanations

## How to Use

1. **Open the app**: Simply open `index.html` in a modern web browser (Chrome, Firefox, Edge, etc.)

2. **Answer Questions**:
   - **Multiple Choice**: Click on an option and then click "Submit Answer"
   - **Code Writing**: Write your Python code in the editor, optionally click "Run Code" to test it, then click "Submit Solution"

3. **Navigate**: Use the question list in the sidebar to jump to any question

4. **Track Progress**: Your score and completed questions are tracked automatically

## Question Types

### Multiple Choice Questions
- Select the correct answer from multiple options
- Get immediate feedback with explanations
- Learn from detailed explanations for each question

### Code Writing Questions
- Write Python functions to solve problems
- Code is tested against multiple test cases
- Get feedback on which tests passed or failed
- Run your code before submitting to test it

## Technologies Used

- **HTML5**: Structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript**: App logic and interactivity
- **Pyodide**: Python runtime in the browser for code execution

## Adding Your Own Questions

Edit `questions.js` to add more questions:

```javascript
{
    id: 16,
    type: 'multiple-choice', // or 'code-writing'
    question: 'Your question here?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // for multiple-choice
    correctAnswer: 0, // index of correct answer
    explanation: 'Explanation of the answer'
}
```

For code-writing questions:

```javascript
{
    id: 17,
    type: 'code-writing',
    question: 'Write a function...',
    testCases: [
        { input: 'test', expected: 'result' }
    ],
    explanation: 'Explanation of the solution'
}
```

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

Note: The app uses Pyodide for Python execution, which may take a few seconds to load on first use.

## License

Free to use and modify for personal learning purposes.
