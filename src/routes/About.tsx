// import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-black min-h-screen min-w-screen">
      <div id="about" className='min-h-screen min-w-screen'>
        <header className='flex items-center bg-gray-800 justify-end px-3 py-3'>
            <ul className='text-blue-200 flex items-center'>
              <li className='px-1 hover:text-white focus:text-white focus:outline-none'>
              <Link to="/#main">Home</Link>
                </li>
              <li className='px-1 hover:text-white focus:text-white focus:outline-none'>
              <Link to="/#about">About</Link>
              </li>
              <li className='px-1 hover:text-white focus:text-white focus:outline-none'>Projects</li>
              <li className='px-1 hover:text-white focus:text-white focus:outline-none'>Contact</li>
            </ul>
        </header>
      <div className='text-4xl bg-orange-300 text-white m-auto w-min'>About</div>
      </div>
    </div>
  )
}

export default About;