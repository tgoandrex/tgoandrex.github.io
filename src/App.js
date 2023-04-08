import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div id='App'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <a className='background-disclaimer' href="http://www.freepik.com">Background designed by pikisuperstar / Freepik</a>
    </div>
  );
}

export default App;