import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ProjectsSection from './components/ProjectsSection';

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        
        <div className='page-layout'>
          <main className='main'>
            <Section id='home' title='Home'>
              <p>Welcome to the landing page for Garrett's Computer Science project porfolio.</p>
            </Section>

            <Section id='about' title='About'>
              <p>My name is Garrett Morgan and I am a Computer Science student finishing my AS
                 at Clovis Community College. This page is meant to serve as not only a way for
                 me to practice front-end programming, but also as a hub for me to host other
                 projects I work on over time, enabling others to view my work in one
                 centralized location. Please explore my projects I have listed below.</p>
            </Section>

            <ProjectsSection/>

            <Section id='contact' title='Contact'>
              <p><small>Email: garrettstevenmorgan@gmail.com</small></p>
            </Section>
          </main>
        </div>
        <footer className='footer'>
          © <small>{new Date().getFullYear()} Garrett Steven Morgan</small>
        </footer>
      </div>
    </>
  );
}

export default App
