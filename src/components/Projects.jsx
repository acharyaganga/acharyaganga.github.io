import React from 'react';
import { FiArrowUpRight, FiLock } from 'react-icons/fi';
import Reveal from './Reveal';
import { projectsData } from '../data';

const labelText = {
  'private repo': 'Private repo',
  'team project': 'Team project',
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <Reveal>
          <h2 className="section-title">Projects</h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <Reveal
              as="article"
              key={project.id}
              delay={(i % 2) * 0.08}
              className="surface flex flex-col p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                {project.label && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {labelText[project.label] || project.label}
                  </span>
                )}
              </div>

              <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-sm font-semibold">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-primary-accent hover:underline dark:text-primary-accent-dark"
                  >
                    View code
                    <FiArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-medium text-gray-500 dark:text-gray-400">
                    <FiLock className="h-3.5 w-3.5" aria-hidden="true" />
                    Source not public
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
