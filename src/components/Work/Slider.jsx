import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "../../styles/work/slider.css";

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

function Slider({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const thumbnailIndices = projects
    .map((_, index) => index)
    .filter((index) => index !== activeIndex);

  return (
    <div className="slider-container">
      <motion.div
        className="slider-active glow-static"
        custom="left"
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="slider-active-inner"
          >
            <ProjectCard {...projects[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="slider-thumbnails"
        custom="right"
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {thumbnailIndices.map((projIndex) => (
          <motion.div
            key={projIndex}
            className="slider-thumbnail"
            onClick={() => setActiveIndex(projIndex)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={projects[projIndex].resourceUrl}
              alt={projects[projIndex].title}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;
