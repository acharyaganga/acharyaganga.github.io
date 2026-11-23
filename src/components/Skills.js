import React from 'react';
import { FiBarChart2, FiMonitor, FiTool } from 'react-icons/fi';
import Reveal from './Reveal';
import { skillGroups } from '../data';

const icons = { data: FiBarChart2, web: FiMonitor, tools: FiTool };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <Reveal>
          <h2 className="section-title">Skills</h2>
        </Reveal>

        <div className="mt-6 divide-y divide-gray-200 dark:divide-gray-700/70">
          {skillGroups.map(({ id, label, skills }, i) => {
            const Icon = icons[id] || FiTool;
            return (
              <Reveal
                key={id}
                delay={i * 0.08}
                className="grid gap-4 py-6 md:grid-cols-[15rem_1fr] md:items-start md:gap-8"
              >
                <h3 className="flex items-center gap-3 text-base font-semibold text-gray-900 dark:text-white">
                  <Icon
                    className="h-5 w-5 flex-shrink-0 text-primary-accent dark:text-primary-accent-dark"
                    aria-hidden="true"
                  />
                  {label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="chip chip-lg">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
