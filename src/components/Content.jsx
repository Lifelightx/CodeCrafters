import React from 'react'
import Topics from './Topics'
import Section from './Section'

function Content({pageName, name, id, topic, content}) {
  return (
    <div className="flex">
    {/* Sidebar */}
    <div className="w-1/4 bg-gray-100 p-4 fixed h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">{pageName} Topics</h2>
      <ul className="space-y-2">
        <Topics name={name}/>
      </ul>
    </div>

    {/* Main content */}
    <div className="w-3/4 p-4 ml-[25%] overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Learn {pageName}</h1>
      <Section id={id} topic={topic} content={content} />
    </div>
  </div>
  )
}

export default Content
