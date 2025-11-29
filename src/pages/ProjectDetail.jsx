import {
  PineapplePuncherLeftSidebar,
  PineapplePuncherRightSidebar,
} from "../projects/PineapplePuncher.Sidebars";
import {
  PortfolioLeftSidebar,
  PortfolioRightSidebar,
} from "../projects/Portfolio.Sidebars";
import {
  AIBrowserAssistantLeftSidebar,
  AIBrowserAssistantRightSidebar,
} from "../projects/AIBrowserAssistant.Sidebars";
import PineapplePuncherWriteUp from "../projects/PineapplePuncher.WriteUp";
import PortfolioWriteUp from "../projects/Portfolio.WriteUp";
import AIBrowserAssistantWriteUp from "../projects/AIBrowserAssistant.WriteUp";
import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import "./ProjectDetail.css";

const projects = [
  {
    slug: "pineapplepuncher",
    title: "Pineapple Puncher",
    summary:
      "An incremental clicker game built with JavaScript and React + Vite.",
    demoUrl: "https://pineapplepuncher.garrettstevenmorgan.com",
    codeUrl: "https://github.com/GarrettMorgan1228/pineapplePuncher",
    bullets: [
      "Click + passive income (PPS) systems",
      "Repeatable upgrades with scaling costs",
      "Multiple save slots using localStorage",
      "Export / import save files as JSON",
      "Live project deployment with Vercel + GitHub",
      "Custom dedicated subdomain",
      "Exposure to JavaScript, React + Vite",
    ],
    LeftSidebar: PineapplePuncherLeftSidebar,
    RightSidebar: PineapplePuncherRightSidebar,
    WriteUp: PineapplePuncherWriteUp,
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary: "A hub to publish my projects and document what I learned.",
    demoUrl: "https://garrettstevenmorgan.com",
    codeUrl: "https://github.com/GarrettMorgan1228/portfolio",
    bullets: [
      "React's reusable component architecture",
      "Custom domain and React Router redirects",
      "Responsive layout and mobile-friendly styling",
    ],
    LeftSidebar: PortfolioLeftSidebar,
    RightSidebar: PortfolioRightSidebar,
    WriteUp: PortfolioWriteUp,
  },
  {
    slug: "ai-browser-assistant",
    title: "AI Browser Assistant",
    summary:
      "Collaborative in-class project with Jorel Abrantes to build an agentic Chrome side-panel assistant. Users can summarize the active page and ask context-aware questions powered by a generative AI API (e.g., Gemini). The project highlights MV3 extension architecture, page content extraction, async messaging between scripts, and persistence with Chrome Storage.",
    demoUrl: "https://garrettstevenmorgan.com",
    codeUrl: "https://github.com/GarrettMorgan1228/ai-browser-assistant",
    bullets: [],
    LeftSidebar: AIBrowserAssistantLeftSidebar,
    RightSidebar: AIBrowserAssistantRightSidebar,
    WriteUp: AIBrowserAssistantWriteUp,
  },
];

function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

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

  const Left = project.LeftSidebar;
  const Right = project.RightSidebar;
  const WriteUp = project.WriteUp;

  return (
    <div className="page-layout three-col-layout">
      <aside className="page-sidebar left">
        {Left ? <Left project={project} /> : null}
      </aside>

      <main className="main">
        <Section title={project.title}>
          <p>{project.summary}</p>

          <div className="project-card-links">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card-link"
            >
              View Product
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card-link"
            >
              GitHub Repo
            </a>
            <Link to="/" className="project-card-link">
              Back to Portfolio
            </Link>
          </div>
        </Section>

        <Section title="Highlights">
          <ul className="highlights-list">
            {project.bullets.map((b) => (
              <li key={b} className="highlights-list-item">
                {b}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Write-up">
          {WriteUp ? (
            <WriteUp project={project} />
          ) : (
            <p>Nothing to see here yet.</p>
          )}
        </Section>
      </main>

      <aside className="page-sidebar right">
        {Right ? <Right project={project} /> : null}
      </aside>
    </div>
  );
}

export default ProjectDetail;
