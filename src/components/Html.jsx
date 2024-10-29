import React from 'react'
import Topics from './Topics'
import Section from './Section'
import TryYourSelfButton from './TryYourSelfButton'

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

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 font-quicksand text-blue-600">Learn HTML</h1>
        <Section id="introduction" 
          topic="1. What is HTML?"
          content="HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web. It uses a series of elements, represented by tags, to define the structure and display of a webpage’s content, such as text, images, videos, and links."

        />
        <TryYourSelfButton path="compilerHTML" />
      </div>
    </div>
  )
}

export default Html
