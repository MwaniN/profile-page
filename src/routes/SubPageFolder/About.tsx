// import { Link } from 'react-router-dom';
import Header from './Header/Header.tsx';

const About = () => {

  // start with two divs
  // each div shall be flex.. so it can be responsive
  // sub divs for text boxes and images
  // create image asset folder for png files
  // deliver short story and show technologies.
  // div 1 > image div - text div < div 1
  // div 2 > images all with their own div and a border <div 2
  // make them side by side on larger screens and on top of the other on smaller screens

  return (<div id="about" className='min-h-screen min-w-screen'>
    <Header />
<div className='text-4xl bg-orange-300 text-white m-auto w-min font-hindSilliguri font-thin'>About</div>
</div>)
}

export default About;