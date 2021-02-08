import Header from "../components/Header";
import { parentHeader } from "../framerStyles";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      variants={parentHeader}
      initial="hidden"
      animate="show"
      exit="exit"
      className="header"
    >
      <Header />
    </motion.section>
  );
};

export default Home;
