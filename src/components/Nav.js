import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul class="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <li>Projects</li>
      </ul>
    </nav>
  );
};

export default Nav;
