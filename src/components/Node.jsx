import React from 'react'
import Footer from './Footer'
import Topics from './Topics'
import Section from './Section'
import NodeData from '../assets/Notes/NodeData'
import Support from './Support'
function Node() {
  const sectionData = NodeData

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Node Js Topics</h2>
        <ul className="space-y-2">
          <Topics name="Node Js FAQs"/>
        </ul>
      </div>
      <Support/>
      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn Node Js</h1>
        {sectionData.map((item) => (
          <Section
            key={item.id}
            id={item.id}
            topic={item.topic}
            content={item.content}
            code={item.code}
            language={item.language}
          />
        ))}

        <Footer/>
      </div>
    </div>
  )
}

export default Node
