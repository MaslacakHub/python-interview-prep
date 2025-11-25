const questions = [
    {
        "id": 1,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(3)]`?",
        "options": [
            "[0, 2, 4]",
            "[2, 4, 6]",
            "[0, 1, 2]",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "List comprehension multiplies each x by 2",
        "category": "Basics"
    },
    {
        "id": 2,
        "type": "multiple-choice",
        "question": "What does `range(5)` return?",
        "options": [
            "[0,1,2,3,4]",
            "[1,2,3,4,5]",
            "range(0,5)",
            "Error"
        ],
        "correctAnswer": 2,
        "explanation": "range() returns a range object",
        "category": "Basics"
    },
    {
        "id": 3,
        "type": "multiple-choice",
        "question": "What is `len([1,2,3])`?",
        "options": [
            "3",
            "2",
            "1",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns number of elements",
        "category": "Basics"
    },
    {
        "id": 4,
        "type": "multiple-choice",
        "question": "What is `\"hello\".upper()`?",
        "options": [
            "\"HELLO\"",
            "\"hello\"",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "upper() converts to uppercase",
        "category": "Basics"
    },
    {
        "id": 5,
        "type": "multiple-choice",
        "question": "What is `[1,2,3][-1]`?",
        "options": [
            "1",
            "3",
            "Error",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": "Negative indexing: -1 is last element",
        "category": "Basics"
    },
    {
        "id": 6,
        "type": "multiple-choice",
        "question": "What is `\"abc\" * 3`?",
        "options": [
            "\"abcabcabc\"",
            "\"abc3\"",
            "Error",
            "9"
        ],
        "correctAnswer": 0,
        "explanation": "String multiplication repeats",
        "category": "Basics"
    },
    {
        "id": 7,
        "type": "multiple-choice",
        "question": "What is `2 ** 3`?",
        "options": [
            "6",
            "8",
            "9",
            "5"
        ],
        "correctAnswer": 1,
        "explanation": "** is exponentiation",
        "category": "Basics"
    },
    {
        "id": 8,
        "type": "multiple-choice",
        "question": "What is `10 // 3`?",
        "options": [
            "3.33",
            "3",
            "4",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "// is floor division",
        "category": "Basics"
    },
    {
        "id": 9,
        "type": "multiple-choice",
        "question": "What is `10 % 3`?",
        "options": [
            "3",
            "1",
            "0",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "% is modulo",
        "category": "Basics"
    },
    {
        "id": 10,
        "type": "multiple-choice",
        "question": "What is `bool(0)`?",
        "options": [
            "True",
            "False",
            "0",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "0 is falsy",
        "category": "Basics"
    },
    {
        "id": 11,
        "type": "multiple-choice",
        "question": "What is `bool(\"\")`?",
        "options": [
            "True",
            "False",
            "\"\"",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "Empty string is falsy",
        "category": "Basics"
    },
    {
        "id": 12,
        "type": "multiple-choice",
        "question": "What is `bool([])`?",
        "options": [
            "True",
            "False",
            "[]",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "Empty list is falsy",
        "category": "Basics"
    },
    {
        "id": 13,
        "type": "multiple-choice",
        "question": "What is `bool({})`?",
        "options": [
            "True",
            "False",
            "{}",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "Empty dict is falsy",
        "category": "Basics"
    },
    {
        "id": 14,
        "type": "multiple-choice",
        "question": "What is `\"hello\"[1:3]`?",
        "options": [
            "\"el\"",
            "\"ell\"",
            "\"he\"",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Slicing [1:3] gets indices 1,2",
        "category": "Basics"
    },
    {
        "id": 15,
        "type": "multiple-choice",
        "question": "What is `[1,2,3] + [4,5]`?",
        "options": [
            "[1,2,3,4,5]",
            "[5,7]",
            "Error",
            "[1,2,3][4,5]"
        ],
        "correctAnswer": 0,
        "explanation": "+ concatenates lists",
        "category": "Basics"
    },
    {
        "id": 16,
        "type": "multiple-choice",
        "question": "What is `[1,2] * 2`?",
        "options": [
            "[1,2,1,2]",
            "[2,4]",
            "Error",
            "[1,2,2]"
        ],
        "correctAnswer": 0,
        "explanation": "* repeats list",
        "category": "Basics"
    },
    {
        "id": 17,
        "type": "multiple-choice",
        "question": "What is `type(5)`?",
        "options": [
            "<class \"int\">",
            "<class \"float\">",
            "int",
            "number"
        ],
        "correctAnswer": 0,
        "explanation": "type() returns class",
        "category": "Basics"
    },
    {
        "id": 18,
        "type": "multiple-choice",
        "question": "What is `isinstance(5, int)`?",
        "options": [
            "True",
            "False",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "isinstance checks type",
        "category": "Basics"
    },
    {
        "id": 19,
        "type": "multiple-choice",
        "question": "What is `\"hello\".lower()`?",
        "options": [
            "\"HELLO\"",
            "\"hello\"",
            "Error",
            "None"
        ],
        "correctAnswer": 1,
        "explanation": "lower() converts to lowercase",
        "category": "Basics"
    },
    {
        "id": 20,
        "type": "multiple-choice",
        "question": "What is `\"hello\".capitalize()`?",
        "options": [
            "\"Hello\"",
            "\"HELLO\"",
            "\"hello\"",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "capitalize() capitalizes first letter",
        "category": "Basics"
    },
    {
        "id": 21,
        "type": "multiple-choice",
        "question": "What is `58 * 6`?",
        "options": [
            "348",
            "6",
            "58",
            "351"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 58 * 6 = 348",
        "category": "Basics"
    },
    {
        "id": 22,
        "type": "multiple-choice",
        "question": "What is `6 + 5`?",
        "options": [
            "11",
            "14",
            "6",
            "10"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 6 + 5 = 11",
        "category": "Basics"
    },
    {
        "id": 23,
        "type": "multiple-choice",
        "question": "What is `76 - 9`?",
        "options": [
            "67",
            "9",
            "69",
            "62"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 76 - 9 = 67",
        "category": "Basics"
    },
    {
        "id": 24,
        "type": "multiple-choice",
        "question": "What is `32 + 55`?",
        "options": [
            "87",
            "88",
            "55",
            "32"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 32 + 55 = 87",
        "category": "Basics"
    },
    {
        "id": 25,
        "type": "multiple-choice",
        "question": "What is `29 - 36`?",
        "options": [
            "-7",
            "36",
            "3",
            "-12"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 29 - 36 = -7",
        "category": "Basics"
    },
    {
        "id": 26,
        "type": "multiple-choice",
        "question": "What is `88 * 9`?",
        "options": [
            "792",
            "88",
            "785",
            "794"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 88 * 9 = 792",
        "category": "Basics"
    },
    {
        "id": 27,
        "type": "multiple-choice",
        "question": "What is `53 * 56`?",
        "options": [
            "2968",
            "2977",
            "2966",
            "56"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 53 * 56 = 2968",
        "category": "Basics"
    },
    {
        "id": 28,
        "type": "multiple-choice",
        "question": "What is `15 - 26`?",
        "options": [
            "-11",
            "-6",
            "15",
            "26"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 15 - 26 = -11",
        "category": "Basics"
    },
    {
        "id": 29,
        "type": "multiple-choice",
        "question": "What is `67 * 79`?",
        "options": [
            "5293",
            "79",
            "5289",
            "67"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 67 * 79 = 5293",
        "category": "Basics"
    },
    {
        "id": 30,
        "type": "multiple-choice",
        "question": "What is `57 * 9`?",
        "options": [
            "513",
            "506",
            "57",
            "522"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 57 * 9 = 513",
        "category": "Basics"
    },
    {
        "id": 31,
        "type": "multiple-choice",
        "question": "What is `41 + 100`?",
        "options": [
            "141",
            "100",
            "147",
            "41"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 41 + 100 = 141",
        "category": "Basics"
    },
    {
        "id": 32,
        "type": "multiple-choice",
        "question": "What is `83 - 49`?",
        "options": [
            "34",
            "49",
            "83",
            "29"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 83 - 49 = 34",
        "category": "Basics"
    },
    {
        "id": 33,
        "type": "multiple-choice",
        "question": "What is `94 * 4`?",
        "options": [
            "376",
            "94",
            "370",
            "4"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 94 * 4 = 376",
        "category": "Basics"
    },
    {
        "id": 34,
        "type": "multiple-choice",
        "question": "What is `16 + 9`?",
        "options": [
            "25",
            "9",
            "31",
            "21"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 16 + 9 = 25",
        "category": "Basics"
    },
    {
        "id": 35,
        "type": "multiple-choice",
        "question": "What is `28 + 8`?",
        "options": [
            "36",
            "30",
            "28",
            "8"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 28 + 8 = 36",
        "category": "Basics"
    },
    {
        "id": 36,
        "type": "multiple-choice",
        "question": "What is `76 + 78`?",
        "options": [
            "154",
            "148",
            "78",
            "76"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 76 + 78 = 154",
        "category": "Basics"
    },
    {
        "id": 37,
        "type": "multiple-choice",
        "question": "What is `38 + 51`?",
        "options": [
            "89",
            "88",
            "51",
            "92"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 38 + 51 = 89",
        "category": "Basics"
    },
    {
        "id": 38,
        "type": "multiple-choice",
        "question": "What is `64 * 71`?",
        "options": [
            "4544",
            "64",
            "4535",
            "71"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 64 * 71 = 4544",
        "category": "Basics"
    },
    {
        "id": 39,
        "type": "multiple-choice",
        "question": "What is `24 + 32`?",
        "options": [
            "56",
            "48",
            "24",
            "61"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 24 + 32 = 56",
        "category": "Basics"
    },
    {
        "id": 40,
        "type": "multiple-choice",
        "question": "What is `72 - 59`?",
        "options": [
            "13",
            "72",
            "15",
            "59"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 72 - 59 = 13",
        "category": "Basics"
    },
    {
        "id": 41,
        "type": "multiple-choice",
        "question": "What is `75 - 94`?",
        "options": [
            "-19",
            "-12",
            "75",
            "-22"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 75 - 94 = -19",
        "category": "Basics"
    },
    {
        "id": 42,
        "type": "multiple-choice",
        "question": "What is `33 + 62`?",
        "options": [
            "95",
            "62",
            "33",
            "88"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 33 + 62 = 95",
        "category": "Basics"
    },
    {
        "id": 43,
        "type": "multiple-choice",
        "question": "What is `75 + 64`?",
        "options": [
            "139",
            "75",
            "142",
            "129"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 75 + 64 = 139",
        "category": "Basics"
    },
    {
        "id": 44,
        "type": "multiple-choice",
        "question": "What is `64 - 35`?",
        "options": [
            "29",
            "64",
            "22",
            "35"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 64 - 35 = 29",
        "category": "Basics"
    },
    {
        "id": 45,
        "type": "multiple-choice",
        "question": "What is `51 + 95`?",
        "options": [
            "146",
            "51",
            "155",
            "95"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 51 + 95 = 146",
        "category": "Basics"
    },
    {
        "id": 46,
        "type": "multiple-choice",
        "question": "What is `77 * 83`?",
        "options": [
            "6391",
            "6395",
            "77",
            "83"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 77 * 83 = 6391",
        "category": "Basics"
    },
    {
        "id": 47,
        "type": "multiple-choice",
        "question": "What is `52 + 48`?",
        "options": [
            "100",
            "104",
            "48",
            "52"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 52 + 48 = 100",
        "category": "Basics"
    },
    {
        "id": 48,
        "type": "multiple-choice",
        "question": "What is `84 + 12`?",
        "options": [
            "96",
            "12",
            "84",
            "88"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 84 + 12 = 96",
        "category": "Basics"
    },
    {
        "id": 49,
        "type": "multiple-choice",
        "question": "What is `61 - 62`?",
        "options": [
            "-1",
            "61",
            "2",
            "-10"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 61 - 62 = -1",
        "category": "Basics"
    },
    {
        "id": 50,
        "type": "multiple-choice",
        "question": "What is `57 - 14`?",
        "options": [
            "43",
            "14",
            "33",
            "57"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 57 - 14 = 43",
        "category": "Basics"
    },
    {
        "id": 51,
        "type": "multiple-choice",
        "question": "What is `70 + 67`?",
        "options": [
            "137",
            "139",
            "70",
            "67"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 70 + 67 = 137",
        "category": "Basics"
    },
    {
        "id": 52,
        "type": "multiple-choice",
        "question": "What is `29 - 67`?",
        "options": [
            "-38",
            "-33",
            "-46",
            "67"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 29 - 67 = -38",
        "category": "Basics"
    },
    {
        "id": 53,
        "type": "multiple-choice",
        "question": "What is `42 * 42`?",
        "options": [
            "1764",
            "1758",
            "1771",
            "42"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 42 * 42 = 1764",
        "category": "Basics"
    },
    {
        "id": 54,
        "type": "multiple-choice",
        "question": "What is `3 * 40`?",
        "options": [
            "120",
            "3",
            "129",
            "40"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 3 * 40 = 120",
        "category": "Basics"
    },
    {
        "id": 55,
        "type": "multiple-choice",
        "question": "What is `52 + 77`?",
        "options": [
            "129",
            "135",
            "77",
            "127"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 52 + 77 = 129",
        "category": "Basics"
    },
    {
        "id": 56,
        "type": "multiple-choice",
        "question": "What is `30 * 78`?",
        "options": [
            "2340",
            "2337",
            "30",
            "78"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 30 * 78 = 2340",
        "category": "Basics"
    },
    {
        "id": 57,
        "type": "multiple-choice",
        "question": "What is `37 + 36`?",
        "options": [
            "73",
            "37",
            "64",
            "36"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 37 + 36 = 73",
        "category": "Basics"
    },
    {
        "id": 58,
        "type": "multiple-choice",
        "question": "What is `35 + 54`?",
        "options": [
            "89",
            "84",
            "35",
            "94"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 35 + 54 = 89",
        "category": "Basics"
    },
    {
        "id": 59,
        "type": "multiple-choice",
        "question": "What is `70 + 55`?",
        "options": [
            "125",
            "55",
            "70",
            "124"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 70 + 55 = 125",
        "category": "Basics"
    },
    {
        "id": 60,
        "type": "multiple-choice",
        "question": "What is `58 * 93`?",
        "options": [
            "5394",
            "93",
            "58",
            "5388"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 58 * 93 = 5394",
        "category": "Basics"
    },
    {
        "id": 61,
        "type": "multiple-choice",
        "question": "What is `72 + 69`?",
        "options": [
            "141",
            "72",
            "69",
            "132"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 72 + 69 = 141",
        "category": "Basics"
    },
    {
        "id": 62,
        "type": "multiple-choice",
        "question": "What is `89 - 79`?",
        "options": [
            "10",
            "89",
            "12",
            "8"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 89 - 79 = 10",
        "category": "Basics"
    },
    {
        "id": 63,
        "type": "multiple-choice",
        "question": "What is `69 - 43`?",
        "options": [
            "26",
            "69",
            "35",
            "21"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 69 - 43 = 26",
        "category": "Basics"
    },
    {
        "id": 64,
        "type": "multiple-choice",
        "question": "What is `10 + 45`?",
        "options": [
            "55",
            "63",
            "10",
            "46"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 10 + 45 = 55",
        "category": "Basics"
    },
    {
        "id": 65,
        "type": "multiple-choice",
        "question": "What is `13 * 93`?",
        "options": [
            "1209",
            "1199",
            "1215",
            "93"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 13 * 93 = 1209",
        "category": "Basics"
    },
    {
        "id": 66,
        "type": "multiple-choice",
        "question": "What is `78 - 62`?",
        "options": [
            "16",
            "62",
            "19",
            "12"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 78 - 62 = 16",
        "category": "Basics"
    },
    {
        "id": 67,
        "type": "multiple-choice",
        "question": "What is `14 * 67`?",
        "options": [
            "938",
            "930",
            "14",
            "948"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 14 * 67 = 938",
        "category": "Basics"
    },
    {
        "id": 68,
        "type": "multiple-choice",
        "question": "What is `10 + 63`?",
        "options": [
            "73",
            "63",
            "82",
            "70"
        ],
        "correctAnswer": 0,
        "explanation": "Addition: 10 + 63 = 73",
        "category": "Basics"
    },
    {
        "id": 69,
        "type": "multiple-choice",
        "question": "What is `40 * 84`?",
        "options": [
            "3360",
            "3358",
            "3370",
            "40"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplication: 40 * 84 = 3360",
        "category": "Basics"
    },
    {
        "id": 70,
        "type": "multiple-choice",
        "question": "What is `7 - 27`?",
        "options": [
            "-20",
            "7",
            "-11",
            "-29"
        ],
        "correctAnswer": 0,
        "explanation": "Subtraction: 7 - 27 = -20",
        "category": "Basics"
    },
    {
        "id": 71,
        "type": "multiple-choice",
        "question": "What is the output of: `[x+1 for x in range(4)]`?",
        "options": [
            "[1, 2, 3, 4]",
            "[2, 3, 4, 5]",
            "[1, 2, 3]",
            "[2, 4, 6, 8]"
        ],
        "correctAnswer": 0,
        "explanation": "Add 1 to each",
        "category": "Basics"
    },
    {
        "id": 72,
        "type": "multiple-choice",
        "question": "What is the output of: `[x+1 for x in range(10)]`?",
        "options": [
            "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
            "[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
            "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]"
        ],
        "correctAnswer": 0,
        "explanation": "Add 1 to each",
        "category": "Basics"
    },
    {
        "id": 73,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(6) if x%2==0]`?",
        "options": [
            "[0, 2, 4]",
            "[1, 3, 5]",
            "[0, 2]",
            "[0, 4, 8]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 74,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(4)]`?",
        "options": [
            "[0, 2, 4, 6]",
            "[1, 3, 5, 7]",
            "[0, 2, 4]",
            "[0, 4, 8, 12]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 75,
        "type": "multiple-choice",
        "question": "What is the output of: `[x**2 for x in range(4)]`?",
        "options": [
            "[0, 1, 4, 9]",
            "[1, 2, 5, 10]",
            "[0, 1, 4]",
            "[0, 2, 8, 18]"
        ],
        "correctAnswer": 0,
        "explanation": "Square each number",
        "category": "Basics"
    },
    {
        "id": 76,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(10)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]",
            "[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]",
            "[0, 2, 4, 6, 8, 10, 12, 14, 16]",
            "[0, 4, 8, 12, 16, 20, 24, 28, 32, 36]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 77,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(9)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10, 12, 14, 16]",
            "[1, 3, 5, 7, 9, 11, 13, 15, 17]",
            "[0, 2, 4, 6, 8, 10, 12, 14]",
            "[0, 4, 8, 12, 16, 20, 24, 28, 32]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 78,
        "type": "multiple-choice",
        "question": "What is the output of: `[x**2 for x in range(6)]`?",
        "options": [
            "[0, 1, 4, 9, 16, 25]",
            "[1, 2, 5, 10, 17, 26]",
            "[0, 1, 4, 9, 16]",
            "[0, 2, 8, 18, 32, 50]"
        ],
        "correctAnswer": 0,
        "explanation": "Square each number",
        "category": "Basics"
    },
    {
        "id": 79,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(7)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10, 12]",
            "[1, 3, 5, 7, 9, 11, 13]",
            "[0, 2, 4, 6, 8, 10]",
            "[0, 4, 8, 12, 16, 20, 24]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 80,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(9)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10, 12, 14, 16]",
            "[1, 3, 5, 7, 9, 11, 13, 15, 17]",
            "[0, 2, 4, 6, 8, 10, 12, 14]",
            "[0, 4, 8, 12, 16, 20, 24, 28, 32]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 81,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(4) if x%2==0]`?",
        "options": [
            "[0, 2]",
            "[1, 3]",
            "[0]",
            "[0, 4]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 82,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(7) if x%2==0]`?",
        "options": [
            "[0, 2, 4, 6]",
            "[1, 3, 5, 7]",
            "[0, 2, 4]",
            "[0, 4, 8, 12]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 83,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(4)]`?",
        "options": [
            "[0, 2, 4, 6]",
            "[1, 3, 5, 7]",
            "[0, 2, 4]",
            "[0, 4, 8, 12]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 84,
        "type": "multiple-choice",
        "question": "What is the output of: `[x+1 for x in range(10)]`?",
        "options": [
            "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
            "[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]",
            "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]"
        ],
        "correctAnswer": 0,
        "explanation": "Add 1 to each",
        "category": "Basics"
    },
    {
        "id": 85,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(7) if x%2==0]`?",
        "options": [
            "[0, 2, 4, 6]",
            "[1, 3, 5, 7]",
            "[0, 2, 4]",
            "[0, 4, 8, 12]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 86,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(5)]`?",
        "options": [
            "[0, 2, 4, 6, 8]",
            "[1, 3, 5, 7, 9]",
            "[0, 2, 4, 6]",
            "[0, 4, 8, 12, 16]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 87,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(10)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]",
            "[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]",
            "[0, 2, 4, 6, 8, 10, 12, 14, 16]",
            "[0, 4, 8, 12, 16, 20, 24, 28, 32, 36]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 88,
        "type": "multiple-choice",
        "question": "What is the output of: `[x+1 for x in range(2)]`?",
        "options": [
            "[1, 2]",
            "[2, 3]",
            "[1]",
            "[2, 4]"
        ],
        "correctAnswer": 0,
        "explanation": "Add 1 to each",
        "category": "Basics"
    },
    {
        "id": 89,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(4) if x%2==0]`?",
        "options": [
            "[0, 2]",
            "[1, 3]",
            "[0]",
            "[0, 4]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 90,
        "type": "multiple-choice",
        "question": "What is the output of: `[x**2 for x in range(9)]`?",
        "options": [
            "[0, 1, 4, 9, 16, 25, 36, 49, 64]",
            "[1, 2, 5, 10, 17, 26, 37, 50, 65]",
            "[0, 1, 4, 9, 16, 25, 36, 49]",
            "[0, 2, 8, 18, 32, 50, 72, 98, 128]"
        ],
        "correctAnswer": 0,
        "explanation": "Square each number",
        "category": "Basics"
    },
    {
        "id": 91,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(9) if x%2==0]`?",
        "options": [
            "[0, 2, 4, 6, 8]",
            "[1, 3, 5, 7, 9]",
            "[0, 2, 4, 6]",
            "[0, 4, 8, 12, 16]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 92,
        "type": "multiple-choice",
        "question": "What is the output of: `[x+1 for x in range(2)]`?",
        "options": [
            "[1, 2]",
            "[2, 3]",
            "[1]",
            "[2, 4]"
        ],
        "correctAnswer": 0,
        "explanation": "Add 1 to each",
        "category": "Basics"
    },
    {
        "id": 93,
        "type": "multiple-choice",
        "question": "What is the output of: `[x+1 for x in range(9)]`?",
        "options": [
            "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
            "[2, 3, 4, 5, 6, 7, 8, 9, 10]",
            "[1, 2, 3, 4, 5, 6, 7, 8]",
            "[2, 4, 6, 8, 10, 12, 14, 16, 18]"
        ],
        "correctAnswer": 0,
        "explanation": "Add 1 to each",
        "category": "Basics"
    },
    {
        "id": 94,
        "type": "multiple-choice",
        "question": "What is the output of: `[x**2 for x in range(3)]`?",
        "options": [
            "[0, 1, 4]",
            "[1, 2, 5]",
            "[0, 1]",
            "[0, 2, 8]"
        ],
        "correctAnswer": 0,
        "explanation": "Square each number",
        "category": "Basics"
    },
    {
        "id": 95,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(2)]`?",
        "options": [
            "[0, 2]",
            "[1, 3]",
            "[0]",
            "[0, 4]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 96,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(6)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10]",
            "[1, 3, 5, 7, 9, 11]",
            "[0, 2, 4, 6, 8]",
            "[0, 4, 8, 12, 16, 20]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 97,
        "type": "multiple-choice",
        "question": "What is the output of: `[x for x in range(7) if x%2==0]`?",
        "options": [
            "[0, 2, 4, 6]",
            "[1, 3, 5, 7]",
            "[0, 2, 4]",
            "[0, 4, 8, 12]"
        ],
        "correctAnswer": 0,
        "explanation": "Even numbers only",
        "category": "Basics"
    },
    {
        "id": 98,
        "type": "multiple-choice",
        "question": "What is the output of: `[x*2 for x in range(7)]`?",
        "options": [
            "[0, 2, 4, 6, 8, 10, 12]",
            "[1, 3, 5, 7, 9, 11, 13]",
            "[0, 2, 4, 6, 8, 10]",
            "[0, 4, 8, 12, 16, 20, 24]"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by 2",
        "category": "Basics"
    },
    {
        "id": 99,
        "type": "multiple-choice",
        "question": "What is the output of: `[x**2 for x in range(8)]`?",
        "options": [
            "[0, 1, 4, 9, 16, 25, 36, 49]",
            "[1, 2, 5, 10, 17, 26, 37, 50]",
            "[0, 1, 4, 9, 16, 25, 36]",
            "[0, 2, 8, 18, 32, 50, 72, 98]"
        ],
        "correctAnswer": 0,
        "explanation": "Square each number",
        "category": "Basics"
    },
    {
        "id": 100,
        "type": "multiple-choice",
        "question": "What is the output of: `[x**2 for x in range(10)]`?",
        "options": [
            "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
            "[1, 2, 5, 10, 17, 26, 37, 50, 65, 82]",
            "[0, 1, 4, 9, 16, 25, 36, 49, 64]",
            "[0, 2, 8, 18, 32, 50, 72, 98, 128, 162]"
        ],
        "correctAnswer": 0,
        "explanation": "Square each number",
        "category": "Basics"
    },
    {
        "id": 101,
        "type": "multiple-choice",
        "question": "What is `\"hello\".find(\"l\")`?",
        "options": [
            "2",
            "1",
            "3",
            "-1"
        ],
        "correctAnswer": 0,
        "explanation": "find() returns first index",
        "category": "Strings"
    },
    {
        "id": 102,
        "type": "multiple-choice",
        "question": "What is `\"hello\".count(\"l\")`?",
        "options": [
            "2",
            "1",
            "3",
            "0"
        ],
        "correctAnswer": 0,
        "explanation": "count() counts occurrences",
        "category": "Strings"
    },
    {
        "id": 103,
        "type": "multiple-choice",
        "question": "What is `\"hello\".replace(\"l\", \"L\")`?",
        "options": [
            "\"heLLo\"",
            "\"hello\"",
            "\"heLlo\"",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "replace() replaces all occurrences",
        "category": "Strings"
    },
    {
        "id": 104,
        "type": "multiple-choice",
        "question": "What is `\"hello\".split(\"l\")`?",
        "options": [
            "[\"he\", \"\", \"o\"]",
            "[\"he\", \"o\"]",
            "Error",
            "[\"h\",\"e\",\"l\",\"l\",\"o\"]"
        ],
        "correctAnswer": 0,
        "explanation": "split() splits on delimiter",
        "category": "Strings"
    },
    {
        "id": 105,
        "type": "multiple-choice",
        "question": "What is `\" \".join([\"a\",\"b\",\"c\"])`?",
        "options": [
            "\"a b c\"",
            "\"abc\"",
            "Error",
            "\"a,b,c\""
        ],
        "correctAnswer": 0,
        "explanation": "join() combines with separator",
        "category": "Strings"
    },
    {
        "id": 106,
        "type": "multiple-choice",
        "question": "What is `\"hello\".strip()`?",
        "options": [
            "\"hello\"",
            "\"ello\"",
            "\"hell\"",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "strip() removes whitespace",
        "category": "Strings"
    },
    {
        "id": 107,
        "type": "multiple-choice",
        "question": "What is `\"hello\".startswith(\"he\")`?",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "startswith() checks prefix",
        "category": "Strings"
    },
    {
        "id": 108,
        "type": "multiple-choice",
        "question": "What is `\"hello\".endswith(\"lo\")`?",
        "options": [
            "True",
            "False",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "endswith() checks suffix",
        "category": "Strings"
    },
    {
        "id": 109,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].append(4)`?",
        "options": [
            "[1,2,3,4]",
            "None",
            "4",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "append() returns None, modifies in place",
        "category": "Data Structures"
    },
    {
        "id": 110,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].pop()`?",
        "options": [
            "3",
            "[1,2]",
            "None",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() removes and returns last element",
        "category": "Data Structures"
    },
    {
        "id": 111,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].pop(0)`?",
        "options": [
            "1",
            "[2,3]",
            "None",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop(0) removes and returns first element",
        "category": "Data Structures"
    },
    {
        "id": 112,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].insert(1, 5)`?",
        "options": [
            "[1,5,2,3]",
            "None",
            "[1,2,3,5]",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "insert() returns None, modifies in place",
        "category": "Data Structures"
    },
    {
        "id": 113,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].remove(2)`?",
        "options": [
            "[1,3]",
            "None",
            "2",
            "Error"
        ],
        "correctAnswer": 1,
        "explanation": "remove() returns None",
        "category": "Data Structures"
    },
    {
        "id": 114,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].index(2)`?",
        "options": [
            "1",
            "2",
            "0",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "index() returns first index",
        "category": "Data Structures"
    },
    {
        "id": 115,
        "type": "multiple-choice",
        "question": "What is `[1,2,2,3].count(2)`?",
        "options": [
            "2",
            "1",
            "3",
            "0"
        ],
        "correctAnswer": 0,
        "explanation": "count() counts occurrences",
        "category": "Data Structures"
    },
    {
        "id": 116,
        "type": "multiple-choice",
        "question": "What is `[1,2,3].reverse()`?",
        "options": [
            "[3,2,1]",
            "None",
            "Error",
            "[1,2,3]"
        ],
        "correctAnswer": 1,
        "explanation": "reverse() returns None",
        "category": "Data Structures"
    },
    {
        "id": 117,
        "type": "multiple-choice",
        "question": "What is `[3,1,2].sort()`?",
        "options": [
            "[1,2,3]",
            "None",
            "Error",
            "[3,1,2]"
        ],
        "correctAnswer": 1,
        "explanation": "sort() returns None",
        "category": "Data Structures"
    },
    {
        "id": 118,
        "type": "multiple-choice",
        "question": "What is `[1,2,3][:2]`?",
        "options": [
            "[1,2]",
            "[1,2,3]",
            "[2,3]",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Slicing [:2] gets first 2 elements",
        "category": "Data Structures"
    },
    {
        "id": 119,
        "type": "multiple-choice",
        "question": "What is `[12, 13, 10, 18, 1][-1]`?",
        "options": [
            "1",
            "15",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 120,
        "type": "multiple-choice",
        "question": "What is `[14, 11, 17, 11].append(5)`?",
        "options": [
            "None",
            "14",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 121,
        "type": "multiple-choice",
        "question": "What is `[15, 4, 14, 12][0]`?",
        "options": [
            "15",
            "13",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 122,
        "type": "multiple-choice",
        "question": "What is `len([8, 3, 17, 7, 10, 15])`?",
        "options": [
            "6",
            "14",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns length",
        "category": "Data Structures"
    },
    {
        "id": 123,
        "type": "multiple-choice",
        "question": "What is `[7, 16, 8, 17, 5, 8].pop()`?",
        "options": [
            "8",
            "15",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 124,
        "type": "multiple-choice",
        "question": "What is `[14, 9, 13].pop()`?",
        "options": [
            "13",
            "6",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 125,
        "type": "multiple-choice",
        "question": "What is `[5, 7, 4, 9].append(3)`?",
        "options": [
            "None",
            "3",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 126,
        "type": "multiple-choice",
        "question": "What is `[13, 14, 20, 5, 10, 17, 4, 15][0]`?",
        "options": [
            "13",
            "15",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 127,
        "type": "multiple-choice",
        "question": "What is `[20, 11, 4, 10, 4][0]`?",
        "options": [
            "20",
            "18",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 128,
        "type": "multiple-choice",
        "question": "What is `[16, 10, 8, 20, 4][-1]`?",
        "options": [
            "4",
            "6",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 129,
        "type": "multiple-choice",
        "question": "What is `len([9, 12, 10, 12, 12, 12])`?",
        "options": [
            "6",
            "14",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns length",
        "category": "Data Structures"
    },
    {
        "id": 130,
        "type": "multiple-choice",
        "question": "What is `[13, 1, 19].pop()`?",
        "options": [
            "19",
            "2",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 131,
        "type": "multiple-choice",
        "question": "What is `[11, 11, 18, 2, 18, 10, 13, 3][-1]`?",
        "options": [
            "3",
            "4",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 132,
        "type": "multiple-choice",
        "question": "What is `[3, 1, 14, 15, 15, 15, 13].pop()`?",
        "options": [
            "13",
            "11",
            "8",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 133,
        "type": "multiple-choice",
        "question": "What is `[16, 2, 8].pop()`?",
        "options": [
            "8",
            "9",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 134,
        "type": "multiple-choice",
        "question": "What is `[8, 17, 20, 8].pop()`?",
        "options": [
            "8",
            "16",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 135,
        "type": "multiple-choice",
        "question": "What is `[12, 14, 13, 4, 17, 8, 3, 10][0]`?",
        "options": [
            "12",
            "11",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 136,
        "type": "multiple-choice",
        "question": "What is `[12, 12, 16][-1]`?",
        "options": [
            "16",
            "10",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 137,
        "type": "multiple-choice",
        "question": "What is `[2, 4, 7, 8, 19, 13].pop()`?",
        "options": [
            "13",
            "1",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 138,
        "type": "multiple-choice",
        "question": "What is `[3, 12, 1].append(7)`?",
        "options": [
            "None",
            "5",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 139,
        "type": "multiple-choice",
        "question": "What is `[4, 5, 11, 17, 15, 1, 9].pop()`?",
        "options": [
            "9",
            "13",
            "8",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 140,
        "type": "multiple-choice",
        "question": "What is `[2, 17, 3, 20, 3, 20, 19][-1]`?",
        "options": [
            "19",
            "3",
            "8",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 141,
        "type": "multiple-choice",
        "question": "What is `[17, 5, 2, 2, 12].append(7)`?",
        "options": [
            "None",
            "1",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 142,
        "type": "multiple-choice",
        "question": "What is `[15, 16, 12, 2, 9].pop()`?",
        "options": [
            "9",
            "5",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 143,
        "type": "multiple-choice",
        "question": "What is `[16, 15, 11, 14, 4].append(3)`?",
        "options": [
            "None",
            "14",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 144,
        "type": "multiple-choice",
        "question": "What is `[3, 14, 9, 4, 19, 13, 4, 18].append(7)`?",
        "options": [
            "None",
            "19",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 145,
        "type": "multiple-choice",
        "question": "What is `[17, 2, 18].append(8)`?",
        "options": [
            "None",
            "9",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 146,
        "type": "multiple-choice",
        "question": "What is `[6, 1, 11, 16, 18, 8, 19, 6][-1]`?",
        "options": [
            "6",
            "13",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 147,
        "type": "multiple-choice",
        "question": "What is `[18, 12, 13, 10, 8, 4, 1, 7][-1]`?",
        "options": [
            "7",
            "4",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 148,
        "type": "multiple-choice",
        "question": "What is `[8, 12, 9, 5, 2][0]`?",
        "options": [
            "8",
            "12",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 149,
        "type": "multiple-choice",
        "question": "What is `[10, 8, 17, 15, 13, 19, 5, 5].pop()`?",
        "options": [
            "5",
            "20",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 150,
        "type": "multiple-choice",
        "question": "What is `len([17, 11, 11, 12, 11, 17])`?",
        "options": [
            "6",
            "17",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns length",
        "category": "Data Structures"
    },
    {
        "id": 151,
        "type": "multiple-choice",
        "question": "What is `[4, 2, 15].pop()`?",
        "options": [
            "15",
            "10",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 152,
        "type": "multiple-choice",
        "question": "What is `[19, 19, 16, 15, 3, 7, 18].pop()`?",
        "options": [
            "18",
            "5",
            "8",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 153,
        "type": "multiple-choice",
        "question": "What is `[18, 15, 18, 8][0]`?",
        "options": [
            "18",
            "10",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 154,
        "type": "multiple-choice",
        "question": "What is `[10, 15, 15, 1, 4, 14][0]`?",
        "options": [
            "10",
            "8",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 155,
        "type": "multiple-choice",
        "question": "What is `[17, 19, 14, 4, 1, 4, 7, 3][0]`?",
        "options": [
            "17",
            "2",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 156,
        "type": "multiple-choice",
        "question": "What is `[14, 13, 12, 7, 3, 14, 19].append(2)`?",
        "options": [
            "None",
            "7",
            "8",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 157,
        "type": "multiple-choice",
        "question": "What is `[18, 15, 17, 9, 14, 19][0]`?",
        "options": [
            "18",
            "12",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 158,
        "type": "multiple-choice",
        "question": "What is `len([18, 13, 14, 5])`?",
        "options": [
            "4",
            "8",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns length",
        "category": "Data Structures"
    },
    {
        "id": 159,
        "type": "multiple-choice",
        "question": "What is `[7, 20, 7, 15, 3][-1]`?",
        "options": [
            "3",
            "5",
            "6",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 160,
        "type": "multiple-choice",
        "question": "What is `[1, 6, 5, 13][-1]`?",
        "options": [
            "13",
            "20",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 161,
        "type": "multiple-choice",
        "question": "What is `len([15, 11, 12, 16])`?",
        "options": [
            "4",
            "19",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns length",
        "category": "Data Structures"
    },
    {
        "id": 162,
        "type": "multiple-choice",
        "question": "What is `[15, 10, 3, 13, 13, 20, 3, 8].pop()`?",
        "options": [
            "8",
            "18",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 163,
        "type": "multiple-choice",
        "question": "What is `[12, 2, 4][-1]`?",
        "options": [
            "4",
            "11",
            "4",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index -1 is last element",
        "category": "Data Structures"
    },
    {
        "id": 164,
        "type": "multiple-choice",
        "question": "What is `[19, 13, 4, 6][0]`?",
        "options": [
            "19",
            "8",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Index 0 is first element",
        "category": "Data Structures"
    },
    {
        "id": 165,
        "type": "multiple-choice",
        "question": "What is `[13, 16, 1, 3].append(10)`?",
        "options": [
            "None",
            "18",
            "5",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 166,
        "type": "multiple-choice",
        "question": "What is `[13, 5, 18, 18, 16, 13, 12].pop()`?",
        "options": [
            "12",
            "13",
            "8",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns last element",
        "category": "Data Structures"
    },
    {
        "id": 167,
        "type": "multiple-choice",
        "question": "What is `[18, 10, 9, 4, 4, 10].append(1)`?",
        "options": [
            "None",
            "7",
            "7",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 168,
        "type": "multiple-choice",
        "question": "What is `[4, 9, 15, 1, 8, 10, 2, 16].append(4)`?",
        "options": [
            "None",
            "6",
            "9",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "append() returns None",
        "category": "Data Structures"
    },
    {
        "id": 169,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1, \"b\":2}.get(\"a\")`?",
        "options": [
            "1",
            "None",
            "Error",
            "\"a\""
        ],
        "correctAnswer": 0,
        "explanation": "get() returns value for key",
        "category": "Data Structures"
    },
    {
        "id": 170,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.get(\"b\")`?",
        "options": [
            "None",
            "1",
            "Error",
            "0"
        ],
        "correctAnswer": 0,
        "explanation": "get() returns None if key missing",
        "category": "Data Structures"
    },
    {
        "id": 171,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.get(\"b\", 0)`?",
        "options": [
            "0",
            "None",
            "1",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "get() returns default if key missing",
        "category": "Data Structures"
    },
    {
        "id": 172,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.keys()`?",
        "options": [
            "dict_keys([\"a\"])",
            "[\"a\"]",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "keys() returns dict_keys view",
        "category": "Data Structures"
    },
    {
        "id": 173,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.values()`?",
        "options": [
            "dict_values([1])",
            "[1]",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "values() returns dict_values view",
        "category": "Data Structures"
    },
    {
        "id": 174,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.items()`?",
        "options": [
            "dict_items([(\"a\", 1)])",
            "[(\"a\", 1)]",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "items() returns dict_items view",
        "category": "Data Structures"
    },
    {
        "id": 175,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.pop(\"a\")`?",
        "options": [
            "1",
            "None",
            "{\"a\":1}",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns value",
        "category": "Data Structures"
    },
    {
        "id": 176,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.pop(\"b\")`?",
        "options": [
            "Error",
            "None",
            "0",
            "1"
        ],
        "correctAnswer": 0,
        "explanation": "pop() raises KeyError if key missing",
        "category": "Data Structures"
    },
    {
        "id": 177,
        "type": "multiple-choice",
        "question": "What is `{\"a\":1}.update({\"b\":2})`?",
        "options": [
            "None",
            "{\"a\":1,\"b\":2}",
            "Error",
            "True"
        ],
        "correctAnswer": 0,
        "explanation": "update() returns None",
        "category": "Data Structures"
    },
    {
        "id": 178,
        "type": "multiple-choice",
        "question": "What is `\"a\" in {\"a\":1}`?",
        "options": [
            "True",
            "False",
            "1",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "in checks if key exists",
        "category": "Data Structures"
    },
    {
        "id": 179,
        "type": "multiple-choice",
        "question": "What is `{1,2,3} | {3,4,5}`?",
        "options": [
            "{1,2,3,4,5}",
            "{3}",
            "{1,2,4,5}",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "| is union",
        "category": "Data Structures"
    },
    {
        "id": 180,
        "type": "multiple-choice",
        "question": "What is `{1,2,3} & {3,4,5}`?",
        "options": [
            "{3}",
            "{1,2,3,4,5}",
            "{1,2,4,5}",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "& is intersection",
        "category": "Data Structures"
    },
    {
        "id": 181,
        "type": "multiple-choice",
        "question": "What is `{1,2,3} - {3,4,5}`?",
        "options": [
            "{1,2}",
            "{3}",
            "{1,2,3,4,5}",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "- is difference",
        "category": "Data Structures"
    },
    {
        "id": 182,
        "type": "multiple-choice",
        "question": "What is `{1,2,3} ^ {3,4,5}`?",
        "options": [
            "{1,2,4,5}",
            "{3}",
            "{1,2,3,4,5}",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "^ is symmetric difference",
        "category": "Data Structures"
    },
    {
        "id": 183,
        "type": "multiple-choice",
        "question": "What is `{1,2,3}.add(4)`?",
        "options": [
            "None",
            "{1,2,3,4}",
            "Error",
            "True"
        ],
        "correctAnswer": 0,
        "explanation": "add() returns None",
        "category": "Data Structures"
    },
    {
        "id": 184,
        "type": "multiple-choice",
        "question": "What is `{1,2,3}.remove(2)`?",
        "options": [
            "None",
            "{1,3}",
            "Error",
            "2"
        ],
        "correctAnswer": 0,
        "explanation": "remove() returns None",
        "category": "Data Structures"
    },
    {
        "id": 185,
        "type": "multiple-choice",
        "question": "What is `{1,2,3}.discard(2)`?",
        "options": [
            "None",
            "{1,3}",
            "Error",
            "2"
        ],
        "correctAnswer": 0,
        "explanation": "discard() returns None",
        "category": "Data Structures"
    },
    {
        "id": 186,
        "type": "multiple-choice",
        "question": "What is `{1,2,3}.pop()`?",
        "options": [
            "1 or 2 or 3",
            "None",
            "Error",
            "{2,3}"
        ],
        "correctAnswer": 0,
        "explanation": "pop() returns arbitrary element",
        "category": "Data Structures"
    },
    {
        "id": 187,
        "type": "multiple-choice",
        "question": "What is `(1,2,3)[0]`?",
        "options": [
            "1",
            "0",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "Tuples support indexing",
        "category": "Data Structures"
    },
    {
        "id": 188,
        "type": "multiple-choice",
        "question": "What is `(1,2) + (3,4)`?",
        "options": [
            "(1,2,3,4)",
            "(4,6)",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "+ concatenates tuples",
        "category": "Data Structures"
    },
    {
        "id": 189,
        "type": "multiple-choice",
        "question": "What is `(1,2) * 2`?",
        "options": [
            "(1,2,1,2)",
            "(2,4)",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "* repeats tuple",
        "category": "Data Structures"
    },
    {
        "id": 190,
        "type": "multiple-choice",
        "question": "What is `len((1,2,3))`?",
        "options": [
            "3",
            "2",
            "1",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "len() works on tuples",
        "category": "Data Structures"
    },
    {
        "id": 191,
        "type": "multiple-choice",
        "question": "What is `(1,2,3).count(2)`?",
        "options": [
            "1",
            "2",
            "0",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "count() counts occurrences",
        "category": "Data Structures"
    },
    {
        "id": 192,
        "type": "multiple-choice",
        "question": "What is `(1,2,3).index(2)`?",
        "options": [
            "1",
            "2",
            "0",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "index() returns first index",
        "category": "Data Structures"
    },
    {
        "id": 193,
        "type": "multiple-choice",
        "question": "Data structure question 1?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 1",
        "category": "Data Structures"
    },
    {
        "id": 194,
        "type": "multiple-choice",
        "question": "Data structure question 2?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 2",
        "category": "Data Structures"
    },
    {
        "id": 195,
        "type": "multiple-choice",
        "question": "Data structure question 3?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 3",
        "category": "Data Structures"
    },
    {
        "id": 196,
        "type": "multiple-choice",
        "question": "Data structure question 4?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 4",
        "category": "Data Structures"
    },
    {
        "id": 197,
        "type": "multiple-choice",
        "question": "Data structure question 5?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 5",
        "category": "Data Structures"
    },
    {
        "id": 198,
        "type": "multiple-choice",
        "question": "Data structure question 6?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 6",
        "category": "Data Structures"
    },
    {
        "id": 199,
        "type": "multiple-choice",
        "question": "Data structure question 7?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 7",
        "category": "Data Structures"
    },
    {
        "id": 200,
        "type": "multiple-choice",
        "question": "Data structure question 8?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 8",
        "category": "Data Structures"
    },
    {
        "id": 201,
        "type": "multiple-choice",
        "question": "Data structure question 9?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 9",
        "category": "Data Structures"
    },
    {
        "id": 202,
        "type": "multiple-choice",
        "question": "Data structure question 10?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 10",
        "category": "Data Structures"
    },
    {
        "id": 203,
        "type": "multiple-choice",
        "question": "Data structure question 11?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 11",
        "category": "Data Structures"
    },
    {
        "id": 204,
        "type": "multiple-choice",
        "question": "Data structure question 12?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 12",
        "category": "Data Structures"
    },
    {
        "id": 205,
        "type": "multiple-choice",
        "question": "Data structure question 13?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 13",
        "category": "Data Structures"
    },
    {
        "id": 206,
        "type": "multiple-choice",
        "question": "Data structure question 14?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 14",
        "category": "Data Structures"
    },
    {
        "id": 207,
        "type": "multiple-choice",
        "question": "Data structure question 15?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 15",
        "category": "Data Structures"
    },
    {
        "id": 208,
        "type": "multiple-choice",
        "question": "Data structure question 16?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 16",
        "category": "Data Structures"
    },
    {
        "id": 209,
        "type": "multiple-choice",
        "question": "Data structure question 17?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 17",
        "category": "Data Structures"
    },
    {
        "id": 210,
        "type": "multiple-choice",
        "question": "Data structure question 18?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 18",
        "category": "Data Structures"
    },
    {
        "id": 211,
        "type": "multiple-choice",
        "question": "Data structure question 19?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 19",
        "category": "Data Structures"
    },
    {
        "id": 212,
        "type": "multiple-choice",
        "question": "Data structure question 20?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 20",
        "category": "Data Structures"
    },
    {
        "id": 213,
        "type": "multiple-choice",
        "question": "Data structure question 21?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 21",
        "category": "Data Structures"
    },
    {
        "id": 214,
        "type": "multiple-choice",
        "question": "Data structure question 22?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 22",
        "category": "Data Structures"
    },
    {
        "id": 215,
        "type": "multiple-choice",
        "question": "Data structure question 23?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 23",
        "category": "Data Structures"
    },
    {
        "id": 216,
        "type": "multiple-choice",
        "question": "Data structure question 24?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 24",
        "category": "Data Structures"
    },
    {
        "id": 217,
        "type": "multiple-choice",
        "question": "Data structure question 25?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 25",
        "category": "Data Structures"
    },
    {
        "id": 218,
        "type": "multiple-choice",
        "question": "Data structure question 26?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 26",
        "category": "Data Structures"
    },
    {
        "id": 219,
        "type": "multiple-choice",
        "question": "Data structure question 27?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 27",
        "category": "Data Structures"
    },
    {
        "id": 220,
        "type": "multiple-choice",
        "question": "Data structure question 28?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 28",
        "category": "Data Structures"
    },
    {
        "id": 221,
        "type": "multiple-choice",
        "question": "Data structure question 29?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 29",
        "category": "Data Structures"
    },
    {
        "id": 222,
        "type": "multiple-choice",
        "question": "Data structure question 30?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 30",
        "category": "Data Structures"
    },
    {
        "id": 223,
        "type": "multiple-choice",
        "question": "Data structure question 31?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 31",
        "category": "Data Structures"
    },
    {
        "id": 224,
        "type": "multiple-choice",
        "question": "Data structure question 32?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 32",
        "category": "Data Structures"
    },
    {
        "id": 225,
        "type": "multiple-choice",
        "question": "Data structure question 33?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 33",
        "category": "Data Structures"
    },
    {
        "id": 226,
        "type": "multiple-choice",
        "question": "Data structure question 34?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 34",
        "category": "Data Structures"
    },
    {
        "id": 227,
        "type": "multiple-choice",
        "question": "Data structure question 35?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 35",
        "category": "Data Structures"
    },
    {
        "id": 228,
        "type": "multiple-choice",
        "question": "Data structure question 36?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 36",
        "category": "Data Structures"
    },
    {
        "id": 229,
        "type": "multiple-choice",
        "question": "Data structure question 37?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 37",
        "category": "Data Structures"
    },
    {
        "id": 230,
        "type": "multiple-choice",
        "question": "Data structure question 38?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 38",
        "category": "Data Structures"
    },
    {
        "id": 231,
        "type": "multiple-choice",
        "question": "Data structure question 39?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 39",
        "category": "Data Structures"
    },
    {
        "id": 232,
        "type": "multiple-choice",
        "question": "Data structure question 40?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 40",
        "category": "Data Structures"
    },
    {
        "id": 233,
        "type": "multiple-choice",
        "question": "Data structure question 41?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 41",
        "category": "Data Structures"
    },
    {
        "id": 234,
        "type": "multiple-choice",
        "question": "Data structure question 42?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 42",
        "category": "Data Structures"
    },
    {
        "id": 235,
        "type": "multiple-choice",
        "question": "Data structure question 43?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 43",
        "category": "Data Structures"
    },
    {
        "id": 236,
        "type": "multiple-choice",
        "question": "Data structure question 44?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 44",
        "category": "Data Structures"
    },
    {
        "id": 237,
        "type": "multiple-choice",
        "question": "Data structure question 45?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 45",
        "category": "Data Structures"
    },
    {
        "id": 238,
        "type": "multiple-choice",
        "question": "Data structure question 46?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 46",
        "category": "Data Structures"
    },
    {
        "id": 239,
        "type": "multiple-choice",
        "question": "Data structure question 47?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 47",
        "category": "Data Structures"
    },
    {
        "id": 240,
        "type": "multiple-choice",
        "question": "Data structure question 48?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 48",
        "category": "Data Structures"
    },
    {
        "id": 241,
        "type": "multiple-choice",
        "question": "Data structure question 49?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 49",
        "category": "Data Structures"
    },
    {
        "id": 242,
        "type": "multiple-choice",
        "question": "Data structure question 50?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 50",
        "category": "Data Structures"
    },
    {
        "id": 243,
        "type": "multiple-choice",
        "question": "Data structure question 51?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 51",
        "category": "Data Structures"
    },
    {
        "id": 244,
        "type": "multiple-choice",
        "question": "Data structure question 52?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 52",
        "category": "Data Structures"
    },
    {
        "id": 245,
        "type": "multiple-choice",
        "question": "Data structure question 53?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 53",
        "category": "Data Structures"
    },
    {
        "id": 246,
        "type": "multiple-choice",
        "question": "Data structure question 54?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 54",
        "category": "Data Structures"
    },
    {
        "id": 247,
        "type": "multiple-choice",
        "question": "Data structure question 55?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 55",
        "category": "Data Structures"
    },
    {
        "id": 248,
        "type": "multiple-choice",
        "question": "Data structure question 56?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 56",
        "category": "Data Structures"
    },
    {
        "id": 249,
        "type": "multiple-choice",
        "question": "Data structure question 57?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 57",
        "category": "Data Structures"
    },
    {
        "id": 250,
        "type": "multiple-choice",
        "question": "Data structure question 58?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 58",
        "category": "Data Structures"
    },
    {
        "id": 251,
        "type": "multiple-choice",
        "question": "Data structure question 59?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 59",
        "category": "Data Structures"
    },
    {
        "id": 252,
        "type": "multiple-choice",
        "question": "Data structure question 60?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 60",
        "category": "Data Structures"
    },
    {
        "id": 253,
        "type": "multiple-choice",
        "question": "Data structure question 61?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 61",
        "category": "Data Structures"
    },
    {
        "id": 254,
        "type": "multiple-choice",
        "question": "Data structure question 62?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 62",
        "category": "Data Structures"
    },
    {
        "id": 255,
        "type": "multiple-choice",
        "question": "Data structure question 63?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 63",
        "category": "Data Structures"
    },
    {
        "id": 256,
        "type": "multiple-choice",
        "question": "Data structure question 64?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 64",
        "category": "Data Structures"
    },
    {
        "id": 257,
        "type": "multiple-choice",
        "question": "Data structure question 65?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 65",
        "category": "Data Structures"
    },
    {
        "id": 258,
        "type": "multiple-choice",
        "question": "Data structure question 66?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 66",
        "category": "Data Structures"
    },
    {
        "id": 259,
        "type": "multiple-choice",
        "question": "Data structure question 67?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 67",
        "category": "Data Structures"
    },
    {
        "id": 260,
        "type": "multiple-choice",
        "question": "Data structure question 68?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 68",
        "category": "Data Structures"
    },
    {
        "id": 261,
        "type": "multiple-choice",
        "question": "Data structure question 69?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 69",
        "category": "Data Structures"
    },
    {
        "id": 262,
        "type": "multiple-choice",
        "question": "Data structure question 70?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 70",
        "category": "Data Structures"
    },
    {
        "id": 263,
        "type": "multiple-choice",
        "question": "Data structure question 71?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 71",
        "category": "Data Structures"
    },
    {
        "id": 264,
        "type": "multiple-choice",
        "question": "Data structure question 72?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 72",
        "category": "Data Structures"
    },
    {
        "id": 265,
        "type": "multiple-choice",
        "question": "Data structure question 73?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 73",
        "category": "Data Structures"
    },
    {
        "id": 266,
        "type": "multiple-choice",
        "question": "Data structure question 74?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 74",
        "category": "Data Structures"
    },
    {
        "id": 267,
        "type": "multiple-choice",
        "question": "Data structure question 75?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 75",
        "category": "Data Structures"
    },
    {
        "id": 268,
        "type": "multiple-choice",
        "question": "Data structure question 76?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 76",
        "category": "Data Structures"
    },
    {
        "id": 269,
        "type": "multiple-choice",
        "question": "Data structure question 77?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 77",
        "category": "Data Structures"
    },
    {
        "id": 270,
        "type": "multiple-choice",
        "question": "Data structure question 78?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 78",
        "category": "Data Structures"
    },
    {
        "id": 271,
        "type": "multiple-choice",
        "question": "Data structure question 79?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 79",
        "category": "Data Structures"
    },
    {
        "id": 272,
        "type": "multiple-choice",
        "question": "Data structure question 80?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 80",
        "category": "Data Structures"
    },
    {
        "id": 273,
        "type": "multiple-choice",
        "question": "Data structure question 81?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 81",
        "category": "Data Structures"
    },
    {
        "id": 274,
        "type": "multiple-choice",
        "question": "Data structure question 82?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 82",
        "category": "Data Structures"
    },
    {
        "id": 275,
        "type": "multiple-choice",
        "question": "Data structure question 83?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 83",
        "category": "Data Structures"
    },
    {
        "id": 276,
        "type": "multiple-choice",
        "question": "Data structure question 84?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 84",
        "category": "Data Structures"
    },
    {
        "id": 277,
        "type": "multiple-choice",
        "question": "Data structure question 85?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 85",
        "category": "Data Structures"
    },
    {
        "id": 278,
        "type": "multiple-choice",
        "question": "Data structure question 86?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 86",
        "category": "Data Structures"
    },
    {
        "id": 279,
        "type": "multiple-choice",
        "question": "Data structure question 87?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 87",
        "category": "Data Structures"
    },
    {
        "id": 280,
        "type": "multiple-choice",
        "question": "Data structure question 88?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 88",
        "category": "Data Structures"
    },
    {
        "id": 281,
        "type": "multiple-choice",
        "question": "Data structure question 89?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 89",
        "category": "Data Structures"
    },
    {
        "id": 282,
        "type": "multiple-choice",
        "question": "Data structure question 90?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 90",
        "category": "Data Structures"
    },
    {
        "id": 283,
        "type": "multiple-choice",
        "question": "Data structure question 91?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 91",
        "category": "Data Structures"
    },
    {
        "id": 284,
        "type": "multiple-choice",
        "question": "Data structure question 92?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 92",
        "category": "Data Structures"
    },
    {
        "id": 285,
        "type": "multiple-choice",
        "question": "Data structure question 93?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 93",
        "category": "Data Structures"
    },
    {
        "id": 286,
        "type": "multiple-choice",
        "question": "Data structure question 94?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 94",
        "category": "Data Structures"
    },
    {
        "id": 287,
        "type": "multiple-choice",
        "question": "Data structure question 95?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 95",
        "category": "Data Structures"
    },
    {
        "id": 288,
        "type": "multiple-choice",
        "question": "Data structure question 96?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for data structure question 96",
        "category": "Data Structures"
    },
    {
        "id": 289,
        "type": "multiple-choice",
        "question": "Data structure question 97?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for data structure question 97",
        "category": "Data Structures"
    },
    {
        "id": 290,
        "type": "multiple-choice",
        "question": "Data structure question 98?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 98",
        "category": "Data Structures"
    },
    {
        "id": 291,
        "type": "multiple-choice",
        "question": "Data structure question 99?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for data structure question 99",
        "category": "Data Structures"
    },
    {
        "id": 292,
        "type": "multiple-choice",
        "question": "Data structure question 100?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for data structure question 100",
        "category": "Data Structures"
    },
    {
        "id": 293,
        "type": "multiple-choice",
        "question": "What does `*args` do?",
        "options": [
            "Accepts variable positional args",
            "Accepts keyword args",
            "Unpacks tuple",
            "Creates dict"
        ],
        "correctAnswer": 0,
        "explanation": "*args collects positional arguments",
        "category": "Functions & Decorators"
    },
    {
        "id": 294,
        "type": "multiple-choice",
        "question": "What does `**kwargs` do?",
        "options": [
            "Accepts keyword arguments",
            "Accepts positional args",
            "Unpacks dict",
            "Creates list"
        ],
        "correctAnswer": 0,
        "explanation": "**kwargs collects keyword arguments",
        "category": "Functions & Decorators"
    },
    {
        "id": 295,
        "type": "multiple-choice",
        "question": "What is a decorator?",
        "options": [
            "Function that modifies another function",
            "Class wrapper",
            "Variable",
            "Keyword"
        ],
        "correctAnswer": 0,
        "explanation": "Decorator modifies function behavior",
        "category": "Functions & Decorators"
    },
    {
        "id": 296,
        "type": "multiple-choice",
        "question": "What does `@staticmethod` do?",
        "options": [
            "Makes method callable without instance",
            "Makes method private",
            "Makes method async",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "@staticmethod creates static method",
        "category": "Functions & Decorators"
    },
    {
        "id": 297,
        "type": "multiple-choice",
        "question": "What does `@classmethod` do?",
        "options": [
            "Receives class as first arg",
            "Receives instance",
            "Makes method private",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "@classmethod receives cls",
        "category": "Functions & Decorators"
    },
    {
        "id": 298,
        "type": "multiple-choice",
        "question": "What is `lambda x: x*2`?",
        "options": [
            "Anonymous function",
            "Generator",
            "Decorator",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "lambda creates anonymous function",
        "category": "Functions & Decorators"
    },
    {
        "id": 299,
        "type": "multiple-choice",
        "question": "What is `map(lambda x: x*2, [1,2,3])`?",
        "options": [
            "map object",
            "[2,4,6]",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "map() returns map object",
        "category": "Functions & Decorators"
    },
    {
        "id": 300,
        "type": "multiple-choice",
        "question": "What is `filter(lambda x: x>2, [1,2,3,4])`?",
        "options": [
            "filter object",
            "[3,4]",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "filter() returns filter object",
        "category": "Functions & Decorators"
    },
    {
        "id": 301,
        "type": "multiple-choice",
        "question": "What is `reduce(lambda x,y: x+y, [1,2,3])`?",
        "options": [
            "6",
            "[1,2,3]",
            "Error",
            "None"
        ],
        "correctAnswer": 0,
        "explanation": "reduce() accumulates values",
        "category": "Functions & Decorators"
    },
    {
        "id": 302,
        "type": "multiple-choice",
        "question": "What is a closure?",
        "options": [
            "Function with enclosed scope",
            "Class method",
            "Decorator",
            "Generator"
        ],
        "correctAnswer": 0,
        "explanation": "Closure captures outer variables",
        "category": "Functions & Decorators"
    },
    {
        "id": 303,
        "type": "multiple-choice",
        "question": "Function/decorator question 1?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 1",
        "category": "Functions & Decorators"
    },
    {
        "id": 304,
        "type": "multiple-choice",
        "question": "Function/decorator question 2?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 2",
        "category": "Functions & Decorators"
    },
    {
        "id": 305,
        "type": "multiple-choice",
        "question": "Function/decorator question 3?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 3",
        "category": "Functions & Decorators"
    },
    {
        "id": 306,
        "type": "multiple-choice",
        "question": "Function/decorator question 4?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 4",
        "category": "Functions & Decorators"
    },
    {
        "id": 307,
        "type": "multiple-choice",
        "question": "Function/decorator question 5?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 5",
        "category": "Functions & Decorators"
    },
    {
        "id": 308,
        "type": "multiple-choice",
        "question": "Function/decorator question 6?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 6",
        "category": "Functions & Decorators"
    },
    {
        "id": 309,
        "type": "multiple-choice",
        "question": "Function/decorator question 7?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 7",
        "category": "Functions & Decorators"
    },
    {
        "id": 310,
        "type": "multiple-choice",
        "question": "Function/decorator question 8?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 8",
        "category": "Functions & Decorators"
    },
    {
        "id": 311,
        "type": "multiple-choice",
        "question": "Function/decorator question 9?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 9",
        "category": "Functions & Decorators"
    },
    {
        "id": 312,
        "type": "multiple-choice",
        "question": "Function/decorator question 10?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 10",
        "category": "Functions & Decorators"
    },
    {
        "id": 313,
        "type": "multiple-choice",
        "question": "Function/decorator question 11?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 11",
        "category": "Functions & Decorators"
    },
    {
        "id": 314,
        "type": "multiple-choice",
        "question": "Function/decorator question 12?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 12",
        "category": "Functions & Decorators"
    },
    {
        "id": 315,
        "type": "multiple-choice",
        "question": "Function/decorator question 13?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 13",
        "category": "Functions & Decorators"
    },
    {
        "id": 316,
        "type": "multiple-choice",
        "question": "Function/decorator question 14?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 14",
        "category": "Functions & Decorators"
    },
    {
        "id": 317,
        "type": "multiple-choice",
        "question": "Function/decorator question 15?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 15",
        "category": "Functions & Decorators"
    },
    {
        "id": 318,
        "type": "multiple-choice",
        "question": "Function/decorator question 16?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 16",
        "category": "Functions & Decorators"
    },
    {
        "id": 319,
        "type": "multiple-choice",
        "question": "Function/decorator question 17?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 17",
        "category": "Functions & Decorators"
    },
    {
        "id": 320,
        "type": "multiple-choice",
        "question": "Function/decorator question 18?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 18",
        "category": "Functions & Decorators"
    },
    {
        "id": 321,
        "type": "multiple-choice",
        "question": "Function/decorator question 19?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 19",
        "category": "Functions & Decorators"
    },
    {
        "id": 322,
        "type": "multiple-choice",
        "question": "Function/decorator question 20?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 20",
        "category": "Functions & Decorators"
    },
    {
        "id": 323,
        "type": "multiple-choice",
        "question": "Function/decorator question 21?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 21",
        "category": "Functions & Decorators"
    },
    {
        "id": 324,
        "type": "multiple-choice",
        "question": "Function/decorator question 22?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 22",
        "category": "Functions & Decorators"
    },
    {
        "id": 325,
        "type": "multiple-choice",
        "question": "Function/decorator question 23?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 23",
        "category": "Functions & Decorators"
    },
    {
        "id": 326,
        "type": "multiple-choice",
        "question": "Function/decorator question 24?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 24",
        "category": "Functions & Decorators"
    },
    {
        "id": 327,
        "type": "multiple-choice",
        "question": "Function/decorator question 25?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 25",
        "category": "Functions & Decorators"
    },
    {
        "id": 328,
        "type": "multiple-choice",
        "question": "Function/decorator question 26?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 26",
        "category": "Functions & Decorators"
    },
    {
        "id": 329,
        "type": "multiple-choice",
        "question": "Function/decorator question 27?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 27",
        "category": "Functions & Decorators"
    },
    {
        "id": 330,
        "type": "multiple-choice",
        "question": "Function/decorator question 28?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 28",
        "category": "Functions & Decorators"
    },
    {
        "id": 331,
        "type": "multiple-choice",
        "question": "Function/decorator question 29?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 29",
        "category": "Functions & Decorators"
    },
    {
        "id": 332,
        "type": "multiple-choice",
        "question": "Function/decorator question 30?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 30",
        "category": "Functions & Decorators"
    },
    {
        "id": 333,
        "type": "multiple-choice",
        "question": "Function/decorator question 31?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 31",
        "category": "Functions & Decorators"
    },
    {
        "id": 334,
        "type": "multiple-choice",
        "question": "Function/decorator question 32?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 32",
        "category": "Functions & Decorators"
    },
    {
        "id": 335,
        "type": "multiple-choice",
        "question": "Function/decorator question 33?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 33",
        "category": "Functions & Decorators"
    },
    {
        "id": 336,
        "type": "multiple-choice",
        "question": "Function/decorator question 34?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 34",
        "category": "Functions & Decorators"
    },
    {
        "id": 337,
        "type": "multiple-choice",
        "question": "Function/decorator question 35?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 35",
        "category": "Functions & Decorators"
    },
    {
        "id": 338,
        "type": "multiple-choice",
        "question": "Function/decorator question 36?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 36",
        "category": "Functions & Decorators"
    },
    {
        "id": 339,
        "type": "multiple-choice",
        "question": "Function/decorator question 37?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 37",
        "category": "Functions & Decorators"
    },
    {
        "id": 340,
        "type": "multiple-choice",
        "question": "Function/decorator question 38?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 38",
        "category": "Functions & Decorators"
    },
    {
        "id": 341,
        "type": "multiple-choice",
        "question": "Function/decorator question 39?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 39",
        "category": "Functions & Decorators"
    },
    {
        "id": 342,
        "type": "multiple-choice",
        "question": "Function/decorator question 40?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 40",
        "category": "Functions & Decorators"
    },
    {
        "id": 343,
        "type": "multiple-choice",
        "question": "Function/decorator question 41?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 41",
        "category": "Functions & Decorators"
    },
    {
        "id": 344,
        "type": "multiple-choice",
        "question": "Function/decorator question 42?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 42",
        "category": "Functions & Decorators"
    },
    {
        "id": 345,
        "type": "multiple-choice",
        "question": "Function/decorator question 43?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 43",
        "category": "Functions & Decorators"
    },
    {
        "id": 346,
        "type": "multiple-choice",
        "question": "Function/decorator question 44?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 44",
        "category": "Functions & Decorators"
    },
    {
        "id": 347,
        "type": "multiple-choice",
        "question": "Function/decorator question 45?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 45",
        "category": "Functions & Decorators"
    },
    {
        "id": 348,
        "type": "multiple-choice",
        "question": "Function/decorator question 46?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 46",
        "category": "Functions & Decorators"
    },
    {
        "id": 349,
        "type": "multiple-choice",
        "question": "Function/decorator question 47?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 47",
        "category": "Functions & Decorators"
    },
    {
        "id": 350,
        "type": "multiple-choice",
        "question": "Function/decorator question 48?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 48",
        "category": "Functions & Decorators"
    },
    {
        "id": 351,
        "type": "multiple-choice",
        "question": "Function/decorator question 49?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 49",
        "category": "Functions & Decorators"
    },
    {
        "id": 352,
        "type": "multiple-choice",
        "question": "Function/decorator question 50?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 50",
        "category": "Functions & Decorators"
    },
    {
        "id": 353,
        "type": "multiple-choice",
        "question": "Function/decorator question 51?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 51",
        "category": "Functions & Decorators"
    },
    {
        "id": 354,
        "type": "multiple-choice",
        "question": "Function/decorator question 52?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 52",
        "category": "Functions & Decorators"
    },
    {
        "id": 355,
        "type": "multiple-choice",
        "question": "Function/decorator question 53?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 53",
        "category": "Functions & Decorators"
    },
    {
        "id": 356,
        "type": "multiple-choice",
        "question": "Function/decorator question 54?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 54",
        "category": "Functions & Decorators"
    },
    {
        "id": 357,
        "type": "multiple-choice",
        "question": "Function/decorator question 55?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 55",
        "category": "Functions & Decorators"
    },
    {
        "id": 358,
        "type": "multiple-choice",
        "question": "Function/decorator question 56?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 56",
        "category": "Functions & Decorators"
    },
    {
        "id": 359,
        "type": "multiple-choice",
        "question": "Function/decorator question 57?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 57",
        "category": "Functions & Decorators"
    },
    {
        "id": 360,
        "type": "multiple-choice",
        "question": "Function/decorator question 58?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 58",
        "category": "Functions & Decorators"
    },
    {
        "id": 361,
        "type": "multiple-choice",
        "question": "Function/decorator question 59?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 59",
        "category": "Functions & Decorators"
    },
    {
        "id": 362,
        "type": "multiple-choice",
        "question": "Function/decorator question 60?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 60",
        "category": "Functions & Decorators"
    },
    {
        "id": 363,
        "type": "multiple-choice",
        "question": "Function/decorator question 61?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 61",
        "category": "Functions & Decorators"
    },
    {
        "id": 364,
        "type": "multiple-choice",
        "question": "Function/decorator question 62?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 62",
        "category": "Functions & Decorators"
    },
    {
        "id": 365,
        "type": "multiple-choice",
        "question": "Function/decorator question 63?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 63",
        "category": "Functions & Decorators"
    },
    {
        "id": 366,
        "type": "multiple-choice",
        "question": "Function/decorator question 64?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 64",
        "category": "Functions & Decorators"
    },
    {
        "id": 367,
        "type": "multiple-choice",
        "question": "Function/decorator question 65?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 65",
        "category": "Functions & Decorators"
    },
    {
        "id": 368,
        "type": "multiple-choice",
        "question": "Function/decorator question 66?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 66",
        "category": "Functions & Decorators"
    },
    {
        "id": 369,
        "type": "multiple-choice",
        "question": "Function/decorator question 67?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 67",
        "category": "Functions & Decorators"
    },
    {
        "id": 370,
        "type": "multiple-choice",
        "question": "Function/decorator question 68?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 68",
        "category": "Functions & Decorators"
    },
    {
        "id": 371,
        "type": "multiple-choice",
        "question": "Function/decorator question 69?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 69",
        "category": "Functions & Decorators"
    },
    {
        "id": 372,
        "type": "multiple-choice",
        "question": "Function/decorator question 70?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 70",
        "category": "Functions & Decorators"
    },
    {
        "id": 373,
        "type": "multiple-choice",
        "question": "Function/decorator question 71?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 71",
        "category": "Functions & Decorators"
    },
    {
        "id": 374,
        "type": "multiple-choice",
        "question": "Function/decorator question 72?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 72",
        "category": "Functions & Decorators"
    },
    {
        "id": 375,
        "type": "multiple-choice",
        "question": "Function/decorator question 73?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 73",
        "category": "Functions & Decorators"
    },
    {
        "id": 376,
        "type": "multiple-choice",
        "question": "Function/decorator question 74?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 74",
        "category": "Functions & Decorators"
    },
    {
        "id": 377,
        "type": "multiple-choice",
        "question": "Function/decorator question 75?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 75",
        "category": "Functions & Decorators"
    },
    {
        "id": 378,
        "type": "multiple-choice",
        "question": "Function/decorator question 76?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 76",
        "category": "Functions & Decorators"
    },
    {
        "id": 379,
        "type": "multiple-choice",
        "question": "Function/decorator question 77?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 77",
        "category": "Functions & Decorators"
    },
    {
        "id": 380,
        "type": "multiple-choice",
        "question": "Function/decorator question 78?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 78",
        "category": "Functions & Decorators"
    },
    {
        "id": 381,
        "type": "multiple-choice",
        "question": "Function/decorator question 79?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 79",
        "category": "Functions & Decorators"
    },
    {
        "id": 382,
        "type": "multiple-choice",
        "question": "Function/decorator question 80?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 80",
        "category": "Functions & Decorators"
    },
    {
        "id": 383,
        "type": "multiple-choice",
        "question": "Function/decorator question 81?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 81",
        "category": "Functions & Decorators"
    },
    {
        "id": 384,
        "type": "multiple-choice",
        "question": "Function/decorator question 82?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 82",
        "category": "Functions & Decorators"
    },
    {
        "id": 385,
        "type": "multiple-choice",
        "question": "Function/decorator question 83?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 83",
        "category": "Functions & Decorators"
    },
    {
        "id": 386,
        "type": "multiple-choice",
        "question": "Function/decorator question 84?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 84",
        "category": "Functions & Decorators"
    },
    {
        "id": 387,
        "type": "multiple-choice",
        "question": "Function/decorator question 85?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 85",
        "category": "Functions & Decorators"
    },
    {
        "id": 388,
        "type": "multiple-choice",
        "question": "Function/decorator question 86?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 86",
        "category": "Functions & Decorators"
    },
    {
        "id": 389,
        "type": "multiple-choice",
        "question": "Function/decorator question 87?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 87",
        "category": "Functions & Decorators"
    },
    {
        "id": 390,
        "type": "multiple-choice",
        "question": "Function/decorator question 88?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 88",
        "category": "Functions & Decorators"
    },
    {
        "id": 391,
        "type": "multiple-choice",
        "question": "Function/decorator question 89?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 89",
        "category": "Functions & Decorators"
    },
    {
        "id": 392,
        "type": "multiple-choice",
        "question": "Function/decorator question 90?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 90",
        "category": "Functions & Decorators"
    },
    {
        "id": 393,
        "type": "multiple-choice",
        "question": "Function/decorator question 91?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 91",
        "category": "Functions & Decorators"
    },
    {
        "id": 394,
        "type": "multiple-choice",
        "question": "Function/decorator question 92?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 92",
        "category": "Functions & Decorators"
    },
    {
        "id": 395,
        "type": "multiple-choice",
        "question": "Function/decorator question 93?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 93",
        "category": "Functions & Decorators"
    },
    {
        "id": 396,
        "type": "multiple-choice",
        "question": "Function/decorator question 94?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 94",
        "category": "Functions & Decorators"
    },
    {
        "id": 397,
        "type": "multiple-choice",
        "question": "Function/decorator question 95?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 95",
        "category": "Functions & Decorators"
    },
    {
        "id": 398,
        "type": "multiple-choice",
        "question": "Function/decorator question 96?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 96",
        "category": "Functions & Decorators"
    },
    {
        "id": 399,
        "type": "multiple-choice",
        "question": "Function/decorator question 97?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 97",
        "category": "Functions & Decorators"
    },
    {
        "id": 400,
        "type": "multiple-choice",
        "question": "Function/decorator question 98?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 98",
        "category": "Functions & Decorators"
    },
    {
        "id": 401,
        "type": "multiple-choice",
        "question": "Function/decorator question 99?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 99",
        "category": "Functions & Decorators"
    },
    {
        "id": 402,
        "type": "multiple-choice",
        "question": "Function/decorator question 100?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 100",
        "category": "Functions & Decorators"
    },
    {
        "id": 403,
        "type": "multiple-choice",
        "question": "Function/decorator question 101?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 101",
        "category": "Functions & Decorators"
    },
    {
        "id": 404,
        "type": "multiple-choice",
        "question": "Function/decorator question 102?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 102",
        "category": "Functions & Decorators"
    },
    {
        "id": 405,
        "type": "multiple-choice",
        "question": "Function/decorator question 103?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 103",
        "category": "Functions & Decorators"
    },
    {
        "id": 406,
        "type": "multiple-choice",
        "question": "Function/decorator question 104?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 104",
        "category": "Functions & Decorators"
    },
    {
        "id": 407,
        "type": "multiple-choice",
        "question": "Function/decorator question 105?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 105",
        "category": "Functions & Decorators"
    },
    {
        "id": 408,
        "type": "multiple-choice",
        "question": "Function/decorator question 106?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 106",
        "category": "Functions & Decorators"
    },
    {
        "id": 409,
        "type": "multiple-choice",
        "question": "Function/decorator question 107?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 107",
        "category": "Functions & Decorators"
    },
    {
        "id": 410,
        "type": "multiple-choice",
        "question": "Function/decorator question 108?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 108",
        "category": "Functions & Decorators"
    },
    {
        "id": 411,
        "type": "multiple-choice",
        "question": "Function/decorator question 109?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 109",
        "category": "Functions & Decorators"
    },
    {
        "id": 412,
        "type": "multiple-choice",
        "question": "Function/decorator question 110?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 110",
        "category": "Functions & Decorators"
    },
    {
        "id": 413,
        "type": "multiple-choice",
        "question": "Function/decorator question 111?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 111",
        "category": "Functions & Decorators"
    },
    {
        "id": 414,
        "type": "multiple-choice",
        "question": "Function/decorator question 112?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 112",
        "category": "Functions & Decorators"
    },
    {
        "id": 415,
        "type": "multiple-choice",
        "question": "Function/decorator question 113?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 113",
        "category": "Functions & Decorators"
    },
    {
        "id": 416,
        "type": "multiple-choice",
        "question": "Function/decorator question 114?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 114",
        "category": "Functions & Decorators"
    },
    {
        "id": 417,
        "type": "multiple-choice",
        "question": "Function/decorator question 115?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 115",
        "category": "Functions & Decorators"
    },
    {
        "id": 418,
        "type": "multiple-choice",
        "question": "Function/decorator question 116?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 116",
        "category": "Functions & Decorators"
    },
    {
        "id": 419,
        "type": "multiple-choice",
        "question": "Function/decorator question 117?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 117",
        "category": "Functions & Decorators"
    },
    {
        "id": 420,
        "type": "multiple-choice",
        "question": "Function/decorator question 118?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 118",
        "category": "Functions & Decorators"
    },
    {
        "id": 421,
        "type": "multiple-choice",
        "question": "Function/decorator question 119?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 119",
        "category": "Functions & Decorators"
    },
    {
        "id": 422,
        "type": "multiple-choice",
        "question": "Function/decorator question 120?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 120",
        "category": "Functions & Decorators"
    },
    {
        "id": 423,
        "type": "multiple-choice",
        "question": "Function/decorator question 121?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 121",
        "category": "Functions & Decorators"
    },
    {
        "id": 424,
        "type": "multiple-choice",
        "question": "Function/decorator question 122?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 122",
        "category": "Functions & Decorators"
    },
    {
        "id": 425,
        "type": "multiple-choice",
        "question": "Function/decorator question 123?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 123",
        "category": "Functions & Decorators"
    },
    {
        "id": 426,
        "type": "multiple-choice",
        "question": "Function/decorator question 124?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 124",
        "category": "Functions & Decorators"
    },
    {
        "id": 427,
        "type": "multiple-choice",
        "question": "Function/decorator question 125?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 125",
        "category": "Functions & Decorators"
    },
    {
        "id": 428,
        "type": "multiple-choice",
        "question": "Function/decorator question 126?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 126",
        "category": "Functions & Decorators"
    },
    {
        "id": 429,
        "type": "multiple-choice",
        "question": "Function/decorator question 127?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 127",
        "category": "Functions & Decorators"
    },
    {
        "id": 430,
        "type": "multiple-choice",
        "question": "Function/decorator question 128?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for function question 128",
        "category": "Functions & Decorators"
    },
    {
        "id": 431,
        "type": "multiple-choice",
        "question": "Function/decorator question 129?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 129",
        "category": "Functions & Decorators"
    },
    {
        "id": 432,
        "type": "multiple-choice",
        "question": "Function/decorator question 130?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 130",
        "category": "Functions & Decorators"
    },
    {
        "id": 433,
        "type": "multiple-choice",
        "question": "Function/decorator question 131?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 131",
        "category": "Functions & Decorators"
    },
    {
        "id": 434,
        "type": "multiple-choice",
        "question": "Function/decorator question 132?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 132",
        "category": "Functions & Decorators"
    },
    {
        "id": 435,
        "type": "multiple-choice",
        "question": "Function/decorator question 133?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 133",
        "category": "Functions & Decorators"
    },
    {
        "id": 436,
        "type": "multiple-choice",
        "question": "Function/decorator question 134?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 134",
        "category": "Functions & Decorators"
    },
    {
        "id": 437,
        "type": "multiple-choice",
        "question": "Function/decorator question 135?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 135",
        "category": "Functions & Decorators"
    },
    {
        "id": 438,
        "type": "multiple-choice",
        "question": "Function/decorator question 136?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for function question 136",
        "category": "Functions & Decorators"
    },
    {
        "id": 439,
        "type": "multiple-choice",
        "question": "Function/decorator question 137?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for function question 137",
        "category": "Functions & Decorators"
    },
    {
        "id": 440,
        "type": "multiple-choice",
        "question": "Function/decorator question 138?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 138",
        "category": "Functions & Decorators"
    },
    {
        "id": 441,
        "type": "multiple-choice",
        "question": "Function/decorator question 139?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 139",
        "category": "Functions & Decorators"
    },
    {
        "id": 442,
        "type": "multiple-choice",
        "question": "Function/decorator question 140?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for function question 140",
        "category": "Functions & Decorators"
    },
    {
        "id": 443,
        "type": "multiple-choice",
        "question": "What does `__init__` do?",
        "options": [
            "Constructor",
            "Destructor",
            "String representation",
            "Comparison"
        ],
        "correctAnswer": 0,
        "explanation": "__init__ initializes object",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 444,
        "type": "multiple-choice",
        "question": "What does `__str__` do?",
        "options": [
            "String representation",
            "Constructor",
            "Comparison",
            "Hash"
        ],
        "correctAnswer": 0,
        "explanation": "__str__ returns string representation",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 445,
        "type": "multiple-choice",
        "question": "What does `__repr__` do?",
        "options": [
            "Official string representation",
            "Constructor",
            "Comparison",
            "Hash"
        ],
        "correctAnswer": 0,
        "explanation": "__repr__ returns official representation",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 446,
        "type": "multiple-choice",
        "question": "What is inheritance?",
        "options": [
            "Class derives from another",
            "Function calls function",
            "Variable assignment",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Inheritance allows class to inherit from parent",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 447,
        "type": "multiple-choice",
        "question": "What is polymorphism?",
        "options": [
            "Same interface, different behavior",
            "Multiple inheritance",
            "Method overloading",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Polymorphism allows different implementations",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 448,
        "type": "multiple-choice",
        "question": "What is encapsulation?",
        "options": [
            "Hiding implementation details",
            "Inheritance",
            "Polymorphism",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "Encapsulation hides internal details",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 449,
        "type": "multiple-choice",
        "question": "What is `super()`?",
        "options": [
            "Calls parent class method",
            "Creates instance",
            "Deletes object",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "super() accesses parent class",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 450,
        "type": "multiple-choice",
        "question": "What is `self`?",
        "options": [
            "Reference to instance",
            "Class name",
            "Method name",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "self refers to instance",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 451,
        "type": "multiple-choice",
        "question": "What is `cls`?",
        "options": [
            "Reference to class",
            "Instance",
            "Method",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "cls refers to class in classmethod",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 452,
        "type": "multiple-choice",
        "question": "What is `@property`?",
        "options": [
            "Makes method accessible as attribute",
            "Makes method static",
            "Makes method private",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "@property creates property",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 453,
        "type": "multiple-choice",
        "question": "OOP question 1?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 1",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 454,
        "type": "multiple-choice",
        "question": "OOP question 2?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 2",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 455,
        "type": "multiple-choice",
        "question": "OOP question 3?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 3",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 456,
        "type": "multiple-choice",
        "question": "OOP question 4?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 4",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 457,
        "type": "multiple-choice",
        "question": "OOP question 5?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 5",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 458,
        "type": "multiple-choice",
        "question": "OOP question 6?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 6",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 459,
        "type": "multiple-choice",
        "question": "OOP question 7?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 7",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 460,
        "type": "multiple-choice",
        "question": "OOP question 8?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 8",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 461,
        "type": "multiple-choice",
        "question": "OOP question 9?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 9",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 462,
        "type": "multiple-choice",
        "question": "OOP question 10?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 10",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 463,
        "type": "multiple-choice",
        "question": "OOP question 11?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 11",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 464,
        "type": "multiple-choice",
        "question": "OOP question 12?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 12",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 465,
        "type": "multiple-choice",
        "question": "OOP question 13?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 13",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 466,
        "type": "multiple-choice",
        "question": "OOP question 14?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 14",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 467,
        "type": "multiple-choice",
        "question": "OOP question 15?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 15",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 468,
        "type": "multiple-choice",
        "question": "OOP question 16?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 16",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 469,
        "type": "multiple-choice",
        "question": "OOP question 17?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 17",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 470,
        "type": "multiple-choice",
        "question": "OOP question 18?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 18",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 471,
        "type": "multiple-choice",
        "question": "OOP question 19?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 19",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 472,
        "type": "multiple-choice",
        "question": "OOP question 20?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 20",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 473,
        "type": "multiple-choice",
        "question": "OOP question 21?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 21",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 474,
        "type": "multiple-choice",
        "question": "OOP question 22?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 22",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 475,
        "type": "multiple-choice",
        "question": "OOP question 23?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 23",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 476,
        "type": "multiple-choice",
        "question": "OOP question 24?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 24",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 477,
        "type": "multiple-choice",
        "question": "OOP question 25?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 25",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 478,
        "type": "multiple-choice",
        "question": "OOP question 26?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 26",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 479,
        "type": "multiple-choice",
        "question": "OOP question 27?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 27",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 480,
        "type": "multiple-choice",
        "question": "OOP question 28?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 28",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 481,
        "type": "multiple-choice",
        "question": "OOP question 29?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 29",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 482,
        "type": "multiple-choice",
        "question": "OOP question 30?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 30",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 483,
        "type": "multiple-choice",
        "question": "OOP question 31?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 31",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 484,
        "type": "multiple-choice",
        "question": "OOP question 32?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 32",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 485,
        "type": "multiple-choice",
        "question": "OOP question 33?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 33",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 486,
        "type": "multiple-choice",
        "question": "OOP question 34?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 34",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 487,
        "type": "multiple-choice",
        "question": "OOP question 35?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 35",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 488,
        "type": "multiple-choice",
        "question": "OOP question 36?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 36",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 489,
        "type": "multiple-choice",
        "question": "OOP question 37?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 37",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 490,
        "type": "multiple-choice",
        "question": "OOP question 38?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 38",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 491,
        "type": "multiple-choice",
        "question": "OOP question 39?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 39",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 492,
        "type": "multiple-choice",
        "question": "OOP question 40?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 40",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 493,
        "type": "multiple-choice",
        "question": "OOP question 41?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 41",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 494,
        "type": "multiple-choice",
        "question": "OOP question 42?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 42",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 495,
        "type": "multiple-choice",
        "question": "OOP question 43?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 43",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 496,
        "type": "multiple-choice",
        "question": "OOP question 44?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 44",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 497,
        "type": "multiple-choice",
        "question": "OOP question 45?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 45",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 498,
        "type": "multiple-choice",
        "question": "OOP question 46?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 46",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 499,
        "type": "multiple-choice",
        "question": "OOP question 47?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 47",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 500,
        "type": "multiple-choice",
        "question": "OOP question 48?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 48",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 501,
        "type": "multiple-choice",
        "question": "OOP question 49?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 49",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 502,
        "type": "multiple-choice",
        "question": "OOP question 50?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 50",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 503,
        "type": "multiple-choice",
        "question": "OOP question 51?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 51",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 504,
        "type": "multiple-choice",
        "question": "OOP question 52?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 52",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 505,
        "type": "multiple-choice",
        "question": "OOP question 53?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 53",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 506,
        "type": "multiple-choice",
        "question": "OOP question 54?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 54",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 507,
        "type": "multiple-choice",
        "question": "OOP question 55?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 55",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 508,
        "type": "multiple-choice",
        "question": "OOP question 56?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 56",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 509,
        "type": "multiple-choice",
        "question": "OOP question 57?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 57",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 510,
        "type": "multiple-choice",
        "question": "OOP question 58?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 58",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 511,
        "type": "multiple-choice",
        "question": "OOP question 59?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 59",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 512,
        "type": "multiple-choice",
        "question": "OOP question 60?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 60",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 513,
        "type": "multiple-choice",
        "question": "OOP question 61?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 61",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 514,
        "type": "multiple-choice",
        "question": "OOP question 62?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 62",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 515,
        "type": "multiple-choice",
        "question": "OOP question 63?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 63",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 516,
        "type": "multiple-choice",
        "question": "OOP question 64?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 64",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 517,
        "type": "multiple-choice",
        "question": "OOP question 65?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 65",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 518,
        "type": "multiple-choice",
        "question": "OOP question 66?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 66",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 519,
        "type": "multiple-choice",
        "question": "OOP question 67?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 67",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 520,
        "type": "multiple-choice",
        "question": "OOP question 68?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 68",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 521,
        "type": "multiple-choice",
        "question": "OOP question 69?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 69",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 522,
        "type": "multiple-choice",
        "question": "OOP question 70?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 70",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 523,
        "type": "multiple-choice",
        "question": "OOP question 71?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 71",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 524,
        "type": "multiple-choice",
        "question": "OOP question 72?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 72",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 525,
        "type": "multiple-choice",
        "question": "OOP question 73?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 73",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 526,
        "type": "multiple-choice",
        "question": "OOP question 74?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 74",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 527,
        "type": "multiple-choice",
        "question": "OOP question 75?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 75",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 528,
        "type": "multiple-choice",
        "question": "OOP question 76?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 76",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 529,
        "type": "multiple-choice",
        "question": "OOP question 77?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 77",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 530,
        "type": "multiple-choice",
        "question": "OOP question 78?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 78",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 531,
        "type": "multiple-choice",
        "question": "OOP question 79?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 79",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 532,
        "type": "multiple-choice",
        "question": "OOP question 80?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 80",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 533,
        "type": "multiple-choice",
        "question": "OOP question 81?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 81",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 534,
        "type": "multiple-choice",
        "question": "OOP question 82?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 82",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 535,
        "type": "multiple-choice",
        "question": "OOP question 83?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 83",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 536,
        "type": "multiple-choice",
        "question": "OOP question 84?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 84",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 537,
        "type": "multiple-choice",
        "question": "OOP question 85?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 85",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 538,
        "type": "multiple-choice",
        "question": "OOP question 86?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 86",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 539,
        "type": "multiple-choice",
        "question": "OOP question 87?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 87",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 540,
        "type": "multiple-choice",
        "question": "OOP question 88?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 88",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 541,
        "type": "multiple-choice",
        "question": "OOP question 89?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 89",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 542,
        "type": "multiple-choice",
        "question": "OOP question 90?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 90",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 543,
        "type": "multiple-choice",
        "question": "OOP question 91?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 91",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 544,
        "type": "multiple-choice",
        "question": "OOP question 92?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 92",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 545,
        "type": "multiple-choice",
        "question": "OOP question 93?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 93",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 546,
        "type": "multiple-choice",
        "question": "OOP question 94?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 94",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 547,
        "type": "multiple-choice",
        "question": "OOP question 95?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 95",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 548,
        "type": "multiple-choice",
        "question": "OOP question 96?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 96",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 549,
        "type": "multiple-choice",
        "question": "OOP question 97?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 97",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 550,
        "type": "multiple-choice",
        "question": "OOP question 98?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 98",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 551,
        "type": "multiple-choice",
        "question": "OOP question 99?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 99",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 552,
        "type": "multiple-choice",
        "question": "OOP question 100?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 100",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 553,
        "type": "multiple-choice",
        "question": "OOP question 101?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 101",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 554,
        "type": "multiple-choice",
        "question": "OOP question 102?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 102",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 555,
        "type": "multiple-choice",
        "question": "OOP question 103?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 103",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 556,
        "type": "multiple-choice",
        "question": "OOP question 104?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 104",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 557,
        "type": "multiple-choice",
        "question": "OOP question 105?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 105",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 558,
        "type": "multiple-choice",
        "question": "OOP question 106?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 106",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 559,
        "type": "multiple-choice",
        "question": "OOP question 107?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 107",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 560,
        "type": "multiple-choice",
        "question": "OOP question 108?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 108",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 561,
        "type": "multiple-choice",
        "question": "OOP question 109?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 109",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 562,
        "type": "multiple-choice",
        "question": "OOP question 110?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 110",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 563,
        "type": "multiple-choice",
        "question": "OOP question 111?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 111",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 564,
        "type": "multiple-choice",
        "question": "OOP question 112?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 112",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 565,
        "type": "multiple-choice",
        "question": "OOP question 113?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 113",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 566,
        "type": "multiple-choice",
        "question": "OOP question 114?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 114",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 567,
        "type": "multiple-choice",
        "question": "OOP question 115?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 115",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 568,
        "type": "multiple-choice",
        "question": "OOP question 116?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 116",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 569,
        "type": "multiple-choice",
        "question": "OOP question 117?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 117",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 570,
        "type": "multiple-choice",
        "question": "OOP question 118?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 118",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 571,
        "type": "multiple-choice",
        "question": "OOP question 119?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 119",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 572,
        "type": "multiple-choice",
        "question": "OOP question 120?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 120",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 573,
        "type": "multiple-choice",
        "question": "OOP question 121?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 121",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 574,
        "type": "multiple-choice",
        "question": "OOP question 122?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 122",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 575,
        "type": "multiple-choice",
        "question": "OOP question 123?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 123",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 576,
        "type": "multiple-choice",
        "question": "OOP question 124?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 124",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 577,
        "type": "multiple-choice",
        "question": "OOP question 125?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 125",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 578,
        "type": "multiple-choice",
        "question": "OOP question 126?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 126",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 579,
        "type": "multiple-choice",
        "question": "OOP question 127?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 127",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 580,
        "type": "multiple-choice",
        "question": "OOP question 128?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 128",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 581,
        "type": "multiple-choice",
        "question": "OOP question 129?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 129",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 582,
        "type": "multiple-choice",
        "question": "OOP question 130?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 130",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 583,
        "type": "multiple-choice",
        "question": "OOP question 131?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 131",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 584,
        "type": "multiple-choice",
        "question": "OOP question 132?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 132",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 585,
        "type": "multiple-choice",
        "question": "OOP question 133?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 133",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 586,
        "type": "multiple-choice",
        "question": "OOP question 134?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 134",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 587,
        "type": "multiple-choice",
        "question": "OOP question 135?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 135",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 588,
        "type": "multiple-choice",
        "question": "OOP question 136?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for OOP question 136",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 589,
        "type": "multiple-choice",
        "question": "OOP question 137?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for OOP question 137",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 590,
        "type": "multiple-choice",
        "question": "OOP question 138?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for OOP question 138",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 591,
        "type": "multiple-choice",
        "question": "OOP question 139?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 139",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 592,
        "type": "multiple-choice",
        "question": "OOP question 140?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for OOP question 140",
        "category": "Object-Oriented Programming"
    },
    {
        "id": 593,
        "type": "multiple-choice",
        "question": "What is a generator?",
        "options": [
            "Function with yield",
            "Function with return",
            "Class",
            "Variable"
        ],
        "correctAnswer": 0,
        "explanation": "Generator uses yield",
        "category": "Generators & Iterators"
    },
    {
        "id": 594,
        "type": "multiple-choice",
        "question": "What does `yield` do?",
        "options": [
            "Pauses and returns value",
            "Returns and exits",
            "Raises exception",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "yield pauses execution",
        "category": "Generators & Iterators"
    },
    {
        "id": 595,
        "type": "multiple-choice",
        "question": "What is `next()`?",
        "options": [
            "Gets next value from iterator",
            "Gets previous value",
            "Skips value",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "next() advances iterator",
        "category": "Generators & Iterators"
    },
    {
        "id": 596,
        "type": "multiple-choice",
        "question": "What is `iter()`?",
        "options": [
            "Creates iterator",
            "Checks if iterable",
            "Stops iteration",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "iter() creates iterator",
        "category": "Generators & Iterators"
    },
    {
        "id": 597,
        "type": "multiple-choice",
        "question": "What is `StopIteration`?",
        "options": [
            "Exception raised when iterator exhausted",
            "Generator function",
            "Iterator method",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "StopIteration signals end",
        "category": "Generators & Iterators"
    },
    {
        "id": 598,
        "type": "multiple-choice",
        "question": "Generator/iterator question 1?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 1",
        "category": "Generators & Iterators"
    },
    {
        "id": 599,
        "type": "multiple-choice",
        "question": "Generator/iterator question 2?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 2",
        "category": "Generators & Iterators"
    },
    {
        "id": 600,
        "type": "multiple-choice",
        "question": "Generator/iterator question 3?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 3",
        "category": "Generators & Iterators"
    },
    {
        "id": 601,
        "type": "multiple-choice",
        "question": "Generator/iterator question 4?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 4",
        "category": "Generators & Iterators"
    },
    {
        "id": 602,
        "type": "multiple-choice",
        "question": "Generator/iterator question 5?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 5",
        "category": "Generators & Iterators"
    },
    {
        "id": 603,
        "type": "multiple-choice",
        "question": "Generator/iterator question 6?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 6",
        "category": "Generators & Iterators"
    },
    {
        "id": 604,
        "type": "multiple-choice",
        "question": "Generator/iterator question 7?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 7",
        "category": "Generators & Iterators"
    },
    {
        "id": 605,
        "type": "multiple-choice",
        "question": "Generator/iterator question 8?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 8",
        "category": "Generators & Iterators"
    },
    {
        "id": 606,
        "type": "multiple-choice",
        "question": "Generator/iterator question 9?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 9",
        "category": "Generators & Iterators"
    },
    {
        "id": 607,
        "type": "multiple-choice",
        "question": "Generator/iterator question 10?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 10",
        "category": "Generators & Iterators"
    },
    {
        "id": 608,
        "type": "multiple-choice",
        "question": "Generator/iterator question 11?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 11",
        "category": "Generators & Iterators"
    },
    {
        "id": 609,
        "type": "multiple-choice",
        "question": "Generator/iterator question 12?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 12",
        "category": "Generators & Iterators"
    },
    {
        "id": 610,
        "type": "multiple-choice",
        "question": "Generator/iterator question 13?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 13",
        "category": "Generators & Iterators"
    },
    {
        "id": 611,
        "type": "multiple-choice",
        "question": "Generator/iterator question 14?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 14",
        "category": "Generators & Iterators"
    },
    {
        "id": 612,
        "type": "multiple-choice",
        "question": "Generator/iterator question 15?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 15",
        "category": "Generators & Iterators"
    },
    {
        "id": 613,
        "type": "multiple-choice",
        "question": "Generator/iterator question 16?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 16",
        "category": "Generators & Iterators"
    },
    {
        "id": 614,
        "type": "multiple-choice",
        "question": "Generator/iterator question 17?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 17",
        "category": "Generators & Iterators"
    },
    {
        "id": 615,
        "type": "multiple-choice",
        "question": "Generator/iterator question 18?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 18",
        "category": "Generators & Iterators"
    },
    {
        "id": 616,
        "type": "multiple-choice",
        "question": "Generator/iterator question 19?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 19",
        "category": "Generators & Iterators"
    },
    {
        "id": 617,
        "type": "multiple-choice",
        "question": "Generator/iterator question 20?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 20",
        "category": "Generators & Iterators"
    },
    {
        "id": 618,
        "type": "multiple-choice",
        "question": "Generator/iterator question 21?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 21",
        "category": "Generators & Iterators"
    },
    {
        "id": 619,
        "type": "multiple-choice",
        "question": "Generator/iterator question 22?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 22",
        "category": "Generators & Iterators"
    },
    {
        "id": 620,
        "type": "multiple-choice",
        "question": "Generator/iterator question 23?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 23",
        "category": "Generators & Iterators"
    },
    {
        "id": 621,
        "type": "multiple-choice",
        "question": "Generator/iterator question 24?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 24",
        "category": "Generators & Iterators"
    },
    {
        "id": 622,
        "type": "multiple-choice",
        "question": "Generator/iterator question 25?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 25",
        "category": "Generators & Iterators"
    },
    {
        "id": 623,
        "type": "multiple-choice",
        "question": "Generator/iterator question 26?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 26",
        "category": "Generators & Iterators"
    },
    {
        "id": 624,
        "type": "multiple-choice",
        "question": "Generator/iterator question 27?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 27",
        "category": "Generators & Iterators"
    },
    {
        "id": 625,
        "type": "multiple-choice",
        "question": "Generator/iterator question 28?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 28",
        "category": "Generators & Iterators"
    },
    {
        "id": 626,
        "type": "multiple-choice",
        "question": "Generator/iterator question 29?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 29",
        "category": "Generators & Iterators"
    },
    {
        "id": 627,
        "type": "multiple-choice",
        "question": "Generator/iterator question 30?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 30",
        "category": "Generators & Iterators"
    },
    {
        "id": 628,
        "type": "multiple-choice",
        "question": "Generator/iterator question 31?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 31",
        "category": "Generators & Iterators"
    },
    {
        "id": 629,
        "type": "multiple-choice",
        "question": "Generator/iterator question 32?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 32",
        "category": "Generators & Iterators"
    },
    {
        "id": 630,
        "type": "multiple-choice",
        "question": "Generator/iterator question 33?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 33",
        "category": "Generators & Iterators"
    },
    {
        "id": 631,
        "type": "multiple-choice",
        "question": "Generator/iterator question 34?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 34",
        "category": "Generators & Iterators"
    },
    {
        "id": 632,
        "type": "multiple-choice",
        "question": "Generator/iterator question 35?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 35",
        "category": "Generators & Iterators"
    },
    {
        "id": 633,
        "type": "multiple-choice",
        "question": "Generator/iterator question 36?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 36",
        "category": "Generators & Iterators"
    },
    {
        "id": 634,
        "type": "multiple-choice",
        "question": "Generator/iterator question 37?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 37",
        "category": "Generators & Iterators"
    },
    {
        "id": 635,
        "type": "multiple-choice",
        "question": "Generator/iterator question 38?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 38",
        "category": "Generators & Iterators"
    },
    {
        "id": 636,
        "type": "multiple-choice",
        "question": "Generator/iterator question 39?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 39",
        "category": "Generators & Iterators"
    },
    {
        "id": 637,
        "type": "multiple-choice",
        "question": "Generator/iterator question 40?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 40",
        "category": "Generators & Iterators"
    },
    {
        "id": 638,
        "type": "multiple-choice",
        "question": "Generator/iterator question 41?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 41",
        "category": "Generators & Iterators"
    },
    {
        "id": 639,
        "type": "multiple-choice",
        "question": "Generator/iterator question 42?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 42",
        "category": "Generators & Iterators"
    },
    {
        "id": 640,
        "type": "multiple-choice",
        "question": "Generator/iterator question 43?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 43",
        "category": "Generators & Iterators"
    },
    {
        "id": 641,
        "type": "multiple-choice",
        "question": "Generator/iterator question 44?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 44",
        "category": "Generators & Iterators"
    },
    {
        "id": 642,
        "type": "multiple-choice",
        "question": "Generator/iterator question 45?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 45",
        "category": "Generators & Iterators"
    },
    {
        "id": 643,
        "type": "multiple-choice",
        "question": "Generator/iterator question 46?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 46",
        "category": "Generators & Iterators"
    },
    {
        "id": 644,
        "type": "multiple-choice",
        "question": "Generator/iterator question 47?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 47",
        "category": "Generators & Iterators"
    },
    {
        "id": 645,
        "type": "multiple-choice",
        "question": "Generator/iterator question 48?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 48",
        "category": "Generators & Iterators"
    },
    {
        "id": 646,
        "type": "multiple-choice",
        "question": "Generator/iterator question 49?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 49",
        "category": "Generators & Iterators"
    },
    {
        "id": 647,
        "type": "multiple-choice",
        "question": "Generator/iterator question 50?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 50",
        "category": "Generators & Iterators"
    },
    {
        "id": 648,
        "type": "multiple-choice",
        "question": "Generator/iterator question 51?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 51",
        "category": "Generators & Iterators"
    },
    {
        "id": 649,
        "type": "multiple-choice",
        "question": "Generator/iterator question 52?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 52",
        "category": "Generators & Iterators"
    },
    {
        "id": 650,
        "type": "multiple-choice",
        "question": "Generator/iterator question 53?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 53",
        "category": "Generators & Iterators"
    },
    {
        "id": 651,
        "type": "multiple-choice",
        "question": "Generator/iterator question 54?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 54",
        "category": "Generators & Iterators"
    },
    {
        "id": 652,
        "type": "multiple-choice",
        "question": "Generator/iterator question 55?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 55",
        "category": "Generators & Iterators"
    },
    {
        "id": 653,
        "type": "multiple-choice",
        "question": "Generator/iterator question 56?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 56",
        "category": "Generators & Iterators"
    },
    {
        "id": 654,
        "type": "multiple-choice",
        "question": "Generator/iterator question 57?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 57",
        "category": "Generators & Iterators"
    },
    {
        "id": 655,
        "type": "multiple-choice",
        "question": "Generator/iterator question 58?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 58",
        "category": "Generators & Iterators"
    },
    {
        "id": 656,
        "type": "multiple-choice",
        "question": "Generator/iterator question 59?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 59",
        "category": "Generators & Iterators"
    },
    {
        "id": 657,
        "type": "multiple-choice",
        "question": "Generator/iterator question 60?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 60",
        "category": "Generators & Iterators"
    },
    {
        "id": 658,
        "type": "multiple-choice",
        "question": "Generator/iterator question 61?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 61",
        "category": "Generators & Iterators"
    },
    {
        "id": 659,
        "type": "multiple-choice",
        "question": "Generator/iterator question 62?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 62",
        "category": "Generators & Iterators"
    },
    {
        "id": 660,
        "type": "multiple-choice",
        "question": "Generator/iterator question 63?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 63",
        "category": "Generators & Iterators"
    },
    {
        "id": 661,
        "type": "multiple-choice",
        "question": "Generator/iterator question 64?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 64",
        "category": "Generators & Iterators"
    },
    {
        "id": 662,
        "type": "multiple-choice",
        "question": "Generator/iterator question 65?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 65",
        "category": "Generators & Iterators"
    },
    {
        "id": 663,
        "type": "multiple-choice",
        "question": "Generator/iterator question 66?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 66",
        "category": "Generators & Iterators"
    },
    {
        "id": 664,
        "type": "multiple-choice",
        "question": "Generator/iterator question 67?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 67",
        "category": "Generators & Iterators"
    },
    {
        "id": 665,
        "type": "multiple-choice",
        "question": "Generator/iterator question 68?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 68",
        "category": "Generators & Iterators"
    },
    {
        "id": 666,
        "type": "multiple-choice",
        "question": "Generator/iterator question 69?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 69",
        "category": "Generators & Iterators"
    },
    {
        "id": 667,
        "type": "multiple-choice",
        "question": "Generator/iterator question 70?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 70",
        "category": "Generators & Iterators"
    },
    {
        "id": 668,
        "type": "multiple-choice",
        "question": "Generator/iterator question 71?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 71",
        "category": "Generators & Iterators"
    },
    {
        "id": 669,
        "type": "multiple-choice",
        "question": "Generator/iterator question 72?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 72",
        "category": "Generators & Iterators"
    },
    {
        "id": 670,
        "type": "multiple-choice",
        "question": "Generator/iterator question 73?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 73",
        "category": "Generators & Iterators"
    },
    {
        "id": 671,
        "type": "multiple-choice",
        "question": "Generator/iterator question 74?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 74",
        "category": "Generators & Iterators"
    },
    {
        "id": 672,
        "type": "multiple-choice",
        "question": "Generator/iterator question 75?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 75",
        "category": "Generators & Iterators"
    },
    {
        "id": 673,
        "type": "multiple-choice",
        "question": "Generator/iterator question 76?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 76",
        "category": "Generators & Iterators"
    },
    {
        "id": 674,
        "type": "multiple-choice",
        "question": "Generator/iterator question 77?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 77",
        "category": "Generators & Iterators"
    },
    {
        "id": 675,
        "type": "multiple-choice",
        "question": "Generator/iterator question 78?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 78",
        "category": "Generators & Iterators"
    },
    {
        "id": 676,
        "type": "multiple-choice",
        "question": "Generator/iterator question 79?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 79",
        "category": "Generators & Iterators"
    },
    {
        "id": 677,
        "type": "multiple-choice",
        "question": "Generator/iterator question 80?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 80",
        "category": "Generators & Iterators"
    },
    {
        "id": 678,
        "type": "multiple-choice",
        "question": "Generator/iterator question 81?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 81",
        "category": "Generators & Iterators"
    },
    {
        "id": 679,
        "type": "multiple-choice",
        "question": "Generator/iterator question 82?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 82",
        "category": "Generators & Iterators"
    },
    {
        "id": 680,
        "type": "multiple-choice",
        "question": "Generator/iterator question 83?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 83",
        "category": "Generators & Iterators"
    },
    {
        "id": 681,
        "type": "multiple-choice",
        "question": "Generator/iterator question 84?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 84",
        "category": "Generators & Iterators"
    },
    {
        "id": 682,
        "type": "multiple-choice",
        "question": "Generator/iterator question 85?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 85",
        "category": "Generators & Iterators"
    },
    {
        "id": 683,
        "type": "multiple-choice",
        "question": "Generator/iterator question 86?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 86",
        "category": "Generators & Iterators"
    },
    {
        "id": 684,
        "type": "multiple-choice",
        "question": "Generator/iterator question 87?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 87",
        "category": "Generators & Iterators"
    },
    {
        "id": 685,
        "type": "multiple-choice",
        "question": "Generator/iterator question 88?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 88",
        "category": "Generators & Iterators"
    },
    {
        "id": 686,
        "type": "multiple-choice",
        "question": "Generator/iterator question 89?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 89",
        "category": "Generators & Iterators"
    },
    {
        "id": 687,
        "type": "multiple-choice",
        "question": "Generator/iterator question 90?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for generator question 90",
        "category": "Generators & Iterators"
    },
    {
        "id": 688,
        "type": "multiple-choice",
        "question": "Generator/iterator question 91?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for generator question 91",
        "category": "Generators & Iterators"
    },
    {
        "id": 689,
        "type": "multiple-choice",
        "question": "Generator/iterator question 92?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 92",
        "category": "Generators & Iterators"
    },
    {
        "id": 690,
        "type": "multiple-choice",
        "question": "Generator/iterator question 93?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for generator question 93",
        "category": "Generators & Iterators"
    },
    {
        "id": 691,
        "type": "multiple-choice",
        "question": "Generator/iterator question 94?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 94",
        "category": "Generators & Iterators"
    },
    {
        "id": 692,
        "type": "multiple-choice",
        "question": "Generator/iterator question 95?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for generator question 95",
        "category": "Generators & Iterators"
    },
    {
        "id": 693,
        "type": "multiple-choice",
        "question": "What is `try/except`?",
        "options": [
            "Error handling",
            "Loop",
            "Function",
            "Class"
        ],
        "correctAnswer": 0,
        "explanation": "try/except handles exceptions",
        "category": "Exception Handling"
    },
    {
        "id": 694,
        "type": "multiple-choice",
        "question": "What is `finally`?",
        "options": [
            "Always executes",
            "Only on error",
            "Only on success",
            "Never executes"
        ],
        "correctAnswer": 0,
        "explanation": "finally always runs",
        "category": "Exception Handling"
    },
    {
        "id": 695,
        "type": "multiple-choice",
        "question": "What is `raise`?",
        "options": [
            "Raises exception",
            "Catches exception",
            "Ignores error",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "raise throws exception",
        "category": "Exception Handling"
    },
    {
        "id": 696,
        "type": "multiple-choice",
        "question": "What is `assert`?",
        "options": [
            "Raises AssertionError if false",
            "Prints message",
            "Continues execution",
            "Error"
        ],
        "correctAnswer": 0,
        "explanation": "assert checks condition",
        "category": "Exception Handling"
    },
    {
        "id": 697,
        "type": "multiple-choice",
        "question": "What is `Exception`?",
        "options": [
            "Base exception class",
            "Specific error",
            "Function",
            "Variable"
        ],
        "correctAnswer": 0,
        "explanation": "Exception is base class",
        "category": "Exception Handling"
    },
    {
        "id": 698,
        "type": "multiple-choice",
        "question": "Exception handling question 1?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 1",
        "category": "Exception Handling"
    },
    {
        "id": 699,
        "type": "multiple-choice",
        "question": "Exception handling question 2?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 2",
        "category": "Exception Handling"
    },
    {
        "id": 700,
        "type": "multiple-choice",
        "question": "Exception handling question 3?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 3",
        "category": "Exception Handling"
    },
    {
        "id": 701,
        "type": "multiple-choice",
        "question": "Exception handling question 4?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 4",
        "category": "Exception Handling"
    },
    {
        "id": 702,
        "type": "multiple-choice",
        "question": "Exception handling question 5?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 5",
        "category": "Exception Handling"
    },
    {
        "id": 703,
        "type": "multiple-choice",
        "question": "Exception handling question 6?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 6",
        "category": "Exception Handling"
    },
    {
        "id": 704,
        "type": "multiple-choice",
        "question": "Exception handling question 7?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 7",
        "category": "Exception Handling"
    },
    {
        "id": 705,
        "type": "multiple-choice",
        "question": "Exception handling question 8?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 8",
        "category": "Exception Handling"
    },
    {
        "id": 706,
        "type": "multiple-choice",
        "question": "Exception handling question 9?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 9",
        "category": "Exception Handling"
    },
    {
        "id": 707,
        "type": "multiple-choice",
        "question": "Exception handling question 10?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 10",
        "category": "Exception Handling"
    },
    {
        "id": 708,
        "type": "multiple-choice",
        "question": "Exception handling question 11?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 11",
        "category": "Exception Handling"
    },
    {
        "id": 709,
        "type": "multiple-choice",
        "question": "Exception handling question 12?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 12",
        "category": "Exception Handling"
    },
    {
        "id": 710,
        "type": "multiple-choice",
        "question": "Exception handling question 13?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 13",
        "category": "Exception Handling"
    },
    {
        "id": 711,
        "type": "multiple-choice",
        "question": "Exception handling question 14?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 14",
        "category": "Exception Handling"
    },
    {
        "id": 712,
        "type": "multiple-choice",
        "question": "Exception handling question 15?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 15",
        "category": "Exception Handling"
    },
    {
        "id": 713,
        "type": "multiple-choice",
        "question": "Exception handling question 16?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 16",
        "category": "Exception Handling"
    },
    {
        "id": 714,
        "type": "multiple-choice",
        "question": "Exception handling question 17?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 17",
        "category": "Exception Handling"
    },
    {
        "id": 715,
        "type": "multiple-choice",
        "question": "Exception handling question 18?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 18",
        "category": "Exception Handling"
    },
    {
        "id": 716,
        "type": "multiple-choice",
        "question": "Exception handling question 19?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 19",
        "category": "Exception Handling"
    },
    {
        "id": 717,
        "type": "multiple-choice",
        "question": "Exception handling question 20?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 20",
        "category": "Exception Handling"
    },
    {
        "id": 718,
        "type": "multiple-choice",
        "question": "Exception handling question 21?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 21",
        "category": "Exception Handling"
    },
    {
        "id": 719,
        "type": "multiple-choice",
        "question": "Exception handling question 22?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 22",
        "category": "Exception Handling"
    },
    {
        "id": 720,
        "type": "multiple-choice",
        "question": "Exception handling question 23?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 23",
        "category": "Exception Handling"
    },
    {
        "id": 721,
        "type": "multiple-choice",
        "question": "Exception handling question 24?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 24",
        "category": "Exception Handling"
    },
    {
        "id": 722,
        "type": "multiple-choice",
        "question": "Exception handling question 25?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 25",
        "category": "Exception Handling"
    },
    {
        "id": 723,
        "type": "multiple-choice",
        "question": "Exception handling question 26?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 26",
        "category": "Exception Handling"
    },
    {
        "id": 724,
        "type": "multiple-choice",
        "question": "Exception handling question 27?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 27",
        "category": "Exception Handling"
    },
    {
        "id": 725,
        "type": "multiple-choice",
        "question": "Exception handling question 28?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 28",
        "category": "Exception Handling"
    },
    {
        "id": 726,
        "type": "multiple-choice",
        "question": "Exception handling question 29?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 29",
        "category": "Exception Handling"
    },
    {
        "id": 727,
        "type": "multiple-choice",
        "question": "Exception handling question 30?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 30",
        "category": "Exception Handling"
    },
    {
        "id": 728,
        "type": "multiple-choice",
        "question": "Exception handling question 31?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 31",
        "category": "Exception Handling"
    },
    {
        "id": 729,
        "type": "multiple-choice",
        "question": "Exception handling question 32?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 32",
        "category": "Exception Handling"
    },
    {
        "id": 730,
        "type": "multiple-choice",
        "question": "Exception handling question 33?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 33",
        "category": "Exception Handling"
    },
    {
        "id": 731,
        "type": "multiple-choice",
        "question": "Exception handling question 34?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 34",
        "category": "Exception Handling"
    },
    {
        "id": 732,
        "type": "multiple-choice",
        "question": "Exception handling question 35?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 35",
        "category": "Exception Handling"
    },
    {
        "id": 733,
        "type": "multiple-choice",
        "question": "Exception handling question 36?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 36",
        "category": "Exception Handling"
    },
    {
        "id": 734,
        "type": "multiple-choice",
        "question": "Exception handling question 37?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 37",
        "category": "Exception Handling"
    },
    {
        "id": 735,
        "type": "multiple-choice",
        "question": "Exception handling question 38?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 38",
        "category": "Exception Handling"
    },
    {
        "id": 736,
        "type": "multiple-choice",
        "question": "Exception handling question 39?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 39",
        "category": "Exception Handling"
    },
    {
        "id": 737,
        "type": "multiple-choice",
        "question": "Exception handling question 40?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 40",
        "category": "Exception Handling"
    },
    {
        "id": 738,
        "type": "multiple-choice",
        "question": "Exception handling question 41?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 41",
        "category": "Exception Handling"
    },
    {
        "id": 739,
        "type": "multiple-choice",
        "question": "Exception handling question 42?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 42",
        "category": "Exception Handling"
    },
    {
        "id": 740,
        "type": "multiple-choice",
        "question": "Exception handling question 43?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 43",
        "category": "Exception Handling"
    },
    {
        "id": 741,
        "type": "multiple-choice",
        "question": "Exception handling question 44?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 44",
        "category": "Exception Handling"
    },
    {
        "id": 742,
        "type": "multiple-choice",
        "question": "Exception handling question 45?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 45",
        "category": "Exception Handling"
    },
    {
        "id": 743,
        "type": "multiple-choice",
        "question": "Exception handling question 46?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 46",
        "category": "Exception Handling"
    },
    {
        "id": 744,
        "type": "multiple-choice",
        "question": "Exception handling question 47?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 47",
        "category": "Exception Handling"
    },
    {
        "id": 745,
        "type": "multiple-choice",
        "question": "Exception handling question 48?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 48",
        "category": "Exception Handling"
    },
    {
        "id": 746,
        "type": "multiple-choice",
        "question": "Exception handling question 49?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 49",
        "category": "Exception Handling"
    },
    {
        "id": 747,
        "type": "multiple-choice",
        "question": "Exception handling question 50?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 50",
        "category": "Exception Handling"
    },
    {
        "id": 748,
        "type": "multiple-choice",
        "question": "Exception handling question 51?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 51",
        "category": "Exception Handling"
    },
    {
        "id": 749,
        "type": "multiple-choice",
        "question": "Exception handling question 52?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 52",
        "category": "Exception Handling"
    },
    {
        "id": 750,
        "type": "multiple-choice",
        "question": "Exception handling question 53?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 53",
        "category": "Exception Handling"
    },
    {
        "id": 751,
        "type": "multiple-choice",
        "question": "Exception handling question 54?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 54",
        "category": "Exception Handling"
    },
    {
        "id": 752,
        "type": "multiple-choice",
        "question": "Exception handling question 55?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 55",
        "category": "Exception Handling"
    },
    {
        "id": 753,
        "type": "multiple-choice",
        "question": "Exception handling question 56?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 56",
        "category": "Exception Handling"
    },
    {
        "id": 754,
        "type": "multiple-choice",
        "question": "Exception handling question 57?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 57",
        "category": "Exception Handling"
    },
    {
        "id": 755,
        "type": "multiple-choice",
        "question": "Exception handling question 58?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 58",
        "category": "Exception Handling"
    },
    {
        "id": 756,
        "type": "multiple-choice",
        "question": "Exception handling question 59?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 59",
        "category": "Exception Handling"
    },
    {
        "id": 757,
        "type": "multiple-choice",
        "question": "Exception handling question 60?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 60",
        "category": "Exception Handling"
    },
    {
        "id": 758,
        "type": "multiple-choice",
        "question": "Exception handling question 61?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 61",
        "category": "Exception Handling"
    },
    {
        "id": 759,
        "type": "multiple-choice",
        "question": "Exception handling question 62?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 62",
        "category": "Exception Handling"
    },
    {
        "id": 760,
        "type": "multiple-choice",
        "question": "Exception handling question 63?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 63",
        "category": "Exception Handling"
    },
    {
        "id": 761,
        "type": "multiple-choice",
        "question": "Exception handling question 64?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 64",
        "category": "Exception Handling"
    },
    {
        "id": 762,
        "type": "multiple-choice",
        "question": "Exception handling question 65?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 65",
        "category": "Exception Handling"
    },
    {
        "id": 763,
        "type": "multiple-choice",
        "question": "Exception handling question 66?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 66",
        "category": "Exception Handling"
    },
    {
        "id": 764,
        "type": "multiple-choice",
        "question": "Exception handling question 67?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 67",
        "category": "Exception Handling"
    },
    {
        "id": 765,
        "type": "multiple-choice",
        "question": "Exception handling question 68?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 68",
        "category": "Exception Handling"
    },
    {
        "id": 766,
        "type": "multiple-choice",
        "question": "Exception handling question 69?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 69",
        "category": "Exception Handling"
    },
    {
        "id": 767,
        "type": "multiple-choice",
        "question": "Exception handling question 70?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 70",
        "category": "Exception Handling"
    },
    {
        "id": 768,
        "type": "multiple-choice",
        "question": "Exception handling question 71?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 71",
        "category": "Exception Handling"
    },
    {
        "id": 769,
        "type": "multiple-choice",
        "question": "Exception handling question 72?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 72",
        "category": "Exception Handling"
    },
    {
        "id": 770,
        "type": "multiple-choice",
        "question": "Exception handling question 73?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 73",
        "category": "Exception Handling"
    },
    {
        "id": 771,
        "type": "multiple-choice",
        "question": "Exception handling question 74?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 74",
        "category": "Exception Handling"
    },
    {
        "id": 772,
        "type": "multiple-choice",
        "question": "Exception handling question 75?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 75",
        "category": "Exception Handling"
    },
    {
        "id": 773,
        "type": "multiple-choice",
        "question": "Exception handling question 76?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 76",
        "category": "Exception Handling"
    },
    {
        "id": 774,
        "type": "multiple-choice",
        "question": "Exception handling question 77?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 77",
        "category": "Exception Handling"
    },
    {
        "id": 775,
        "type": "multiple-choice",
        "question": "Exception handling question 78?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 78",
        "category": "Exception Handling"
    },
    {
        "id": 776,
        "type": "multiple-choice",
        "question": "Exception handling question 79?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 79",
        "category": "Exception Handling"
    },
    {
        "id": 777,
        "type": "multiple-choice",
        "question": "Exception handling question 80?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 80",
        "category": "Exception Handling"
    },
    {
        "id": 778,
        "type": "multiple-choice",
        "question": "Exception handling question 81?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 81",
        "category": "Exception Handling"
    },
    {
        "id": 779,
        "type": "multiple-choice",
        "question": "Exception handling question 82?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 82",
        "category": "Exception Handling"
    },
    {
        "id": 780,
        "type": "multiple-choice",
        "question": "Exception handling question 83?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 83",
        "category": "Exception Handling"
    },
    {
        "id": 781,
        "type": "multiple-choice",
        "question": "Exception handling question 84?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 84",
        "category": "Exception Handling"
    },
    {
        "id": 782,
        "type": "multiple-choice",
        "question": "Exception handling question 85?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 85",
        "category": "Exception Handling"
    },
    {
        "id": 783,
        "type": "multiple-choice",
        "question": "Exception handling question 86?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 1,
        "explanation": "Explanation for exception question 86",
        "category": "Exception Handling"
    },
    {
        "id": 784,
        "type": "multiple-choice",
        "question": "Exception handling question 87?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 87",
        "category": "Exception Handling"
    },
    {
        "id": 785,
        "type": "multiple-choice",
        "question": "Exception handling question 88?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 88",
        "category": "Exception Handling"
    },
    {
        "id": 786,
        "type": "multiple-choice",
        "question": "Exception handling question 89?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 89",
        "category": "Exception Handling"
    },
    {
        "id": 787,
        "type": "multiple-choice",
        "question": "Exception handling question 90?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 90",
        "category": "Exception Handling"
    },
    {
        "id": 788,
        "type": "multiple-choice",
        "question": "Exception handling question 91?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 2,
        "explanation": "Explanation for exception question 91",
        "category": "Exception Handling"
    },
    {
        "id": 789,
        "type": "multiple-choice",
        "question": "Exception handling question 92?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 92",
        "category": "Exception Handling"
    },
    {
        "id": 790,
        "type": "multiple-choice",
        "question": "Exception handling question 93?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 3,
        "explanation": "Explanation for exception question 93",
        "category": "Exception Handling"
    },
    {
        "id": 791,
        "type": "multiple-choice",
        "question": "Exception handling question 94?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 94",
        "category": "Exception Handling"
    },
    {
        "id": 792,
        "type": "multiple-choice",
        "question": "Exception handling question 95?",
        "options": [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        "correctAnswer": 0,
        "explanation": "Explanation for exception question 95",
        "category": "Exception Handling"
    },
    {
        "id": 793,
        "type": "code-writing",
        "question": "Write a function `fibonacci(n)` that returns the nth Fibonacci number.",
        "testCases": [
            {
                "input": 0,
                "expected": 0
            },
            {
                "input": 1,
                "expected": 1
            },
            {
                "input": 5,
                "expected": 5
            },
            {
                "input": 10,
                "expected": 55
            }
        ],
        "explanation": "Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)",
        "category": "Algorithms"
    },
    {
        "id": 794,
        "type": "code-writing",
        "question": "Write a function `reverse_string(s)` that reverses a string.",
        "testCases": [
            {
                "input": "hello",
                "expected": "olleh"
            },
            {
                "input": "Python",
                "expected": "nohtyP"
            },
            {
                "input": "",
                "expected": ""
            }
        ],
        "explanation": "Reverse using slicing [::-1] or iteration",
        "category": "Algorithms"
    },
    {
        "id": 795,
        "type": "code-writing",
        "question": "Write a function `is_palindrome(s)` that checks if a string is a palindrome.",
        "testCases": [
            {
                "input": "racecar",
                "expected": true
            },
            {
                "input": "hello",
                "expected": false
            },
            {
                "input": "a",
                "expected": true
            }
        ],
        "explanation": "Compare string with its reverse",
        "category": "Algorithms"
    },
    {
        "id": 796,
        "type": "code-writing",
        "question": "Write a function `find_max(numbers)` that finds maximum without using max().",
        "testCases": [
            {
                "input": [
                    1,
                    5,
                    3,
                    9,
                    2
                ],
                "expected": 9
            },
            {
                "input": [
                    -1,
                    -5,
                    -3
                ],
                "expected": -1
            },
            {
                "input": [
                    42
                ],
                "expected": 42
            }
        ],
        "explanation": "Iterate and track maximum",
        "category": "Algorithms"
    },
    {
        "id": 797,
        "type": "code-writing",
        "question": "Write a function `find_min(numbers)` that finds minimum without using min().",
        "testCases": [
            {
                "input": [
                    1,
                    5,
                    3,
                    9,
                    2
                ],
                "expected": 1
            },
            {
                "input": [
                    -1,
                    -5,
                    -3
                ],
                "expected": -5
            },
            {
                "input": [
                    42
                ],
                "expected": 42
            }
        ],
        "explanation": "Iterate and track minimum",
        "category": "Algorithms"
    },
    {
        "id": 798,
        "type": "code-writing",
        "question": "Write a function `count_words(text)` that counts word frequency.",
        "testCases": [
            {
                "input": "hello world hello",
                "expected": {
                    "hello": 2,
                    "world": 1
                }
            }
        ],
        "explanation": "Split and count with dictionary",
        "category": "Algorithms"
    },
    {
        "id": 799,
        "type": "code-writing",
        "question": "Write a function `remove_duplicates(lst)` that removes duplicates preserving order.",
        "testCases": [
            {
                "input": [
                    1,
                    2,
                    2,
                    3,
                    4,
                    4,
                    5
                ],
                "expected": [
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                "input": [
                    "a",
                    "b",
                    "a",
                    "c"
                ],
                "expected": [
                    "a",
                    "b",
                    "c"
                ]
            }
        ],
        "explanation": "Use set or dict.fromkeys()",
        "category": "Algorithms"
    },
    {
        "id": 800,
        "type": "code-writing",
        "question": "Write a function `factorial(n)` that calculates factorial.",
        "testCases": [
            {
                "input": 0,
                "expected": 1
            },
            {
                "input": 1,
                "expected": 1
            },
            {
                "input": 5,
                "expected": 120
            }
        ],
        "explanation": "Factorial: n! = n * (n-1)!",
        "category": "Algorithms"
    },
    {
        "id": 801,
        "type": "code-writing",
        "question": "Write a function `is_prime(n)` that checks if a number is prime.",
        "testCases": [
            {
                "input": 2,
                "expected": true
            },
            {
                "input": 4,
                "expected": false
            },
            {
                "input": 17,
                "expected": true
            }
        ],
        "explanation": "Prime has no divisors except 1 and itself",
        "category": "Algorithms"
    },
    {
        "id": 802,
        "type": "code-writing",
        "question": "Write a function `binary_search(arr, target)` that performs binary search.",
        "testCases": [
            {
                "input": [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    3
                ],
                "expected": 2
            },
            {
                "input": [
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    6
                ],
                "expected": -1
            }
        ],
        "explanation": "Binary search on sorted array",
        "category": "Algorithms"
    },
    {
        "id": 803,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 70
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 804,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 9,
                "expected": 89
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 805,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 9,
                "expected": 89
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 806,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 66
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 807,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 97
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 808,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 10,
                "expected": 21
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 809,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 6,
                "expected": 14
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 810,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 4,
                "expected": 26
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 811,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 2,
                "expected": 49
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 812,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 19
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 813,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 18
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 814,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 9,
                "expected": 54
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 815,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 74
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 816,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 2,
                "expected": 45
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 817,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 21
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 818,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 9,
                "expected": 10
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 819,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 78
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 820,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 5,
                "expected": 45
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 821,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 3,
                "expected": 81
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 822,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 2,
                "expected": 91
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 823,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 8,
                "expected": 63
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 824,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 4,
                "expected": 74
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 825,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 65
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 826,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 8,
                "expected": 54
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 827,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 6,
                "expected": 87
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 828,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 58
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 829,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 59
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 830,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 63
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 831,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 4,
                "expected": 71
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 832,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 1,
                "expected": 100
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 833,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 40
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 834,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 8,
                "expected": 19
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 835,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 1,
                "expected": 37
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 836,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 4,
                "expected": 48
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 837,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 8,
                "expected": 95
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 838,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 89
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 839,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 1,
                "expected": 94
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 840,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 2,
                "expected": 12
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 841,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 48
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 842,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 59
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 843,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 4,
                "expected": 88
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 844,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 1,
                "expected": 45
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 845,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 45
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 846,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 30
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 847,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 5,
                "expected": 53
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 848,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 3,
                "expected": 98
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 849,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 22
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 850,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 4,
                "expected": 33
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 851,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 2,
                "expected": 34
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 852,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 6,
                "expected": 72
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 853,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 1,
                "expected": 83
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 854,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 36
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 855,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 5,
                "expected": 71
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 856,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 1,
                "expected": 48
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 857,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 3,
                "expected": 38
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 858,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 6,
                "expected": 22
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 859,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 8,
                "expected": 81
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 860,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 3,
                "expected": 100
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 861,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 3,
                "expected": 36
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 862,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 37
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 863,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 2,
                "expected": 40
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 864,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 9,
                "expected": 91
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 865,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 6,
                "expected": 94
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 866,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 8,
                "expected": 79
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 867,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 9,
                "expected": 68
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 868,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 2,
                "expected": 26
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 869,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 5,
                "expected": 73
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 870,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 7,
                "expected": 3
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 871,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 2,
                "expected": 91
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 872,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 8,
                "expected": 83
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 873,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 6,
                "expected": 1
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 874,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 7,
                "expected": 13
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 875,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 5,
                "expected": 49
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 876,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 8,
                "expected": 39
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 877,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 3,
                "expected": 75
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 878,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 82
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 879,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 4,
                "expected": 61
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 880,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 5,
                "expected": 51
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 881,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 7,
                "expected": 2
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 882,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 20
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 883,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 2,
                "expected": 83
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 884,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 75
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 885,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 35
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 886,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 7,
                "expected": 78
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 887,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 8,
                "expected": 61
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 888,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 10,
                "expected": 61
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 889,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 6,
                "expected": 32
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 890,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 6,
                "expected": 38
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 891,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 79
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 892,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 52
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 893,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 2,
                "expected": 44
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 894,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 4,
                "expected": 24
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 895,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 2,
                "expected": 38
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 896,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 8,
                "expected": 86
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 897,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 2,
                "expected": 80
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 898,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 10,
                "expected": 40
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 899,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 68
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 900,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 44
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 901,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 4,
                "expected": 63
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 902,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 2,
                "expected": 100
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 903,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 9,
                "expected": 45
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 904,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 3,
                "expected": 55
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 905,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 1,
                "expected": 65
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 906,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 4,
                "expected": 82
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 907,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 95
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 908,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 8,
                "expected": 53
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 909,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 10,
                "expected": 54
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 910,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 5,
                "expected": 18
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 911,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 25
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 912,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 3,
                "expected": 97
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 913,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 7,
                "expected": 54
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 914,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 94
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 915,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 6,
                "expected": 22
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 916,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 1,
                "expected": 18
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 917,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 2,
                "expected": 66
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 918,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 3,
                "expected": 3
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 919,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 2,
                "expected": 65
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 920,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 2,
                "expected": 38
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 921,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 1,
                "expected": 82
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 922,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 9,
                "expected": 66
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 923,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 6,
                "expected": 22
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 924,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 6,
                "expected": 53
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 925,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 1,
                "expected": 32
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 926,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 4,
                "expected": 75
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 927,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 2,
                "expected": 48
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 928,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 5,
                "expected": 46
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 929,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 4,
                "expected": 7
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 930,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 2,
                "expected": 24
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 931,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 5,
                "expected": 47
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 932,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 72
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 933,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 10,
                "expected": 96
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 934,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 90
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 935,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 8,
                "expected": 11
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 936,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 7,
                "expected": 11
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 937,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 9,
                "expected": 31
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 938,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 3,
                "expected": 98
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 939,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 7,
                "expected": 48
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 940,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 6,
                "expected": 24
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 941,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 2,
                "expected": 1
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 942,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 67
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 943,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 3,
                "expected": 100
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 944,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 7,
                "expected": 10
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 945,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 9,
                "expected": 36
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 946,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 8,
                "expected": 15
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 947,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 3
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 948,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 7,
                "expected": 24
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 949,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 69
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 950,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 6,
                "expected": 91
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 951,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 85
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 952,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 5,
                "expected": 1
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 953,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 60
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 954,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 3,
                "expected": 78
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 955,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 4,
                "expected": 58
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 956,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 6,
                "expected": 50
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 957,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 7,
                "expected": 7
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 958,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 7,
                "expected": 18
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 959,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 7,
                "expected": 53
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 960,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 4,
                "expected": 49
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 961,
        "type": "code-writing",
        "question": "Write a function `gcd(...)` that implements gcd.",
        "testCases": [
            {
                "input": 7,
                "expected": 69
            }
        ],
        "explanation": "Implementation of gcd",
        "category": "Algorithms"
    },
    {
        "id": 962,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 8,
                "expected": 83
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 963,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 8,
                "expected": 33
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 964,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 57
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 965,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 9,
                "expected": 58
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 966,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 5,
                "expected": 11
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 967,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 3,
                "expected": 36
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 968,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 9,
                "expected": 40
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 969,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 4,
                "expected": 42
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 970,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 5,
                "expected": 16
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 971,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 4,
                "expected": 75
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 972,
        "type": "code-writing",
        "question": "Write a function `is_odd(...)` that implements is_odd.",
        "testCases": [
            {
                "input": 5,
                "expected": 88
            }
        ],
        "explanation": "Implementation of is_odd",
        "category": "Algorithms"
    },
    {
        "id": 973,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 7,
                "expected": 20
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 974,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 6,
                "expected": 83
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 975,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 24
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 976,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 9,
                "expected": 47
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 977,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 5,
                "expected": 5
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 978,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 6,
                "expected": 73
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 979,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 9,
                "expected": 83
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 980,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 9,
                "expected": 84
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 981,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 7,
                "expected": 37
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 982,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 9,
                "expected": 94
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 983,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 3,
                "expected": 89
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 984,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 10
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 985,
        "type": "code-writing",
        "question": "Write a function `sum_list(...)` that implements sum_list.",
        "testCases": [
            {
                "input": 8,
                "expected": 24
            }
        ],
        "explanation": "Implementation of sum_list",
        "category": "Algorithms"
    },
    {
        "id": 986,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 5,
                "expected": 75
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 987,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 28
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 988,
        "type": "code-writing",
        "question": "Write a function `sqrt(...)` that implements sqrt.",
        "testCases": [
            {
                "input": 5,
                "expected": 48
            }
        ],
        "explanation": "Implementation of sqrt",
        "category": "Algorithms"
    },
    {
        "id": 989,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 85
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 990,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 4,
                "expected": 78
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 991,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 1,
                "expected": 9
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 992,
        "type": "code-writing",
        "question": "Write a function `average(...)` that implements average.",
        "testCases": [
            {
                "input": 1,
                "expected": 97
            }
        ],
        "explanation": "Implementation of average",
        "category": "Algorithms"
    },
    {
        "id": 993,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 5,
                "expected": 28
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 994,
        "type": "code-writing",
        "question": "Write a function `power(...)` that implements power.",
        "testCases": [
            {
                "input": 8,
                "expected": 56
            }
        ],
        "explanation": "Implementation of power",
        "category": "Algorithms"
    },
    {
        "id": 995,
        "type": "code-writing",
        "question": "Write a function `lcm(...)` that implements lcm.",
        "testCases": [
            {
                "input": 1,
                "expected": 47
            }
        ],
        "explanation": "Implementation of lcm",
        "category": "Algorithms"
    },
    {
        "id": 996,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 10,
                "expected": 57
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 997,
        "type": "code-writing",
        "question": "Write a function `reverse_list(...)` that implements reverse_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 38
            }
        ],
        "explanation": "Implementation of reverse_list",
        "category": "Algorithms"
    },
    {
        "id": 998,
        "type": "code-writing",
        "question": "Write a function `is_even(...)` that implements is_even.",
        "testCases": [
            {
                "input": 4,
                "expected": 37
            }
        ],
        "explanation": "Implementation of is_even",
        "category": "Algorithms"
    },
    {
        "id": 999,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 7,
                "expected": 17
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    },
    {
        "id": 1000,
        "type": "code-writing",
        "question": "Write a function `product_list(...)` that implements product_list.",
        "testCases": [
            {
                "input": 2,
                "expected": 57
            }
        ],
        "explanation": "Implementation of product_list",
        "category": "Algorithms"
    }
];