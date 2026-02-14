import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ConstructionIcon from "@mui/icons-material/Construction";
import { motion } from "framer-motion";
import { useTranslation } from "../../context/TranslationContext";

import Project from "../Experience/Project";

import "../../styles/experience/experience.css";

function Experience() {
  const translation = useTranslation();
  const experience = translation.experience;
  const title = experience.title;
  const careerPath = experience.careerPath;

  return (
    <section id="experience">
      <div className="container-section">
        <div className="hero-experience-div">
          <div className="title-section title under-space-title">
            <h2>{title}</h2>
          </div>

          <div className="timeline">
            <div className="timeline-cap timeline-cap-start">
              <span><ConstructionIcon /></span>
            </div>

            {careerPath.map((item, index) => {
              const { type, date, rol, location, projects } = item;
              const side = index % 2 === 0 ? "left" : "right";
              const isJob = type === "job" || type === "freelance";

              return (
                <motion.div
                  key={index}
                  className={`timeline-item ${side}`}
                  initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="timeline-icon">
                    {isJob ? <WorkIcon /> : <SchoolIcon />}
                  </div>

                  <div className="timeline-content glass-effect border glow-static">
                    <h3>{rol}</h3>
                    <span className="timeline-date">{date}</span>
                    <h4>{location}</h4>

                    <div>
                      {projects.map((project, pIndex) => {
                        const { title, description, techStack } = project;
                        return (
                          <Project
                            key={pIndex}
                            title={title}
                            description={description}
                            techStack={techStack}
                          />
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="timeline-cap timeline-cap-end">
              <span><ChildFriendlyIcon /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
