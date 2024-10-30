export default [
    {
        "id": "1",
        "topic": "1. What is CSS?",
        "content": "CSS stands for Cascading Style Sheets. It is used to style and layout HTML elements, controlling things like color, font, spacing, and overall visual design of webpages."
    },
    {
        "id": "2",
        "topic": "2. What are the different ways to include CSS in a web page?",
        "content": "CSS can be included in a webpage using:\n1. Inline CSS (using the style attribute in HTML elements)\n2. Internal CSS (within a <style> tag inside the head section of the HTML)\n3. External CSS (by linking to a .css file using a <link> tag)."
    },
    {
        "id": "3",
        "topic": "3. What is the box model in CSS?",
        "content": "The CSS box model is a box that wraps around every HTML element. It consists of margins, borders, padding, and the actual content. Understanding the box model is essential for proper layout and spacing in CSS."
    },
    {
        "id": "4",
        "topic": "4. Explain the difference between padding and margin.",
        "content": "Padding is the space between the content and the border of an element, while margin is the space outside the border between the element and surrounding elements."
    },
    {
        "id": "5",
        "topic": "5. How can you center an element in CSS?",
        "content": "Centering an element in CSS depends on the type of element:\n1. For text, use `text-align: center`.\n2. For block elements, use `margin: auto` for horizontal centering.\n3. For flex containers, use `justify-content: center` and `align-items: center` for horizontal and vertical centering."
    },
    {
        "id": "6",
        "topic": "6. What is Flexbox in CSS?",
        "content": "Flexbox is a CSS layout model that allows items within a container to be automatically arranged and aligned in different directions and flexible configurations, making responsive layouts simpler."
    },
    {
        "id": "7",
        "topic": "7. What is CSS Grid, and how does it differ from Flexbox?",
        "content": "CSS Grid is a layout system for creating complex, two-dimensional layouts with rows and columns. Flexbox is primarily for one-dimensional layouts (either row or column). CSS Grid provides more control for layout structure, while Flexbox is great for aligning items within a container."
    },
    {
        "id": "8",
        "topic": "8. How do you make a website responsive?",
        "content": "A responsive website adjusts its layout and content to fit different screen sizes. Common techniques include:\n1. Using fluid grid layouts and percentages for widths\n2. CSS media queries to apply styles based on screen size\n3. Responsive images that scale based on the viewport."
    },
    {
        "id": "9",
        "topic": "9. What are CSS media queries?",
        "content": "CSS media queries are rules that apply styles based on the conditions like screen width, height, or device orientation. They're essential for responsive design, allowing different styles to apply for desktops, tablets, and mobile devices.",
        "code": "@media (max-width: 600px) {\n  body { background-color: lightblue; }\n}",
        "language": "css"
    },
    {
        "id": "10",
        "topic": "10. What is specificity in CSS?",
        "content": "Specificity is a rule in CSS that determines which styles are applied to an element. It is calculated based on selector types, with inline styles having the highest specificity, followed by IDs, classes, attributes, and element selectors."
    },
    {
        "id": "11",
        "topic": "11. Explain the difference between `position: relative` and `position: absolute`.",
        "content": "`position: relative` positions an element relative to its normal position, while `position: absolute` positions an element relative to its nearest positioned ancestor or the initial containing block if no ancestor is positioned."
    },
    {
        "id": "12",
        "topic": "12. What is z-index in CSS, and how does it work?",
        "content": "The `z-index` property controls the stacking order of elements. Higher `z-index` values will display elements in front of elements with lower `z-index` values. It only works on positioned elements (relative, absolute, fixed, or sticky)."
    },
    {
        "id": "13",
        "topic": "13. What is the difference between `display: none` and `visibility: hidden`?",
        "content": "`display: none` removes an element from the document flow, meaning it doesn’t occupy space. `visibility: hidden` hides the element but still occupies space in the document."
    },
    {
        "id": "14",
        "topic": "14. What is a CSS preprocessor?",
        "content": "A CSS preprocessor is a tool that extends CSS with variables, nesting, and functions to make writing CSS easier. Examples include Sass, LESS, and Stylus. They need to be compiled into CSS before being used in production."
    },
    {
        "id": "15",
        "topic": "15. What are pseudo-classes and pseudo-elements in CSS?",
        "content": "Pseudo-classes are keywords added to selectors to style an element in a specific state (e.g., `:hover`, `:focus`). Pseudo-elements create and style specific parts of elements (e.g., `::before`, `::after`).",
        "code": "p::before {\n  content: \"Hello \";\n}",
        "language": "css"
    },
    {
        "id": "16",
        "topic": "16. How do CSS transitions and animations differ?",
        "content": "CSS transitions allow for smooth changes between styles over a specified duration, triggered by an event (e.g., hover). CSS animations, on the other hand, are more complex and allow for multi-step sequences controlled by `@keyframes`."
    },
    {
        "id": "17",
        "topic": "17. What are rem and em units, and how do they differ?",
        "content": "`em` and `rem` are relative units in CSS. `em` is relative to the font-size of the element's parent, while `rem` is relative to the root element (`html`) font-size, making `rem` more predictable for responsive design."
    },
    {
        "id": "18",
        "topic": "18. What is a CSS variable, and how do you use it?",
        "content": "CSS variables (custom properties) allow you to store values that can be reused throughout the CSS. They are defined with `--` and accessed with `var()`.",
        "code": ":root {\n  --main-color: #3498db;\n}\n\nh1 {\n  color: var(--main-color);\n}",
        "language": "css"
    },
    {
        "id": "19",
        "topic": "19. Explain the `calc()` function in CSS.",
        "content": "The `calc()` function allows you to perform calculations to determine CSS property values. It is useful for creating dynamic layouts with a combination of different units.",
        "code": "width: calc(100% - 50px);",
        "language": "css"
    },
    {
        "id": "20",
        "topic": "20. What are CSS frameworks, and name a few popular ones.",
        "content": "CSS frameworks are pre-prepared libraries that make styling and layout faster and easier. Popular CSS frameworks include Bootstrap, Tailwind CSS, Foundation, and Bulma."
    },
    {
        "id": "21",
        "topic": "21. What is the difference between `display: flex` and `display: grid`?",
        "content": "`display: flex` is used for one-dimensional layouts, while `display: grid` is used for two-dimensional layouts. Flexbox is more appropriate for simple layouts, while CSS Grid is better for complex layouts with multiple rows and columns."
    },
    {
        "id": "22",
        "topic": "22. What is the difference between `box-sizing: border-box` and `box-sizing: content-box`?",
        "content": "`box-sizing: border-box` includes padding and border in the element's total width and height, while `box-sizing: content-box` only includes the content area."
    },
    {
        "id": "23",
        "topic": "23. What is the difference between `inherit` and `initial` in CSS?",
        "content": "`inherit` makes an element take the computed value of its parent, while `initial` makes an element take the default value defined by the user agent."
    },
    {
        "id": "24",
        "topic": "24. What is the difference between `unset` and `revert` in CSS?",
        "content": "`unset` resets a property to its inherited value if it was inherited, or its initial value if not. `revert` reverts to the user agent's computed value."
    },
    {
        "id": "25",
        "topic": "25. What is the difference between `vh` and `vw` in CSS?",
        "content": "`vh` and `vw` are viewport units that represent a percentage of the viewport width and height. `1vh` is 1% of the viewport height, and `1vw` is 1% of the viewport width."
    },
   
]
