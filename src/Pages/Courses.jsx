import React from 'react'
import CourseNavbar from '../components/CourseNavbar'
import { Outlet } from 'react-router-dom'

function Courses() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10">
        <CourseNavbar />
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default Courses
