export default [
    {
        "id": "1",
        "topic": "1. What is Bootstrap?",
        "content": "Bootstrap is a popular open-source CSS framework for developing responsive and mobile-first websites. It provides pre-styled components, grid layout, and JavaScript plugins for quickly building web pages."
    },
    {
        "id": "2",
        "topic": "2. How do you include Bootstrap in a project?",
        "content": "Bootstrap can be included in a project in three main ways:\n1. Linking the CSS and JS files from a CDN.\n2. Downloading the files and including them locally.\n3. Installing Bootstrap via npm or yarn for a more modular setup in frameworks like React or Angular."
    },
    {
        "id": "3",
        "topic": "3. What is the Bootstrap grid system?",
        "content": "Bootstrap’s grid system is a responsive layout system with 12 columns that allows you to create flexible layouts. It uses containers, rows, and columns to align content based on screen size."
    },
    {
        "id": "4",
        "topic": "4. How do you create a responsive column layout in Bootstrap?",
        "content": "Responsive columns can be created using classes like `.col-sm-4`, `.col-md-6`, `.col-lg-3`, etc. These classes define how many columns a layout should span on different screen sizes, adjusting layout based on screen width."
    },
    {
        "id": "5",
        "topic": "5. What are Bootstrap breakpoints?",
        "content": "Bootstrap breakpoints are predefined screen widths that trigger different responsive behaviors. The default breakpoints are:\n1. xs (Extra small): <576px\n2. sm (Small): ≥576px\n3. md (Medium): ≥768px\n4. lg (Large): ≥992px\n5. xl (Extra large): ≥1200px\n6. xxl (Extra extra large): ≥1400px"
    },
    {
        "id": "6",
        "topic": "6. What is the difference between container, container-fluid, and container-{breakpoint} classes in Bootstrap?",
        "content": "`container` is a fixed-width layout that changes with each breakpoint. `container-fluid` spans the full width of the viewport. `container-{breakpoint}` only applies the fixed width at specified breakpoints and is fluid at smaller sizes."
    },
    {
        "id": "7",
        "topic": "7. How do you create a button in Bootstrap?",
        "content": "Buttons are created using the `.btn` class and color variants like `.btn-primary`, `.btn-secondary`, `.btn-success`, etc. Example: `<button class=\"btn btn-primary\">Primary Button</button>`."
    },
    {
        "id": "8",
        "topic": "8. How does the Bootstrap navbar work?",
        "content": "Bootstrap’s navbar component is a responsive navigation header that can include branding, links, togglers, and collapsible content. Use classes like `.navbar`, `.navbar-expand-lg`, `.navbar-light`, and `.navbar-dark` to style and configure the navbar."
    },
    {
        "id": "9",
        "topic": "9. What are utility classes in Bootstrap?",
        "content": "Utility classes are single-purpose helper classes that provide quick styling options, such as margin and padding (`.m-1`, `.p-2`), text alignment (`.text-center`), background colors (`.bg-primary`), and more."
    },
    {
        "id": "10",
        "topic": "10. What is Bootstrap’s card component?",
        "content": "The card component is a flexible content container with multiple options for headers, footers, images, and more. Cards can be customized using classes like `.card`, `.card-header`, `.card-body`, and `.card-footer`."
    },
    {
        "id": "11",
        "topic": "11. How do you add icons in Bootstrap?",
        "content": "Bootstrap 5 no longer includes its own icon library but recommends using Bootstrap Icons or other libraries like Font Awesome. Icons can be added with `<i>` or `<svg>` tags."
    },
    {
        "id": "12",
        "topic": "12. What are Bootstrap Modals, and how are they used?",
        "content": "Modals are dialog boxes or pop-ups for user interaction. They can be created using `.modal` along with `.modal-dialog`, `.modal-content`, and `.modal-footer` classes. JavaScript methods control modal visibility, such as `$('#myModal').modal('show')`."
    },
    {
        "id": "13",
        "topic": "13. What is the Carousel component in Bootstrap?",
        "content": "The Carousel is a slideshow component for cycling through elements. Use `.carousel`, `.carousel-inner`, and `.carousel-item` classes to set up, and `data-bs-slide` attributes or JavaScript to control slides."
    },
    {
        "id": "14",
        "topic": "14. How does Bootstrap handle form validation?",
        "content": "Bootstrap provides form validation with `was-validated` and `is-invalid` classes. These styles highlight valid/invalid fields based on HTML5 validation attributes like `required`, `pattern`, or custom JavaScript validations."
    },
    {
        "id": "15",
        "topic": "15. What are spacing utilities in Bootstrap?",
        "content": "Bootstrap spacing utilities control margin and padding using classes like `m-{size}` and `p-{size}`, where size ranges from 0 to 5 or auto. They adjust spacing without custom CSS, making it quick and consistent."
    },
    {
        "id": "16",
        "topic": "16. How do Bootstrap columns stack on smaller screens?",
        "content": "Bootstrap columns stack vertically on smaller screens by default. You can control this stacking by specifying responsive classes like `.col-md-*` for medium screens and `.col-lg-*` for large screens."
    },
    {
        "id": "17",
        "topic": "17. What are Bootstrap badges?",
        "content": "Badges are small count or label indicators often used with lists and buttons. Create badges with the `.badge` class and color variants like `.badge-primary`, `.badge-success`, etc."
    },
    {
        "id": "18",
        "topic": "18. Explain the role of the .d-* classes in Bootstrap.",
        "content": "The `.d-*` classes control display properties. `.d-none` hides an element, `.d-inline` makes it inline, `.d-block` makes it block, etc. Responsive variants like `.d-md-block` apply display properties at specific breakpoints."
    },
    {
        "id": "19",
        "topic": "19. How do you align items in Bootstrap?",
        "content": "Items can be aligned using flex utilities like `.align-items-center` for vertical alignment, `.justify-content-center` for horizontal alignment, and `.text-center` for text alignment. These are especially helpful in flex or grid layouts."
    },
    {
        "id": "20",
        "topic": "20. What is Bootstrap's responsive embed utility?",
        "content": "Responsive embed utilities create flexible aspect ratios for embedding media like videos. Use classes like `.ratio`, `.ratio-16x9`, `.ratio-4x3` to ensure media elements adjust to the container's width."
    }
]
