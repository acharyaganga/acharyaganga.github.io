import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiBriefcase, FiClock, FiDownload } from 'react-icons/fi';
import useTypewriter from '../hooks/useTypewriter';
import { roles, yearsExperience } from '../data';

import profilePic from '../assets/images/profile.webp';
import resumePDF from '../assets/Ganga_Resume.pdf';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const facts = [
  { icon: FiBriefcase, text: 'Data Analyst, Pennsylvania Department of Human Services' },
  { icon: FiAward, text: 'B.S. Computer Science, Millersville University' },
  {
    icon: FiClock,
    text: `${yearsExperience}+ ${yearsExperience === 1 ? 'year' : 'years'} of experience`,
  },
];

export default function Hero() {
  const text = useTypewriter(roles);

  return (
    <section id="hero" aria-label="Introduction" className="pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="shell grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 pb-2 font-oswald text-5xl tracking-wide sm:text-6xl lg:text-7xl bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Ganga&nbsp;Acharya
          </motion.h1>

          <motion.div
            variants={item}
            aria-hidden="true"
            className="mt-3 flex min-h-[1.6em] items-center text-xl font-semibold text-primary-accent dark:text-primary-accent-dark sm:text-2xl"
          >
            <span className="whitespace-nowrap tracking-wide">{text}</span>
            <span className="typewriter-caret" />
          </motion.div>
          <p className="sr-only">{roles.join(', ')}</p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg"
          >
            I turn complex public-sector data into clear reports and dashboards that help teams
            make decisions, and I build the tools that automate the work.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#projects" className="btn btn-primary">
              See my work
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiDownload className="h-4 w-4" aria-hidden="true" />
              Résumé
            </a>
            <a
              href="#contact"
              className="px-2 py-2 text-sm font-semibold text-gray-700 underline-offset-4 hover:text-primary-accent hover:underline dark:text-gray-300 dark:hover:text-primary-accent-dark"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="relative mx-auto max-w-[15rem] sm:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-teal-400/25 via-cyan-400/10 to-transparent blur-2xl"
            />
            <img
              src={profilePic}
              alt="Portrait of Ganga Acharya smiling"
              width="640"
              height="640"
              fetchpriority="high"
              className="relative aspect-square w-full rounded-[2rem] object-cover"
            />
          </div>

          <ul className="mt-6 space-y-2.5 text-sm text-gray-600 dark:text-gray-300">
            {facts.map(({ icon: Icon, text: fact }) => (
              <li key={fact} className="flex items-start gap-3">
                <Icon
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-accent dark:text-primary-accent-dark"
                  aria-hidden="true"
                />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
