import React from 'react';
import { SiBluesky, SiGithub, SiLinkedin } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { links } from '../data';

const currentYear = new Date().getFullYear();

const social = [
  { href: links.github, label: 'GitHub', icon: SiGithub, external: true },
  { href: links.linkedin, label: 'LinkedIn', icon: SiLinkedin, external: true },
  { href: links.bluesky, label: 'Bluesky', icon: SiBluesky, external: true },
  { href: links.email, label: 'Email', icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-8 pb-24 dark:border-gray-800 sm:pb-8">
      <div className="shell flex flex-col items-center gap-5 text-sm text-gray-600 dark:text-gray-400 sm:flex-row sm:justify-between sm:pr-16">
        <p>
          &copy; {currentYear} Ganga Acharya
          <span className="mx-2 text-gray-300 dark:text-gray-600" aria-hidden="true">/</span>
          <a
            href={links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-primary-accent hover:underline dark:hover:text-primary-accent-dark"
          >
            Source on GitHub
          </a>
        </p>

        <ul className="flex items-center gap-1">
          {social.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-accent dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary-accent-dark"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
