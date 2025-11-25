import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";

const projects = [
  {
    slug: "pineapplepuncher",
    title: "Pineapple Puncher",
    summary: "An incremental clicker game built with JavaScript and React + Vite.",
    demoUrl: "https://pineapplepuncher.garrettstevenmorgan.com",
    codeUrl: "https://github.com/GarrettMorgan1228/pineapplePuncher",
    bullets: [
      "Click + passive income (PPS) systems",
      "Repeatable upgrades with scaling costs",
      "Multiple save slots using localStorage",
      "Export / import save files as JSON",
    ],
  },
];

function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );

  if (!project) {
    return (
      <div className="page-layout">
        <main className="main">
          <Section title="Project not found">
            <p>
              That project doesn't exist yet. Go back to{" "}
              <Link to="/">home</Link>.
            </p>
          </Section>
        </main>
      </div>
    );
  }

  return (
    <div className="page-layout">
      <main className="main">
        <Section title={project.title}>
          <p>{project.summary}</p>

          <div className="project-card-links">
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-card-link">
              View Product
            </a>
            <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-card-link">
              GitHub Repo
            </a>
            <Link to="/" className="project-card-link">Back to Portfolio</Link>
          </div>
        </Section>

        <Section title="Highlights">
          <ul className="highlights-list">
            {project.bullets.map((b) => (
              <li key={b} className="highlights-list-item">{b}</li>
            ))}
          </ul>
        </Section>

        <Section title="Write-up">
          <p>
            Nothing to see here yet.
          </p>
        </Section>
      </main>
    </div>
  );
}

export default ProjectDetail;
