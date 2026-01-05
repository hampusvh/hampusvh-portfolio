import "@/components/layout/header.css";
import Container from "@/components/layout/Container";

function Header() {
  return (
    <header className="site-header">
      <Container><div className="header-inner">
        <div className="header-logo">
          <a className="header-mark" href="#top">HVH</a>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      </Container>
    </header>
  );
}

export default Header;
