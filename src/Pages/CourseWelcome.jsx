import React from 'react'

function CourseWelcome() {
  return (
    <div>
      <div 
        className="flex flex-col items-center h-screen justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h1 className="text-6xl font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Welcome to Our Courses
        </h1>
        <p className="text-xl text-gray-600 mb-12 font-montserrat text-center max-w-3xl px-4 animate-fade-in-up">
          Embark on your coding journey with our expertly crafted courses. Master the skills that will shape the future of technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 w-full max-w-7xl">
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <i className="fab fa-react text-3xl text-blue-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">React</h2>
            <p className="text-gray-600 group-hover:text-gray-700">Learn modern React development with hands-on projects and real-world applications</p>
          </div>
          
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 group-hover:bg-yellow-200 transition-colors">
              <i className="fab fa-js text-3xl text-yellow-500"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-500 transition-colors">JavaScript</h2>
            <p className="text-gray-600 group-hover:text-gray-700">Master core JavaScript concepts and build powerful interactive applications</p>
          </div>
          
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
              <i className="fab fa-css3 text-3xl text-indigo-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors">CSS</h2>
            <p className="text-gray-600 group-hover:text-gray-700">Create stunning and responsive web designs with modern CSS techniques</p>
          </div>
          
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
              <i className="fas fa-database text-3xl text-green-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">MySQL</h2>
            <p className="text-gray-600 group-hover:text-gray-700">Build and manage efficient databases with industry-standard practices</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseWelcome
