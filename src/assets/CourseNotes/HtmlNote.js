export default  [
    {
        "id": "IntroductiontoHTML",
        "topic": "Introduction to HTML",
        "content": "HTML (HyperText Markup Language) is the standard language for creating webpages. It defines the structure of a webpage using elements like headings, paragraphs, and links.",
        "code": `<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple paragraph.</p>
</body>
</html>`,
        "language": "html"
    },
    {
        "id": "HTMLElementsandTags",
        "topic": "HTML Elements and Tags",
        "content": "HTML is composed of elements represented by tags. Tags mark the start and end of an element and often come in pairs, such as <p> and </p>.",
        "code": `<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<a href="https://www.example.com">This is a link</a>`,
        "language": "html"
    },
    {
        "id": "HTMLAttributes",
        "topic": "HTML Attributes",
        "content": "Attributes provide additional information about an element, often as key-value pairs within the opening tag, like the src attribute in <img> tags.",
        "code": `<img src="image.jpg" alt="Description of image">
<a href="https://www.example.com" target="_blank">Open Link in New Tab</a>`,
        "language": "html"
    },
    {
        "id": "HTMLHeadings",
        "topic": "HTML Headings",
        "content": "HTML provides six levels of headings, from <h1> (most important) to <h6> (least important).",
        "code": `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>`,
        "language": "html"
    },
    {
        "id": "HTMLParagraphs",
        "topic": "HTML Paragraphs",
        "content": "Paragraphs in HTML are represented by the <p> tag. They allow for block-level text on the page.",
        "code": `<p>This is a paragraph of text in HTML.</p>`,
        "language": "html"
    },
    {
        "id": "HTMLLinks",
        "topic": "HTML Links",
        "content": "Links are created using the <a> tag with the href attribute to define the target URL.",
        "code": `<a href="https://www.example.com">Visit Example.com</a>`,
        "language": "html"
    },
    {
        "id": "HTMLImages",
        "topic": "HTML Images",
        "content": "The <img> tag is used to embed images in HTML. It requires a src attribute for the image URL and an alt attribute for accessibility.",
        "code": `<img src="image.jpg" alt="Sample Image">`,
        "language": "html"
    },
    {
        "id": "HTMLLists",
        "topic": "HTML Lists",
        "content": "HTML supports ordered (numbered) lists with <ol> and unordered (bulleted) lists with <ul>. Each list item is defined with <li>.",
        "code": `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>`,
        "language": "html"
    },
    {
        "id": "HTMLTables",
        "topic": "HTML Tables",
        "content": "Tables in HTML are created using the <table> element, with rows defined by <tr> and cells by <td>. Table headers can be added with <th>.",
        "code": `<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>30</td>
    </tr>
</table>`,
        "language": "html"
    },
    {
        "id": "10",
        "topic": "HTML Forms",
        "content": "Forms collect user inputs and are defined with the <form> tag, containing input elements like <input>, <textarea>, and <select>.",
        "code": `<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>`,
        "language": "html"
    },
    {
        "id": "11",
        "topic": "HTML Semantic Elements",
        "content": "Semantic elements clearly describe their meaning in a way that both the browser and developers can understand, such as <header>, <footer>, and <article>.",
        "code": `<header>
    <h1>Website Header</h1>
</header>
<article>
    <p>This is an article section.</p>
</article>
<footer>
    <p>Website Footer</p>
</footer>`,
        "language": "html"
    },
    {
        "id": "12",
        "topic": "HTML Iframes",
        "content": "Iframes allow you to embed another HTML page within your page using the <iframe> tag.",
        "code": `<iframe src="https://www.example.com" width="300" height="200"></iframe>`,
        "language": "html"
    },
    {
        "id": "13",
        "topic": "HTML Audio and Video",
        "content": "HTML provides <audio> and <video> tags to embed multimedia content. They support multiple formats and controls.",
        "code": `<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video element.
</video>`,
        "language": "html"
    },
    {
        "id": "14",
        "topic": "HTML Comments",
        "content": "Comments in HTML are added using <!-- and -->. They are ignored by the browser and useful for leaving notes in code.",
        "code": `<!-- This is a comment in HTML -->`,
        "language": "html"
    },
    {
        "id": "15",
        "topic": "HTML Inline vs Block Elements",
        "content": "Inline elements do not start on a new line and take up only as much space as necessary, e.g., <span>. Block elements take up the full width, e.g., <div>.",
        "code": `<div>This is a block element</div>
<span>This is an inline element</span>`,
        "language": "html"
    }
];
