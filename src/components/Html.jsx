import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'
import Support from './Support'
import HtmlData from '../assets/Notes/HtmlData'
function Html() {
  const sectionsData = HtmlData;
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">HTML Topics</h2>
        <ul className="space-y-3">
          <Topics name="FAQs of HTML" icon={<i className="fa fa-book text-blue-500"></i>} />
          
        </ul>
      </div>
      <Support/>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-quicksand text-blue-600">Learn HTML</h1>
        {sectionsData.map((section) => (
          <Section 
          id={section.id}
          topic={section.topic}
          content={section.content}
          code={section.code}
          language={section.language}
          />
        ))}
        <Footer/>
      </div>
    </div>
  )
}

export default Html
