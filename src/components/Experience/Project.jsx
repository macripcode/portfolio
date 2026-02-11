import { useState, useContext } from "react";
import { useCSSVariables } from "../../hooks/useCSSVariables";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "../../context/TranslationContext";
import DevIconElement from "../DevIconElement/DevIconElement";
import { techToIcon } from "../../data/techIcons";

function Project({ title, description, techStack }) {
  const [expanded, setExpanded] = useState(false);

  const { theme } = useContext(ThemeContext);

  const translation = useTranslation();
  const viewMore = translation.experience.viewMore;
  const viewLess = translation.experience.viewLess;

  const {
    "--hero-timeline-colorShowMore": colorShowMore  
  } = useCSSVariables(
    ["--hero-timeline-colorShowMore"],
    "body",
    [theme]
  );

  return (
    <div className="project gradient">
      <p><strong>{title}</strong></p>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "none",
          border: "none",
          color: `${colorShowMore}`,
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        {expanded ? viewLess : viewMore}
      </button>

      {expanded && (
        <ul className="project-achievements">
          {description.map((goal, index) => (
            <li key={index}>
              <p>{goal}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="tech-stack-section">
        <p className="tech-stack-title"><strong>Tech Stack</strong></p>
        <div className="tech-stack-grid">
          {techStack.map((tech, index) => (
            <DevIconElement key={index} icon={techToIcon[tech] || "devicon-devicon-plain"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
