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
        "language": "jsx"
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
        "language": "jsx"
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
        "language": "jsx"
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
    },
    {
        "id": "21",
        "topic": "21. What is a Pure Component in React?",
        "content": "A Pure Component in React is a component that implements `shouldComponentUpdate()` with a shallow comparison of props and state. It prevents unnecessary re-renders by comparing current and previous props/state."
    },
    {
        "id": "22",
        "topic": "22. How do you handle errors in React components?",
        "content": "React provides error boundaries to catch JavaScript errors in component trees. Error boundaries are React components that implement `componentDidCatch` and `getDerivedStateFromError` to handle errors gracefully."
    },
    {
        "id": "23",
        "topic": "23. What is React.memo and when should it be used?",
        "content": "`React.memo` is a higher-order component that wraps functional components to prevent re-rendering unless props change. It's useful for optimizing performance by avoiding unnecessary renders."
    },
    {
        "id": "24",
        "topic": "24. Explain Prop Drilling and how to avoid it.",
        "content": "Prop Drilling is the practice of passing props through multiple component levels to reach a deeply nested component. It's often avoided using the Context API or state management libraries like Redux."
    },
    {
        "id": "25",
        "topic": "25. What is React.StrictMode?",
        "content": "React.StrictMode is a tool for highlighting potential problems in an application. It performs additional checks and warnings for its descendants in development mode to promote best practices."
    },
    {
        "id": "26",
        "topic": "26. How can you fetch data in React?",
        "content": "Data can be fetched using `useEffect` with async functions, or libraries like Axios, Fetch API, and React Query for handling server state and managing asynchronous data fetching."
    },
    {
        "id": "27",
        "topic": "27. What are controlled and uncontrolled components?",
        "content": "Controlled components have form elements whose values are controlled by React state, while uncontrolled components rely on the DOM for their current values, accessed via `useRef`."
    },
    {
        "id": "28",
        "topic": "28. How do you optimize React apps?",
        "content": "React apps can be optimized by techniques such as using `React.memo`, avoiding anonymous functions in props, code splitting, lazy loading, and efficient state management with hooks like `useReducer`."
    },
    {
        "id": "29",
        "topic": "29. What is `useCallback` and why is it useful?",
        "content": "`useCallback` memoizes a function so that it only changes if its dependencies change. It is helpful when passing functions to child components to prevent unnecessary re-renders."
    },
    {
        "id": "30",
        "topic": "30. Explain `useReducer` and when to use it.",
        "content": "`useReducer` is an alternative to `useState`, often used for managing complex state logic with multiple actions. It takes a reducer function and initial state to manage component state."
    },
    {
        "id": "31",
        "topic": "31. How do you manage global state in React?",
        "content": "Global state can be managed with Context API, or with third-party state management libraries like Redux, MobX, or Zustand, depending on the complexity and requirements of the application."
    },
    {
        "id": "32",
        "topic": "32. What is the purpose of keys in lists, and why should they be unique?",
        "content": "Keys in lists help React identify which items have changed, added, or removed. They must be unique to avoid re-rendering issues and ensure that the list items retain their identity across updates."
    },
    {
        "id": "33",
        "topic": "33. How can you integrate third-party libraries in React?",
        "content": "Third-party libraries can be integrated by installing them via npm/yarn and importing them into your React component. Popular libraries include Axios for HTTP requests, Lodash for utility functions, and D3 for data visualization."
    },
    {
        "id": "34",
        "topic": "34. What is React Portals?",
        "content": "React Portals allow you to render a component's children into a different part of the DOM outside of the parent component. Useful for creating modals or tooltips that require different DOM positioning."
    },
    {
        "id": "35",
        "topic": "35. What is server-side rendering (SSR) in React?",
        "content": "SSR is a technique where the HTML of React components is rendered on the server instead of the client. It improves performance, SEO, and the initial page load time. Frameworks like Next.js facilitate SSR in React."
    },
    {
        "id": "36",
        "topic": "36. Explain the role of useContext hook.",
        "content": "`useContext` is a hook that allows you to access the value of a context in a functional component. It simplifies state sharing across deeply nested components without prop drilling."
    },
    {
        "id": "37",
        "topic": "37. How does hydration work in React?",
        "content": "Hydration is the process where React reuses server-rendered HTML and attaches event listeners to it. It's used with server-side rendering to optimize client-side loading of interactive apps."
    },
    {
        "id": "38",
        "topic": "38. What is shallow comparison in React?",
        "content": "Shallow comparison checks only the top-level properties of objects to determine equality. In React, it's used in `PureComponent` and `React.memo` to optimize re-renders by skipping components with unchanged props."
    },
    {
        "id": "39",
        "topic": "39. How does React handle async operations in hooks?",
        "content": "React recommends handling async operations in `useEffect` by defining async functions inside the effect and immediately invoking them. React Query is often used for complex async state management."
    },
    {
        "id": "40",
        "topic": "40. What is the difference between `useLayoutEffect` and `useEffect`?",
        "content": "`useLayoutEffect` fires synchronously after all DOM changes, useful for performing measurements and modifications before the browser paints. `useEffect` runs asynchronously, useful for data fetching and side effects that don’t impact layout."
    }
]
