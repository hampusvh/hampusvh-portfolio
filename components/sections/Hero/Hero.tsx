import Container from "@/components/layout/Container";
import Section from "@/components/primitives/Section/Section";
import Avatar from "@/components/sections/Hero/Avatar/Avatar";
import "@/components/sections/Hero/hero.css";
import Button from "@/components/primitives/Button/Button";

export default function Hero() {
  return (
    <Section spacing="loose" id="top">
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
              <Button as="a" href="#projects" variant="primary">
                View selected projects ↓
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <Avatar />
          </div>
        </div>
      </Container>
    </Section>
  );
}
