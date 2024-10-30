import React from 'react'
import { Link } from 'react-router-dom'
import CodeCrafter from '../assets/CodeCrafter.jpg'

function Home() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-white p-4'>
      <img src={CodeCrafter} alt="CodeCrafter" className='w-24 h-24 mb-4' />
       <h1 className='text-4xl sm:text-6xl md:text-7xl font-montserrat font-bold text-center text-blue-500 mb-4 px-3'>Code Crafters</h1>
       <p className='text-lg sm:text-xl md:text-2xl font-quicksand text-center text-gray-500 mb-6'>Learn to code with ease</p>
       <div className='flex flex-col sm:flex-row gap-4'>
        <Link to='/learn' className='bg-blue-500 text-slate-100 px-4 py-2 font-montserrat rounded-md hover:bg-white hover:text-blue-500 transition-colors duration-300 text-sm sm:text-base flex items-center justify-center gap-2'>
          <i className="fas fa-laptop-code"></i>
          Interview Preparation
        </Link>
        <Link to='/courses' className='bg-blue-500 text-slate-100 px-4 py-2 font-montserrat rounded-md hover:bg-white hover:text-blue-500 transition-colors duration-300 text-sm sm:text-base flex items-center justify-center gap-2'>
          <i className="fas fa-graduation-cap"></i>
          Learn Code
        </Link>
       </div>
    </div>
  )
}

export default Home
