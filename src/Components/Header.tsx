import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experiences">Experiences</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Header;
