import { motion } from "framer-motion";

interface ButtonProps {
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="buttons" variants={textVariants}>
      <button className="custom-button">{buttonText}</button>
    </motion.div>
  );
};

export default Button;
