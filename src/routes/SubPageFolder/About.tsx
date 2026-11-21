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

const skills = [
  { name: 'React.js', icon: react },
  { name: 'Express', icon: express, iconBg: 'bg-slate-500' },
  { name: 'Git', icon: git },
  { name: 'JavaScript', icon: javascript },
  { name: 'HTML', icon: html },
  { name: 'PostgreSQL', icon: postgres },
  { name: 'Node.js', icon: node },
  { name: 'MongoDB', icon: mongodb },
  { name: 'CSS', icon: css },
  { name: 'TypeScript', icon: typescript },
  { name: 'Tailwind CSS', icon: tailwind },
];

const skillColumns = [
  skills.slice(0, 3), // React.js, Express, Git
  skills.slice(3, 8), // JavaScript, HTML, PostgreSQL, Node.js, MongoDB
  skills.slice(8),    // CSS, TypeScript, Tailwind CSS
];

const About = () => {

  return (<div id="about" className='min-h-screen'>
<div className='text-4xl md:text-5xl lg:text-6xl m-auto w-min mt-16 mb-10'>About</div>
<div className='text-base lg:text-xl tracking-normal w-4/5 md:w-3/4 lg:w-1/2 text-left text-wrap leading-relaxed m-auto py-2'>
  I enjoy untangling knots and constructing furniture. Software Engineering is fun because you get to find solutions and create things all the time! I'm passionate about learning and sharing.
  Outside of that I have many other interests including nature, reading, and martial arts.
</div>

<div id="skill-container" className='flex items-center justify-center gap-2 m-auto w-4/5'>
  {skillColumns.map((column, index) => (
    <div key={index} className='flex flex-col gap-6'>
      {column.map((skill) => (
        <div key={skill.name} className='w-24'>
          <img
            className={`w-14 mx-auto object-scale-down ${skill.iconBg ?? ''}`}
            src={skill.icon}
            alt={`${skill.name} logo`}
          />
          <span className='text-sm uppercase block text-center'>{skill.name}</span>
        </div>
      ))}
    </div>
  ))}
</div>
</div>)
}

export default About;