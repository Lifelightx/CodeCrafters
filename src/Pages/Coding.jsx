import React from 'react'
import Topics from '../components/Topics'
import Section from '../components/Section'

function Coding() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 fixed h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Coding Topics</h2>
        <ul className="space-y-2">
          <Topics name="Coding Basics"/>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-4 ml-[25%] overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Learn Coding Basics</h1>
        <Section id="coding-basics" topic="Intro" content="Coding is the process of writing instructions for a computer to execute. These instructions are written in a programming language, which is a set of rules that the computer can understand and execute." />
      </div>
    </div>
  )
}

export default Coding
