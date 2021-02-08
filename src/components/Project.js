import { motion } from "framer-motion";
import { flowUp } from "../framerStyles";

const Project = ({ image, title, tech, source, site }) => {
  return (
    <motion.div class="project" variants={flowUp}>
      <img class="project-img" alt="project" src={image} />
      <div class="overlay">
        <div class="overlay-text">
          <h1>{title}</h1>
          <p>{tech}</p>
          <div>
            <a href={source} target="_blank" rel="noreferrer">
              View Code
            </a>
            <a href={site} target="_blank" rel="noreferrer">
              View Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
