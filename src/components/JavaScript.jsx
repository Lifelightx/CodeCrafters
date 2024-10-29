import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'

const sectionsData = [
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
];

function JavaScript() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 fixed h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">JavaScript Topics</h2>
        <ul className="space-y-2">
          <Topics name='Introduction'/>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-4 ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn JavaScript</h1>
        {sectionsData.map((section, index) => (
          <Section
            key={index}
            id={section.id}
            topic={section.topic}
            content={section.content}
            code={section.code}
            language={section.language}
          />
        ))}
       
        <Footer/>
      </div>
    </div>
  )
}

export default JavaScript
