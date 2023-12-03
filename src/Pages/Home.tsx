import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "../Components/Button";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="home-content"
    >
      <motion.p variants={textVariants} style={{ fontSize: "2rem" }}>
        Hi there! I'm{" "}
        <span className="name">
          <Typewriter
            words={["Niken Hapsari"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.p>
      <motion.p variants={textVariants} className="description">
        A passionate software engineer with extensive experience in{" "}
        <span className="name">Data, Statistics, and Product Development.</span>
        I love building scalable and performant applications that provide great
        user experiences.
      </motion.p>
      <Button />
    </motion.div>
  );
};

export default Home;
