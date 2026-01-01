import Container from "@/components/layout/Container";
import "@/components/sections/TechStack/tech-stack.css";

export default function Tech() {
  return (
    <section className="tech">
      <Container>
        <div className="tech-inner">
          <div className="section-header">
            <h2>Tech Stack</h2>
            <p className="section-description">Technologies and tools I work with.</p>
          </div>

          <div className="tech-grid">
            <div className="tech-column">
              <h3 className="tech-title">Frontend</h3>
              <ul className="tech-list text-2">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>CSS</li>
              </ul>
            </div>

            <div className="tech-column">
              <h3 className="tech-title">Backend</h3>
              <ul className="tech-list text-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>REST APIs</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="tech-column">
              <h3 className="tech-title">Tools</h3>
              <ul className="tech-list text-2">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>


        </div>
      </Container>
    </section>
  );
}
