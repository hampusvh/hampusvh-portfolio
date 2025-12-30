type ProjectCardProps = {
    title: string;
    description: string;
    tags: string[];
    featured?: boolean;
    repoUrl?: string;
};

export default function ProjectCard({
    title,
    description,
    tags,
    featured = false,
    repoUrl,
}: ProjectCardProps) {
    return (
        <article className={`project-card ${featured ? "is-featured" : ""}`}>
            <h3 className="project-card__title">{title}</h3>

            <p className="project-card__description">{description}</p>

            <div className="project-card__footer">
                <p className="project-card__tags text-3">{tags.join(" · ")}</p>

                {repoUrl ? (
                    <a
                        className="project-card__link text-2"
                        href={repoUrl}
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
