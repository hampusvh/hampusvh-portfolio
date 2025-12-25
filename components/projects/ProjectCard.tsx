import { Project } from "@/data/projects.data";

interface Props {
    project: Project;
}

function ProjectCard({ project }: Props) {
    return (
        <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-entry"
        >
            <h3 className="project-title">
                {project.title}
                <span className="project-arrow">→</span>
            </h3>

            <p className="project-description">
                {project.description}
            </p>

            <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
}


export default ProjectCard;