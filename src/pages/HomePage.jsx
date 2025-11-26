import Section from "../components/Section";
import ProjectsSection from "../components/ProjectsSection";

function HomePage() {
    return(
        <div className='page-layout'>
          <aside className="sidebar-left">
            <div className="side-card">
            <h3></h3>
            </div>
          </aside>

          <main className='main'>
            <Section id='home' title='Home'>
              <p>Welcome to the landing page for Garrett's Computer Science project porfolio.</p>
            </Section>

            <Section id='about' title='About'>
              <p>My name is Garrett Morgan, and I'm a Computer Science student finishing my
                 A.S. at Clovis Community College. This site is both a place for me to practice
                 and showcase front-end development and a central hub where I'll publish and
                 document projects as I build them. Feel free to explore the projects below.</p>
            </Section>

            <ProjectsSection/>

            <Section id='contact' title='Contact'>
              <p><small>Email: garrettstevenmorgan@gmail.com</small></p>
            </Section>
          </main>

          <aside className="sidebar-right">
            <div className="side-card">
            <h3></h3>
            </div>
          </aside>
        </div>
    );
}

export default HomePage;