import { fastHeader, parentHeader } from "../framerStyles";
import { motion } from "framer-motion";

// Images
import tayo from "../img/projects/tayo.png";
import recweek from "../img/projects/recweek.png";
import thecompany from "../img/projects/thecompany.png";
import musicplayer from "../img/projects/musicplayer.png";
import qwiklabs from "../img/projects/qwiklabs.png";

// Components
import Project from "../components/Project";

const Projects = () => {
  return (
    <motion.section
      variants={parentHeader}
      initial="hidden"
      animate="show"
      exit="exit"
      className="projects-header"
    >
      <motion.div
        className="projects"
        variants={fastHeader}
        initial="hidden"
        animate="show"
      >
        {/* Recweek */}
        <Project
          image={recweek}
          title="DSC-Loyola Recruitment Page"
          tech="HTML, CSS, JS, GSAP 3, ScrollTrigger"
        />
        
        {/* Tayo Website */}
        <Project
          image={tayo}
          title="Tayo PH Official Website"
          tech="HTML, CSS, AOS Library, Vue.js, Firebase Firestore"
        />

        {/* The Company */}
        <Project
          image={thecompany}
          title="The Company Web Template"
          tech="HTML, CSS"
        />

        {/* Music Player */}
        <Project
          image={musicplayer}
          title="React Music Player"
          tech="HTML, SASS, CSS, React.js"
        />

        {/* Qwiklabs */}
        <Project
          image={qwiklabs}
          title="Qwiklabs Finishers 2.0"
          tech="HTML, CSS, Vue.js, Firebase Firestore"
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
