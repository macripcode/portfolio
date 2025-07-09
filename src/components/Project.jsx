// components/Project.jsx
import { useState } from "react";

function Project({ title, description, techStack }) {
  const [expanded, setExpanded] = useState(false);

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
        {expanded ? "Show less" : "Curious? Click to learn more"}
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
