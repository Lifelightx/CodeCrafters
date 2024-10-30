import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'
import Support from './Support'
import JavaScriptData from '../assets/Notes/JavaScriptData'

const sectionsData = JavaScriptData;

function JavaScript() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 fixed h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">JavaScript Topics</h2>
        <ul className="space-y-2">
          <Topics name='Js Questions '/>
          
        </ul>
      </div>
      <Support/>
      {/* Main content */}
      <div className="w-3/4 p-4 ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn JavaScript</h1>
        {sectionsData.map((section, index) => (
          <Section
            key={index}
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

export default JavaScript
