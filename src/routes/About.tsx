// import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const bars = <FontAwesomeIcon icon={faBars} />

const About = () => {
  return (
    <div className="bg-black min-h-screen min-w-screen">
      <div id="about" className='min-h-screen min-w-screen'>
        <header className='bg-gray-800'>
          <div>
            <button>
              {bars}
            </button>
          </div>
        </header>
      <div className='text-4xl bg-orange-300 text-white m-auto w-min'>About</div>
      </div>
    </div>
  )
}

export default About;