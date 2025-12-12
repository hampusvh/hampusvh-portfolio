import "@/styles/sections/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-logo">
          <p className="text-meta">HVH</p>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a className="text-meta" href="#projects">Projects</a></li>
            <li><a className="text-meta" href="#stack">Tech Stack</a></li>
          </ul>
        </nav>

      </div>
    </header>

  );
}

export default Header;
