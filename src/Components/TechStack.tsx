import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

const TechStack: React.FC = () => {
  return (
    <div className="tech-stack">
      <FaHtml5 className="icon" title="HTML5" />
      <FaCss3Alt className="icon" title="CSS3" />
      <FaReact className="icon" title="React" />
      <FaNodeJs className="icon" title="Node.js" />
      <FaGithub className="icon" title="GitHub" />
    </div>
  );
};

export default TechStack;
