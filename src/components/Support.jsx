import React from 'react'

function Support() {
    return (
      <div className="relative">
        <div className="fixed bottom-4 right-4 z-[9999]">
          <button 
            onClick={() => window.open('https://chat.openai.com', '_blank', 'width=400,height=600')}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2 transition-colors duration-300"
          >
            <i className="fas fa-robot"></i>
            
          </button>
        </div>
      </div>
    )
  }

export default Support