import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import './components/navbar/navbar.css';
import './components/about/about.css';
import './components/about/cube.css';
import './components/skills/skills.css';
import './components/projects/projects.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);