// Question Library: Data Science Python Interview
// Category: Data Science
// Description: 10 most common Data Science Python interview questions

const dataScienceQuestions = {
    libraryName: "Data Science",
    category: "Data Science",
    description: "Essential Python questions for Data Science interviews covering pandas, numpy, data manipulation, and analysis",
    questions: [
        {
            id: 1001,
            type: 'multiple-choice',
            question: 'What is the primary purpose of pandas DataFrame?',
            options: [
                'To perform mathematical operations on arrays',
                'To store and manipulate structured data in tabular format',
                'To create visualizations',
                'To handle HTTP requests'
            ],
            correctAnswer: 1,
            explanation: 'pandas DataFrame is a two-dimensional labeled data structure used for storing and manipulating structured data in tabular format, similar to a spreadsheet or SQL table.',
            category: 'Data Science'
        },
        {
            id: 1002,
            type: 'multiple-choice',
            question: 'What does `df.dropna()` do in pandas?',
            options: [
                'Adds missing values to DataFrame',
                'Removes rows or columns with missing values',
                'Fills missing values with zeros',
                'Counts missing values'
            ],
            correctAnswer: 1,
            explanation: 'dropna() removes rows or columns that contain missing (NaN) values from the DataFrame.',
            category: 'Data Science'
        },
        {
            id: 1003,
            type: 'multiple-choice',
            question: 'What is the difference between `loc` and `iloc` in pandas?',
            options: [
                'loc uses integer positions, iloc uses labels',
                'loc uses labels, iloc uses integer positions',
                'They are identical',
                'loc is for columns, iloc is for rows'
            ],
            correctAnswer: 1,
            explanation: 'loc is label-based indexing (uses row/column names), while iloc is integer position-based indexing (uses numeric positions).',
            category: 'Data Science'
        },
        {
            id: 1004,
            type: 'multiple-choice',
            question: 'What does `np.array([1,2,3]).shape` return?',
            options: [
                '(3,)',
                '(1,3)',
                '(3,1)',
                'Error'
            ],
            correctAnswer: 0,
            explanation: 'shape returns the dimensions of the array. A 1D array with 3 elements has shape (3,), indicating 3 elements in one dimension.',
            category: 'Data Science'
        },
        {
            id: 1005,
            type: 'multiple-choice',
            question: 'What is the purpose of `groupby()` in pandas?',
            options: [
                'To sort data',
                'To group data by one or more columns and perform operations on groups',
                'To merge DataFrames',
                'To filter data'
            ],
            correctAnswer: 1,
            explanation: 'groupby() splits data into groups based on some criteria, allowing you to apply functions to each group independently (like sum, mean, count).',
            category: 'Data Science'
        },
        {
            id: 1006,
            type: 'code-writing',
            question: 'Write a function `calculate_mean(data)` that calculates the mean of a list of numbers without using built-in functions like sum() or statistics.mean().',
            testCases: [
                { input: [1, 2, 3, 4, 5], expected: 3.0 },
                { input: [10, 20, 30], expected: 20.0 },
                { input: [5], expected: 5.0 },
                { input: [1, 1, 1, 1], expected: 1.0 }
            ],
            explanation: 'Calculate mean by summing all values manually and dividing by the count. Mean = sum of all values / number of values.',
            category: 'Data Science'
        },
        {
            id: 1007,
            type: 'code-writing',
            question: 'Write a function `filter_outliers(data, threshold)` that removes values from a list that are more than `threshold` standard deviations away from the mean.',
            testCases: [
                { 
                    input: [[1, 2, 3, 4, 5, 100], 2], 
                    expected: [1, 2, 3, 4, 5],
                    compareFunction: (result, expected) => {
                        return JSON.stringify(result.sort()) === JSON.stringify(expected.sort());
                    }
                },
                { 
                    input: [[10, 20, 30, 40, 50], 1], 
                    expected: [20, 30, 40],
                    compareFunction: (result, expected) => {
                        return JSON.stringify(result.sort()) === JSON.stringify(expected.sort());
                    }
                }
            ],
            explanation: 'Calculate mean and standard deviation, then filter values that are beyond threshold * std from the mean.',
            category: 'Data Science'
        },
        {
            id: 1008,
            type: 'multiple-choice',
            question: 'What does `df.merge(df1, df2, on="key")` do?',
            options: [
                'Combines two DataFrames based on a common column',
                'Splits a DataFrame into two',
                'Sorts the DataFrame',
                'Deletes duplicate rows'
            ],
            correctAnswer: 0,
            explanation: 'merge() combines two DataFrames based on common columns (like SQL JOIN), creating a new DataFrame with columns from both.',
            category: 'Data Science'
        },
        {
            id: 1009,
            type: 'multiple-choice',
            question: 'What is the difference between `df.copy()` and `df` assignment in pandas?',
            options: [
                'copy() creates a deep copy, assignment creates a view',
                'They are identical',
                'copy() is faster',
                'Assignment creates a deep copy'
            ],
            correctAnswer: 0,
            explanation: 'copy() creates an independent copy of the DataFrame. Direct assignment creates a view/reference, so changes to one affect the other.',
            category: 'Data Science'
        },
        {
            id: 1010,
            type: 'code-writing',
            question: 'Write a function `normalize_data(data)` that normalizes a list of numbers to the range [0, 1] using min-max normalization: (x - min) / (max - min).',
            testCases: [
                { 
                    input: [1, 2, 3, 4, 5], 
                    expected: [0.0, 0.25, 0.5, 0.75, 1.0],
                    compareFunction: (result, expected) => {
                        if (result.length !== expected.length) return false;
                        return result.every((val, i) => Math.abs(val - expected[i]) < 0.01);
                    }
                },
                { 
                    input: [10, 20, 30], 
                    expected: [0.0, 0.5, 1.0],
                    compareFunction: (result, expected) => {
                        if (result.length !== expected.length) return false;
                        return result.every((val, i) => Math.abs(val - expected[i]) < 0.01);
                    }
                }
            ],
            explanation: 'Min-max normalization scales data to [0,1] range: (value - min) / (max - min). This is commonly used in data preprocessing.',
            category: 'Data Science'
        }
    ]
};

