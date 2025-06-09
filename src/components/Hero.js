import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const roles = [
  'Full‑Stack Developer',
  'Software Engineer',
  'Creative Coder',
  'Problem Solver',
];

export default function Hero() {
  const [text] = useTypewriter({
    words: roles,
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 min-h-screen pt-20 sm:pt-24 flex items-center justify-center section-bg overflow-hidden"
      aria-label="Hero section"
    >
      <div className="container relative z-10 px-6 md:px-12 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left font-extrabold leading-[1.15]"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">I’m</span>
          <span className="block pb-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-oswald tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Ganga&nbsp;Acharya
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-primary-accent dark:text-primary-accent-dark text-center md:text-left"
        >
          <span className="typewriter-text">{text}</span>
          <Cursor cursorStyle="|" />
        </motion.div>

        <p className="sr-only">Current role: {text}</p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 text-center md:text-left"
        >
          Crafting intuitive, high‑performing web experiences by blending robust back‑end architecture with seamless user interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary-accent px-8 py-3.5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            Explore&nbsp;My&nbsp;Work
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-gray-200 dark:bg-gray-700 px-8 py-3.5 text-lg font-semibold text-gray-800 dark:text-gray-100 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6" />
            </svg>
            Get&nbsp;In&nbsp;Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}