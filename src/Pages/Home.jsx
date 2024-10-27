import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-white p-4'>
       <h1 className='text-4xl sm:text-6xl md:text-8xl font-montserrat font-bold text-center text-blue-500 mb-4'>Code Crafters</h1>
       <p className='text-lg sm:text-xl md:text-2xl font-quicksand text-center text-gray-500 mb-6'>Learn to code with ease</p>
       <Link to='/learn' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base'>Get Started</Link>
    </div>
  )
}

export default Home
