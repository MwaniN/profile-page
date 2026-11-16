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
    <div id={id} className="mt-10 flex flex-col md:flex-row gap-6 w-5/6 max-w-5xl mx-auto">
      <div id="image-container" className="border-green-700 border-8 w-full md:w-1/2 h-fit">
      <img src={image} alt={alt} className='contain-content'/>
      </div>
      <div id="info" className='relative -left-5 top-1 md:top-5 lg:-left-20 lg:top-20 w-full md:w-1/2 h-fit'>
      <h2 id="title">{title}</h2>
      <h3 id="description" className="relative">{description}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">Live App</a>
      <a href={github} target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">Learn More</a>
      </div>

    </div>
  )
}

export default ProjectCard;
