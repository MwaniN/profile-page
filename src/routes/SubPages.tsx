// import React from 'react';
import About from './SubPageFolder/About.tsx';
import Projects from './SubPageFolder/Projects.tsx'
import Contact from './SubPageFolder/Contact.tsx';
import Header from './SubPageFolder/Header/Header.tsx';

// make the header persist before changing pages

const SubPages = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default SubPages;