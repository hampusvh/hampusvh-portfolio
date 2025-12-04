import Card from "@/components/ui/Card";
import "@/styles/sections/projects.css";

function ProjectsSection() {
  return (
<section className="section projects">
  <div className="container">
    <h2>Projects</h2>
    <div className="projects-grid">
        <Card>
            <h3>Project One</h3>
            <p>Description of Project One.</p>
        </Card>
        <Card>
            <h3>Project Two</h3>
            <p>Description of Project Two.</p>
        </Card>
        <Card>
            <h3>Project Three</h3>
            <p>Description of Project Three.</p>
        </Card>
                <Card>
            <h3>Project Four</h3>
            <p>Description of Project Four.</p>
        </Card>
        <Card>
            <h3>Project Five</h3>
            <p>Description of Project Five.</p>
        </Card>
        <Card>
            <h3>Project Six</h3>
            <p>Description of Project Six.</p>
        </Card>
  </div>
  </div>
</section>
  );
}

export default ProjectsSection;