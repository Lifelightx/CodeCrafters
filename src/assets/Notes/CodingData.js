export default [
    {
        "id": "1",
        "topic": "What is `putchar()` used for in C?",
        "content": "`putchar()` is a function in C that outputs a single character to the standard output, usually the console.",
        "code": "putchar('A'); // Outputs: A",
        "language": "c"
    },
    {
        "id": "2",
        "topic": "What does EOF stand for in programming?",
        "content": "EOF stands for 'End of File'. It is a marker used to indicate that there are no more data to read from a file or input stream.",
        "code": "while ((ch = fgetc(file)) != EOF) { putchar(ch); }",
        "language": "c"
    },
    {
        "id": "3",
        "topic": "How does integer division work in C?",
        "content": "In integer division, the result is the quotient without any remainder. For example, dividing 7 by 2 in integer division yields 3, not 3.5.",
        "code": "int result = 7 / 2; // result is 3",
        "language": "c"
    },
    {
        "id": "4",
        "topic": "How can you declare a constant in C?",
        "content": "In C, constants can be declared using the `const` keyword for typed constants, or `#define` for preprocessor constants.",
        "code": "const int MAX_VALUE = 100;  // Using const\n#define PI 3.14  // Using #define",
        "language": "c"
    },
    {
        "id": "5",
        "topic": "What is coercion in programming?",
        "content": "Coercion is the automatic conversion of one data type to another during operations to ensure compatibility.",
        "language": "general"
    },
    {
        "id": "6",
        "topic": "What is casting in programming?",
        "content": "Casting refers to the explicit conversion of one data type to another in programming.",
        "language": "general"
    },
    {
        "id": "7",
        "topic": "What value does an uninitialized automatic variable hold?",
        "content": "An uninitialized automatic variable in C holds an unpredictable (garbage) value.",
        "language": "c"
    },
    {
        "id": "8",
        "topic": "What does truncation mean in integer division?",
        "content": "In integer division, truncation means discarding the decimal portion of the division result, keeping only the integer part.",
        "code": "int result = 7 / 2; // result is 3, with truncation of 0.5",
        "language": "c"
    },
    {
        "id": "9",
        "topic": "Does C provide file access features?",
        "content": "Yes, C provides file access features through functions like `fopen()`, `fclose()`, `fread()`, and `fwrite()` in the `<stdio.h>` library.",
        "language": "c"
    },
    {
        "id": "10",
        "topic": "What is a literal in programming?",
        "content": "A literal is a fixed value written directly in the code, such as numbers, characters, strings, and boolean values.",
        "code": "int num = 42; // Integer literal\nchar c = 'A'; // Character literal",
        "language": "general"
    }
]
