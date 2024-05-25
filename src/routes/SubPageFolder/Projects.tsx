
import ProjectCard from "./ProjectCard/ProjectCard";


const projects = [
  {
    title: "Portfolio Site",
    url: "mwani.info/#projects",
    github: "https://github.com/MwaniN/profile-page",
    description: "The site you're on right now, built with TypeScript, React and Tailwind CSS",
    image: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Test landscape picture",
    id: "portfolio-site"

  }
]

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen min-w-screen">
      <div className="text-white w-min m-auto text-5xl pt-16">Projects</div>
      {function () {
        const projectList = projects.map(({ title, url, github, description, image, alt, id }) => {
          return <ProjectCard title={title} url={url} github={github} description={description}
          image={image} alt={alt} id={id} key={id} />
        })

        return projectList
      }()}
    </div>
  )
}

export default Projects;