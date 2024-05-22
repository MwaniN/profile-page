// import { Link } from 'react-router-dom';
import Header from './Header/Header.tsx';
import Person from "../assets/person-outline.svg";

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
<div className='text-4xl md:text-5xl lg:text-6xl text-white m-auto w-min font-hindSilliguri font-thin mt-16 md:mb-8'>About</div>
<Person />
<div className='text-base tracking-normal lg:w-1/3 md:m-auto text-left text-wrap text-white font-hindSilliguri font-thin leading-relaxed mx-2 sm:mt-8 px-3 py-2'>
  I live to learn something new every day. I also enjoy making things.
  I also enjoy figuring out solutions to things. I actually enjoy trying to untangle knots, because it's fun and can be a meditative practice where you constantly have to
  check / reevaluate your assumptions. Software engineering is fun because you get to create and learn things at the same time! When not creating or learning,
  I may be catching a movie, enjoying nature, or exercising.
</div>
</div>)
}

export default About;