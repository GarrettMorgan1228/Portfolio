import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ title, description, detailsTo, repoUrl, authors }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-card-links">
        <Link to={detailsTo} className="project-card-link">
          View Details
        </Link>

        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card-link"
        >
          GitHub Repo
        </a>
      </div>

      <div className="project-authors">{authors}</div>
    </article>
  );
}

export default ProjectCard;