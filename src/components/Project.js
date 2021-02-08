import { motion } from "framer-motion";
import { flowUp } from "../framerStyles";

const Project = ({ image, title, tech }) => {
  return (
    <motion.div class="project" variants={flowUp}>
      <img class="project-img" alt="project" src={image} />
      <div class="overlay">
        <div class="overlay-text">
          <h1>{title}</h1>
          <p>{tech}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
