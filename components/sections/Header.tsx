import "@/styles/sections/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-logo">
          <p>HVH</p>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#stack">Tech Stack</a></li>
          </ul>
        </nav>

      </div>
    </header>

  );
}

export default Header;
