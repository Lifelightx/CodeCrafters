export default [
    {
        id: "1",
        topic: "1. What is Node Js and its features?",
        content: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. It is used to build scalable network applications. ",
        code: "console.log('Hello, World!');",
        language: "javascript",
      },
      {
        id: "2", 
        topic: "2. What is the event loop in Node Js?",
        content: "The event loop is the core of Node.js that allows it to perform non-blocking I/O operations. It is a loop that waits for new events to occur and then executes the corresponding event handlers. The event loop is responsible for handling all the asynchronous operations in Node.js.",
        code: `// Example of event loop with setTimeout
  console.log('Start');
  
  setTimeout(() => {
    console.log('Timer 1 finished'); // This will be executed after 2 seconds
  }, 2000);
  
  setTimeout(() => {
    console.log('Timer 2 finished'); // This will be executed after 0 seconds
  }, 0);
  
  console.log('End');
  
  // Output:
  // Start
  // End 
  // Timer 2 finished
  // Timer 1 finished`,
        language: "javascript",
      },
      {
        id: "3",
        topic:"3. How does Node js handle asynchronous operations?",
        content:"Asynchronous operations in Node.js are handled using callbacks and promises. Callbacks are functions that are passed as arguments to other functions and are executed once the function has completed its task. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow for more readable and manageable code.",
        code: `// Example of asynchronous operation with callbacks
  function fetchData(callback) {
    setTimeout(() => {
      callback('Data fetched successfully');
    }, 2000);
  }
  
  fetchData((data) => {
    console.log(data);
  });`,
        language: "javascript",
      },{
        id: "4",
        topic:"4. How do you manage packages in Node Js?",
        content:"In Node.js, packages are managed using the npm (Node Package Manager) tool. npm is a package manager for Node.js that allows developers to install, update, and uninstall packages. Packages are collections of code that can be used to add functionality to Node.js applications.",
        code: "",
        language: "javascript",
      },
      {
        id: "5",
        topic:"5. What is the purpose of the package.json file in Node Js?",
        content:"The package.json file is a configuration file for Node.js projects. It contains metadata about the project, such as the project name, version, and dependencies. It is used to manage the project's dependencies and to define the project's entry points.",
        code: "",
        language: "javascript",
      },{
        id: "6",
        topic:"6. How do you install and use npm packages?",
        content:"To install an npm package, you can use the npm install command followed by the package name. For example, to install the express package, you would use the command npm install express. To use an npm package, you need to import it into your code using the require function. For example, to import the express package, you would use the command const express = require('express');.",
        code: "",
        language: "javascript",
      },
      {
        id: "7",
        topic:"7. How do you create a Node.js server?",
        content:"To create a Node.js server, you can use the http module. The http module provides a way to create an HTTP server that can listen for incoming requests and send responses. To create a server, you need to create an HTTP server object using the http.createServer function and specify a port to listen on.",
        code: `const http = require('http');
  
  const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response
    res.end('Hello World!');
  });
  
  // Server listens on port 3000
  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });`,
        language: "javascript",
      },
      {
        id: "8",
        topic:"8. What are the different types of middleware in Node Js?",
        content:"Middleware is functions that are used to process requests and responses in Node.js. There are several types of middleware, including request middleware, response middleware, and error middleware. Request middleware is used to process incoming requests, response middleware is used to process outgoing responses, and error middleware is used to handle errors.",
        code: "",
        language: "javascript",
      },
      {
        id: "9",
        topic:"9. How do you handle errors in Node Js?",
        content:"Errors in Node.js are handled using the try-catch statement. The try block contains the code that may throw an error, and the catch block contains the code that will be executed if an error occurs. For example, to handle an error in a function, you would use the command try { functionName(); } catch (error) { console.error(error); }.",
        code: "",
        language: "javascript",
      },
      {
        id: "10",
        topic:"10. How do you handle asynchronous code in Node Js?",
        content:"Asynchronous code in Node.js is handled using callbacks and promises. Callbacks are functions that are passed as arguments to other functions and are executed once the function has completed its task. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow for more readable and manageable code.",
        code: "",
        language: "javascript",
      },{
        id: "11",
        topic:"11.  What are streams in Node Js?",
        content:"Streams are a way to handle data in Node.js. They are used to read and write data in a continuous manner, without blocking the main thread. Streams are used for reading and writing large amounts of data, such as files or network data.",
        code: "",
        language: "javascript",
      },
      {
        id: "12",
        topic:"12. What is the purpose of buffer class in Node Js?",
        content:"The buffer class in Node.js is used to handle binary data. It provides a way to store and manipulate binary data, such as reading and writing files or network data.",
        code: "",
        language: "javascript",
      },
      {
        id: "13",
        topic:"13. What are status codes in Node Js?",
        content:"Status codes are used to indicate the result of an HTTP request. They are used to indicate whether a request was successful or not, and to provide more information about the result.",
        code: "",
        language: "javascript",
      },
      {
        id: "14",
        topic:"14. How do you handle file operations in Node Js?",
        content:"File operations in Node.js are handled using the fs module. The fs module provides a way to read and write files, as well as to perform other file-related operations like creating directories, checking file status, and deleting files.",
        code:`// Reading a file
  const fs = require('fs');
  
  // Synchronous read
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
  
  // Asynchronous read
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  
  // Writing to a file
  fs.writeFile('newFile.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
  
  // Append to a file
  fs.appendFile('file.txt', 'New content', (err) => {
    if (err) throw err;
    console.log('Content appended');
  });`,
        language: "javascript",
      },
      {
        id: "15",
        topic:"15. How do you handle events in Node Js?",
        content:"Events in Node.js are handled using the events module. The events module provides a way to handle events, such as when a file is read or written. Events are used to handle asynchronous operations, such as reading and writing files or network data.",
        code: "",
        language: "javascript",
      },
      {
        id: "16",
        topic:"16. What is the purpose of the cluster module in Node Js?",
        content:"The cluster module in Node.js is used to create a cluster of worker processes. A cluster is a group of Node.js processes that can run on multiple CPU cores, allowing for more efficient use of resources and improved performance.",
        code: "",
        language: "javascript",
      },
      {
        id: "17",
        topic:"17. How do you secure Node Js applications?",
        content:"Securing Node.js applications is important to protect against security threats. There are several ways to secure Node.js applications, including using HTTPS, validating user input, and using security best practices.",
        code: "",
        language: "javascript",
      },
      {
        id: "18",
        topic:"18. What is the purpose of the child_process module in Node Js?",
        content:"The child_process module in Node.js is used to create child processes. A child process is a separate instance of a Node.js application that can run on the same machine or on a different machine.",
        code: "",
        language: "javascript",
      },
      {
        id: "19",
        topic:"19. What is the purpose of the dns module in Node Js?",
        content:"The dns module in Node.js is used to resolve domain names to IP addresses. It provides a way to perform DNS lookups, such as looking up the IP address of a domain name.",
        code: "",
        language: "javascript",
      },
      {
        id: "20",
        topic:"20. What is the purpose of the http2 module in Node Js?",
        content:"The http2 module in Node.js is used to create HTTP/2 servers and clients. HTTP/2 is a protocol for transmitting data over the internet, and it provides a more efficient and secure way to transmit data than HTTP/1.1.",
        code: "",
        language: "javascript",
      },
      {
        id: "21",
        topic:"21. How do you implement authentication in Node Js?",
        content:"Authentication can be implemented using JWT(Json Web Token). OAuth or session based strategies with libraries like passport.js",
        code: "",
        language: "javascript",
      },
      {
        id: "22",
        topic:"22. What is the purpose of the https module in Node Js?",
        content:"The https module in Node.js is used to create HTTPS servers and clients. HTTPS is a protocol for transmitting data over the internet, and it provides a more secure way to transmit data than HTTP.",
        code: "",
        language: "javascript",
      },
      {
        id: "23",
        topic:"23. What is the purpose of the zlib module in Node Js?",
        content:"The zlib module in Node.js is used to compress and decompress data. It provides a way to compress and decompress data, such as files or network data.",
        code: "",
        language: "javascript",
      },
      {
        id: "24",
        topic:"24. What is the purpose of the vm module in Node Js?",
        content:"The vm module in Node.js is used to create virtual machines. A virtual machine is a separate instance of a Node.js application that can run on the same machine or on a different machine.",
        code: "",
        language: "javascript",
      },
      {
        id: "25",
        topic:"25. What is the purpose of the tls module in Node Js?",
        content:"The tls module in Node.js is used to create TLS servers and clients. TLS is a protocol for transmitting data over the internet, and it provides a more secure way to transmit data than HTTP.",
        code: "",
        language: "javascript", 
      },
      {
        id: "26",
        topic:"26. What is the purpose of the net module in Node Js?",
        content:"The net module in Node.js is used to create TCP servers and clients. TCP is a protocol for transmitting data over the internet, and it provides a more efficient way to transmit data than HTTP.",
        code: "",
        language: "javascript",
      },
      {
        id: "27",
        topic:"27. What is the purpose of the path module in Node Js?",
        content:"The path module in Node.js is used to handle file paths. It provides a way to handle file paths, such as getting the file extension or the directory name of a file.",
        code: "",
        language: "javascript",
      },
      {
        id:"28",
        topic:"Why is Node Js single threaded?",
        content:"Node.js is single-threaded because it uses an event-driven, non-blocking I/O model. This means that Node.js can handle multiple requests concurrently without blocking the main thread, allowing for more efficient use of resources and improved performance.",
        code: "",
        language: "javascript",
      },
      {
        id:"29",
        topic:"What is npm and why it is important?",
        content:"npm is a package manager for Node.js that allows developers to install, update, and uninstall packages. It is used to manage the project's dependencies and to define the project's entry points.",
        code: "",
        language: "javascript",
      },
      {
        id:"30",
        topic:"What is a module in Node Js?",
        content:"A module is a reusable piece of code that can be used in a Node.js application. Modules are used to organize code and to make it more reusable and easier to maintain.",
        code: "",
        language: "javascript",
      },
      {
        id:"31",
        topic:"What is Express js and how it is related to Node Js?",
        content:"Express.js is a web framework for Node.js that provides a set of tools and features for building web applications. It is built on top of the HTTP module and provides a more convenient and easier way to handle HTTP requests and responses.",
        code: "",
        language: "javascript",
      },
      {
        id:"32",
        topic:"What is REST, and how do you create REST API in Node Js?",
        content:"REST (Representational State Transfer) is a web architecture style that defines a set of constraints and principles for building web services. REST APIs are used to create web services that can be accessed over the internet.",
        code: "",
        language: "javascript",
      },
      {
        id:"33",
        topic:"How do you work with databases in Node Js?",
        content:"Databases in Node.js are typically managed using the MongoDB driver. The MongoDB driver provides a way to connect to a MongoDB database and perform various operations, such as inserting, updating, and querying data.",
        code: "",
        language: "javascript",
      },
      {
        id:"34",
        topic:"What is the purpose of the crypto module in Node Js?",
        content:"The crypto module in Node.js is used to handle cryptographic operations, such as generating random numbers, hashing data, and encrypting and decrypting data.",
        code: "",
        language: "javascript",
      },
      {
        id:"35",
        topic:"What is the difference between process.nextTick() and setTimeout()?",
        content:"process.nextTick() is used to schedule a callback function to be executed after the current operation completes, while setTimeout() is used to schedule a callback function to be executed after a specified delay.",
        code: "",
        language: "javascript",
      },
      {
        id:"36",
        topic:"What is the purpose of the readline module in Node Js?",
        content:"The readline module in Node.js is used to handle input and output from the console. It provides a way to read and write data from the console, such as reading user input and displaying output.",
        code: "",
        language: "javascript",
      },
]