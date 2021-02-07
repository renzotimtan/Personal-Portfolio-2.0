import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <nav>
      <ul class="nav-links">
        <Link to="/">
          <li className={activePath === "/" ? "active" : ""}>Home</li>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/" ? "100%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></motion.div>
        </Link>
        <Link to="/about">
          <li className={activePath === "/about" ? "active" : ""}>About</li>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/about" ? "100%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></motion.div>
        </Link>
        <Link to="/about">
          <li>Projects</li>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: activePath === "/projects" ? "100%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></motion.div>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
