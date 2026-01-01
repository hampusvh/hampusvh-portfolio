import Container from "@/components/layout/Container";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { PROJECTS, type Project } from "@/data/projects";
import "@/components/sections/Projects/projects.css";

export default function Projects() {
  const visibleProjects = PROJECTS.filter(
    (project: Project) => project.visible
  );

  return (
    <section className="projects">
      <Container>
        <div className="projects-inner">
          <div className="section-header">
            <h2>Projects</h2>
            <p className="section-description">
              Selected work and experiments.
            </p>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project: Project) => (
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
