import DevIconElement from "../DevIconElement/DevIconElement";
import { techToIcon } from "../../data/techIcons";
import "../../styles/work/project-card.css";

function ProjectCard({ title, description, links, techStack, resourceUrl, resourceType, state, estado }) {
  const projectState = state || estado;

  return (
    <div className="projectcard-div gradient-low">
      <div className="image-project-card">
        {resourceType === "image" && (
          <img src={resourceUrl} alt={title} />
        )}
        <span className="badge-state glow-static common-text">{projectState}</span>
      </div>

      <h3 className="highlight projectcard-title">{title}</h3>

      <p className="common-text projectcard-description">{description}</p>

      <div className="projectcard-techgrid">
        {techStack.map((tech, i) => (
          <DevIconElement key={i} icon={techToIcon[tech] || "devicon-devicon-plain"} />
        ))}
      </div>

      <div className="projectcard-links">
        {links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="projectcard-link-btn common-text">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
