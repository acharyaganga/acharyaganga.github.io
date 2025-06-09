import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaDownload, FaBriefcase, FaCode } from 'react-icons/fa';
import ScrollReveal from '../hooks/ScrollReveal';

import profilePic from '../assets/images/profile.jpg';
import resumePDF from '../assets/Ganga_Resume.pdf';

export default function About() {
  return (
    <ScrollReveal as="section" variant="slide-up" className="group">
      <section
        id="about"
        className="relative scroll-mt-24 pt-6 pb-16 lg:pt-10 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        data-aos="fade-up"
        data-aos-delay="200"
      >

        <div className="container mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white relative inline-block after:block after:h-1 after:bg-primary-accent after:w-12 after:mt-2 after:mx-auto">
              About Me
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-gray-600 dark:text-gray-400">
              A brief introduction to who I am and what drives me as a developer.
            </p>
          </header>

          <div className="mx-auto max-w-5xl grid md:grid-cols-2 lg:grid-cols-5 gap-12 items-center">
            <div className="md:order-2 lg:col-span-2 md:col-span-1 hidden md:block" data-aos="zoom-in" data-aos-delay="100">
              <Tilt glareEnable={false} tiltMaxAngleX={6} tiltMaxAngleY={6}>
                <div className="relative group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-accent/20 to-transparent blur-xl opacity-60 animate-pulseOnce" />
                  <img
                    src={profilePic}
                    alt="Portrait of Ganga Acharya smiling"
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-72 h-72 rounded-3xl object-cover shadow-2xl transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              </Tilt>
            </div>

            <article className="lg:col-span-3 md:col-span-1 bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 md:p-10 border border-primary-accent/10 dark:border-primary-accent-dark/20 transition duration-500 ease-in-out">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Hello! I’m <strong>Ganga Acharya</strong>, currently working as a <span className="text-primary-accent dark:text-teal-300 font-semibold">Data Analyst</span> at the Pennsylvania Department of Human Services. I use tools like SQL, R, Python, Tableau, Qlik, and Crystal Reports to turn complex data into useful insights. I also enjoy full-stack web development and have experience with React, Node.js, and Tailwind CSS.
                </p>

                <p>
                  I enjoy solving real-world problems through data, building reports and dashboards that help teams make informed decisions. Whether it’s automating processes or visualizing trends, I focus on making data useful and accessible.
                </p>

                <p>
                  Outside of work, I enjoy coding, spending time with my family, and outdoor activities like hiking and biking.
                </p>
              </div>

              <ul className="mt-10 grid grid-cols-2 gap-4">
                <li className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700/30 p-4 rounded-xl shadow-md">
                  <FaBriefcase className="text-primary-accent w-6 h-6" />
                  <div>
                    <div className="text-xl font-bold">1</div>
                    <div className="text-xs uppercase text-gray-500">Year Experience</div>
                  </div>
                </li>
                <li className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700/30 p-4 rounded-xl shadow-md">
                  <FaCode className="text-primary-accent w-6 h-6" />
                  <div>
                    <div className="text-xl font-bold">5+</div>
                    <div className="text-xs uppercase text-gray-500">Projects Completed</div>
                  </div>
                </li>
              </ul>

              <blockquote className="mt-8 italic text-center text-gray-500 dark:text-gray-400">
                “Building with empathy, scaling with clarity.”
              </blockquote>

              <div className="mt-10 flex justify-center animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-accent px-6 py-3 text-white font-semibold shadow-lg transition-transform hover:scale-105 hover:bg-primary-accent-hover dark:hover:bg-primary-accent-dark-hover"
                >
                  <FaDownload className="w-5 h-5" />
                  Download Résumé
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}