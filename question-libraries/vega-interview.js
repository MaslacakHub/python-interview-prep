// Question Library: Vega Interview Preparation
// Category: Vega Interview
// Description: Comprehensive questions for Vega ML/AI Engineer position covering EDA, CV, NLP, GenAI, Recommendation Systems, and deployment

const vegaInterviewQuestions = {
    libraryName: "Vega Interview Prep",
    category: "Vega Interview",
    description: "Comprehensive preparation for Vega ML/AI Engineer position covering mathematics, EDA, Computer Vision, NLP, Generative AI, Recommendation Systems, OOP, Git, databases, FastAPI, and Docker",
    questions: [
        // ========== MATHEMATICS & EDA (10 questions) ==========
        {
            id: 2001,
            type: 'multiple-choice',
            question: 'What is the purpose of Exploratory Data Analysis (EDA)?',
            options: [
                'To build machine learning models',
                'To understand data patterns, distributions, and relationships before modeling',
                'To deploy models to production',
                'To write unit tests'
            ],
            correctAnswer: 1,
            explanation: 'EDA is used to explore and understand data through visualizations and statistical summaries before building models. It helps identify patterns, outliers, and relationships.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2002,
            type: 'multiple-choice',
            question: 'What does correlation coefficient measure?',
            options: [
                'Causation between variables',
                'Linear relationship strength and direction between two variables',
                'Non-linear relationships',
                'Data distribution shape'
            ],
            correctAnswer: 1,
            explanation: 'Correlation coefficient (Pearson) measures the strength and direction of linear relationship between two variables, ranging from -1 to +1.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2003,
            type: 'code-writing',
            question: 'Write a function `calculate_correlation(x, y)` that calculates Pearson correlation coefficient between two lists without using numpy.corrcoef().',
            testCases: [
                { 
                    input: [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]], 
                    expected: 1.0,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.01
                },
                { 
                    input: [[1, 2, 3], [3, 2, 1]], 
                    expected: -1.0,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.01
                }
            ],
            explanation: 'Pearson correlation: r = Σ((x-mean_x)(y-mean_y)) / sqrt(Σ(x-mean_x)² * Σ(y-mean_y)²)',
            category: 'Mathematics & EDA'
        },
        {
            id: 2004,
            type: 'multiple-choice',
            question: 'What is the difference between mean and median?',
            options: [
                'Mean is always larger than median',
                'Mean is average, median is middle value - median is robust to outliers',
                'They are always the same',
                'Mean is for categorical data, median for numerical'
            ],
            correctAnswer: 1,
            explanation: 'Mean is the average (sum/n), while median is the middle value when sorted. Median is more robust to outliers.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2005,
            type: 'multiple-choice',
            question: 'What does a box plot show?',
            options: [
                'Only mean and standard deviation',
                'Distribution quartiles, median, and outliers',
                'Correlation between variables',
                'Time series trends'
            ],
            correctAnswer: 1,
            explanation: 'Box plot displays quartiles (Q1, Q2/median, Q3), interquartile range, and outliers, providing distribution summary.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2006,
            type: 'multiple-choice',
            question: 'What is standard deviation?',
            options: [
                'Average of all values',
                'Measure of data spread/variability around the mean',
                'Middle value when sorted',
                'Maximum value minus minimum value'
            ],
            correctAnswer: 1,
            explanation: 'Standard deviation measures how spread out data is from the mean. Higher std = more variability.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2007,
            type: 'multiple-choice',
            question: 'What is a histogram used for?',
            options: [
                'Showing correlation between variables',
                'Displaying distribution of a single variable',
                'Comparing multiple categories',
                'Showing time series trends'
            ],
            correctAnswer: 1,
            explanation: 'Histogram shows frequency distribution of a single variable by dividing data into bins and counting occurrences.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2008,
            type: 'code-writing',
            question: 'Write a function `calculate_standard_deviation(data)` that calculates standard deviation without using numpy.std().',
            testCases: [
                { 
                    input: [1, 2, 3, 4, 5], 
                    expected: 1.41,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.1
                },
                { 
                    input: [10, 20, 30], 
                    expected: 8.16,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.1
                }
            ],
            explanation: 'Std = sqrt(Σ(x - mean)² / n). Calculate mean, then variance (average squared differences), then square root.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2009,
            type: 'multiple-choice',
            question: 'What is the difference between population and sample standard deviation?',
            options: [
                'They are identical',
                'Population uses N, sample uses N-1 (Bessel\'s correction)',
                'Population is always larger',
                'Sample is for categorical data'
            ],
            correctAnswer: 1,
            explanation: 'Population std divides by N, sample std divides by N-1 (Bessel\'s correction) to correct for bias in sample estimate.',
            category: 'Mathematics & EDA'
        },
        {
            id: 2010,
            type: 'multiple-choice',
            question: 'What does a scatter plot show?',
            options: [
                'Distribution of one variable',
                'Relationship between two variables',
                'Time series data',
                'Categorical comparisons'
            ],
            correctAnswer: 1,
            explanation: 'Scatter plot displays relationship between two continuous variables, showing correlation, trends, and outliers.',
            category: 'Mathematics & EDA'
        },

        // ========== PANDAS & NUMPY (10 questions) ==========
        {
            id: 2006,
            type: 'multiple-choice',
            question: 'What is the difference between `df.loc[]` and `df.iloc[]` in pandas?',
            options: [
                'loc uses integer positions, iloc uses labels',
                'loc uses labels/indices, iloc uses integer positions',
                'They are identical',
                'loc is for columns only'
            ],
            correctAnswer: 1,
            explanation: 'loc is label-based (uses row/column names), iloc is integer position-based (uses numeric indices).',
            category: 'Pandas & NumPy'
        },
        {
            id: 2007,
            type: 'multiple-choice',
            question: 'What does `np.array([1,2,3]).reshape(3,1)` create?',
            options: [
                '1D array with shape (3,)',
                '2D array with shape (3, 1) - column vector',
                '2D array with shape (1, 3) - row vector',
                'Error'
            ],
            correctAnswer: 1,
            explanation: 'reshape(3,1) creates a 2D array with 3 rows and 1 column - a column vector.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2008,
            type: 'code-writing',
            question: 'Write a function `normalize_array(arr)` that normalizes a numpy array to have mean=0 and std=1 using z-score normalization: (x - mean) / std.',
            testCases: [
                { 
                    input: [1, 2, 3, 4, 5], 
                    expected: [-1.41, -0.71, 0.0, 0.71, 1.41],
                    compareFunction: (result, expected) => {
                        if (!Array.isArray(result) || result.length !== expected.length) return false;
                        return result.every((val, i) => Math.abs(val - expected[i]) < 0.1);
                    }
                }
            ],
            explanation: 'Z-score normalization: subtract mean, divide by standard deviation. Result has mean≈0, std≈1.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2009,
            type: 'multiple-choice',
            question: 'What does `df.groupby("category").agg({"value": ["mean", "std"]})` do?',
            options: [
                'Groups by category and calculates mean and std for value column',
                'Filters rows by category',
                'Sorts by category',
                'Merges DataFrames'
            ],
            correctAnswer: 0,
            explanation: 'groupby() groups data by category column, then agg() applies mean and std functions to value column for each group.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2011,
            type: 'multiple-choice',
            question: 'What does `df.isna().sum()` return?',
            options: [
                'Total number of rows',
                'Count of missing values per column',
                'Sum of all values',
                'Number of columns'
            ],
            correctAnswer: 1,
            explanation: 'isna() returns boolean mask of missing values, sum() counts True values (missing data) per column.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2012,
            type: 'multiple-choice',
            question: 'What is the difference between `np.array()` and `np.asarray()`?',
            options: [
                'asarray always copies, array may not',
                'array always copies, asarray avoids copy if input is already array',
                'They are identical',
                'array is faster'
            ],
            correctAnswer: 1,
            explanation: 'np.array() always creates a copy. np.asarray() avoids copy if input is already an array, making it more memory efficient.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2013,
            type: 'code-writing',
            question: 'Write a function `fill_missing_mean(df, column)` that fills missing values in a pandas DataFrame column with the mean of that column.',
            testCases: [
                { 
                    input: [{'col': [1, 2, None, 4, 5]}], 
                    expected: [1, 2, 3, 4, 5],
                    compareFunction: (result, expected) => {
                        if (!Array.isArray(result)) return false;
                        return result.every((val, i) => Math.abs(val - expected[i]) < 0.01);
                    }
                }
            ],
            explanation: 'Calculate mean of non-null values, then use fillna(): mean_val = df[column].mean(); df[column].fillna(mean_val)',
            category: 'Pandas & NumPy'
        },
        {
            id: 2014,
            type: 'multiple-choice',
            question: 'What does `df.pivot_table()` do?',
            options: [
                'Rotates the DataFrame',
                'Creates a spreadsheet-style pivot table with aggregation',
                'Merges DataFrames',
                'Filters rows'
            ],
            correctAnswer: 1,
            explanation: 'pivot_table creates a summary table by grouping and aggregating data, similar to Excel pivot tables.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2015,
            type: 'multiple-choice',
            question: 'What is broadcasting in NumPy?',
            options: [
                'Sending data over network',
                'Automatic expansion of arrays with different shapes for operations',
                'Copying arrays',
                'Reshaping arrays'
            ],
            correctAnswer: 1,
            explanation: 'Broadcasting allows NumPy to perform operations on arrays of different shapes by automatically expanding smaller arrays.',
            category: 'Pandas & NumPy'
        },
        {
            id: 2016,
            type: 'code-writing',
            question: 'Write a function `merge_dataframes(df1, df2, key)` that merges two DataFrames on a common key column using inner join.',
            testCases: [
                { 
                    input: [], 
                    expected: 'merged_dataframe',
                    compareFunction: (result, expected) => result && typeof result === 'object'
                }
            ],
            explanation: 'Use pandas merge: pd.merge(df1, df2, on=key, how="inner") or df1.merge(df2, on=key)',
            category: 'Pandas & NumPy'
        },

        // ========== SKLEARN (10 questions) ==========
        {
            id: 2010,
            type: 'multiple-choice',
            question: 'What is the purpose of train_test_split in sklearn?',
            options: [
                'To merge datasets',
                'To split data into training and testing sets for model evaluation',
                'To normalize data',
                'To remove outliers'
            ],
            correctAnswer: 1,
            explanation: 'train_test_split divides data into training (for model learning) and testing (for evaluation) sets, preventing overfitting.',
            category: 'Scikit-learn'
        },
        {
            id: 2011,
            type: 'multiple-choice',
            question: 'What does StandardScaler do in sklearn?',
            options: [
                'Removes missing values',
                'Standardizes features to mean=0, std=1',
                'Encodes categorical variables',
                'Selects important features'
            ],
            correctAnswer: 1,
            explanation: 'StandardScaler normalizes features by removing mean and scaling to unit variance (z-score normalization).',
            category: 'Scikit-learn'
        },
        {
            id: 2012,
            type: 'code-writing',
            question: 'Write a function `train_model(X_train, y_train)` that trains a simple linear regression model using sklearn and returns the trained model.',
            testCases: [
                { 
                    input: [[[1], [2], [3], [4]], [2, 4, 6, 8]], 
                    expected: 'model_object',
                    compareFunction: (result, expected) => result && typeof result.predict === 'function'
                }
            ],
            explanation: 'Use LinearRegression from sklearn.linear_model: model = LinearRegression(); model.fit(X, y); return model',
            category: 'Scikit-learn'
        },
        {
            id: 2017,
            type: 'multiple-choice',
            question: 'What is cross-validation?',
            options: [
                'Training on all data',
                'Splitting data into k folds and training/testing on different folds to assess model performance',
                'Testing on training data',
                'Removing outliers'
            ],
            correctAnswer: 1,
            explanation: 'Cross-validation splits data into k folds, trains on k-1 folds and tests on remaining fold, repeating k times for robust performance estimate.',
            category: 'Scikit-learn'
        },
        {
            id: 2018,
            type: 'multiple-choice',
            question: 'What is the difference between fit() and fit_transform()?',
            options: [
                'fit_transform is faster',
                'fit() learns parameters, fit_transform() learns and transforms in one step',
                'They are identical',
                'fit() is for training, fit_transform() for testing'
            ],
            correctAnswer: 1,
            explanation: 'fit() learns parameters from data. fit_transform() learns parameters and applies transformation in one step (more efficient).',
            category: 'Scikit-learn'
        },
        {
            id: 2019,
            type: 'multiple-choice',
            question: 'What is overfitting?',
            options: [
                'Model performs poorly on training data',
                'Model learns training data too well but fails on new data',
                'Model is too simple',
                'Model has too few parameters'
            ],
            correctAnswer: 1,
            explanation: 'Overfitting occurs when model memorizes training data (high training accuracy) but fails to generalize to new data (low test accuracy).',
            category: 'Scikit-learn'
        },
        {
            id: 2020,
            type: 'code-writing',
            question: 'Write a function `evaluate_model(model, X_test, y_test)` that calculates accuracy, precision, and recall using sklearn metrics.',
            testCases: [
                { 
                    input: [], 
                    expected: 'metrics_dict',
                    compareFunction: (result, expected) => result && typeof result.accuracy !== 'undefined'
                }
            ],
            explanation: 'Use sklearn.metrics: accuracy_score(), precision_score(), recall_score() to evaluate classification model.',
            category: 'Scikit-learn'
        },
        {
            id: 2021,
            type: 'multiple-choice',
            question: 'What is GridSearchCV used for?',
            options: [
                'Grid visualization',
                'Hyperparameter tuning by testing all combinations',
                'Data preprocessing',
                'Feature selection'
            ],
            correctAnswer: 1,
            explanation: 'GridSearchCV performs exhaustive search over specified hyperparameter values, using cross-validation to find best parameters.',
            category: 'Scikit-learn'
        },
        {
            id: 2022,
            type: 'multiple-choice',
            question: 'What does OneHotEncoder do?',
            options: [
                'Encodes text to numbers',
                'Converts categorical variables into binary columns',
                'Normalizes numerical data',
                'Removes missing values'
            ],
            correctAnswer: 1,
            explanation: 'OneHotEncoder converts categorical features into binary (0/1) columns, one per category, for machine learning models.',
            category: 'Scikit-learn'
        },
        {
            id: 2023,
            type: 'multiple-choice',
            question: 'What is the purpose of Pipeline in sklearn?',
            options: [
                'Data storage',
                'Chaining multiple preprocessing and modeling steps',
                'Parallel processing',
                'Database connection'
            ],
            correctAnswer: 1,
            explanation: 'Pipeline chains multiple transformers and estimator into a single object, ensuring consistent preprocessing and avoiding data leakage.',
            category: 'Scikit-learn'
        },

        // ========== COMPUTER VISION (10 questions) ==========
        {
            id: 2013,
            type: 'multiple-choice',
            question: 'What is the primary use of OpenCV (cv2) in Python?',
            options: [
                'Natural language processing',
                'Computer vision and image processing',
                'Web scraping',
                'Database operations'
            ],
            correctAnswer: 1,
            explanation: 'OpenCV is a library for computer vision tasks: image processing, object detection, feature extraction, etc.',
            category: 'Computer Vision'
        },
        {
            id: 2014,
            type: 'multiple-choice',
            question: 'What does PIL/Pillow library provide?',
            options: [
                'Machine learning models',
                'Image manipulation and processing capabilities',
                'Web framework',
                'Database ORM'
            ],
            correctAnswer: 1,
            explanation: 'PIL (Pillow) provides image opening, manipulation, and processing: resize, crop, filter, format conversion, etc.',
            category: 'Computer Vision'
        },
        {
            id: 2015,
            type: 'multiple-choice',
            question: 'What is scikit-image (skimage) used for?',
            options: [
                'Text processing',
                'Image processing algorithms and computer vision',
                'Data visualization',
                'API development'
            ],
            correctAnswer: 1,
            explanation: 'scikit-image provides image processing algorithms: segmentation, feature detection, filters, transformations.',
            category: 'Computer Vision'
        },
        {
            id: 2016,
            type: 'code-writing',
            question: 'Write a function `resize_image(image_path, width, height)` that resizes an image using PIL/Pillow to specified dimensions.',
            testCases: [
                { 
                    input: ['test.jpg', 100, 100], 
                    expected: 'PIL_Image_object',
                    compareFunction: (result, expected) => result && result.size && result.size[0] === 100 && result.size[1] === 100
                }
            ],
            explanation: 'Use PIL Image: from PIL import Image; img = Image.open(path); resized = img.resize((width, height)); return resized',
            category: 'Computer Vision'
        },
        {
            id: 2024,
            type: 'multiple-choice',
            question: 'What is image convolution?',
            options: [
                'Image compression',
                'Applying a kernel/filter to an image for feature extraction (blur, edge detection, etc.)',
                'Image resizing',
                'Color conversion'
            ],
            correctAnswer: 1,
            explanation: 'Convolution applies a kernel (small matrix) to image pixels, used for blurring, sharpening, edge detection, and feature extraction.',
            category: 'Computer Vision'
        },
        {
            id: 2025,
            type: 'multiple-choice',
            question: 'What is the purpose of image augmentation?',
            options: [
                'To reduce image size',
                'To increase dataset diversity by applying transformations (rotate, flip, crop)',
                'To compress images',
                'To convert formats'
            ],
            correctAnswer: 1,
            explanation: 'Image augmentation applies transformations (rotation, flipping, cropping, brightness) to create more training data and improve model generalization.',
            category: 'Computer Vision'
        },
        {
            id: 2026,
            type: 'code-writing',
            question: 'Write a function `convert_grayscale(image_path)` that converts a color image to grayscale using PIL/Pillow.',
            testCases: [
                { 
                    input: ['test.jpg'], 
                    expected: 'grayscale_image',
                    compareFunction: (result, expected) => result && result.mode === 'L'
                }
            ],
            explanation: 'Use PIL Image: img = Image.open(path); gray = img.convert("L"); return gray',
            category: 'Computer Vision'
        },
        {
            id: 2027,
            type: 'multiple-choice',
            question: 'What is a CNN (Convolutional Neural Network)?',
            options: [
                'A database type',
                'Deep learning architecture designed for image processing using convolutional layers',
                'A web framework',
                'A data structure'
            ],
            correctAnswer: 1,
            explanation: 'CNN uses convolutional layers to automatically learn spatial features from images, widely used in computer vision tasks.',
            category: 'Computer Vision'
        },
        {
            id: 2028,
            type: 'multiple-choice',
            question: 'What does cv2.Canny() do?',
            options: [
                'Image resizing',
                'Edge detection using Canny algorithm',
                'Color conversion',
                'Image rotation'
            ],
            correctAnswer: 1,
            explanation: 'Canny edge detector finds edges in images using gradient-based method with noise reduction and edge linking.',
            category: 'Computer Vision'
        },
        {
            id: 2029,
            type: 'code-writing',
            question: 'Write a function `detect_edges(image_path)` that loads an image and applies Canny edge detection using OpenCV.',
            testCases: [
                { 
                    input: ['test.jpg'], 
                    expected: 'edge_image',
                    compareFunction: (result, expected) => result && typeof result !== 'undefined'
                }
            ],
            explanation: 'Use cv2: img = cv2.imread(path, 0); edges = cv2.Canny(img, 100, 200); return edges',
            category: 'Computer Vision'
        },

        // ========== NATURAL LANGUAGE PROCESSING (10 questions) ==========
        {
            id: 2017,
            type: 'multiple-choice',
            question: 'What is tokenization in NLP?',
            options: [
                'Converting text to numbers',
                'Splitting text into individual words or tokens',
                'Removing stop words',
                'Training language models'
            ],
            correctAnswer: 1,
            explanation: 'Tokenization is the process of breaking text into smaller units (tokens) like words or subwords, which is the first step in NLP pipelines.',
            category: 'Natural Language Processing'
        },
        {
            id: 2018,
            type: 'multiple-choice',
            question: 'What is TF-IDF?',
            options: [
                'A neural network architecture',
                'Term Frequency-Inverse Document Frequency - a text vectorization technique',
                'A database type',
                'A web framework'
            ],
            correctAnswer: 1,
            explanation: 'TF-IDF measures word importance: high for frequent words in a document but rare across corpus. Used for text vectorization.',
            category: 'Natural Language Processing'
        },
        {
            id: 2019,
            type: 'code-writing',
            question: 'Write a function `tokenize_text(text)` that splits text into words (simple tokenization, lowercase, remove punctuation).',
            testCases: [
                { 
                    input: 'Hello, World! How are you?', 
                    expected: ['hello', 'world', 'how', 'are', 'you'],
                    compareFunction: (result, expected) => JSON.stringify(result) === JSON.stringify(expected)
                }
            ],
            explanation: 'Split by whitespace, lowercase, remove punctuation using string methods or regex.',
            category: 'Natural Language Processing'
        },
        {
            id: 2030,
            type: 'multiple-choice',
            question: 'What are stop words?',
            options: [
                'Words that are always capitalized',
                'Common words (the, is, a) that are often removed in NLP preprocessing',
                'Words with special characters',
                'Long words'
            ],
            correctAnswer: 1,
            explanation: 'Stop words are common words (the, is, a, an) that carry little meaning and are often removed to focus on important words.',
            category: 'Natural Language Processing'
        },
        {
            id: 2031,
            type: 'multiple-choice',
            question: 'What is word embedding?',
            options: [
                'Text compression',
                'Representing words as dense vectors that capture semantic meaning',
                'Removing words',
                'Counting words'
            ],
            correctAnswer: 1,
            explanation: 'Word embeddings map words to dense vectors in continuous space, where similar words have similar vectors (Word2Vec, GloVe, BERT).',
            category: 'Natural Language Processing'
        },
        {
            id: 2032,
            type: 'code-writing',
            question: 'Write a function `remove_stopwords(text, stopwords_list)` that removes stop words from a text string.',
            testCases: [
                { 
                    input: ['the quick brown fox', ['the', 'a', 'an']], 
                    expected: 'quick brown fox',
                    compareFunction: (result, expected) => result.trim() === expected
                }
            ],
            explanation: 'Split text, filter out words in stopwords_list, join back: words = text.split(); filtered = [w for w in words if w not in stopwords_list]; return " ".join(filtered)',
            category: 'Natural Language Processing'
        },
        {
            id: 2033,
            type: 'multiple-choice',
            question: 'What is stemming?',
            options: [
                'Adding words',
                'Reducing words to their root form (running -> run)',
                'Capitalizing words',
                'Removing punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Stemming reduces words to root form by removing suffixes (running, runs -> run). Less accurate than lemmatization but faster.',
            category: 'Natural Language Processing'
        },
        {
            id: 2034,
            type: 'multiple-choice',
            question: 'What is the difference between BOW and TF-IDF?',
            options: [
                'BOW counts words, TF-IDF weights words by importance',
                'They are identical',
                'BOW is for images, TF-IDF for text',
                'TF-IDF is simpler'
            ],
            correctAnswer: 0,
            explanation: 'Bag of Words (BOW) counts word occurrences. TF-IDF weights words by frequency (TF) and inverse document frequency (IDF) to highlight important words.',
            category: 'Natural Language Processing'
        },
        {
            id: 2035,
            type: 'multiple-choice',
            question: 'What is a language model?',
            options: [
                'A database',
                'A model that predicts probability of next word/sequence in text',
                'A web framework',
                'An image processor'
            ],
            correctAnswer: 1,
            explanation: 'Language models learn probability distribution over sequences of words, used for text generation, translation, and understanding.',
            category: 'Natural Language Processing'
        },
        {
            id: 2036,
            type: 'code-writing',
            question: 'Write a function `calculate_tf_idf(term, document, all_documents)` that calculates TF-IDF score for a term in a document.',
            testCases: [
                { 
                    input: ['python', ['python is great', 'python and java'], [['python', 'is', 'great'], ['python', 'and', 'java']]], 
                    expected: 0.35,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.1
                }
            ],
            explanation: 'TF = count(term in doc) / total terms in doc. IDF = log(total docs / docs containing term). TF-IDF = TF * IDF',
            category: 'Natural Language Processing'
        },

        // ========== GENERATIVE AI (10 questions) ==========
        {
            id: 2020,
            type: 'multiple-choice',
            question: 'What is a Generative AI model?',
            options: [
                'A model that only classifies data',
                'A model that generates new content (text, images, etc.) similar to training data',
                'A database model',
                'A web server'
            ],
            correctAnswer: 1,
            explanation: 'Generative AI models learn patterns from data and generate new, similar content. Examples: GPT, DALL-E, Stable Diffusion.',
            category: 'Generative AI'
        },
        {
            id: 2021,
            type: 'multiple-choice',
            question: 'What is TensorFlow primarily used for?',
            options: [
                'Web development',
                'Building and training deep learning/neural network models',
                'Database management',
                'Image editing'
            ],
            correctAnswer: 1,
            explanation: 'TensorFlow is a deep learning framework for building, training, and deploying neural networks and ML models.',
            category: 'Generative AI'
        },
        {
            id: 2022,
            type: 'multiple-choice',
            question: 'What is the difference between discriminative and generative models?',
            options: [
                'Discriminative models classify, generative models create new data',
                'They are the same',
                'Generative models only work with images',
                'Discriminative models generate text'
            ],
            correctAnswer: 0,
            explanation: 'Discriminative models learn boundaries between classes (classification). Generative models learn data distribution to generate new samples.',
            category: 'Generative AI'
        },
        {
            id: 2037,
            type: 'multiple-choice',
            question: 'What is a GAN (Generative Adversarial Network)?',
            options: [
                'A database',
                'Two neural networks (generator and discriminator) competing to generate realistic data',
                'A web server',
                'A data structure'
            ],
            correctAnswer: 1,
            explanation: 'GAN consists of generator (creates fake data) and discriminator (distinguishes real from fake), trained adversarially to produce realistic outputs.',
            category: 'Generative AI'
        },
        {
            id: 2038,
            type: 'multiple-choice',
            question: 'What is a transformer architecture?',
            options: [
                'Image processing model',
                'Neural architecture using attention mechanism, basis for GPT, BERT, and modern LLMs',
                'Database query',
                'Web framework'
            ],
            correctAnswer: 1,
            explanation: 'Transformer uses self-attention to process sequences in parallel, enabling models like GPT and BERT to understand context and generate text.',
            category: 'Generative AI'
        },
        {
            id: 2039,
            type: 'multiple-choice',
            question: 'What is fine-tuning in generative AI?',
            options: [
                'Training from scratch',
                'Adapting a pre-trained model to a specific task with additional training',
                'Deleting model weights',
                'Converting model format'
            ],
            correctAnswer: 1,
            explanation: 'Fine-tuning takes a pre-trained model (trained on large dataset) and trains it further on specific task data for better performance.',
            category: 'Generative AI'
        },
        {
            id: 2040,
            type: 'code-writing',
            question: 'Write a function `load_pretrained_model(model_name)` that loads a pre-trained TensorFlow/Keras model (placeholder - just structure).',
            testCases: [
                { 
                    input: ['model.h5'], 
                    expected: 'model_object',
                    compareFunction: (result, expected) => result && typeof result !== 'undefined'
                }
            ],
            explanation: 'Use tf.keras.models.load_model() or tf.keras.applications for pre-trained models: model = tf.keras.models.load_model(path)',
            category: 'Generative AI'
        },
        {
            id: 2041,
            type: 'multiple-choice',
            question: 'What is prompt engineering?',
            options: [
                'Hardware design',
                'Crafting effective input prompts to get desired outputs from generative models',
                'Database optimization',
                'Network configuration'
            ],
            correctAnswer: 1,
            explanation: 'Prompt engineering involves designing input text to guide generative models (like GPT) to produce desired outputs through careful wording.',
            category: 'Generative AI'
        },
        {
            id: 2042,
            type: 'multiple-choice',
            question: 'What is the difference between GPT and BERT?',
            options: [
                'GPT is for images, BERT for text',
                'GPT is autoregressive (generates text), BERT is bidirectional (understands context)',
                'They are identical',
                'GPT is faster'
            ],
            correctAnswer: 1,
            explanation: 'GPT generates text sequentially (autoregressive). BERT uses bidirectional context for understanding but doesn\'t generate text.',
            category: 'Generative AI'
        },
        {
            id: 2043,
            type: 'multiple-choice',
            question: 'What is a diffusion model?',
            options: [
                'Data compression',
                'Generative model that creates data by reversing a diffusion process (used in DALL-E, Stable Diffusion)',
                'Database model',
                'Web framework'
            ],
            correctAnswer: 1,
            explanation: 'Diffusion models generate data by learning to reverse a gradual noise-adding process, popular for image generation (DALL-E, Stable Diffusion).',
            category: 'Generative AI'
        },

        // ========== RECOMMENDATION SYSTEMS (10 questions) ==========
        {
            id: 2023,
            type: 'multiple-choice',
            question: 'What are the main types of recommendation systems?',
            options: [
                'Only collaborative filtering',
                'Collaborative filtering, content-based, and hybrid approaches',
                'Only content-based',
                'Only neural networks'
            ],
            correctAnswer: 1,
            explanation: 'Main types: Collaborative (user-item interactions), Content-based (item features), Hybrid (combines both).',
            category: 'Recommendation Systems'
        },
        {
            id: 2024,
            type: 'multiple-choice',
            question: 'What is collaborative filtering?',
            options: [
                'Filtering by content similarity',
                'Recommending based on similar users preferences and behavior',
                'Using only item features',
                'A database query method'
            ],
            correctAnswer: 1,
            explanation: 'Collaborative filtering recommends items based on preferences of similar users (user-user) or items liked by same users (item-item).',
            category: 'Recommendation Systems'
        },
        {
            id: 2025,
            type: 'code-writing',
            question: 'Write a function `calculate_cosine_similarity(vec1, vec2)` that calculates cosine similarity between two vectors: dot product / (norm1 * norm2).',
            testCases: [
                { 
                    input: [[1, 0], [1, 0]], 
                    expected: 1.0,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.01
                },
                { 
                    input: [[1, 0], [0, 1]], 
                    expected: 0.0,
                    compareFunction: (result, expected) => Math.abs(result - expected) < 0.01
                }
            ],
            explanation: 'Cosine similarity: cos(θ) = (A·B) / (||A|| * ||B||). Measures angle between vectors, used in recommendation systems.',
            category: 'Recommendation Systems'
        },

        // ========== OBJECT-ORIENTED PROGRAMMING (10 questions) ==========
        {
            id: 2026,
            type: 'multiple-choice',
            question: 'What is the difference between `__init__` and `__new__` in Python?',
            options: [
                '__init__ creates object, __new__ initializes it',
                '__new__ creates object instance, __init__ initializes it',
                'They are identical',
                '__init__ is for classes, __new__ for functions'
            ],
            correctAnswer: 1,
            explanation: '__new__ is called first to create the instance, __init__ is called after to initialize it. __new__ returns instance, __init__ returns None.',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2027,
            type: 'multiple-choice',
            question: 'What is method overriding in OOP?',
            options: [
                'Creating a new method',
                'Redefining a parent class method in child class',
                'Deleting a method',
                'Calling a method'
            ],
            correctAnswer: 1,
            explanation: 'Method overriding allows child class to provide specific implementation of a method defined in parent class.',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2028,
            type: 'code-writing',
            question: 'Write a class `DataProcessor` with methods `load_data(path)` that returns data and `process_data(data)` that returns processed data. Both should be placeholder methods.',
            testCases: [
                { 
                    input: [], 
                    expected: 'class_object',
                    compareFunction: (result, expected) => result && typeof result.load_data === 'function' && typeof result.process_data === 'function'
                }
            ],
            explanation: 'Define class with methods: class DataProcessor: def load_data(self, path): return None; def process_data(self, data): return None',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2051,
            type: 'multiple-choice',
            question: 'What is inheritance in OOP?',
            options: [
                'Copying code',
                'Child class inherits attributes and methods from parent class',
                'Deleting methods',
                'Renaming classes'
            ],
            correctAnswer: 1,
            explanation: 'Inheritance allows child class to inherit attributes and methods from parent class, enabling code reuse and polymorphism.',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2052,
            type: 'multiple-choice',
            question: 'What is encapsulation?',
            options: [
                'Making everything public',
                'Bundling data and methods together, hiding internal implementation',
                'Removing methods',
                'Splitting classes'
            ],
            correctAnswer: 1,
            explanation: 'Encapsulation bundles data and methods in a class, hiding internal details and exposing only necessary interface (data hiding).',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2053,
            type: 'code-writing',
            question: 'Write a class `MLModel` with __init__ that takes model_name, and methods train() and predict() that return placeholder values.',
            testCases: [
                { 
                    input: [], 
                    expected: 'class_object',
                    compareFunction: (result, expected) => result && typeof result.train === 'function' && typeof result.predict === 'function'
                }
            ],
            explanation: 'class MLModel: def __init__(self, model_name): self.model_name = model_name; def train(self): return "trained"; def predict(self, data): return None',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2054,
            type: 'multiple-choice',
            question: 'What is a class method vs instance method?',
            options: [
                'Class method takes cls, instance method takes self',
                'They are identical',
                'Class method is faster',
                'Instance method is for classes only'
            ],
            correctAnswer: 0,
            explanation: 'Class method (@classmethod) receives class (cls) as first arg, instance method receives instance (self). Class methods can be called on class.',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2055,
            type: 'multiple-choice',
            question: 'What is method overloading in Python?',
            options: [
                'Python doesn\'t support traditional overloading, but can use default arguments or *args',
                'Always supported natively',
                'Only for built-in types',
                'Not possible'
            ],
            correctAnswer: 0,
            explanation: 'Python doesn\'t support method overloading like Java/C++. Use default arguments, *args, **kwargs, or @singledispatch for similar functionality.',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2056,
            type: 'multiple-choice',
            question: 'What is the MRO (Method Resolution Order) in Python?',
            options: [
                'Random order',
                'Order in which Python searches for methods in inheritance hierarchy (C3 linearization)',
                'Alphabetical order',
                'Reverse order'
            ],
            correctAnswer: 1,
            explanation: 'MRO determines the order Python searches for methods in multiple inheritance using C3 linearization algorithm (depth-first, left-to-right).',
            category: 'Object-Oriented Programming'
        },
        {
            id: 2057,
            type: 'code-writing',
            question: 'Write a class `DataLoader` that inherits from a base class with a method `load()` that child must implement (use abstract method pattern).',
            testCases: [
                { 
                    input: [], 
                    expected: 'class_structure',
                    compareFunction: (result, expected) => result && typeof result !== 'undefined'
                }
            ],
            explanation: 'Use ABC: from abc import ABC, abstractmethod; class DataLoader(ABC): @abstractmethod; def load(self): pass',
            category: 'Object-Oriented Programming'
        },

        // ========== GIT VERSION CONTROL (10 questions) ==========
        {
            id: 2029,
            type: 'multiple-choice',
            question: 'What does `git commit` do?',
            options: [
                'Uploads changes to remote repository',
                'Saves changes to local repository with a message',
                'Downloads changes from remote',
                'Creates a new branch'
            ],
            correctAnswer: 1,
            explanation: 'git commit saves staged changes to the local repository with a commit message, creating a snapshot of the code.',
            category: 'Git Version Control'
        },
        {
            id: 2030,
            type: 'multiple-choice',
            question: 'What is the difference between `git pull` and `git fetch`?',
            options: [
                'pull downloads and merges, fetch only downloads',
                'They are identical',
                'fetch merges, pull only downloads',
                'pull is for branches, fetch for tags'
            ],
            correctAnswer: 0,
            explanation: 'git fetch downloads changes without merging. git pull = git fetch + git merge (downloads and merges in one step).',
            category: 'Git Version Control'
        },
        {
            id: 2031,
            type: 'multiple-choice',
            question: 'What does `git branch` do?',
            options: [
                'Deletes a branch',
                'Lists, creates, or deletes branches',
                'Merges branches',
                'Switches branches'
            ],
            correctAnswer: 1,
            explanation: 'git branch lists branches. git branch <name> creates new branch. git branch -d <name> deletes branch.',
            category: 'Git Version Control'
        },
        {
            id: 2058,
            type: 'multiple-choice',
            question: 'What does `git status` show?',
            options: [
                'Commit history',
                'Current branch, staged, and unstaged changes',
                'Remote repositories',
                'All branches'
            ],
            correctAnswer: 1,
            explanation: 'git status shows current branch, files staged for commit, and files with unstaged changes.',
            category: 'Git Version Control'
        },
        {
            id: 2059,
            type: 'multiple-choice',
            question: 'What is the difference between `git merge` and `git rebase`?',
            options: [
                'merge creates merge commit, rebase replays commits on top of target branch',
                'They are identical',
                'rebase merges, merge rebases',
                'merge is faster'
            ],
            correctAnswer: 0,
            explanation: 'merge combines branches with a merge commit. rebase replays commits from one branch onto another, creating linear history.',
            category: 'Git Version Control'
        },
        {
            id: 2060,
            type: 'code-writing',
            question: 'Write the Git commands to create a new branch, make changes, commit, and push to remote (as comments or string).',
            testCases: [
                { 
                    input: [], 
                    expected: 'git_commands',
                    compareFunction: (result, expected) => result && (result.includes('branch') || result.includes('checkout') || result.includes('commit') || result.includes('push'))
                }
            ],
            explanation: 'git checkout -b new-branch; git add .; git commit -m "message"; git push -u origin new-branch',
            category: 'Git Version Control'
        },
        {
            id: 2061,
            type: 'multiple-choice',
            question: 'What does `git stash` do?',
            options: [
                'Deletes changes',
                'Temporarily saves uncommitted changes to work on something else',
                'Commits changes',
                'Creates a branch'
            ],
            correctAnswer: 1,
            explanation: 'git stash temporarily saves uncommitted changes, allowing you to switch branches or pull changes, then reapply with git stash pop.',
            category: 'Git Version Control'
        },
        {
            id: 2062,
            type: 'multiple-choice',
            question: 'What is a Git conflict?',
            options: [
                'Error in code',
                'When same lines are changed differently in two branches being merged',
                'Network issue',
                'Permission problem'
            ],
            correctAnswer: 1,
            explanation: 'Conflict occurs when same file lines are modified differently in branches being merged. Git marks conflicts for manual resolution.',
            category: 'Git Version Control'
        },
        {
            id: 2063,
            type: 'multiple-choice',
            question: 'What does `git reset --hard HEAD` do?',
            options: [
                'Deletes all commits',
                'Discards all uncommitted changes, resets to last commit',
                'Creates new commit',
                'Pushes to remote'
            ],
            correctAnswer: 1,
            explanation: 'git reset --hard HEAD discards all uncommitted changes and resets working directory to match last commit. Use with caution!',
            category: 'Git Version Control'
        },
        {
            id: 2064,
            type: 'multiple-choice',
            question: 'What is the purpose of `.gitignore`?',
            options: [
                'To ignore Git commands',
                'To specify files/folders Git should not track',
                'To delete files',
                'To encrypt files'
            ],
            correctAnswer: 1,
            explanation: '.gitignore lists files and patterns Git should ignore (e.g., __pycache__, .env, node_modules) to avoid committing unnecessary files.',
            category: 'Git Version Control'
        },

        // ========== DATABASES (10 questions) ==========
        {
            id: 2032,
            type: 'multiple-choice',
            question: 'What is the difference between SQL and NoSQL databases?',
            options: [
                'SQL is faster, NoSQL is slower',
                'SQL uses structured tables/relations, NoSQL uses flexible schemas (documents, key-value, etc.)',
                'They are identical',
                'SQL is for web, NoSQL for mobile'
            ],
            correctAnswer: 1,
            explanation: 'SQL: relational, structured schema, ACID. NoSQL: non-relational, flexible schema, various models (document, key-value, graph, column).',
            category: 'Databases'
        },
        {
            id: 2033,
            type: 'multiple-choice',
            question: 'What is a vector database?',
            options: [
                'A SQL database',
                'A database optimized for storing and querying high-dimensional vectors (embeddings)',
                'A NoSQL database',
                'A file system'
            ],
            correctAnswer: 1,
            explanation: 'Vector databases store embeddings/vectors and enable similarity search. Used for AI/ML: semantic search, recommendations, RAG.',
            category: 'Databases'
        },
        {
            id: 2034,
            type: 'code-writing',
            question: 'Write a SQL query that selects all rows from a table "users" where age is greater than 18, ordered by name.',
            testCases: [
                { 
                    input: [], 
                    expected: 'SELECT * FROM users WHERE age > 18 ORDER BY name;',
                    compareFunction: (result, expected) => result.toLowerCase().replace(/\s+/g, ' ').trim() === expected.toLowerCase().replace(/\s+/g, ' ').trim()
                }
            ],
            explanation: 'SQL SELECT with WHERE clause for filtering and ORDER BY for sorting: SELECT * FROM users WHERE age > 18 ORDER BY name;',
            category: 'Databases'
        },
        {
            id: 2035,
            type: 'multiple-choice',
            question: 'What is the purpose of JOIN in SQL?',
            options: [
                'To combine rows from multiple tables based on related columns',
                'To filter data',
                'To sort data',
                'To delete data'
            ],
            correctAnswer: 0,
            explanation: 'JOIN combines rows from two or more tables based on a related column, allowing querying across related data.',
            category: 'Databases'
        },
        {
            id: 2065,
            type: 'multiple-choice',
            question: 'What is ACID in databases?',
            options: [
                'A programming language',
                'Atomicity, Consistency, Isolation, Durability - properties ensuring reliable transactions',
                'A database type',
                'A query language'
            ],
            correctAnswer: 1,
            explanation: 'ACID ensures database transactions are reliable: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (persistent).',
            category: 'Databases'
        },
        {
            id: 2066,
            type: 'multiple-choice',
            question: 'What is a primary key?',
            options: [
                'Any column',
                'Unique identifier for each row in a table',
                'Foreign key',
                'Index'
            ],
            correctAnswer: 1,
            explanation: 'Primary key uniquely identifies each row, cannot be NULL, and ensures data integrity and fast lookups.',
            category: 'Databases'
        },
        {
            id: 2067,
            type: 'code-writing',
            question: 'Write a SQL query that joins two tables "users" and "orders" on user_id and returns user name and total order count per user.',
            testCases: [
                { 
                    input: [], 
                    expected: 'SELECT query',
                    compareFunction: (result, expected) => result.toLowerCase().includes('join') && (result.toLowerCase().includes('count') || result.toLowerCase().includes('group'))
                }
            ],
            explanation: 'SELECT u.name, COUNT(o.order_id) FROM users u JOIN orders o ON u.user_id = o.user_id GROUP BY u.name',
            category: 'Databases'
        },
        {
            id: 2068,
            type: 'multiple-choice',
            question: 'What is the difference between INNER JOIN and LEFT JOIN?',
            options: [
                'INNER returns matching rows, LEFT returns all from left table plus matches',
                'They are identical',
                'LEFT is faster',
                'INNER is for NoSQL'
            ],
            correctAnswer: 0,
            explanation: 'INNER JOIN returns only matching rows. LEFT JOIN returns all rows from left table plus matching rows from right (NULL if no match).',
            category: 'Databases'
        },
        {
            id: 2069,
            type: 'multiple-choice',
            question: 'What is a vector database used for in AI/ML?',
            options: [
                'Storing text only',
                'Storing and querying high-dimensional vectors (embeddings) for similarity search',
                'Storing images only',
                'Storing numbers only'
            ],
            correctAnswer: 1,
            explanation: 'Vector databases (Pinecone, Weaviate, Qdrant) store embeddings and enable fast similarity search for semantic search, RAG, recommendations.',
            category: 'Databases'
        },
        {
            id: 2070,
            type: 'multiple-choice',
            question: 'What is MongoDB?',
            options: [
                'SQL database',
                'NoSQL document database storing JSON-like documents',
                'Vector database',
                'Graph database'
            ],
            correctAnswer: 1,
            explanation: 'MongoDB is a NoSQL document database that stores data as BSON (JSON-like) documents in collections, offering flexible schema.',
            category: 'Databases'
        },

        // ========== FASTAPI (10 questions) ==========
        {
            id: 2036,
            type: 'multiple-choice',
            question: 'What is FastAPI?',
            options: [
                'A database',
                'A modern Python web framework for building APIs',
                'A machine learning library',
                'A version control system'
            ],
            correctAnswer: 1,
            explanation: 'FastAPI is a modern, fast web framework for building APIs with automatic documentation, type hints, and async support.',
            category: 'FastAPI'
        },
        {
            id: 2037,
            type: 'multiple-choice',
            question: 'What is a decorator in FastAPI used for?',
            options: [
                'To define routes and HTTP methods',
                'To style HTML',
                'To connect to databases',
                'To train models'
            ],
            correctAnswer: 0,
            explanation: 'FastAPI uses decorators like @app.get(), @app.post() to define API routes and HTTP methods.',
            category: 'FastAPI'
        },
        {
            id: 2038,
            type: 'code-writing',
            question: 'Write a FastAPI endpoint that accepts a POST request with JSON data containing "name" and "age", and returns a greeting message.',
            testCases: [
                { 
                    input: [], 
                    expected: 'endpoint_code',
                    compareFunction: (result, expected) => result.includes('@app.post') && (result.includes('name') || result.includes('age'))
                }
            ],
            explanation: 'Use @app.post decorator, define Pydantic model or use dict, return response: @app.post("/greet") def greet(data: dict): return {"message": f"Hello {data[\'name\']}"}',
            category: 'FastAPI'
        },
        {
            id: 2071,
            type: 'multiple-choice',
            question: 'What is a Pydantic model in FastAPI?',
            options: [
                'Database model',
                'Data validation and serialization using Python type hints',
                'ML model',
                'Web template'
            ],
            correctAnswer: 1,
            explanation: 'Pydantic models use Python type hints for automatic data validation, serialization, and API documentation in FastAPI.',
            category: 'FastAPI'
        },
        {
            id: 2072,
            type: 'multiple-choice',
            question: 'What is async/await in FastAPI?',
            options: [
                'Synchronous operations',
                'Asynchronous programming for handling concurrent requests efficiently',
                'Database queries only',
                'File operations only'
            ],
            correctAnswer: 1,
            explanation: 'FastAPI supports async/await for asynchronous operations, allowing handling multiple requests concurrently without blocking.',
            category: 'FastAPI'
        },
        {
            id: 2073,
            type: 'code-writing',
            question: 'Write a FastAPI GET endpoint that returns a list of items with query parameters for filtering (limit and offset for pagination).',
            testCases: [
                { 
                    input: [], 
                    expected: 'endpoint_code',
                    compareFunction: (result, expected) => result.includes('@app.get') && (result.includes('limit') || result.includes('offset'))
                }
            ],
            explanation: '@app.get("/items") def get_items(limit: int = 10, offset: int = 0): return {"items": items[offset:offset+limit]}',
            category: 'FastAPI'
        },
        {
            id: 2074,
            type: 'multiple-choice',
            question: 'What is dependency injection in FastAPI?',
            options: [
                'Database connection',
                'Reusable components (functions/classes) injected into route handlers',
                'Error handling',
                'Authentication only'
            ],
            correctAnswer: 1,
            explanation: 'Dependency injection allows sharing common logic (DB connections, auth, validation) across routes using Depends() decorator.',
            category: 'FastAPI'
        },
        {
            id: 2075,
            type: 'multiple-choice',
            question: 'What does FastAPI automatically generate?',
            options: [
                'Database schemas',
                'Interactive API documentation (Swagger/OpenAPI)',
                'Frontend code',
                'Docker images'
            ],
            correctAnswer: 1,
            explanation: 'FastAPI automatically generates interactive API docs at /docs (Swagger) and /redoc based on route definitions and type hints.',
            category: 'FastAPI'
        },
        {
            id: 2076,
            type: 'code-writing',
            question: 'Write a FastAPI POST endpoint with request body validation using Pydantic model.',
            testCases: [
                { 
                    input: [], 
                    expected: 'endpoint_code',
                    compareFunction: (result, expected) => result.includes('@app.post') && (result.includes('class') || result.includes('BaseModel'))
                }
            ],
            explanation: 'class Item(BaseModel): name: str; price: float; @app.post("/items") def create_item(item: Item): return item',
            category: 'FastAPI'
        },
        {
            id: 2077,
            type: 'multiple-choice',
            question: 'What is CORS in FastAPI?',
            options: [
                'Database query',
                'Cross-Origin Resource Sharing - allows frontend to access API from different domain',
                'Authentication method',
                'Data format'
            ],
            correctAnswer: 1,
            explanation: 'CORS allows web pages from one domain to access resources from another domain. Configure with CORSMiddleware in FastAPI.',
            category: 'FastAPI'
        },

        // ========== DOCKER (10 questions) ==========
        {
            id: 2039,
            type: 'multiple-choice',
            question: 'What is Docker?',
            options: [
                'A programming language',
                'A containerization platform for packaging applications and dependencies',
                'A database',
                'A web framework'
            ],
            correctAnswer: 1,
            explanation: 'Docker packages applications with dependencies into containers, ensuring consistent environments across different systems.',
            category: 'Docker'
        },
        {
            id: 2040,
            type: 'multiple-choice',
            question: 'What is a Dockerfile?',
            options: [
                'A Docker image',
                'A text file with instructions to build a Docker image',
                'A Docker container',
                'A Docker command'
            ],
            correctAnswer: 1,
            explanation: 'Dockerfile contains step-by-step instructions (FROM, RUN, COPY, etc.) to build a Docker image.',
            category: 'Docker'
        },
        {
            id: 2041,
            type: 'multiple-choice',
            question: 'What is the difference between Docker image and container?',
            options: [
                'Image is running, container is template',
                'Image is template/blueprint, container is running instance',
                'They are identical',
                'Image is for development, container for production'
            ],
            correctAnswer: 1,
            explanation: 'Image is a read-only template with application and dependencies. Container is a running instance of an image.',
            category: 'Docker'
        },
        {
            id: 2078,
            type: 'multiple-choice',
            question: 'What is docker-compose?',
            options: [
                'A single container',
                'Tool for defining and running multi-container Docker applications',
                'A programming language',
                'A database'
            ],
            correctAnswer: 1,
            explanation: 'docker-compose uses YAML to define and run multi-container applications, managing services, networks, and volumes together.',
            category: 'Docker'
        },
        {
            id: 2079,
            type: 'code-writing',
            question: 'Write a basic Dockerfile for a Python FastAPI application (structure only, as comments or string).',
            testCases: [
                { 
                    input: [], 
                    expected: 'dockerfile_structure',
                    compareFunction: (result, expected) => result.includes('FROM') && (result.includes('python') || result.includes('COPY') || result.includes('RUN'))
                }
            ],
            explanation: 'FROM python:3.9; WORKDIR /app; COPY requirements.txt .; RUN pip install -r requirements.txt; COPY . .; CMD ["uvicorn", "main:app"]',
            category: 'Docker'
        },
        {
            id: 2080,
            type: 'multiple-choice',
            question: 'What is a Docker volume?',
            options: [
                'Container memory',
                'Persistent storage that survives container deletion',
                'Network connection',
                'Environment variable'
            ],
            correctAnswer: 1,
            explanation: 'Volumes provide persistent storage independent of container lifecycle, used for data that should survive container restarts/deletions.',
            category: 'Docker'
        },
        {
            id: 2081,
            type: 'multiple-choice',
            question: 'What does `docker build -t myapp .` do?',
            options: [
                'Runs container',
                'Builds Docker image with tag "myapp" from current directory',
                'Stops container',
                'Deletes image'
            ],
            correctAnswer: 1,
            explanation: 'docker build creates an image from Dockerfile in current directory (.), tagging it as "myapp" for easy reference.',
            category: 'Docker'
        },
        {
            id: 2082,
            type: 'multiple-choice',
            question: 'What is the difference between CMD and ENTRYPOINT in Dockerfile?',
            options: [
                'CMD is executable, ENTRYPOINT is argument',
                'CMD provides default command/args, ENTRYPOINT sets main command (CMD args append to ENTRYPOINT)',
                'They are identical',
                'ENTRYPOINT is for Windows only'
            ],
            correctAnswer: 1,
            explanation: 'ENTRYPOINT sets the main executable. CMD provides default arguments. When both present, CMD args are appended to ENTRYPOINT.',
            category: 'Docker'
        },
        {
            id: 2083,
            type: 'multiple-choice',
            question: 'What is Docker Hub?',
            options: [
                'Local storage',
                'Cloud registry for sharing Docker images',
                'Container runtime',
                'Network protocol'
            ],
            correctAnswer: 1,
            explanation: 'Docker Hub is a cloud-based registry where you can store, share, and pull Docker images (like GitHub for code).',
            category: 'Docker'
        },
        {
            id: 2084,
            type: 'code-writing',
            question: 'Write docker-compose.yml structure for a FastAPI app with PostgreSQL database (as comments or YAML structure).',
            testCases: [
                { 
                    input: [], 
                    expected: 'compose_structure',
                    compareFunction: (result, expected) => result.includes('services') || result.includes('postgres') || result.includes('fastapi')
                }
            ],
            explanation: 'version: "3"; services: app: build: .; ports: - "8000:8000"; db: image: postgres; environment: POSTGRES_PASSWORD: pass',
            category: 'Docker'
        },

        // ========== MATPLOTLIB & SEABORN (10 questions) ==========
        {
            id: 2042,
            type: 'multiple-choice',
            question: 'What is the primary use of matplotlib?',
            options: [
                'Data processing',
                'Creating static, animated, and interactive visualizations',
                'Web development',
                'Database queries'
            ],
            correctAnswer: 1,
            explanation: 'matplotlib is a plotting library for creating various visualizations: line plots, scatter, histograms, etc.',
            category: 'Visualization'
        },
        {
            id: 2043,
            type: 'multiple-choice',
            question: 'What is seaborn built on top of?',
            options: [
                'TensorFlow',
                'matplotlib - provides statistical data visualization',
                'pandas',
                'numpy'
            ],
            correctAnswer: 1,
            explanation: 'seaborn is built on matplotlib and provides high-level interface for statistical visualizations with better default styles.',
            category: 'Visualization'
        },
        {
            id: 2085,
            type: 'multiple-choice',
            question: 'What is the difference between plt.plot() and plt.scatter()?',
            options: [
                'plot is for lines, scatter is for points',
                'They are identical',
                'scatter is faster',
                'plot is for 3D only'
            ],
            correctAnswer: 0,
            explanation: 'plt.plot() creates line plots connecting points. plt.scatter() creates scatter plots showing individual points without lines.',
            category: 'Visualization'
        },
        {
            id: 2086,
            type: 'code-writing',
            question: 'Write code to create a simple line plot with matplotlib: plot y = [1, 4, 9, 16] against x = [1, 2, 3, 4] and show it.',
            testCases: [
                { 
                    input: [], 
                    expected: 'plot_code',
                    compareFunction: (result, expected) => result.includes('plt.plot') || result.includes('matplotlib')
                }
            ],
            explanation: 'import matplotlib.pyplot as plt; plt.plot([1,2,3,4], [1,4,9,16]); plt.show()',
            category: 'Visualization'
        },
        {
            id: 2087,
            type: 'multiple-choice',
            question: 'What does sns.heatmap() do in seaborn?',
            options: [
                'Creates line plot',
                'Creates color-coded matrix visualization showing data values',
                'Creates bar chart',
                'Creates pie chart'
            ],
            correctAnswer: 1,
            explanation: 'heatmap() visualizes matrix data as color-coded grid, useful for correlation matrices, confusion matrices, and 2D data.',
            category: 'Visualization'
        },
        {
            id: 2088,
            type: 'multiple-choice',
            question: 'What is a subplot in matplotlib?',
            options: [
                'A single plot',
                'Multiple plots arranged in a grid within one figure',
                'A 3D plot',
                'An animated plot'
            ],
            correctAnswer: 1,
            explanation: 'Subplots allow creating multiple plots (axes) in a grid layout within a single figure using plt.subplots() or plt.subplot().',
            category: 'Visualization'
        },
        {
            id: 2089,
            type: 'code-writing',
            question: 'Write code to create a histogram using matplotlib for data = [1, 2, 2, 3, 3, 3, 4, 4, 5].',
            testCases: [
                { 
                    input: [], 
                    expected: 'histogram_code',
                    compareFunction: (result, expected) => result.includes('plt.hist') || result.includes('histogram')
                }
            ],
            explanation: 'import matplotlib.pyplot as plt; plt.hist([1,2,2,3,3,3,4,4,5]); plt.show()',
            category: 'Visualization'
        },
        {
            id: 2090,
            type: 'multiple-choice',
            question: 'What does sns.pairplot() do?',
            options: [
                'Creates single plot',
                'Creates grid of scatter plots showing relationships between all variable pairs',
                'Creates line plot',
                'Creates bar chart'
            ],
            correctAnswer: 1,
            explanation: 'pairplot() creates a matrix of scatter plots showing pairwise relationships between all numeric variables in a dataset.',
            category: 'Visualization'
        },
        {
            id: 2091,
            type: 'multiple-choice',
            question: 'What is the purpose of plt.figure() and plt.subplot()?',
            options: [
                'To delete plots',
                'To create figure container and add subplots for multiple visualizations',
                'To save plots',
                'To change colors'
            ],
            correctAnswer: 1,
            explanation: 'plt.figure() creates a new figure container. plt.subplot(rows, cols, index) adds a subplot at specified position in grid.',
            category: 'Visualization'
        },
        {
            id: 2092,
            type: 'code-writing',
            question: 'Write code to create a bar chart using matplotlib with categories = ["A", "B", "C"] and values = [10, 20, 15].',
            testCases: [
                { 
                    input: [], 
                    expected: 'bar_chart_code',
                    compareFunction: (result, expected) => result.includes('plt.bar') || result.includes('bar')
                }
            ],
            explanation: 'import matplotlib.pyplot as plt; plt.bar(["A","B","C"], [10,20,15]); plt.show()',
            category: 'Visualization'
        }
    ]
};

