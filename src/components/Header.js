import Name from "../components/Name";
import { motion } from "framer-motion";
import Wave from "../components/Wave";
import { flowDown, parentHeader } from "../framerStyles";

const Header = () => {
  return (
    <motion.header
      variants={parentHeader}
      initial="hidden"
      animate="show"
      class="header"
    >
      <Wave />
      <Name />
      <div>
        <motion.h2 variants={flowDown}>A Design-driven Developer</motion.h2>
      </div>
    </motion.header>
  );
};

export default Header;
