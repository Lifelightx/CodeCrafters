import React from 'react'
import Topics from './Topics'
import Section from './Section'

function Html() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">HTML Topics</h2>
        <ul className="space-y-3">
          <Topics name="Introduction" icon={<i className="fa fa-book"></i>} />
          <Topics name="HTML Structure" icon={<i className="fa fa-sitemap"></i>} />
          <Topics name="HTML Elements" icon={<i className="fa fa-cubes"></i>} />
          <Topics name="HTML Attributes" icon={<i className="fa fa-tags"></i>} />
          <Topics name="Headings" icon={<i className="fa fa-header"></i>} />
          <Topics name="Paragraphs" icon={<i className="fa fa-paragraph"></i>} />
          <Topics name="Links" icon={<i className="fa fa-link"></i>} />
          <Topics name="Images" icon={<i className="fa fa-image"></i>} />
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-quicksand text-blue-600">Learn HTML</h1>

        <Section id="introduction" topic="Introduction" content="HTML (HyperText Markup Language) is the standard markup language for creating web pages." />

        <Section id="structure" topic="HTML Structure" content="HTML uses a structure of elements and tags to organize content on a web page." />

        <Section id="elements" topic="HTML Elements" content="HTML elements are the building blocks of HTML pages. They are represented by tags." />

        <Section id="attributes" topic="HTML Attributes" content="HTML attributes provide additional information about HTML elements." />

        <Section id="headings" topic="Headings" content="HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags." />

        <Section id="paragraphs" topic="Paragraphs" content="HTML paragraphs are defined with the &lt;p&gt; tag." />

        <Section id="links" topic="Links" content="HTML links are defined with the &lt;a&gt; tag." />

        <Section id="images" topic="Images" content="HTML images are defined with the &lt;img&gt; tag." />
      </div>
    </div>
  )
}

export default Html
