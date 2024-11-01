import React from 'react'
import { useNavigate } from 'react-router-dom'

function TryYourSelfButton({ path, code }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${path}`, { state: { initialCode: code } });
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mb-1 rounded-md transition-colors duration-200'>
        Try it Yourself
      </button>
    </div>
  )
}

export default TryYourSelfButton
