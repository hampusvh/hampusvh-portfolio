import "@/components/layout/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-logo">
          <p className="header-mark text-3">HVH</p>
        </div>

        <nav className="header-nav">
          <ul>
            <li><a className="text-3" href="#projects">Projects</a></li>
            <li><a className="text-3" href="#stack">Tech Stack</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
