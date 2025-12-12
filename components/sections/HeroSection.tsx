import Avatar from "@/components/ui/Avatar";
import "@/styles/sections/hero.css";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";


function HeroSection() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero-layout">

          <div className="hero-content">
            <p className="text-meta hero-kicker">
              FRONTEND DEVELOPER · WEB SECURITY
            </p>

            <h1 className="heading-page">Hampus von Horn</h1>

            <p className="text-body hero-text">
              I’m a React-focused frontend developer who enjoys turning ideas into clean, dependable interfaces.
              I care about clarity in design, in the code, and in how things feel to use.
              I approach every project with a focus on stability, security, and long-term maintainability.
            </p>

            <div className="hero-actions">
              <a
                href="https://github.com/DITT_USERNAME"
                className="hero-link"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="hero-icon" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/DITT_USERNAME"
                className="hero-link"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="hero-icon" />
                <span>LinkedIn</span>
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
