import { useTranslation } from "../../context/TranslationContext";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import Experience from "../Experience/Experience";

import "../../styles/hero/hero.css";

const scrollReveal = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function Hero() {
  const translation = useTranslation();
  const hero = translation.hero;

  const greeting = hero.greeting;
  const title = hero.title;
  const text = hero.text;
  const viewProjects = hero.viewProjects;
  const contactMe = hero.contactMe;

  return (
    <section id="hero">
      <div className="container-section">
        <div className="hero-content">
          <motion.div
            className="hero-text-column"
            custom="left"
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="hero-greeting subtitle-text">{greeting} 👋</p>
            <h1 className="hero-title title">{title}</h1>
            <ul className="hero-description common-text">
              {text.map((paragraph, index) => (
                <li key={index}>
                  <StarIcon className="hero-bullet-icon" />
                  <span>{paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="hero-buttons common-text">
              <a href="#work" className="btn-projects glow">
                {viewProjects}
              </a>
              <a href="#contact" className="btn-contact glow">
                {contactMe}
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-video-column"
            custom="right"
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/LwhOyvCft8A"
                title="Video de presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
