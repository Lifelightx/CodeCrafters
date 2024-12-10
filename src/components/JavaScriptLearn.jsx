import React from 'react'
import Topics from './Topics'
import Section from './Section'
import Footer from './Footer'
import Support from './Support'
import JavaScriptData from '../assets/Notes/JavaScriptData'

const jsData = JavaScriptData;

function JavaScriptLearn() {
  console.log('jsData', jsData)
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">JavaScript Topics</h2>
        <ul className="space-y-2">
          <Topics name='Js Questions '/>
          
        </ul>
      </div>
      <Support/>
      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn JavaScript</h1>
        {jsData.map((data, index)=>{
          return (
            <Section
              key={index}
              topic={data.topic}
              content={data.content}
              code={data.code}
              language={data.language}
            />
          )
        })}

        <Footer/>
      </div>
    </div>
  )
}

export default JavaScriptLearn
