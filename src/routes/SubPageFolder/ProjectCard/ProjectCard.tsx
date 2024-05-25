// template / outline for each project represented.
// pass in info from the top level componenet calling it
// use grid to overlay pieces

// include background image
// name and link if applicable, also "Learn More" should go to GitHub

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
    <div id={id}>
      <h2 id="title" className="text-white">{title}</h2>
      <h3 id="description" className="text-white">{description}</h3>
      <a href={url} className="text-white">Live App</a>
      <a href={github} className="text-white">Learn More</a>
      <img src={image} alt={alt} />


    </div>
  )
}

export default ProjectCard;