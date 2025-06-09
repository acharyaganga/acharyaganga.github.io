import React, { useRef, useEffect } from 'react';
import { FiMonitor, FiServer, FiTool, FiCheck } from 'react-icons/fi';
import ScrollReveal from '../hooks/ScrollReveal';
import { skillsData } from '../data';

const iconMap = {
  frontend: FiMonitor,
  backend: FiServer,
  tools: FiTool,
};

export default function Skills() {
  const trackRef = useRef(null);
  const categories = Object.keys(skillsData);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handler = () => {}; // placeholder
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  return (
    <ScrollReveal as="section" variant="slide-up">
      <section id="skills" className="relative scroll-mt-24 pt-10 pb-10 md:pt-16 md:pb-14 bg-gradient-to-b from-slate-200 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white relative inline-block after:block after:h-1 after:bg-primary-accent after:w-12 after:mt-2 after:mx-auto">
              Skills
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
              A snapshot of the technologies and tools I use.
            </p>
          </header>

          <div className="pb-4 md:pb-6 rounded-3xl bg-transparent overflow-visible md:overflow-visible">
            <div
              ref={trackRef}
              className="relative flex gap-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 px-1 pb-4 pt-3 min-h-[320px] scrollbar-none"
            >
              {categories.map((key) => {
                const Icon = iconMap[key] || FiTool;
                const pretty =
                  key === 'backend'
                    ? 'Backend & Databases'
                    : key === 'tools'
                    ? 'Languages & Tools'
                    : 'Frontend';

                return (
                  <article
                    key={key}
                    className="min-w-[85%] md:min-w-0 snap-center flex-shrink-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-300/10 dark:border-gray-600/20 rounded-3xl shadow-sm md:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] p-5 md:p-8 md:mb-4 overflow-visible will-change-transform"
                  >
                    <h3 className="flex items-center text-2xl font-semibold text-primary-accent dark:text-primary-accent-dark mb-6">
                      <Icon className="w-7 h-7 mr-3" /> {pretty}
                    </h3>
                    <ul className="space-y-3">
                      {skillsData[key].map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-accent/15 text-primary-accent dark:bg-primary-accent-dark/20 dark:text-primary-accent-dark animate-pulse">
                            <FiCheck className="w-3 h-3" />
                          </span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}