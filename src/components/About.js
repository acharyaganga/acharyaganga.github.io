import React from 'react';
import Reveal from './Reveal';
import { education, experience } from '../data';

/** Heading in a narrow left column, content on the right; stacks on phones. */
function Row({ id, title, band, children }) {
  return (
    <section id={id} className={band ? 'section section-band' : 'section'}>
      <div className="shell grid gap-6 md:grid-cols-[15rem_1fr] md:gap-12">
        <Reveal>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Row id="about" title="About" band>
        <Reveal className="max-w-3xl space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
          <p>
            I’m a <strong className="font-semibold text-gray-900 dark:text-white">Data Analyst</strong> with
            the Pennsylvania Department of Human Services. I analyze State Hospital system data for
            the Office of Mental Health and Substance Abuse Services, using SQL, R, Python, Tableau,
            Qlik and Crystal Reports to turn complex data into reports that leadership can act on.
          </p>
          <p>
            I enjoy solving real-world problems through data: building reports and dashboards that
            help teams make informed decisions, automating processes and visualizing trends. I also
            build full-stack web applications with React and Node.js.
          </p>
          <p>
            Outside of work, I enjoy coding, spending time with my family, and outdoor activities
            like hiking and biking.
          </p>
        </Reveal>
      </Row>

      <Row id="experience" title="Experience">
        <ol className="max-w-3xl border-l border-gray-200 dark:border-gray-700">
          {experience.map((entry, i) => (
            <Reveal as="li" key={entry.title} delay={i * 0.08} className="relative pb-9 pl-6 last:pb-0">
              <span
                aria-hidden="true"
                className={
                  entry.current
                    ? 'pulse-dot !absolute -left-[5px] top-1.5 !h-2.5 !w-2.5'
                    : 'absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600'
                }
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
      </Row>

      <Row id="education" title="Education" band>
        <ul className="grid gap-5 sm:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal as="li" key={entry.title} delay={i * 0.08} className="surface p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {entry.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{entry.org}</p>
            </Reveal>
          ))}
        </ul>
      </Row>
    </>
  );
}
