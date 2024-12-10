export default [
    {
      id: "introduction",
      topic: "1. What is JavaScript?",
      content: "JavaScript is a programming language that allows you to implement complex features on web pages. It is used to create interactive web pages, and is an essential part of web applications.",
      code: `// Example JavaScript code
  let greeting = "Hello World!";
  console.log(greeting); // Prints: Hello World!
  `,
      language: "javascript"
    },
    {
      topic: "2. What is a variable?",
      content: "Variables are containers for storing data values. They can be declared using the let keyword, const keyword, or var keyword.",
      code: `let x = 10; //local variable
  const y = 20; //constant variable
  var z = 30; //global variable
  `,
      language: "javascript"
    },
    {
      topic: "3. Data Types",
      content: "Data types are the types of data that can be stored in variables. There are several data types in JavaScript, including strings, numbers, booleans, arrays, and objects.",
      code: `let x = 10; //number
  const y = "Hello"; //string
  var z = true; //boolean
  let a; //undefined
  let b = null; //null
  let c = []; //array
  let d = {}; //object
  `,
      language: "javascript"
    },
    {
      topic: "4. What is an operator?",
      content: "Operators are used to perform operations on variables and values. There are several operators in JavaScript, including arithmetic operators, assignment operators, comparison operators, and logical operators.",
      code: `let x = 10;
  let y = 20;
  let z = x + y; //arithmetic operator
  `,
      language: "javascript"
    },
    {
      id: "5",
      topic: "5. What is a function?",
      content: "Functions are blocks of code that can be called to perform a specific task. They are defined using the function keyword, and can take parameters and return values.",
      code: `function greet(name) {
    console.log("Hello, " + name + "!");
  }
  greet("John"); // Prints: Hello, John!
  `,
      language: "javascript"
    },
    {
      id: "6",
      topic: "6. What is Hoisting?",
      content: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that you can use a variable or function before it is declared in your code.",
      code: `console.log(x); // Prints: undefined 
  var x = 10;
  `,
      language: "javascript"
    },
    {
      id: "7",
      topic: "7. What is the difference between let, const, and var?",
      content: "The let keyword is used to declare a block-scoped local variable. The const keyword is used to declare a block-scoped constant variable. The var keyword is used to declare a global variable or a function-scoped variable.",
      code: `let x = 10; //block-scoped local variable
  const y = 20; //block-scoped constant variable
  var z = 30; //global variable or function-scoped variable
  `,
      language: "javascript"
    },
    {
      id: "8",
      topic: "8. What is an array?",
      content: "Arrays are used to store multiple values in a single variable. They are declared using the let keyword, and can be accessed using the index number of the value you want to access.",
      code: `let x = [1, 2, 3, 4, 5]; //array
  console.log(x[0]); // Prints: 1
  `,
      language: "javascript"
    },
    {
      id: "9",
      topic: "9. What is an object?",
      content: "Objects are used to store multiple values in a single variable. They are declared using the let keyword, and can be accessed using the key value pair.",
      code: `let x = {name: "John", age: 20}; //object
  console.log(x.name); // Prints: John
  `,
      language: "javascript"
    },
    {
      id: "10",
      topic: "10. What is the difference between null and undefined?",
      content: "Null is a value that represents an empty or non-existent value. Undefined is a value that represents a variable that has not been assigned a value.",
      code: `let x = null; //null
  let y; //undefined
  `,
      language: "javascript"
    },
    {
      id: "11",
      topic: "11. What is the difference between == and ===?",
      content: "The == operator is used to compare the value of two variables. The === operator is used to compare the value and type of two variables.",
      code: `let x = 10;
  let y = "10";
  console.log(x == y); // Prints: true
  console.log(x === y); // Prints: false
  `,
      language: "javascript"
    },
    // Additional FAQs for JavaScript interview for freshers and tricky questions
    {
      id: "12",
      topic: "12. What is a closure?",
      content: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.",
      code: `function outer() {
    let x = 10;
    function inner() {
      console.log(x);
    }
    return inner;
  }
  const closure = outer();
  closure(); // Prints: 10
  `,
      language: "javascript"
    },
    {
      id: "13",
      topic: "13. What is the event loop?",
      content: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible.",
      code: `console.log('Start');
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  console.log('End');
  // Prints: Start, End, Timeout
  `,
      language: "javascript"
    },
    {
      id: "14",
      topic: "14. What is the difference between call, apply, and bind?",
      content: "The call method calls a function with a given this value and arguments provided individually. The apply method calls a function with a given this value and arguments provided as an array. The bind method creates a new function that, when called, has its this keyword set to the provided value.",
      code: `function greet() {
    console.log(this.name);
  }
  const person = { name: 'John' };
  greet.call(person); // Prints: John
  greet.apply(person); // Prints: John
  const boundGreet = greet.bind(person);
  boundGreet(); // Prints: John
  `,
      language: "javascript"
    },
    {
      id: "15",
      topic: "15. What is the difference between synchronous and asynchronous code?",
      content: "Synchronous code is executed in sequence, one statement at a time. Asynchronous code is executed out of sequence, allowing other operations to continue before the previous one completes.",
      code: `// Synchronous code
  console.log('Start');
  console.log('End');
  // Prints: Start, End
  
  // Asynchronous code
  console.log('Start');
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  console.log('End');
  // Prints: Start, End, Timeout
  `,
      language: "javascript"
    },
    {
      id: "16",
      topic: "16. What is a promise?",
      content: "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
      code: `const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  });
  promise.then((value) => {
    console.log(value); // Prints: Success
  });
  `,
      language: "javascript"
    },
    {
      id: "17",
      topic: "17. What is async/await?",
      content: "Async/await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a synchronous manner.",
      code: `async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  fetchData();
  `,
      language: "javascript"
    },
    {
      id: "18",
      topic: "18. What is the difference between let and var?",
      content: "The let keyword is used to declare a block-scoped local variable, while the var keyword is used to declare a global variable or a function-scoped variable.",
      code: `if (true) {
    let x = 10;
    var y = 20;
  }
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // Prints: 20
  `,
      language: "javascript"
    },
    {
      id: "19",
      topic: "19. What is the difference between const and let?",
      content: "The const keyword is used to declare a block-scoped constant variable, while the let keyword is used to declare a block-scoped local variable.",
      code: `const x = 10;
  x = 20; // TypeError: Assignment to constant variable.
  let y = 10;
  y = 20; // No error
  `,
      language: "javascript"
    },
    {
      id: "20",
      topic: "20. What is the difference between map and forEach?",
      content: "The map method creates a new array with the results of calling a provided function on every element in the calling array. The forEach method executes a provided function once for each array element.",
      code: `const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled); // Prints: [2, 4, 6, 8, 10]
  numbers.forEach((number) => {
    console.log(number * 2);
  });
  // Prints: 2, 4, 6, 8, 10
  `,
      language: "javascript"
    },
    {
      id: "21",
      topic: "21. What is the difference between slice and splice?",
      content: "The slice method returns a shallow copy of a portion of an array into a new array object. The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
      code: `const numbers = [1, 2, 3, 4, 5];
  const sliced = numbers.slice(1, 3);
  console.log(sliced); // Prints: [2, 3]
  const spliced = numbers.splice(1, 2);
  console.log(spliced); // Prints: [2, 3]
  console.log(numbers); // Prints: [1, 4, 5]
  `,
      language: "javascript"
    },
    {
      id: "22",
      topic: "22. What is the difference between == and ===?",
      content: "The == operator is used to compare the value of two variables. The === operator is used to compare the value and type of two variables.",
      code: `let x = 10;
  let y = "10";
  console.log(x == y); // Prints: true
  console.log(x === y); // Prints: false
  `,
      language: "javascript"
    },
    {
      id: "23",
      topic: "23. What is the difference between null and undefined?",
      content: "Null is a value that represents an empty or non-existent value. Undefined is a value that represents a variable that has not been assigned a value.",
      code: `let x = null; //null
  let y; //undefined
  `,
      language: "javascript"
    },
    {
      id: "24",
      topic: "24. What is the difference between function declaration and function expression?",
      content: "A function declaration defines a named function, while a function expression defines a function as part of a larger expression.",
      code: `function greet() {
    console.log('Hello');
  }
  const greet = function() {
    console.log('Hello');
  };
  `,
      language: "javascript"
    },
    {
      id: "25",
      topic: "25. What is the difference between arrow function and regular function?",
      content: "Arrow functions do not have their own this value and cannot be used as constructors. Regular functions have their own this value and can be used as constructors.",
      code: `const arrowFunction = () => {
    console.log(this);
  };
  function regularFunction() {
    console.log(this);
  }
  arrowFunction(); // Prints: Window or global object
  regularFunction(); // Prints: Window or global object
  `,
      language: "javascript"
    },
    {
      id: "26",
      topic: "26. What is the difference between prototype and __proto__?",
      content: "The prototype is a property of a function that is used to attach properties and methods to an object. The __proto__ is a property of an object that points to the prototype of the constructor function that created the object.",
      code: `function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
  };
  const john = new Person('John');
  john.greet(); // Prints: Hello, John
  console.log(john.__proto__ === Person.prototype); // Prints: true
  `,
      language: "javascript"
    },
    {
      id: "27",
      topic: "27. What is the difference between call, apply, and bind?",
      content: "The call method calls a function with a given this value and arguments provided individually. The apply method calls a function with a given this value and arguments provided as an array. The bind method creates a new function that, when called, has its this keyword set to the provided value.",
      code: `function greet() {
    console.log(this.name);
  }
  const person = { name: 'John' };
  greet.call(person); // Prints: John
  greet.apply(person); // Prints: John
  const boundGreet = greet.bind(person);
  boundGreet(); // Prints: John
  `,
      language: "javascript"
    },
    {
      id: "28",
      topic: "28. What is the difference between synchronous and asynchronous code?",
      content: "Synchronous code is executed in sequence, one statement at a time. Asynchronous code is executed out of sequence, allowing other operations to continue before the previous one completes.",
      code: `// Synchronous code
  console.log('Start');
  console.log('End');
  // Prints: Start, End
  
  // Asynchronous code
  console.log('Start');
  setTimeout(() => {
    console.log('Timeout');
  }, 0);
  console.log('End');
  // Prints: Start, End, Timeout
  `,
      language: "javascript"
    },
    {
      id: "29",
      topic: "29. What is the difference between map and forEach?",
      content: "The map method creates a new array with the results of calling a provided function on every element in the calling array. The forEach method executes a provided function once for each array element.",
      code: `const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled); // Prints: [2, 4, 6, 8, 10]
  numbers.forEach((number) => {
    console.log(number * 2);
  });
  // Prints: 2, 4, 6, 8, 10
  `,
      language: "javascript"
    },
    {
      id: "30",
      topic: "30. What is the difference between slice and splice?",
      content: "The slice method returns a shallow copy of a portion of an array into a new array object. The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements.",
      code: `const numbers = [1, 2, 3, 4, 5];
  const sliced = numbers.slice(1, 3);
  console.log(sliced); // Prints: [2, 3]
  const spliced = numbers.splice(1, 2);
  console.log(spliced); // Prints: [2, 3]
  console.log(numbers); // Prints: [1, 4, 5]
  `,
      language: "javascript"
    },
    // Add more questions as needed up to 60
    {
      id: "31",
      topic: "31. What is hoisting in JavaScript?",
      content: "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. This means that variables and function declarations can be used before they are declared.",
      code: `console.log(x); // Prints: undefined
  var x = 5;
  
  // Function hoisting
  sayHello(); // Prints: Hello!
  function sayHello() {
    console.log('Hello!');
  }`,
      language: "javascript"
    },
    {
      id: "32", 
      topic: "32. What is the difference between undefined and not defined?",
      content: "Undefined means a variable has been declared but has not been assigned a value. Not defined means the variable has not been declared at all.",
      code: `let x;
  console.log(x); // Prints: undefined
  console.log(y); // Throws ReferenceError: y is not defined`,
      language: "javascript"
    },
    {
      id: "33",
      topic: "33. What is NaN?",
      content: "NaN stands for Not a Number. It is a special value that represents an invalid number or failed number operation.",
      code: `console.log('hello' * 3); // Prints: NaN
  console.log(parseInt('hello')); // Prints: NaN
  console.log(isNaN('hello')); // Prints: true`,
      language: "javascript"
    },
    {
      id: "34",
      topic: "34. What is type coercion?",
      content: "Type coercion is the automatic conversion of values from one data type to another when performing operations.",
      code: `console.log(5 + '3'); // Prints: '53'
  console.log('5' - 3); // Prints: 2
  console.log(true + 1); // Prints: 2`,
      language: "javascript"
    },
    {
      id: "35",
      topic: "35. What is the use of typeof operator?",
      content: "The typeof operator returns a string indicating the type of an operand.",
      code: `console.log(typeof 42); // Prints: 'number'
  console.log(typeof 'hello'); // Prints: 'string'
  console.log(typeof true); // Prints: 'boolean'
  console.log(typeof undefined); // Prints: 'undefined'
  console.log(typeof null); // Prints: 'object'`,
      language: "javascript"
    },
    {
      id: "36",
      topic: "36. What is the difference between break and continue?",
      content: "Break statement exits the loop completely, while continue skips the rest of the current iteration and continues with the next iteration.",
      code: `for(let i = 0; i < 5; i++) {
    if(i === 2) break;
    console.log(i);
  } // Prints: 0, 1
  
  for(let i = 0; i < 5; i++) {
    if(i === 2) continue;
    console.log(i);
  } // Prints: 0, 1, 3, 4`,
      language: "javascript"
    },
    {
      id: "37",
      topic: "37. What is the use of parseInt()?",
      content: "parseInt() function parses a string argument and returns an integer of the specified radix or base.",
      code: `console.log(parseInt('123')); // Prints: 123
  console.log(parseInt('12.34')); // Prints: 12
  console.log(parseInt('abc')); // Prints: NaN`,
      language: "javascript"
    },
    {
      id: "38",
      topic: "38. What is the difference between null and 0?",
      content: "Null represents the intentional absence of any object value, while 0 is a number value.",
      code: `console.log(typeof null); // Prints: 'object'
  console.log(typeof 0); // Prints: 'number'
  console.log(null == 0); // Prints: false
  console.log(null === 0); // Prints: false`,
      language: "javascript"
    },
    {
      id: "39",
      topic: "39. What is the use of isNaN()?",
      content: "isNaN() function determines whether a value is NaN (Not a Number) or not.",
      code: `console.log(isNaN(123)); // Prints: false
  console.log(isNaN('hello')); // Prints: true
  console.log(isNaN(NaN)); // Prints: true`,
      language: "javascript"
    },
    {
      id: "40",
      topic: "40. What is the difference between local and global variables?",
      content: "Local variables are declared inside a function and can only be accessed within that function. Global variables are declared outside any function and can be accessed throughout the program.",
      code: `let globalVar = 'I am global';
  
  function test() {
    let localVar = 'I am local';
    console.log(globalVar); // Prints: I am global
    console.log(localVar); // Prints: I am local
  }
  
  console.log(globalVar); // Prints: I am global
  console.log(localVar); // Throws ReferenceError`,
      language: "javascript"
    },
    {
      id: "41",
      topic: "41. What is the use of charAt()?",
      content: "charAt() method returns the character at a specified index in a string.",
      code: `let str = 'Hello';
  console.log(str.charAt(0)); // Prints: 'H'
  console.log(str.charAt(4)); // Prints: 'o'
  console.log(str.charAt(5)); // Prints: ''`,
      language: "javascript"
    },
    {
      id: "42",
      topic: "42. What is the use of indexOf()?",
      content: "indexOf() method returns the first index at which a given element can be found in the array or string.",
      code: `let str = 'Hello World';
  console.log(str.indexOf('o')); // Prints: 4
  console.log(str.indexOf('z')); // Prints: -1`,
      language: "javascript"
    },
    {
      id: "43",
      topic: "43. What is the use of substring()?",
      content: "substring() method returns a subset of a string between one index and another, or through the end of the string.",
      code: `let str = 'Hello World';
  console.log(str.substring(0, 5)); // Prints: 'Hello'
  console.log(str.substring(6)); // Prints: 'World'`,
      language: "javascript"
    },
    {
      id: "44",
      topic: "44. What is the use of toLowerCase() and toUpperCase()?",
      content: "toLowerCase() converts a string to lowercase letters, while toUpperCase() converts a string to uppercase letters.",
      code: `let str = 'Hello World';
  console.log(str.toLowerCase()); // Prints: 'hello world'
  console.log(str.toUpperCase()); // Prints: 'HELLO WORLD'`,
      language: "javascript"
    },
    {
      id: "45",
      topic: "45. What is the use of trim()?",
      content: "trim() method removes whitespace from both ends of a string.",
      code: `let str = '   Hello World   ';
  console.log(str.trim()); // Prints: 'Hello World'`,
      language: "javascript"
    },
    {
      id: "46",
      topic: "46. What is the use of push() and pop()?",
      content: "push() adds elements to the end of an array, while pop() removes the last element from an array.",
      code: `let arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // Prints: [1, 2, 3, 4]
  arr.pop();
  console.log(arr); // Prints: [1, 2, 3]`,
      language: "javascript"
    },
    {
      id: "47",
      topic: "47. What is the use of shift() and unshift()?",
      content: "shift() removes the first element from an array, while unshift() adds elements to the beginning of an array.",
      code: `let arr = [1, 2, 3];
  arr.unshift(0);
  console.log(arr); // Prints: [0, 1, 2, 3]
  arr.shift();
  console.log(arr); // Prints: [1, 2, 3]`,
      language: "javascript"
    },
    {
      id: "48",
      topic: "48. What is the use of concat()?",
      content: "concat() method is used to merge two or more arrays or strings.",
      code: `let arr1 = [1, 2];
  let arr2 = [3, 4];
  console.log(arr1.concat(arr2)); // Prints: [1, 2, 3, 4]
  
  let str1 = 'Hello';
  let str2 = 'World';
  console.log(str1.concat(' ', str2)); // Prints: 'Hello World'`,
      language: "javascript"
    },
    {
      id: "49",
      topic: "49. What is the use of join()?",
      content: "join() method creates and returns a new string by concatenating all elements in an array, separated by a specified separator.",
      code: `let arr = ['Hello', 'World'];
  console.log(arr.join(' ')); // Prints: 'Hello World'
  console.log(arr.join('-')); // Prints: 'Hello-World'`,
      language: "javascript"
    },
    {
      id: "50",
      topic: "50. What is the use of reverse()?",
      content: "reverse() method reverses an array in place and returns the reference to the same array.",
      code: `let arr = [1, 2, 3];
  console.log(arr.reverse()); // Prints: [3, 2, 1]`,
      language: "javascript"
    },
    {
      id: "51", 
      topic: "51. What is the difference between for...in and for...of loops?",
      content: "for...in loops over enumerable property names of an object, while for...of loops over iterable object values.",
      code: `const arr = ['a', 'b', 'c'];
  for (let i in arr) {
      console.log(i); // Prints: "0", "1", "2"
  }
  for (let val of arr) {
      console.log(val); // Prints: "a", "b", "c"
  }`,
      language: "javascript"
    },
    {
      id: "52",
      topic: "52. What is the use of charAt()?",
      content: "charAt() method returns the character at a specified index in a string.",
      code: `const str = 'Hello';
  console.log(str.charAt(0)); // Prints: "H"
  console.log(str.charAt(4)); // Prints: "o"`,
      language: "javascript"
    },
    {
      id: "53",
      topic: "53. What is template literals?",
      content: "Template literals are string literals that allow embedded expressions and multiline strings.",
      code: ``,
      language: ""
    },
    {
      id: "54",
      topic: "54. What is the use of includes()?",
      content: "includes() method determines whether an array or string includes a certain element or substring.",
      code: `const arr = [1, 2, 3];
  console.log(arr.includes(2)); // Prints: true
  const str = 'Hello World';
  console.log(str.includes('World')); // Prints: true`,
      language: "javascript"
    },
    {
      id: "55",
      topic: "55. What is the use of indexOf()?",
      content: "indexOf() method returns the first index at which a given element can be found in the array/string.",
      code: `const arr = ['apple', 'banana', 'orange'];
  console.log(arr.indexOf('banana')); // Prints: 1
  const str = 'Hello World';
  console.log(str.indexOf('o')); // Prints: 4`,
      language: "javascript"
    },
    {
      id: "56",
      topic: "56. What is the difference between substring() and substr()?",
      content: "substring() extracts characters between two indices, while substr() extracts characters from a start index for a specified length.",
      code: `const str = 'Hello World';
  console.log(str.substring(0, 5)); // Prints: "Hello"
  console.log(str.substr(0, 5)); // Prints: "Hello"`,
      language: "javascript"
    },
    {
      id: "57",
      topic: "57. What is the use of Math.random()?",
      content: "Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).",
      code: `console.log(Math.random()); // Prints: random number between 0 and 1
  console.log(Math.floor(Math.random() * 10)); // Prints: random integer from 0 to 9`,
      language: "javascript"
    },
    {
      id: "58",
      topic: "58. What is the use of isNaN()?",
      content: "isNaN() function determines whether a value is NaN (Not a Number).",
      code: `console.log(isNaN('Hello')); // Prints: true
  console.log(isNaN(123)); // Prints: false
  console.log(isNaN(NaN)); // Prints: true`,
      language: "javascript"
    },
    {
      id: "59",
      topic: "59. What is the use of parseFloat()?",
      content: "parseFloat() parses a string argument and returns a floating point number.",
      code: `console.log(parseFloat('3.14')); // Prints: 3.14
  console.log(parseFloat('3.14abc')); // Prints: 3.14
  console.log(parseFloat('abc')); // Prints: NaN`,
      language: "javascript"
    },
    {
      id: "60",
      topic: "60. What is the use of toString()?",
      content: "toString() method returns a string representing the specified object.",
      code: `const num = 123;
  console.log(num.toString()); // Prints: "123"
  const arr = [1, 2, 3];
  console.log(arr.toString()); // Prints: "1,2,3"`,
      language: "javascript"
    },
    {
      id: "61",
      topic: "61. What is type conversion in JavaScript?",
      content: "Type conversion is the process of converting data of one type to another.",
      code: `console.log(Number('123')); // Prints: 123
  console.log(String(123)); // Prints: "123"
  console.log(Boolean(1)); // Prints: true`,
      language: "javascript"
    },
    {
      id: "62",
      topic: "62. What is the use of setTimeout()?",
      content: "setTimeout() executes a function after waiting a specified number of milliseconds.",
      code: `setTimeout(() => {
    console.log('Hello');
  }, 1000); // Prints "Hello" after 1 second`,
      language: "javascript"
    },
    {
      id: "63",
      topic: "63. What is the use of setInterval()?",
      content: "setInterval() repeatedly executes a function with a fixed time delay between each call.",
      code: `setInterval(() => {
    console.log('Hello');
  }, 1000); // Prints "Hello" every second`,
      language: "javascript"
    },
    {
      id: "64",
      topic: "64. What is event bubbling?",
      content: "Event bubbling is the process where an event triggers on the deepest target element, then triggers on its parents in order.",
      code: `<div onclick="alert('div')">
    <button onclick="alert('button')">Click me</button>
  </div>
  // Clicking button alerts "button" then "div"`,
      language: "javascript"
    },
    {
      id: "65",
      topic: "65. What is event delegation?",
      content: "Event delegation is a technique of handling events on parent elements instead of each child element.",
      code: `document.getElementById('parent').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
      console.log('Button clicked');
    }
  });`,
      language: "javascript"
    },
    {
      id: "66",
      topic: "66. What is the use of localStorage?",
      content: "localStorage allows you to store key/value pairs in the browser with no expiration time.",
      code: `localStorage.setItem('name', 'John');
  console.log(localStorage.getItem('name')); // Prints: "John"
  localStorage.removeItem('name');`,
      language: "javascript"
    },
    {
      id: "67",
      topic: "67. What is the use of sessionStorage?",
      content: "sessionStorage is similar to localStorage but data persists only until the browser window is closed.",
      code: `sessionStorage.setItem('name', 'John');
  console.log(sessionStorage.getItem('name')); // Prints: "John"
  sessionStorage.removeItem('name');`,
      language: "javascript"
    },
    {
      id: "68",
      topic: "68. What is JSON?",
      content: "JSON (JavaScript Object Notation) is a lightweight data-interchange format.",
      code: `const obj = {name: 'John', age: 30};
  const jsonStr = JSON.stringify(obj);
  console.log(JSON.parse(jsonStr)); // Prints: {name: "John", age: 30}`,
      language: "javascript"
    },
    {
      id: "69",
      topic: "69. What is the use of try...catch?",
      content: "try...catch statement marks a block of statements to try and specifies a response if an exception is thrown.",
      code: `try {
    nonExistentFunction();
  } catch(error) {
    console.log(error); // Prints: ReferenceError
  }`,
      language: "javascript"
    },
    {
      id: "70",
      topic: "70. What is strict mode in JavaScript?",
      content: "Strict mode makes several changes to normal JavaScript semantics to catch common coding mistakes.",
      code: `'use strict';
  x = 3.14; // Throws error: x is not defined
  function sum(a, a, c) { // Throws error: duplicate parameter name
    return a + a + c;
  }`,
      language: "javascript"
    },
    {
      id:"71",
      topic:"71. What is the use of prompt()?",
      content:"prompt() method displays a dialog with an input field that allows the user to enter data by typing it into the input field.",
      code:`const age = prompt('Enter your age:');
  console.log(age); // Prints: user input`,
      language:"javascript"
    },
    {
      id:"72",
      topic:"72. What is the use of alert()?",
      content:"alert() method displays a dialog with a message and an OK button.",
      code:`alert('Hello, world!');`,
      language:"javascript"
    },
    {
      id:"73",
      topic:"73. How many types of functions are there in JavaScript?",
      content:"There are two types of functions in JavaScript: named functions and anonymous functions.",
      code:`function greet(name) {
    return 'Hello, ' + name;
  }
  const greet = function(name) {
    return 'Hello, ' + name;
  };`,
      language:"javascript"
    },
    {
      id:"74",
      topic:"74. What is the use of return statement in a function?",
      content:"The return statement is used to return a value from a function.",
      code:`function add(a, b) {
    return a + b;
  }`,
      language:"javascript"
    },
    {
      id:"75",
      topic:"75. What is the difference between parameters and arguments?",
      content:"Parameters are the names listed in the function's definition, while arguments are the real values passed to the function.",
      code:`function greet(name) {
    // name is a parameter
  }
  greet('John'); // 'John' is an argument`,
      language:"javascript"
    },
    {
      id:"76",
      topic:"76. What is the use of arguments object?",
      content:"The arguments object is an array-like object accessible inside functions that contains the values of the arguments passed to the function.",
      code:`function sum() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }`,
      language:"javascript"
    },
    {
      id:"77",
      topic:"77. What is the use of this keyword?",
      content:"The this keyword refers to the current object in a method or constructor.",
      code:`const person = {
    name: 'John',
    greet: function() {
      return 'Hello, ' + this.name;
    }
  };`,
      language:"javascript"
    },
    {
      id:"78",
      topic:"78. What is the use of call() and apply()?",
      content:"call() and apply() methods are used to invoke a function with a specified object as the context.",
      code:`const person1 = {name: 'John'};
  const person2 = {name: 'Jane'};
  function greet(name) {
    return 'Hello, ' + name;
  }
  console.log(greet.call(person1)); // Prints: Hello, John
  console.log(greet.apply(person2)); // Prints: Hello, Jane`,
      language:"javascript"
    },
    {
      id:"79",
      topic:"79. What is an event?",
      content:"An event is a signal that something has happened.",
      code:`document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked');
  });`,
      language:"javascript"
    },
    {
      id:"80",
      topic:"80. What is HTML DOM?",
      content:"HTML DOM is the Document Object Model of HTML. It represents the document as a tree structure. ",
      code:`document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked');
  });`,
      language:"javascript"
    },
    {
      id:"81",
      topic:"81. What is the use of delete operator?",
      content:"The delete operator is used to delete a property from an object.",
      code:`const person = {
    name: 'John',
    age: 30
  };
  delete person.age; // Removes the age property from the person object`,
      language:"javascript"
    },
    {
      id:"82",
      topic:"82. What is the difference between localStorage and sessionStorage?",
      content:"localStorage and sessionStorage are similar, but localStorage data has no expiration time, while sessionStorage data is cleared when the page session ends.",
      code:`localStorage.setItem('name', 'John');
  sessionStorage.setItem('name', 'John');`,
      language:"javascript"
    }    
];