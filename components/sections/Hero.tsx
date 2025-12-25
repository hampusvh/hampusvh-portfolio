import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import "@/styles/sections/hero.css";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p>Eyebrow</p>
            <h1>Hero headline</h1>
            <p>Short introductory paragraph goes here.</p>

            <div className="hero-actions">
              <button>Primary action</button>
              <button>Secondary action</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-slot" />
          </div>
        </div>
      </Container>
    </Section>
  );
}