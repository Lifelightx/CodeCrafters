import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'
import Support from './Support'
import MySqlData from '../assets/Notes/MySqlData'

function Mysql() {
  const sectionData = MySqlData;
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">SQL Topics</h2>
        <ul className="space-y-2">
          <Topics name="SQL FAQs"/>
        </ul>
      </div>
      <Support/>
      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn SQL</h1>

        {/* Introduction Section */}
        {sectionData.map((section) => (
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

export default Mysql
