import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CodeCrafter from '../assets/CodeCrafter.jpg'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const courses = [
    { name: 'HTML', icon: 'fa-html5', color: 'text-orange-600' },
    { name: 'Java', icon: 'fa-java', color: 'text-red-600' },
    { name: 'JavaScript', icon: 'fa-js', color: 'text-yellow-500' },
    { name: 'Node Js', icon: 'fa-node-js', color: 'text-green-600' },
    { name: 'Mongo Db', icon: 'fas fa-database', color: 'text-green-700' },
    { name: 'My SQL', icon: 'fas fa-database', color: 'text-blue-800' },
    { name: 'React Js', icon: 'fa-react', color: 'text-cyan-500' },
    { name: 'Css', icon: 'fa-css3', color: 'text-blue-600' },
    { name: 'Bootstrap', icon: 'fa-bootstrap', color: 'text-purple-600' },
    { name: 'Git', icon: 'fa-github', color: 'text-gray-800' },
    
  ];

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={CodeCrafter} alt="CodeCrafter" className='w-16 h-16 ' />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 overflow-x-auto scrollbar-hide" style={{maxWidth: 'calc(100vw - 300px)'}}>
              
              {courses.map((course, index) => (
                <Link 
                  key={index} 
                  to={`/learn/${course.name.toLowerCase().replace(' ', '')}`} 
                  className="text-blue-600 hover:text-orange-500 px-3 py-2 rounded-md text-md font-medium whitespace-nowrap flex items-center gap-1"
                >
                  <i className={`fab ${course.icon} ${course.color}`}></i>
                  <span>{course.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <span className="block h-6 w-6 text-2xl">×</span>
              ) : (
                <span className="block h-6 w-6 text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {courses.map((course, index) => (
              <a
                key={index}
                href={`/learn/${course.name.toLowerCase().replace(' ', '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(`/learn/${course.name.toLowerCase().replace(' ', '')}`);
                }}
                className="text-blue-500 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              >
                <i className={`fab ${course.icon} ${course.color}`}></i>
                <span>{course.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
