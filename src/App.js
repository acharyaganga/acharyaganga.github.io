import React from 'react';
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
    <>
      <Navbar currentTheme={theme} toggleTheme={cycleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}