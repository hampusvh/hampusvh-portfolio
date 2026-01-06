import type { Project } from "@/data/projects";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import Card from "@/components/primitives/Card/Card";

type Props = {
    project: Project;
};

export default function ProjectItem({ project }: Props) {
    if (!project.repoUrl) return null;

    const className = project.featured ? "project project--featured" : "project";

    return (
        <Card
            as="a"
            className={className}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} – open GitHub repository`}
        >
            <article>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                    <p className="project-tags">{project.tags.join(" · ")}</p>
                    <span className="project-destination" aria-hidden="true">
                        <GitHubIcon width={18} height={18} />
                        <span className="project-destination-label">Repository</span>
                    </span>
                </div>
            </article>
        </Card>
    );
}
