import { motion } from "framer-motion";
import { flowDown, fade } from "../framerStyles";
import heading from "../img/heading.png";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      {/* Image */}
      <div className="image">
        <img src={heading} alt="" />
      </div>
      {/* Heading */}
      <div className="heading">
        <motion.h1 variants={flowDown}>Renzo Tan</motion.h1>
      </div>
      {/* Subheading */}
      <div className="subheading">
        <motion.h2 variants={flowDown}>A Design-driven Web Developer</motion.h2>
      </div>
      {/* Quick Links */}
      <motion.div className="quick-links" variants={fade}>
        <a
          href="https://github.com/renzotimtan"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/renzotimtan/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="mailto:renzotimtan@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
