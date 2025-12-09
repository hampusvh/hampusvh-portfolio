import Avatar from "@/components/ui/Avatar";
import "@/styles/sections/hero.css";

function HeroSection() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero-layout">

          <div className="hero-content">
            <p className="hero-kicker">
              FRONTEND DEVELOPER · WEB SECURITY
            </p>

            <h1>Hampus von Horn</h1>

            <p className="hero-text">
              I’m a React-focused frontend developer who enjoys turning ideas into clean, dependable interfaces.
              I care about clarity in design, in the code, and in how things feel to use.
              I approach every project with a focus on stability, security, and long-term maintainability.
            </p>

            <div className="hero-actions">
              <a href="https://github.com/hampusvh" className="hero-link">
                <img src="/icons/github.svg" alt="GitHub" className="hero-icon" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/hampusvh" className="hero-link">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="hero-icon" />
                LinkedIn
              </a>

            </div>
          </div>

          <div className="hero-avatar">
            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
