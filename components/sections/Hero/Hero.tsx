import Container from "@/components/layout/Container";
import Avatar from "@/components/sections/Hero/Avatar";
import "@/components/sections/Hero/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow eyebrow">
              FRONTEND DEVELOPER · WEB SECURITY
            </p>

            <h1 className="hero-title">
              Hampus von Horn
            </h1>

            <p className="hero-description lead">
              I’m a React-focused frontend developer who enjoys turning ideas into clean, dependable interfaces.
              I care about clarity in design, in the code, and in how things feel to use.
              I approach every project with a focus on stability, security, and long-term maintainability.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <Avatar />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
