import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import ScrollToTop from './components/ScrollToTop';
import './index.css';


function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.slice(1) || 'hero';
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'auto');

  const cycleTheme = () =>
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'light';

      // If prev === 'auto', choose the opposite of the system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'light' : 'dark';
    });

  return (
    <Router>
      <Navbar currentTheme={theme} toggleTheme={cycleTheme} />
      <ScrollToSection />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Router>
  );
}