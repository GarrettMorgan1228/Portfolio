import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="inner-header">
        <h1 className="header-title">Garrett's Portfolio</h1>
        <nav className="nav">
          <a href="https://garrettstevenmorgan.com" className="nav-link">
            Home
          </a>
          <a href="/#about" className="nav-link">
            About
          </a>
          <a href="/#projects" className="nav-link">
            Projects
          </a>
          <a href="/#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
