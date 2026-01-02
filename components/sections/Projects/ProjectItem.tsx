import type { Project } from "@/data/projects";

type Props = {
    project: Project;
};

export default function ProjectItem({ project }: Props) {
    if (!project.repoUrl) return null;
    return (
        <a
            className="project"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
        >
            <article>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                    <p className="project-tags">{project.tags.join(" · ")}</p>
                    <span className="project-link">View repo</span>
                </div>
            </article>
        </a>
    );
}
