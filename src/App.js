import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;