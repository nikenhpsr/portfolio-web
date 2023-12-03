import React from "react";
import { FaLinkedin, FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <a
          href="https://www.linkedin.com/nikenhapsari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:hpsri.niken@gmail.com">
          <FaEnvelope />
        </a>
        <a
          href="https://twitter.com/kenhpsr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/nikenhpsr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <p>Crafted with care in {currentYear}</p>
    </footer>
  );
};

export default Footer;
