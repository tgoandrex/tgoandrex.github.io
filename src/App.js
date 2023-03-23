import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id='App'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;