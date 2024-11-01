import React from 'react'
import Topics from '../components/Topics'
import Section from '../components/Section'
import HtmlNote from '../assets/CourseNotes/HtmlNote'
import Support from '../components/Support'
import Footer from '../components/Footer'
import TryYourSelfButton from '../components/TryYourSelfButton'

function HtmlCourse() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Html Topics</h2>
        <ul className="space-y-2">
          {HtmlNote.map((topic, index) => (
            <Topics key={index} name={topic.topic} />
          ))}
        </ul>
      </div>
      <Support />

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn Html</h1>
        {HtmlNote.map((section, index) => (
          <div key={index} className='mb-4'>
            <Section
              id={section.id}
              topic={section.topic}
              content={section.content}
              code={section.code}
              language={section.language}
            />
            <TryYourSelfButton path="compilerHTML" code={section.code} />
          </div>
        ))}
        <Footer />
      </div>
    </div>
  )
}

export default HtmlCourse
