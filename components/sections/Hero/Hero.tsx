import Container from "@/components/layout/Container";
import Avatar from "@/components/sections/Hero/Avatar/Avatar";
import "@/components/sections/Hero/hero.css";

export default function Hero() {
  return (
    <section className="section" id="top">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Frontend Developer · Web Security</p>

            <h1 className="hero-title">Hampus von Horn</h1>
            <p className="hero-description">
              I design and build secure, calm frontend interfaces
              with a strong focus on clarity and long-term maintainability.

              When needed, I work across the stack to ensure
              robust security, predictable behavior, and durable systems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-cta hero-cta--primary">
                View selected projects ↓
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
