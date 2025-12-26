import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import "@/styles/sections/tech.css";

export default function Tech() {
  return (
    <Section>
      <Container>
        <div className="tech">
          <div className="tech-column">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="tech-column">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="tech-column">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
