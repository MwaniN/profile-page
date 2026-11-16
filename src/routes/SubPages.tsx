import About from './SubPageFolder/About.tsx';
import Projects from './SubPageFolder/Projects.tsx'
import Contact from './SubPageFolder/Contact.tsx';
import Header from './SubPageFolder/Header/Header.tsx';

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