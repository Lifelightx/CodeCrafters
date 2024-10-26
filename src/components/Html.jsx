import React from 'react'
import Topics from './Topics'
import Section from './Section'

function Html() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 fixed h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">HTML Topics</h2>
        <ul className="space-y-2">
          <Topics name="Introduction"/>
          <Topics name="HTML Structure"/>
          <Topics name="HTML Elements"/>
          <Topics name="HTML Attributes"/>
          <Topics name="Headings"/>
          <Topics name="Paragraphs"/>
          <Topics name="Links"/>
          <Topics name="Images"/>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-4 ml-[25%] overflow-y-auto">
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
