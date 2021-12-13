import { parentHeader } from "../framerStyles";
import { motion } from "framer-motion";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <motion.section
      variants={parentHeader}
      initial="hidden"
      animate="show"
      exit="exit"
      className="about-header"
    >
      <motion.h1 className="about-title">About</motion.h1>

      <div className="about-sections">
        <div className="about-section">
          <h2>
            Education <FontAwesomeIcon icon={faGraduationCap} />
          </h2>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: "90%" }}
            transition={{ duration: 1.75, ease: "easeOut" }}
          ></motion.div>
          <div className="about-section__content">
            <ul>
              <li>
                <span>Expected Graduation:</span> <br />
                May 2022
              </li>
              <li>
                <span>Undergraduate Degree:</span>
                <br />
                BS, Management Information Systems
              </li>
              <li>
                <span>College/University:</span>
                <br />
                Ateneo De Manila University, Philippines
              </li>
              <li>
                <span>Cumulative Quality Point Index:</span>
                <br />
                3.63 / 4.00, Consistent Honors (1st - 3rd Year)
              </li>
            </ul>
          </div>
        </div>
        <div className="about-section">
          <h2>
            Technical Skills <FontAwesomeIcon icon={faCode} />
          </h2>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: "90%" }}
            transition={{ duration: 1.75, ease: "easeOut" }}
          ></motion.div>
          <div className="about-section__content">
            <ul>
              <li>
                <span>Front End Development: </span>
                <br />
                HTML, CSS, SASS, JavaScript, Vue.js, React.js
              </li>
              <li>
                <span>Back End Development: </span>
                <br />
                Django, Spring Boot, Node.js, SQL, MongoDB
              </li>
              <li>
                <span>Programming Languages: </span>
                <br />
                JavaScript, Python, Java
              </li>
              <li>
                <span>Version Control: </span>
                <br />
                Git and Github/Gitlab
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
