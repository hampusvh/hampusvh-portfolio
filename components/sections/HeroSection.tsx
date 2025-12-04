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
              I build secure, stable web applications with React and modern
              JavaScript.
            </p>

            <div className="hero-actions">
              <p>GitHub (placeholder)</p>
              <p>LinkedIn (placeholder)</p>
            </div>
          </div>

          <div className="hero-avatar">
            <p>Avatar</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
