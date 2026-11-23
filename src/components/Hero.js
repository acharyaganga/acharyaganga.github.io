import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiBarChart2, FiDownload } from 'react-icons/fi';
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
  {
    icon: FiBarChart2,
    value: `${yearsExperience}+ ${yearsExperience === 1 ? 'year' : 'years'}`,
    label: 'in data analysis',
    position: '-right-5 bottom-10',
    delay: 0,
  },
  {
    icon: FiAward,
    value: 'B.S.',
    label: 'Computer Science',
    position: '-left-8 top-8',
    delay: 1.2,
  },
];

export default function Hero() {
  const text = useTypewriter(roles);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="hero-bg relative overflow-hidden pt-24 pb-14 md:pt-40 md:pb-28"
    >
      <div className="shell relative grid items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-800/80 dark:text-gray-200 dark:ring-gray-700"
          >
            <span className="pulse-dot" aria-hidden="true" />
            Currently at PA Dept. of Human Services
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 pb-2 font-oswald text-5xl tracking-wide sm:text-6xl lg:text-7xl bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Ganga&nbsp;Acharya
          </motion.h1>

          <motion.div
            variants={item}
            aria-hidden="true"
            className="mt-2 flex min-h-[1.6em] items-center text-xl font-semibold text-primary-accent dark:text-primary-accent-dark sm:text-2xl"
          >
            <span className="whitespace-nowrap tracking-wide">{text}</span>
            <span className="typewriter-caret" />
          </motion.div>
          <p className="sr-only">{roles.join(', ')}</p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg"
          >
            I turn complex public-sector data into clear reports and dashboards that help teams
            make decisions, and I build the tools that automate the work.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start"
          >
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
              className="hidden px-2 py-2 text-sm font-semibold text-gray-700 underline-offset-4 hover:text-primary-accent hover:underline dark:text-gray-300 dark:hover:text-primary-accent-dark sm:inline"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Phones: the facts sit here as chips; larger screens show them as cards on the photo. */}
          <motion.ul
            variants={item}
            className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-200 md:hidden"
          >
            {facts.map(({ icon: Icon, value, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-gray-200 dark:bg-gray-800/80 dark:ring-gray-700"
              >
                <Icon className="h-3.5 w-3.5 text-primary-accent dark:text-primary-accent-dark" aria-hidden="true" />
                {value} {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative order-first mx-auto w-32 sm:w-40 md:order-last md:w-full md:max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.75rem] bg-primary-accent/15 dark:bg-primary-accent-dark/15 md:translate-x-5 md:translate-y-5 md:rounded-[2.25rem]"
          />
          <img
            src={profilePic}
            alt="Portrait of Ganga Acharya smiling"
            width="640"
            height="640"
            fetchpriority="high"
            className="relative aspect-square w-full rounded-[1.75rem] object-cover md:aspect-[4/5] md:rounded-[2.25rem]"
          />

          {facts.map(({ icon: Icon, value, label, position, delay }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}
              className={`absolute ${position} hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-teal-900/10 ring-1 ring-gray-900/5 dark:bg-gray-800 dark:shadow-black/30 dark:ring-white/10 md:flex`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-accent/10 text-primary-accent dark:bg-primary-accent-dark/15 dark:text-primary-accent-dark">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">{value}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">{label}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
