import "@/components/shell/Header/header.css";
import Container from "@/components/primitives/Container/Container";

function Header() {
  return (
    <header className="site-header">
      <Container><div className="header-inner">
        <div className="header-logo">
          <div className="header-mark">HVH</div>
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
