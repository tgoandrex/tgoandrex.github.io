import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import sword from './images/sword.svg';

import './style.css';
import './components/navbar/navbar.css';

const Transition = () => {
  const location = useLocation();

  return (
      <>
        <motion.div
          key={location.key}
          animate={{ opacity: 0, display: 'none' }}
          transition={{ delay: 2 }}
          id='transition-background'
        >
        </motion.div>
        <motion.img
          key={location.key}
          src={sword}
          alt='Sword'
          className='sword'
          id='sword-one'
          initial={{ originY: 1 }}
          animate={{ rotate: [0, 65, 0, 65, 0, 65], display: 'none' }}
          transition={{ duration: 2 }}
        />
        <motion.img
          key={location.key}
          src={sword}
          alt='Sword'
          className='sword'
          id='sword-two'
          initial={{ originY: 1 }}
          animate={{ rotate: [0, -65, 0, -65, 0, -65], display: 'none' }}
          transition={{ duration: 2 }}
        />
      </>
  );
};

const RouteList = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
  );
};

function App() {
  return (
    <div id='App'>
      <div id='background'></div>
      <HashRouter>
        <Transition />
        <Navbar />
        <RouteList />
      </HashRouter>
    </div>
  );
}

export default App;