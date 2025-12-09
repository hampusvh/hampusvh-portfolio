import "@/styles/sections/stack.css";

function StackSection() {
  return (
    <section className="section stack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>

        <div className="stack-grid">
          <div className="stack-group">
            <h3>Frontend</h3>
            <p>React, Next.js, TypeScript, JavaScript, Html, CSS, SAAS</p>
          </div>

          <div className="stack-group">
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs, MongoDB</p>
          </div>

          <div className="stack-group">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Figma, Postman, Storybook</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;
