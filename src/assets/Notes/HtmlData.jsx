export default [
    {
        "id": "1",
        "topic": "1. What is HTML?",
        "content": "HTML (HyperText Markup Language) is the standard language for creating web pages. It structures web content and is used along with CSS and JavaScript to design webpages."
    },
    {
        "id": "2",
        "topic": "2. How do you create a hyperlink in HTML?",
        "content": "Use the `<a>` tag to create hyperlinks. The `href` attribute defines the URL to which the link points.",
        "code": "<a href='https://www.example.com'>Visit Example</a>",
        "language": "html"
    },
    {
        "id": "3",
        "topic": "3. What is the purpose of the `alt` attribute in `<img>` tags?",
        "content": "The `alt` attribute provides alternative text for an image if it cannot be displayed. It also improves accessibility by describing the image to screen readers."
    },
    {
        "id": "4",
        "topic": "4. What is the difference between `<div>` and `<span>`?",
        "content": "`<div>` is a block-level element used to group content, while `<span>` is an inline element used for styling small portions of text within a line."
    },
    {
        "id": "5",
        "topic": "5. How do you create an ordered list in HTML?",
        "content": "Use the `<ol>` tag to create an ordered list, with each list item wrapped in `<li>` tags.",
        "code": "<ol>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ol>",
        "language": "html"
    },
    {
        "id": "6",
        "topic": "6. What are HTML semantic elements?",
        "content": "Semantic elements clearly describe their purpose, like `<header>`, `<footer>`, `<article>`, and `<section>`. They help with SEO and improve readability for both developers and browsers."
    },
    {
        "id": "7",
        "topic": "7. How can you embed an image in an HTML page?",
        "content": "Use the `<img>` tag with the `src` attribute to specify the image URL.",
        "code": "<img src='image.jpg' alt='Description of image'>",
        "language": "html"
    },
    {
        "id": "8",
        "topic": "8. How do you create a table in HTML?",
        "content": "Use the `<table>` element and define table rows with `<tr>`, header cells with `<th>`, and data cells with `<td>`.",
        "code": "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</table>",
        "language": "html"
    },
    {
        "id": "9",
        "topic": "9. What is the use of the `<form>` tag in HTML?",
        "content": "The `<form>` tag is used to create an HTML form for collecting user input, which can be sent to a server using methods like GET or POST."
    },
    {
        "id": "10",
        "topic": "10. What is the `doctype` declaration?",
        "content": "The `<!DOCTYPE html>` declaration defines the document type and version of HTML. It must appear at the top of an HTML document to ensure proper rendering by browsers."
    },
    {
        "id": "11",
        "topic": "11. How do you make text bold and italic in HTML?",
        "content": "Use `<b>` or `<strong>` for bold text and `<i>` or `<em>` for italic text.",
        "code": "<strong>Bold text</strong> <em>Italic text</em>",
        "language": "html"
    },
    {
        "id": "12",
        "topic": "12. How can you include JavaScript in an HTML document?",
        "content": "Use the `<script>` tag within the `<head>` or `<body>` section to include JavaScript code.",
        "code": "<script>\n  alert('Hello, world!');\n</script>",
        "language": "html"
    },
    {
        "id": "13",
        "topic": "13. How do you create a drop-down list in HTML?",
        "content": "Use the `<select>` element with nested `<option>` tags to create a dropdown list.",
        "code": "<select>\n  <option value='1'>Option 1</option>\n  <option value='2'>Option 2</option>\n</select>",
        "language": "html"
    },
    {
        "id": "14",
        "topic": "14. What is the difference between inline, block, and inline-block elements?",
        "content": "Inline elements do not start on a new line and take only necessary width (e.g., `<span>`). Block elements start on a new line and take full width (e.g., `<div>`). Inline-block elements are inline but respect padding and margin like block elements."
    },
    {
        "id": "15",
        "topic": "15. What is the use of the `meta` tag in HTML?",
        "content": "The `<meta>` tag provides metadata about the HTML document, such as character set, viewport settings, or keywords for search engines."
    },
    {
        "id": "16",
        "topic": "16. How do you create a comment in HTML?",
        "content": "HTML comments are created using `<!-- Comment text -->`. They are ignored by the browser and are useful for adding notes in the code."
    },
    {
        "id": "17",
        "topic": "17. What is the purpose of the `target='_blank'` attribute in an anchor tag?",
        "content": "Adding `target='_blank'` to an anchor tag (`<a>`) opens the link in a new tab or window.",
        "code": "<a href='https://www.example.com' target='_blank'>Open in new tab</a>",
        "language": "html"
    },
    {
        "id": "18",
        "topic": "18. How do you create a checkbox in HTML?",
        "content": "Use the `<input type='checkbox'>` element to create a checkbox input.",
        "code": "<input type='checkbox' name='option1' value='Option 1'> Option 1",
        "language": "html"
    },
    {
        "id": "19",
        "topic": "19. What is the purpose of the `placeholder` attribute in an input field?",
        "content": "The `placeholder` attribute provides a hint to the user about what kind of input is expected, shown as greyed-out text inside the input field.",
        "code": "<input type='text' placeholder='Enter your name'>",
        "language": "html"
    },
    {
        "id": "20",
        "topic": "20. How to add audio or video to an HTML page?",
        "content": "Use the `<audio>` and `<video>` elements, with `src` attribute pointing to the media file. You can also add `controls` for playback control.",
        "code": "<audio controls>\n  <source src='audio.mp3' type='audio/mp3'>\n</audio>\n<video controls>\n  <source src='video.mp4' type='video/mp4'>\n</video>",
        "language": "html"
    }
]
