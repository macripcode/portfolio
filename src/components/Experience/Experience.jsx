import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTranslation } from "../../context/TranslationContext";

import Project from "../Experience/Project";

import "react-vertical-timeline-component/style.min.css";

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

          <div className="timeline-div">
            <VerticalTimeline>
              {careerPath.map((item, index) => {
                const { type, date, rol, location, projects } = item;

                return (
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{
                      borderRight: "7px solid var(--accent-one)",
                    }}
                    date={date}
                    iconStyle={{
                      background: "var(--accent-two)",
                      color: "var(--accent-one)",
                    }}
                    icon={type === "job" ? <WorkIcon /> : <SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">{rol}</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {location}
                    </h4>
                    <div>
                      {projects.map((project, index) => {
                        const { title, description, techStack } = project;
                        return (
                          <Project
                            key={index}
                            title={title}
                            description={description}
                            techStack={techStack}
                          />
                        );
                      })}
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
