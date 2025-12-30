import Container from "@/components/layout/Container";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { PROJECTS, type Project } from "@/data/projects";
import "@/components/sections/Projects/projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <Container>
        <div className="projects-inner">
          <div className="projects-header">
            <h2>Projects</h2>
            <p className="text-2">Selected work and experiments.</p>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((project: Project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                repoUrl={project.repoUrl}
                featured={project.featured}
              />
            ))}


          </div>

        </div>
      </Container>
    </section>
  );
}
