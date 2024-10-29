import React from 'react'
import { Link } from 'react-router-dom'

function TryYourSelfButton({path}) {
  return (
    <div>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md'><Link to={`/courses/${path}`}>Try it Yourself</Link></button>
    </div>
  )
}

export default TryYourSelfButton
