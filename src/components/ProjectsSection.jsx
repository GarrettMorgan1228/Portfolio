import Section from "./Section";

function ProjectsSection() {
    return(
        <Section id='projects' title='Projects'>
            <div className="projects-grid">
                <article className="project-card">
                    <h3>Pineapple Puncher</h3>
                    <p>An incremental game about punching/collecting pineapples.</p>
                    <div className="project-card-links">
                        <a target="_blank" href="https://pineapplepuncher.garrettstevenmorgan.com">
                            Visit Demo
                        </a>
                        <a target="_blank" href="https://github.com/GarrettMorgan1228/pineapplePuncher">
                            GitHub Repo
                        </a>
                    </div>
                    <div className="project-authors">
                        Developer: Garrett Morgan
                    </div>
                </article>
                
                <article className="project-card">
                    <h3>Placeholder Project</h3>
                    <p>Nothing to see here yet.</p>
                    <div className="project-card-links">
                        <a target="_blank" href="" className="project-card-link">
                            Visit Demo
                        </a>
                        <a target="_blank" href="https://github.com/GarrettMorgan1228/" className="project-card-link">
                            GitHub Repo
                        </a>
                    </div>
                    <div className="project-authors">
                        Developer(s): ...
                    </div>
                </article>
            </div>
        </Section>
    );
}

export default ProjectsSection;