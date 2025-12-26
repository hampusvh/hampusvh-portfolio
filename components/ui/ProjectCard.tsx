import "@/styles/ui/card.css";

type ProjectCardProps = {
    title?: string;
};

export default function ProjectCard({ title = "Project" }: ProjectCardProps) {
    return (
        <article className="project-card">
            <h3>{title}</h3>
        </article>
    );
}
