import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex p-4 text-blue-500 font-quicksand font-bold justify-center gap-4 align-middle bg-white shadow-md'>
      <Link to='/learn/html' className='hover:text-orange-500'>HTML</Link>
      <Link to='/learn/java' className='hover:text-orange-500'>Java</Link>
      <Link to='/learn/javascript' className='hover:text-orange-500'>JavaScript</Link>
      <Link to='/learn/node' className='hover:text-orange-500'>Node Js</Link>
      <Link to='/learn/mongoDb' className='hover:text-orange-500'>Mongo Db</Link>
      <Link to='/learn/mysql' className='hover:text-orange-500'>My SQL</Link>
      {/* <Link to='/learn/coding' className='hover:text-orange-500'>Coding </Link> */}
    </div>
  )
}

export default Navbar
