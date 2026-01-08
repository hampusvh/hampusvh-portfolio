import Container from "@/components/primitives/Container/Container";
import Section from "@/components/primitives/Section/Section";
import Avatar from "@/components/sections/Hero/Avatar/Avatar";
import "@/components/sections/Hero/hero.css";
import Button from "@/components/primitives/Button/Button";

export default function Hero() {
  return (
    <Section spacing="loose" inset={{ bottom: "tight" }} id="top">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Frontend Developer · Web Security</p>

            <h1 className="hero-title">Hampus von Horn</h1>

            <p className="hero-description">
              I build frontend interfaces with a strong focus on web security, structure, and clarity.
              I’m particularly interested in UX/UI and enjoy working across design, APIs, and backend integrations to create predictable, maintainable systems.
            </p>

            <div className="hero-actions" aria-label="Hero actions">
              <Button as="a" href="#projects" variant="primary">
                View selected projects
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
