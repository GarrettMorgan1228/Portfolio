import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ProjectsSection from './components/ProjectsSection';

function App() {

  return (
    <>
      <div className='app'>
        <Header/>

        <main className='main'>
          <Section id='home' title='Home'>
            <p>Short intro goes here. Replace with more JSX later.</p>
          </Section>

          <Section id='about' title='About'>
            <p>My name is Garrett Morgan and I like computers and science.</p>
          </Section>

          <ProjectsSection/>

          <Section id='contact' title='Contact'>
            <p>Email: garrettstevenmorgan@gmail.com</p>
          </Section>
        </main>

        <footer>
          <small>© {new Date().getFullYear()} Garrett Steven Morgan</small>
        </footer>
      </div>
    </>
  );
}

export default App
