import { PROJECTS } from "@/data/projects.data";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import "@/styles/sections/projects.css";

export default function Projects() {
  return (
    <Section>
      <Container>
        <div className="projects">
          <div className="projects-header">
            <h2>Projects</h2>
            <p>Selected work and experiments.</p>
          </div>

          <div className="projects-grid">
            <div className="project-card">Project</div>
            <div className="project-card">Project</div>
            <div className="project-card">Project</div>
            <div className="project-card">Project</div>
            <div className="project-card">Project</div>
            <div className="project-card">Project</div>
          </div>

          <div className="projects-footer">
            <button>View all projects</button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
