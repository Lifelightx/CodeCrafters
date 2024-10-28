import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const courses = ['HTML', 'Java', 'JavaScript', 'Node Js', 'Mongo Db', 'My SQL', 'React Js', 'Tailwind Css', 'Bootstrap', 'Git & Github', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'Docker', 'Kubernetes', 'AWS', 'Linux'];

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-blue-500 font-quicksand font-bold">CodeCrafters</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 px-2 overflow-x-auto scrollbar-hide" style={{maxWidth: 'calc(100vw - 300px)'}}>
              {courses.map((topic, index) => (
                <Link 
                  key={index} 
                  to={`/learn/${topic.toLowerCase().replace(' ', '')}`} 
                  className="text-blue-500 hover:text-orange-500 px-3 py-2 rounded-md text-md font-medium whitespace-nowrap"
                >
                  {topic}
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
            {courses.map((topic, index) => (
              <a
                key={index}
                href={`/learn/${topic.toLowerCase().replace(' ', '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(`/learn/${topic.toLowerCase().replace(' ', '')}`);
                }}
                className="text-blue-500 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
