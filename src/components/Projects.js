import React, { useState, useMemo, useLayoutEffect, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import ScrollReveal from '../hooks/ScrollReveal';
import { projectsData } from '../data';

const filterableLanguages = [
  'JavaScript',
  'Angular',
  'Node.js',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'React',
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [direction, setDirection] = useState(0);

  const languageFilters = useMemo(() => {
    const tags = new Set();
    projectsData.forEach((p) =>
      p.tags.forEach(
        (t) => filterableLanguages.includes(t) && tags.add(t)
      )
    );
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const handleFilterClick = (tag) => {
    if (tag === activeFilter) return;
    const newIndex = languageFilters.indexOf(tag);
    const oldIndex = languageFilters.indexOf(activeFilter);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveFilter(tag);
  };

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const gridRef = useRef(null);
  const [baseHeight, setBaseHeight] = useState(0);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (isMobile || !gridRef.current) return;
      setBaseHeight((h) => Math.max(h, gridRef.current.offsetHeight));
    };

    updateHeight();                // run on mount & filter change
    window.addEventListener('resize', updateHeight, { passive: true });

    return () => window.removeEventListener('resize', updateHeight);
  }, [filtered, isMobile]);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: i * 0.05,
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const gridVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <ScrollReveal
      as="section"
      variant="slide-up"
      className="will-change-transform transition-opacity duration-700 ease-out"
    >
      <section id="projects" className="scroll-mt-24 pt-6 pb-16 lg:pt-10 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white relative inline-block after:block after:h-1 after:bg-primary-accent after:w-12 after:mt-2 after:mx-auto">
              What I’ve Built
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
              A curated selection of my work. Click a tag to filter.
            </p>
          </header>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {languageFilters.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterClick(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent
                  ${
                    activeFilter === tag
                      ? 'bg-primary-accent text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeFilter}
              custom={direction}
              variants={gridVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.35 }}
              ref={gridRef}
              style={{ minHeight: isMobile ? undefined : baseHeight }}
              className="relative will-change-transform grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col transition-transform transform hover:scale-[1.03] h-auto md:h-[420px] bg-white/80 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 backdrop-blur-xl border border-primary-accent/10 dark:border-primary-accent-dark/30 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl"
                >
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-100 hover:text-primary-accent dark:hover:text-primary-accent-dark transition-colors">
                      <div className="flex items-center gap-2">
                        <span>{project.title}</span>
                        {project.label && (
                          <span
                            className="group relative"
                            aria-label={
                              project.label === 'team project'
                                ? 'Team project developed with a group'
                                : 'Private repository, not publicly accessible'
                            }
                          >
                            <span className="text-xs bg-red-100 dark:bg-red-200 text-red-700 dark:text-red-800 px-2 py-0.5 rounded-full cursor-default">
                              {project.label}
                            </span>
                            <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs text-white bg-black bg-opacity-80 px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 w-48 text-center">
                              {project.label === 'team project'
                                ? 'Team project developed with a group'
                                : 'Private repository, not publicly accessible'}
                            </span>
                          </span>
                        )}
                      </div>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-block rounded-full bg-primary-accent/15 dark:bg-primary-accent-dark/20 text-primary-accent dark:text-primary-accent-dark text-xs font-semibold px-3 py-1 hover:scale-105 transition-transform"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-8 py-6 bg-slate-100 dark:bg-gray-700/40 border-t border-primary-accent/10 dark:border-primary-accent-dark/20">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-accent dark:text-primary-accent-dark font-semibold hover:text-primary-accent-hover dark:hover:text-primary-accent-dark-hover transition"
                      >
                        View&nbsp;Project
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-gray-400 cursor-not-allowed">
                        Private Repo
                        <FiExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}

              {filtered.length === 0 && (
                <motion.p
                  key="empty"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="col-span-full text-center text-gray-500 dark:text-gray-400"
                >
                  No projects match this filter.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </ScrollReveal>
  );
}