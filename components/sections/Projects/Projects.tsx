import Container from "@/components/layout/Container";
import ProjectItem from "@/components/sections/Projects/ProjectItem";
import { PROJECTS } from "@/data/projects";
import "@/components/sections/Projects/projects.css";

export default function Projects() {
    const visibleProjects = PROJECTS
        .filter((p) => p.visible)
        .sort((a, b) => a.order - b.order);

    return (
        <section className="section" id="projects">
            <Container>
                <div className="projects">
                    <div className="projects-content">
                        <h2 className="projects-title">Projects</h2>
                    </div>

                    <div className="projects-list" aria-label="Project list">
                        {visibleProjects.map((p) => (
                            <ProjectItem key={p.id} project={p} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
