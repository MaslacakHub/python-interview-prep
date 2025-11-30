# Python Interview Prep App

A modern, interactive web application to help you prepare for Python interviews with multiple-choice questions and code-writing challenges.

## 🚀 Quick Start

### For Windows Users

**👉 See [WINDOWS_SETUP.md](WINDOWS_SETUP.md) for complete Windows-specific instructions!**

Quick steps:
1. Install Git (or download ZIP)
2. Clone repository: `git clone https://github.com/YOUR_USERNAME/python-interview-prep.git`
3. Open `index.html` in browser
4. Done!

### Option 1: Clone from GitHub (Recommended)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/python-interview-prep.git

# Navigate to the project folder
cd python-interview-prep

# Open index.html in your browser
# That's it! No installation needed.
```

**Note:** Replace `YOUR_USERNAME` with the actual GitHub username after you upload the repository.

### Option 2: Download ZIP

1. Download the repository as ZIP
2. Extract the folder
3. Open `index.html` in your browser

### Option 3: Use Live Version

If hosted on GitHub Pages or Netlify, simply visit the live URL - no download needed!

---

## Features

- 🎯 **Multiple Choice Questions**: Test your knowledge with interactive multiple-choice questions
- 💻 **Code Writing Challenges**: Write Python code and get instant feedback on correctness
- 🎨 **Modern UI**: Beautiful, responsive design with dark theme
- 📊 **Progress Tracking**: Track your score and see which questions you've completed
- 🔀 **Question Shuffling**: Randomize question order for varied practice
- ✅ **Instant Feedback**: Get immediate feedback with explanations
- 📚 **Question Libraries**: Load additional question libraries (Data Science, etc.)
- 🏷️ **Category Filtering**: Filter questions by category within each library

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

## Question Libraries

The app supports multiple question libraries that can be loaded separately:

- **Main Library**: 1000 general Python interview questions
- **Data Science Library**: 10 essential Data Science Python questions (pandas, numpy, data manipulation)

Select a library from the dropdown in the sidebar to focus on specific topics.

### Adding New Question Libraries

See [question-libraries/README.md](question-libraries/README.md) for instructions on creating and adding new question libraries.

## Adding Your Own Questions

### Option 1: Add to Main Library

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
    explanation: 'Explanation of the solution',
    category: 'Category Name'
}
```

### Option 2: Create a New Question Library

Create a new file in `question-libraries/` folder following the template in [question-libraries/README.md](question-libraries/README.md).

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

Note: The app uses Pyodide for Python execution, which may take a few seconds to load on first use.

## 📦 Installation & Setup

### For Users (Getting the App)

**Using Git:**
```bash
git clone https://github.com/YOUR_USERNAME/python-interview-prep.git
cd python-interview-prep
# Open index.html in browser
```

**Using ZIP:**
1. Download ZIP from GitHub
2. Extract files
3. Open `index.html` in browser

### For Developers (Setting Up Git Repository)

See [GIT_SETUP.md](GIT_SETUP.md) for detailed instructions on:
- Initializing Git repository
- Pushing to GitHub
- Setting up for others to clone

## 📚 Documentation

- **[WINDOWS_SETUP.md](WINDOWS_SETUP.md)** - ⭐ Complete Windows setup guide (start here if you're on Windows!)
- **[CLONE_INSTRUCTIONS.md](CLONE_INSTRUCTIONS.md)** - Simple instructions for cloning the repository
- **[GIT_SETUP.md](GIT_SETUP.md)** - Complete guide for Git setup and GitHub deployment
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Guide for hosting on GitHub Pages, Netlify, etc.
- **[QUICK_START_GITHUB.md](QUICK_START_GITHUB.md)** - Quick 5-minute GitHub Pages setup
- **[GIT_COMMANDS.md](GIT_COMMANDS.md)** - Quick reference for Git commands

## 🤝 Contributing

Feel free to:
- Add more questions
- Improve the UI
- Report bugs
- Suggest features

## License

Free to use and modify for personal learning purposes.
