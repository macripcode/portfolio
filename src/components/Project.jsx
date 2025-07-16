// components/Project.jsx
import { useState, useContext } from "react";

import { useCSSVariables } from "../hooks/useCSSVariables";

import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../context/TranslationContext";

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
    <div className="project">
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

      <p><strong>Tech Stack:</strong> {techStack.join(" | ")}</p>
    </div>
  );
}

export default Project;
