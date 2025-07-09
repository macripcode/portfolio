// components/Project.jsx
import { useState } from "react";

import { useTranslation } from "../context/TranslationContext";

function Project({ title, description, techStack }) {
  const [expanded, setExpanded] = useState(false);

  const translation = useTranslation();
  const viewMore = translation.Hero.Experience.viewMore;
  const viewLess = translation.Hero.Experience.viewLess;

  return (
    <div className="project">
      <p><strong>{title}</strong></p>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: "none",
          border: "none",
          color: "#007bff",
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
