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
              I’m a frontend developer with a strong focus on creating stable, secure and well-crafted web experiences.

              I care about clarity – in design, in code, and in how things feel to use.
              I enjoy taking ideas from rough sketches to polished, reliable interfaces, and I’m especially motivated by building things that people trust and enjoy interacting with.

              My background in web security helps me think a little deeper about the details, and I bring that mindset into every project I build.
            </p>

            <div className="hero-actions">
              <a href="#">View GitHub</a>
              <a href="#">LinkedIn</a>
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
