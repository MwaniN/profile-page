// import { Link } from 'react-router-dom';
import Header from './Header/Header.tsx';
//import { ReactComponent as Person } from "../../assets/person-outline.svg";
import css from './images/css.png';
import express from '.images/express.png';
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

  return (<div id="about" className='min-h-screen min-w-screen'>
    <Header />
<div className='text-4xl md:text-5xl lg:text-6xl text-white m-auto w-min font-hindSilliguri font-thin mt-16 mb-10'>About</div>
{/* <Person  /> */}
<div className='text-base lg:text-xl tracking-normal w-4/5 md:3/4 lg:w-1/2 text-left text-wrap text-white font-hindSilliguri font-thin leading-relaxed m-auto py-2'>
  I enjoy learning, creating new things, and finding solutions. Software engineering is fun because you get to create and learn things at the same time! When not creating or learning,
  I may be catching a movie, enjoying nature, or exercising.
</div>
<div id="CSS" className='h-[5rem] w-[5rem]'>
  <img className="z-50 bg-transparent object-scale-down" src={css} alt="CSS Logo" />
</div>
</div>)
}

export default About;