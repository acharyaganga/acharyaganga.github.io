import React from 'react';
import Reveal from './Reveal';
import { experience } from '../data';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="section-title">About</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              I’m a <strong className="font-semibold text-gray-900 dark:text-white">Data Analyst</strong> working
              with the Pennsylvania Department of Human Services as a contractor through Computer Aid,
              Inc. I analyze State Hospital system data for the Office of Mental Health and Substance
              Abuse Services, using SQL, R, Python, Tableau, Qlik and Crystal Reports to turn complex
              data into reports that leadership can act on.
            </p>
            <p>
              I enjoy solving real-world problems through data: building reports and dashboards
              that help teams make informed decisions, automating processes and visualizing trends.
              I also build full-stack web applications with React and Node.js.
            </p>
            <p>
              Outside of work, I enjoy coding, spending time with my family, and outdoor activities
              like hiking and biking.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="section-title">Experience &amp; Education</h2>
          </Reveal>
          <ol className="mt-6 border-l border-gray-200 dark:border-gray-700">
            {experience.map((entry, i) => (
              <Reveal as="li" key={entry.title} delay={i * 0.08} className="relative pb-8 pl-6 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary-accent dark:bg-primary-accent-dark"
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {entry.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{entry.org}</p>
                {entry.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{entry.detail}</p>
                )}
                {entry.points && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-gray-600 marker:text-primary-accent dark:text-gray-400 dark:marker:text-primary-accent-dark">
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
