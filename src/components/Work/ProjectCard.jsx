import "../../styles/work/project-card.css";

function ProjectCard({
  title,
  description,
  links,
  techStack,
  date,
  resourceUrl,
  resourceType,
}) {
  return (
    <div className="projectcard-div">
      <div className="resource-div">
        {resourceType === "image" && (
          <img src={resourceUrl} alt="Project resource" />
        )}
      </div>

      <div className="div-content">
        <div className="title-project centered">
          <p>{title}</p>
        </div>

        <div className="description-project">{description}</div>
        <div className="links-project">
          <ul>
            {links.map((link, index) => {
              console.log(index)
              return (
                <li key={index}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="techstack-project centered">
          <p>
            <strong>Tech Stack:</strong> {techStack.join(" | ")}
          </p>
        </div>
        <div className="date-project centered">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
