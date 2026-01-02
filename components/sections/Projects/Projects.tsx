import Container from "@/components/layout/Container";
import ProjectItem from "@/components/sections/Projects/ProjectItem";
import { PROJECTS } from "@/data/projects";
import "@/components/sections/Projects/projects.css";

export default function Projects() {
    return (
        <section className="section" id="projects">
            <Container>
                <div className="projects">
                    <div className="projects-content">
                        <h2 className="projects-title">Projects</h2>
                    </div>
                    <div className="projects-list" aria-label="Project list">
                        {PROJECTS.map((p) => (
                            <ProjectItem key={p.id} project={p} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
