import css from '../../assets/skills/css.png';
import express from '../../assets/skills/express.png';
import git from '../../assets/skills/git.png';
import html from '../../assets/skills/html.png';
import javascript from '../../assets/skills/javascript.png';
import mongodb from '../../assets/skills/mongodb.png';
import node from '../../assets/skills/node.png';
import postgres from '../../assets/skills/postgresql.png';
import react from '../../assets/skills/react.png';
import tailwind from '../../assets/skills/tailwind.png';
import typescript from '../../assets/skills/typescript.png';


const About = () => {

  return (<div id="about" className='min-h-screen'>
<div className='text-4xl md:text-5xl lg:text-6xl m-auto w-min mt-16 mb-10'>About</div>
<div className='text-base lg:text-xl tracking-normal w-4/5 md:w-3/4 lg:w-1/2 text-left text-wrap leading-relaxed m-auto py-2'>
  I enjoy untangling knots and constructing furniture. Software Engineering is fun because you get to find solutions and create things all the time! I'm passionate about learning and sharing.
  Outside of that I have many other interests including nature, reading, and martial arts.

  <div className='text-green-300'>Please note this website is currently a work in progress</div>
</div>

<div id="skill-container" className='flex m-auto justify-center flex-wrap w-4/5'>
  <div id="skill-row-1" className='flex-col mx-3 my-4 pt-8'>
  <div id="css" className='min-h-fit w-14 border-opacity-80 border-solid border-white'>
  <img className="bg-transparent object-scale-down" src={css} alt="CSS Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>CSS</span>
</div>
<div id="express" className='min-h-fit w-14 flex-row'>
  <img className="bg-slate-500 object-scale-down justify-center" src={express} alt="Express Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>EXPRESS</span>
</div>
<div id="git" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={git} alt="Git Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>GIT</span>
</div>
  </div>

  <div id="skill-row-2" className='flex-col mx-3 my-4'>
  <div id="html" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={html} alt="Html Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>HTML</span>
</div>
<div id="javascript" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={javascript} alt="JavaScript Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>JAVASCRIPT</span>
</div>
<div id="mongodb" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={mongodb} alt="Mongodb Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>MONGODB</span>
</div>
<div id="node" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={node} alt="Node Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>NODE.JS</span>
</div>
<div id="postgres" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={postgres} alt="Postgres Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>POSTGRESQL</span>
</div>
  </div>

  <div id="skill-row-3" className='flex-col mx-3 my-4 pt-8'>
  <div id="react" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={react} alt="React Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>REACT.JS</span>
</div>
<div id="tailwind" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={tailwind} alt="Tailwind Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>TAILWIND CSS</span>
</div>
<div id="typescript" className='min-h-fit w-14'>
  <img className="bg-transparent object-scale-down" src={typescript} alt="Typescript Logo" />
  <span className='text-sm max-w-fit max-h-fit m-auto block'>TYPESCRIPT</span>
</div>
  </div>
</div>
</div>)
}

export default About;