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
              I focus on building clear, maintainable interfaces with structure and security in mind.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
