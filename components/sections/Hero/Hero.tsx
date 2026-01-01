import Container from "@/components/layout/Container";
import Avatar from "@/components/sections/Hero/Avatar/Avatar";
import "@/components/sections/Hero/hero.css";

export default function Hero() {
  return (
    <section className="section section--hero" id="top">      <Container>
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-eyebrow">Frontend Developer · Web Security</p>

          <h1 className="hero-title">Hampus von Horn</h1>
          <p className="hero-description">
            I build calm, dependable interfaces with a focus on clarity,
            security, and long-term maintainability.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-cta hero-cta--primary">
              View projects
            </a>
            <a href="#contact" className="hero-cta hero-cta--secondary">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <Avatar />
        </div>
      </div>
    </Container>
    </section>
  );
}
