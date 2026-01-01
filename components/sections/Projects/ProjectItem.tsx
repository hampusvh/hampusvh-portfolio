import type { Project } from "@/data/projects";

type Props = {
    project: Project;
};

export default function ProjectItem({ project }: Props) {
    return (
        <article className="project">
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-meta">
                <p className="project-tags">{project.tags.join(" · ")}</p>

                {project.repoUrl ? (
                    <a
                        className="project-link"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View repo
                    </a>
                ) : null}
            </div>
        </article>
    );
}