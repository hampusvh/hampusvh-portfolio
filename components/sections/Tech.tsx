import "@/styles/sections/stack.css";

function StackSection() {
  return (
    <section id="stack" className="section stack">
      <div className="container">
        <h2 className="heading-section">Technologies I Use</h2>

        <div className="stack-grid">
          <div className="stack-group">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
            </ul>
          </div>

          <div className="stack-group">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="stack-group">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>Storybook</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StackSection;
