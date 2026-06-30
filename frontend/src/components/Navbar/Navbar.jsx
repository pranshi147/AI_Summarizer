import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
    AI<span>Summarizer</span>
</div>

      <ul className="nav-links">
        <li>
          <a href="#upload">Upload</a>
        </li>
        <li>
          <a href="#summary">Summary</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;