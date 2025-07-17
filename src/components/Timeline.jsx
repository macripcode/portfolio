import { useContext } from "react";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "../context/TranslationContext";

import Project from "./Project";

import "react-vertical-timeline-component/style.min.css";

import "../styles/hero/timeline.css"

function Timeline() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);

  const translation = useTranslation();
  const experience = translation.experience;
  const title = experience.title;
  const careerPath = experience.careerPath;

  const {
    "--hero-timeline-bg": timelineBg,
    "--hero-timeline-color": timelineColor,
    "--hero-timeline-bgIcon": timelineBgIcon,
  } = useCSSVariables(
    ["--hero-timeline-bg", "--hero-timeline-color", "--hero-timeline-bgIcon"],
    "body",
    [theme]
  );

  return (
    <div className="hero-experience-div">
      <div className="title-div">
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
                contentStyle={{
                  background: timelineBg,
                  color: timelineColor,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${timelineBgIcon}`,
                }}
                date={date}
                iconStyle={{
                  background: { timelineBgIcon },
                  color: { timelineColor },
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
  );
}

export default Timeline;
