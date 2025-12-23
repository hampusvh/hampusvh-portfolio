import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import "@/styles/sections/projects.css";

const featuredProjects = PROJECTS.filter(project => project.featured);
const otherProjects = PROJECTS.filter(project => !project.featured);

function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="heading-section">Featured Projects</h2>

        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <h3 className="heading-subsection">Other Projects</h3>

        <ul className="projects-list">
          {otherProjects.map(project => (
            <li key={project.id}>
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;
