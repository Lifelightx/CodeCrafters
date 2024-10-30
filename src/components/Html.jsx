import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'
import Support from './Support'
function Html() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">HTML Topics</h2>
        <ul className="space-y-3">
          <Topics name="Introduction" icon={<i className="fa fa-book text-blue-500"></i>} />
          
        </ul>
      </div>
      <Support/>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-quicksand text-blue-600">Learn HTML</h1>
        <Section id="introduction" 
          topic="1. What is HTML?"
          content="HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web. It uses a series of elements, represented by tags, to define the structure and display of a webpage's content, such as text, images, videos, and links."
        />
        <Section id="introduction" 
          topic="2. What are HTML Tags?"
          content="HTML tags are the building blocks of HTML documents. They are used to define the structure and content of a webpage. Tags are enclosed in angle brackets (< >) and often come in pairs, with an opening tag and a closing tag. The content between the opening and closing tags is the element's content."
          code={`<p>This is a paragraph.</p>`}
          language="html"
        />
        <Section id="introduction" 
          topic="3. What are HTML Attributes?"
          content="HTML attributes are additional values that configure HTML elements. They are added to the opening tag of an element and are used to provide additional information about the element. Attributes are typically in the form of name-value pairs, separated by spaces. 
          In the code example below, class is an attribute that assigns the value 'paragraph' to the <p> element."
          code={`<p class="paragraph">This is a paragraph.</p> `}
          language="html"
        />
        <Section id="introduction" 
          topic="4. What is an HTML Element?"
          content="An HTML element is a component of an HTML document that defines the content and structure of a webpage. Elements are represented by tags, which consist of an opening tag, content, and a closing tag. The content between the opening and closing tags is the element's content."
          code={`<p>This is a paragraph.</p>`}
          language="html"
        />
        <Section id="faq" 
          topic="5. What is the difference between HTML and CSS?"
          content="HTML (HyperText Markup Language) is used to create and structure content on the web, while CSS (Cascading Style Sheets) is used to style and layout the content. HTML provides the structure of the webpage, and CSS provides the visual and aural layout."
        />
        <Section id="faq" 
          topic="6. What is the purpose of the <!DOCTYPE> declaration in HTML?"
          content="The <!DOCTYPE> declaration is used to specify the HTML version and type of the document. It helps the browser to render the webpage correctly by understanding the HTML version being used. It should be the first line in an HTML document."
        />
        <Section id="faq" 
          topic="7. What is the difference between an HTML element and an HTML tag?"
          content="An HTML tag is a part of the HTML element. Tags are used to mark the beginning and end of an element. An HTML element consists of the opening tag, content, and closing tag. For example, <p>This is a paragraph.</p> is an HTML element, where <p> is the opening tag, </p> is the closing tag, and 'This is a paragraph.' is the content."
        />
        <Section id="faq" 
          topic="8. What are semantic elements in HTML5?"
          content="Semantic elements are HTML elements that carry meaning about their content. They clearly describe their purpose to both the browser and the developer. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>. Using semantic elements improves accessibility and SEO."
        />
        <Section id="faq" 
          topic="9. What is the difference between <div> and <span>?"
          content="<div> is a block-level element that creates a division or section in the document, typically containing other elements. <span> is an inline element used to group text or elements within a line. <div> starts on a new line and takes full width, while <span> only takes the necessary width."
        />
        <Section id="faq" 
          topic="10. What are void elements in HTML?"
          content="Void elements (also called empty elements) are HTML elements that don't have any content and don't need a closing tag. Common examples include <img>, <br>, <input>, <meta>, and <link>. They are self-closing elements."
          code={`<img src="image.jpg" alt="An image">
<br>
<input type="text">`}
          language="html"
        />
        <Section id="faq" 
          topic="11. What is the purpose of the alt attribute in images?"
          content="The alt attribute provides alternative text for an image if it cannot be displayed. It's important for accessibility (screen readers use it) and SEO. It also appears when images fail to load or when hovering over images in some browsers."
          code={`<img src="cat.jpg" alt="A cute cat playing with yarn">`}
          language="html"
        />
        <Section id="faq" 
          topic="12. What's the difference between localStorage and sessionStorage?"
          content="Both are web storage solutions, but localStorage data persists until explicitly deleted, even after closing the browser. sessionStorage data is cleared when the browser session ends (when the tab is closed). Both can store about 5-10MB of data and are specific to the protocol of the page."
        />
        <Section id="faq" 
          topic="13. What are HTML forms and their importance?"
          content="HTML forms are used to collect user input. They are essential for creating interactive web pages and gathering data from users. Forms can contain various input elements like text fields, checkboxes, radio buttons, and submit buttons."
        />
        <Section id="faq" 
          topic="14. Explain the difference between GET and POST methods in forms"
          content="GET sends form data as URL parameters, visible in the address bar, with limited data size. POST sends data in the request body, making it more secure and suitable for sensitive data with no size limitations."
        />
        <Section id="faq" 
          topic="15. What is the purpose of the meta viewport tag?"
          content="The meta viewport tag controls the viewport's behavior on mobile devices. It's crucial for responsive web design, ensuring proper scaling and rendering on different screen sizes."
          code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
          language="html"
        />
        <Section id="faq" 
          topic="16. What are data attributes in HTML5?"
          content="Data attributes allow storing custom data within HTML elements. They start with 'data-' and can be accessed via JavaScript. They're useful for storing extra information that doesn't have a standard HTML attribute."
          code={`<div data-user-id="123" data-role="admin">Content</div>`}
          language="html"
        />
        <Section id="faq" 
          topic="17. What is the difference between cookies, localStorage, and sessionStorage?"
          content="Cookies are small text files stored on the client's computer, can be set to expire, and are sent with every HTTP request. localStorage provides 5-10MB storage that persists indefinitely. sessionStorage provides similar storage but only for the duration of the browser session."
        />
        <Section id="faq" 
          topic="18. What is the purpose of the srcset attribute in images?"
          content="The srcset attribute allows specifying multiple image sources for different screen sizes and resolutions. It helps in responsive web design by letting browsers choose the most appropriate image version."
          code={`<img srcset="small.jpg 300w, medium.jpg 600w, large.jpg 900w" src="fallback.jpg">`}
          language="html"
        />
        <Section id="faq" 
          topic="19. What are HTML entities?"
          content="HTML entities are special characters that can't be directly used in HTML code. They start with & and end with ;. Common examples include &lt; for <, &gt; for >, and &amp; for &."
        />
        <Section id="faq" 
          topic="20. Explain the importance of semantic HTML"
          content="Semantic HTML improves accessibility, SEO, and code maintainability. It provides meaning to content structure, helps screen readers interpret content correctly, and makes code more readable for developers."
        />
        <Section id="faq" 
          topic="21. What is the role of the defer and async attributes in script tags?"
          content="defer downloads the script while HTML is parsing and executes it after parsing completes. async downloads and executes the script asynchronously with HTML parsing. Both improve page load performance."
        />
        <Section id="faq" 
          topic="22. What is the purpose of the Canvas element?"
          content="The Canvas element is used for drawing graphics, animations, and interactive content using JavaScript. It provides a resolution-dependent bitmap canvas for rendering graphs, game graphics, or other visual images on the fly."
        />
        <Section id="faq" 
          topic="23. What are Web Workers?"
          content="Web Workers allow running scripts in background threads, separate from the main execution thread. They're useful for running computationally expensive tasks without blocking the UI thread."
        />
        <Section id="faq" 
          topic="24. What is the role of the rel attribute in link tags?"
          content="The rel attribute specifies the relationship between the current document and the linked document. Common values include stylesheet, icon, preload, and nofollow."
        />
        <Section id="faq" 
          topic="25. What is Progressive Web Apps (PWA)?"
          content="PWAs are web applications that can be installed on devices, work offline, and provide native app-like experiences. They use service workers for offline functionality and manifest files for installation capabilities."
        />
        <Section id="faq" 
          topic="26. What is Cross-Origin Resource Sharing (CORS)?"
          content="CORS is a security feature that controls how web pages in one domain can request and interact with resources from another domain. It's implemented through HTTP headers and is crucial for secure cross-origin requests."
        />
        <Section id="faq" 
          topic="27. What is the purpose of the picture element?"
          content="The picture element provides more flexibility in specifying image resources than img alone. It allows defining multiple sources for an image and lets browsers choose the most appropriate one based on device characteristics."
          code={`<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>`}
          language="html"
        />
        <Section id="faq" 
          topic="28. What are Custom Elements in HTML5?"
          content="Custom Elements allow developers to define their own custom HTML elements with custom behavior. They're part of the Web Components specification and enable creating reusable components."
        />
        <Section id="faq" 
          topic="29. What is the role of aria-labels?"
          content="ARIA labels provide accessible names for elements that may not have visible text. They help screen readers understand and announce content to users with disabilities, improving web accessibility."
        />
        <Section id="faq" 
          topic="30. What is the difference between preload and prefetch?"
          content="Preload is a declarative fetch for resources needed for current navigation. Prefetch suggests resources might be needed for future navigation. Both optimize resource loading but serve different purposes."
        />
        <Footer/>
      </div>
    </div>
  )
}

export default Html
