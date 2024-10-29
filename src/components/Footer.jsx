import React from 'react'
import CodeCrafter from '../assets/CodeCrafter.jpg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <img src={CodeCrafter} alt="CodeCrafter" className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-blue-500 font-montserrat">Code Crafters</h3>
            </div>
            <p className="text-gray-400 font-quicksand text-center">Learn to code with ease</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/learn" className="text-gray-400 hover:text-white transition-colors">Interview Prep</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Lifelightx" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/jeebanjyoti/" className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Code Crafters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
