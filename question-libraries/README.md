# Question Libraries

This folder contains additional question libraries that can be loaded into the Python Interview Prep app.

## Structure

Each question library file should follow this format:

```javascript
// Question Library: [Library Name]
// Category: [Category Name]
// Description: [Brief description]

const [libraryName]Questions = {
    libraryName: "Library Display Name",
    category: "Category Name",
    description: "Description of what this library covers",
    questions: [
        {
            id: 1001, // Unique ID (start from 1000+ to avoid conflicts)
            type: 'multiple-choice', // or 'code-writing'
            question: 'Your question here?',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // for multiple-choice
            correctAnswer: 0, // index of correct answer
            explanation: 'Explanation of the answer',
            category: 'Category Name'
        },
        // ... more questions
    ]
};
```

## Adding a New Library

### Step 1: Create the Library File

1. Create a new `.js` file in this folder (e.g., `machine-learning.js`)
2. Follow the structure above
3. Use unique IDs starting from 1000+ (or higher if you have many libraries)

### Step 2: Update index.html

Add the script tag before `app.js`:

```html
<script src="question-libraries/your-library-name.js"></script>
```

### Step 3: Update app.js (if needed)

The app automatically detects libraries that follow the naming pattern:
- Variable name: `[libraryName]Questions` (e.g., `dataScienceQuestions`)
- The app will automatically load it if the variable is defined

For custom library names, you may need to update the `loadQuestionLibraries()` function in `app.js`.

## Example Libraries

### Data Science Library (`data-science.js`)
- 10 questions covering pandas, numpy, data manipulation
- Category: Data Science

## Best Practices

1. **Unique IDs**: Start from 1000+ for new libraries to avoid conflicts
2. **Consistent Categories**: Use the same category name across all questions in a library
3. **Clear Descriptions**: Write clear, helpful explanations
4. **Test Cases**: For code-writing questions, include multiple test cases
5. **Naming**: Use descriptive library names (e.g., `data-science.js`, `web-development.js`)

## Library Categories

You can organize libraries by:
- **Domain**: Data Science, Web Development, Machine Learning, etc.
- **Difficulty**: Beginner, Intermediate, Advanced
- **Topic**: Algorithms, OOP, Data Structures, etc.

## Questions Per Library

- **Small Library**: 10-20 questions (focused topics)
- **Medium Library**: 50-100 questions (comprehensive coverage)
- **Large Library**: 100+ questions (extensive practice)

## Tips

- Keep libraries focused on specific topics
- Include both multiple-choice and code-writing questions
- Test your library before sharing
- Document what the library covers in the description

