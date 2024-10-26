import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Learn() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default Learn
