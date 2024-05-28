// template / outline for each project represented.
// pass in info from the top level componenet calling it
// use grid to overlay pieces

// include background image
// name and link if applicable, also "Learn More" should go to GitHub

import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string,
  url: string,
  github:string,
  description: string,
  image: string,
  alt: string,
  id: string
}

const ProjectCard = ( { title, url, description, github, image, alt, id} : ProjectCardProps ) => {

  return (
    <div id={id} className="mt-10 flex w-3/4">
      <div id="image-container" className="bg-green-700">
      <img src={image} alt={alt}/>
      </div>
      <div id="info">
      <h2 id="title" className="text-white">{title}</h2>
      <h3 id="description" className="text-white">{description}</h3>
      <a href={url} className="text-white block hover:text-green-400">
      <Link to="/#projects">Live App</Link></a>
      <a href={github} target="_blank" className="text-white block hover:text-green-400">Learn More</a>
      </div>

    </div>
  )
}

export default ProjectCard;