import Container from "@/components/layout/Container";
import Avatar from "@/components/ui/Avatar";
import "@/styles/sections/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">
              FRONTEND DEVELOPER · WEB SECURITY
            </p>
            <h1 className="hero-title">Hampus von Horn</h1>
            <p className="hero-description">
              I’m a React-focused frontend developer who enjoys turning ideas into clean, dependable interfaces.
              I care about clarity in design, in the code, and in how things feel to use.
              I approach every project with a focus on stability, security, and long-term maintainability.            </p>

            <div className="hero-actions">
              <button className="btn-primary">Primary action</button>
              <button className="btn-secondary">Secondary action</button>
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
