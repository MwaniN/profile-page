// import { Link } from 'react-router-dom';
import Header from './Header/Header.tsx';
//import { ReactComponent as Person } from "../../assets/person-outline.svg";
import css from './images/css.png';
import express from './images/express.png';
import git from './images/git.png';
import html from './images/html.png';
import javascript from './images/javascript.png';
import mongodb from './images/mongodb.png';
import node from './images/node.png';
import postgres from './images/postgresql.png';
import react from './images/react.png';
import tailwind from './images/tailwind.png';
import typescript from './images/typescript.png';


const About = () => {

  // start with two divs
  // each div shall be flex.. so it can be responsive
  // sub divs for text boxes and images
  // create image asset folder for png files
  // deliver short story and show technologies.
  // div 1 > image div - text div < div 1
  // use an svg path to create the image for above in css
  // div 2 > images all with their own div and a border <div 2
  // make them side by side on larger screens and on top of the other on smaller screens

// MAKE SEPARATE VARIABLES FOR ICON SIZE, PUT BREAKPOINTS AT EACH ICON REFERRING
// TO THE INDIVIDUAL VARIABLES WICH CAN BE UPDATED IN ONE PLACE

  return (<div id="about" className='min-h-screen min-w-screen'>
    <Header />
<div className='text-4xl md:text-5xl lg:text-6xl text-white m-auto w-min font-hindSilliguri font-thin mt-16 mb-10'>About</div>
{/* <Person  /> */}
<div className='text-base lg:text-xl tracking-normal w-4/5 md:3/4 lg:w-1/2 text-left text-wrap text-white font-hindSilliguri font-thin leading-relaxed m-auto py-2'>
  I enjoy learning new things, creating new things, and finding solutions. Software engineering is fun because you get to create and learn at the same time. When not at my computer I may
  be catching a movie, enjoying nature, or staying fit.
</div>

<div id="skill-container" className='flex m-auto justify-center flex-wrap w-4/5'>
  <div id="skill-row-1" className='flex-col mx-3 my-4 pt-8'>
  <div id="css" className='min-h-fit w-[6vh] border-opacity-80 border-solid border-white'>
  <img className="bg-transparent object-scale-down" src={css} alt="CSS Logo" />
  <text className='text-sm text-white max-w-fit max-h-fit m-auto block'>CSS</text>
</div>
<div id="express" className='h-[6vh] w-[6vh]'>
  <img className="bg-slate-500 object-scale-down" src={express} alt="Express Logo" />
</div>
<div id="git" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={git} alt="Git Logo" />
</div>
  </div>

  <div id="skill-row-2" className='flex-col mx-3 my-4'>
  <div id="html" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={html} alt="Html Logo" />
</div>
<div id="javascript" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={javascript} alt="Git Logo" />
</div>
<div id="mongodb" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={mongodb} alt="Mongodb Logo" />
</div>
<div id="node" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={node} alt="Node Logo" />
</div>
<div id="postgres" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={postgres} alt="Postgres Logo" />
</div>
  </div>

  <div id="skill-row-3" className='flex-col mx-3 my-4 pt-8'>
  <div id="react" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={react} alt="React Logo" />
</div>
<div id="tailwind" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={tailwind} alt="Tailwind Logo" />
</div>
<div id="typescript" className='h-[6vh] w-[6vh]'>
  <img className="bg-transparent object-scale-down" src={typescript} alt="Typescript Logo" />
</div>
  </div>
</div>
</div>)
}

export default About;