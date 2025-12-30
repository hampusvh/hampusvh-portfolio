import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS, type Project } from "@/data/projects.data";
import "@/styles/sections/projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <Container>
        <div className="projects-inner">
          <div className="projects-header">
            <h2>Projects</h2>
            <p>Selected work and experiments.</p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((project: Project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
              />
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}
