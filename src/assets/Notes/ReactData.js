export default [
    {
        "id": "1",
        "topic": "1. What is React?",
        "content": "React is a JavaScript library for building user interfaces, particularly single-page applications. It lets you build reusable components and manage the state of your application efficiently."
    },
    {
        "id": "2",
        "topic": "2. What is a component in React?",
        "content": "A component in React is a reusable piece of UI that can manage its own state and render dynamic content. Components are the building blocks of a React application."
    },
    {
        "id": "3",
        "topic": "3. What is JSX?",
        "content": "JSX stands for JavaScript XML. It allows you to write HTML directly within JavaScript, making it easier to create and render UI components."
    },
    {
        "id": "4",
        "topic": "4. How do you create a functional component in React?",
        "content": "Functional components are JavaScript functions that return JSX, used to render UI elements.",
        "code": "function Welcome() {\n  return <h1>Hello, World!</h1>;\n}",
        "language": "javascript"
    },
    {
        "id": "5",
        "topic": "5. How do you pass data between components in React?",
        "content": "Data is passed between components using props (short for 'properties'). Props allow you to pass data from a parent component to a child component."
    },
    {
        "id": "6",
        "topic": "6. What is the difference between state and props in React?",
        "content": "Props are read-only data passed to components, while state is mutable data managed within a component, often triggering re-renders when updated."
    },
    {
        "id": "7",
        "topic": "7. How do you set initial state in a functional component?",
        "content": "Use the `useState` hook to create and manage state in a functional component.",
        "code": "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
        "language": "javascript"
    },
    {
        "id": "8",
        "topic": "8. What is the Virtual DOM in React?",
        "content": "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to make updates more efficient by only re-rendering changed elements instead of the entire DOM."
    },
    {
        "id": "9",
        "topic": "9. What is the purpose of `useEffect` in React?",
        "content": "The `useEffect` hook allows you to perform side effects in functional components, such as data fetching or subscriptions. It runs after the component renders."
    },
    {
        "id": "10",
        "topic": "10. How do you handle events in React?",
        "content": "Events in React are handled similarly to standard HTML, but in JSX, they use camelCase (e.g., `onClick`) and functions are passed to event handlers.",
        "code": "<button onClick={handleClick}>Click me</button>",
        "language": "javascript"
    },
    {
        "id": "11",
        "topic": "11. How can you conditionally render elements in React?",
        "content": "You can conditionally render elements using JavaScript conditional operators, like `if` statements or ternary operators, directly in the JSX.",
        "code": "{isLoggedIn ? <Dashboard /> : <Login />}",
        "language": "javascript"
    },
    {
        "id": "12",
        "topic": "12. What are keys in React and why are they important?",
        "content": "Keys are unique identifiers used in lists to help React identify which items have changed. They improve performance and help avoid rendering issues."
    },
    {
        "id": "13",
        "topic": "13. How do you pass functions as props in React?",
        "content": "You can pass functions as props just like any other data. This allows child components to communicate actions back to the parent component.",
        "code": "<ChildComponent onClick={handleClick} />",
        "language": "javascript"
    },
    {
        "id": "14",
        "topic": "14. What is the Context API in React?",
        "content": "The Context API is a way to share global data across components without having to pass props down manually through each level. It is useful for managing app-wide state."
    },
    {
        "id": "15",
        "topic": "15. How does React handle forms and input fields?",
        "content": "React handles form input fields with controlled components, where input values are managed by state. This makes it easy to access and manage input data."
    },
    {
        "id": "16",
        "topic": "16. What is `useRef` and how do you use it?",
        "content": "`useRef` is a React hook that creates a reference to a DOM element or value that persists between renders. It can be used to directly interact with DOM nodes.",
        "code": "const inputRef = useRef();\n<input ref={inputRef} />;",
        "language": "javascript"
    },
    {
        "id": "17",
        "topic": "17. What is React Router?",
        "content": "React Router is a library for adding navigation and routing in React applications, enabling you to define routes and render specific components based on the URL."
    },
    {
        "id": "18",
        "topic": "18. How do you lazy load components in React?",
        "content": "React supports lazy loading of components using `React.lazy()` and `Suspense`. This optimizes loading time by loading components only when needed.",
        "code": "const MyComponent = React.lazy(() => import('./MyComponent'));",
        "language": "javascript"
    },
    {
        "id": "19",
        "topic": "19. What are higher-order components (HOC) in React?",
        "content": "HOCs are functions that take a component as an argument and return a new component. They are used to add reusable functionality to components."
    },
    {
        "id": "20",
        "topic": "20. How can you optimize React performance?",
        "content": "Optimize React performance by using techniques like code splitting, lazy loading, using React.memo, and avoiding unnecessary re-renders by optimizing state usage."
    }
]
