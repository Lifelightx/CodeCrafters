import React from 'react'
import Topics from './Topics'
import Section from './Section'

function Mysql() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 md:fixed md:h-screen md:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">SQL Topics</h2>
        <ul className="space-y-2">
          <Topics name="Introduction"/>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full md:w-3/4 p-4 md:ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn SQL</h1>
        <Section id="introduction" topic="Introduction" content="Introduction to SQL" />
      </div>
    </div>
  )
}

export default Mysql
