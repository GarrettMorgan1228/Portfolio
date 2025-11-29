import Section from "./Section";
import "./ProjectsSection.css";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    title: "Pineapple Puncher",
    description: "An incremental game about punching/collecting pineapples.",
    detailsTo: "/projects/pineapplepuncher",
    repoUrl: "https://github.com/GarrettMorgan1228/pineapplePuncher",
    authors: "Developer: Garrett Morgan",
  },
  {
    title: "Portfolio Website",
    description: "A hub to publish my projects and document what I learned.",
    detailsTo: "/projects/portfolio",
    repoUrl: "https://github.com/GarrettMorgan1228/portfolio",
    authors: "Developer: Garrett Morgan",
  },
  {
    title: "AI Browser Assistant",
    description: "A Chrome Extension to help users browse the web.",
    detailsTo: "/projects/ai-browser-assistant",
    repoUrl: "https://github.com/GarrettMorgan1228/ai-browser-assistant",
    authors: "Developers: Jorel Abrantes, Garrett Morgan",
  },
];

function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.detailsTo}
            title={p.title}
            description={p.description}
            detailsTo={p.detailsTo}
            repoUrl={p.repoUrl}
            authors={p.authors}
          />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
