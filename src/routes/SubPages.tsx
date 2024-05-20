// import React from 'react';
import About from './SubPageFolder/About.tsx';
import Projects from './SubPageFolder/Projects.tsx'

// make the header persist before changing pages

const SubPages = () => {
  return (
    <div className="bg-black min-h-screen min-w-screen">
      <About />
      <Projects />
    </div>
  )
}

export default SubPages;