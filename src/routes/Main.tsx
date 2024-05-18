// import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToHashElement from '../scrollToHashElement/scrollToHashElement.tsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

// // const downArrow = <FontAwesomeIcon icon={faArrowDown} size="sm"/>


function Main() {

  return (

    <div id="main" className="bg-black min-h-screen min-w-screen z-20">
      <canvas id="canvas" className="h-100% w-100% absolute z-10"></canvas>
      <ScrollToHashElement />
    <div className="flex h-screen">
      <div className="m-auto">
      <h1 className="text-5xl tracking-normal text-center text-white font-hindSilliguri font-thin leading-10 mx-2">
      Hello, I'm <span className="text-5xl text-red-500 font-hindSilliguri font-thin leading-10 tracking-normal inline-block">Mwani</span>.
    </h1>
    <h1 className="text-5xl tracking-normal text-white text-center font-hindSilliguri font-thin leading-15 my-2 mx-2">
      I'm a full stack software engineer.
    </h1>
    <button className='text-3xl m-auto text-red-500 font-hindSilliguri font-thin leading-10 tracking-normal block'>
        <Link to="/#about">View My Work</Link>
        {/* <Link to="/#about" className='block w-min m-auto'>{downArrow}</Link> */}
        </button>
      </div>
    </div>
    </div>
  )
}
export default Main;
