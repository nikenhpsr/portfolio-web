import { motion } from "framer-motion";
export default function Button() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div className="buttons" variants={textVariants}>
        <button>Projects</button>
        <button>More About Me</button>
      </motion.div>
    </>
  );
}
