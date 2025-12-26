import Container from "@/components/layout/Container";
import "@/styles/sections/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Eyebrow</p>
            <h1 className="hero-title">Hero headline</h1>
            <p className="hero-description">
              Short introductory paragraph goes here.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">Primary action</button>
              <button className="btn-secondary">Secondary action</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-slot" />
          </div>
        </div>
      </Container>
    </section>
  );
}
