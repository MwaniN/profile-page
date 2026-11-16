
import ProjectCard from "./ProjectCard/ProjectCard";
import portfolio from "../../assets/projects/portfolio-site.png";


const projects = [
  {
    title: "Portfolio Site",
    url: "https://mwani.info",
    github: "https://github.com/MwaniN/profile-page",
    description: "This site, built with TypeScript, React and Tailwind CSS",
    image: portfolio,
    alt: "Screenshot of the portfolio site's home page, reading \"Hello, I'm Mwani. I'm a full stack software engineer.\"",
    id: "portfolio-site"

  }
]

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen">
      <div className="w-min m-auto text-5xl pt-16">Projects</div>
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