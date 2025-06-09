import React, { useState, useEffect, useRef, useCallback } from 'react';
import clsx from 'clsx';
import {
  FaTimes,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaCog,
  FaLayerGroup,
  FaEnvelope,
  FaFileAlt,
} from 'react-icons/fa';
import { RiMenu5Fill } from 'react-icons/ri';

import resumePDF from '../assets/Ganga_Resume.pdf';

const listeners = new Set();
function useClickOutside(ref, onOutsideClick, excludeRef) {
  const handler = useCallback(
    (e) => {
      const el = ref.current;
      const ex = excludeRef?.current;
      if (el && !el.contains(e.target) && (!ex || !ex.contains(e.target)))
        onOutsideClick();
    },
    [ref, onOutsideClick, excludeRef]
  );
  useEffect(() => {
    listeners.add(handler);
    if (listeners.size === 1)
      document.addEventListener('mousedown', (evt) =>
        listeners.forEach((l) => l(evt))
      );
    return () => {
      listeners.delete(handler);
      if (listeners.size === 0)
        document.removeEventListener('mousedown', (evt) =>
          listeners.forEach((l) => l(evt))
        );
    };
  }, [handler]);
}

const navItems = [
  { id: 'about', label: 'About', icon: FaUserCircle },
  { id: 'skills', label: 'Skills', icon: FaCog },
  { id: 'projects', label: 'Projects', icon: FaLayerGroup },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];
const resumeURL = resumePDF;

const IconSwap = ({ show, children }) => (
  <span
    className={clsx(
      'absolute inset-0 flex items-center justify-center transition-all duration-300',
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
    )}
  >
    {children}
  </span>
);

export default function Navbar({ currentTheme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setVisible(curr < lastY.current || curr < 50);
      lastY.current = curr;
      setScrolled(curr > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useClickOutside(panelRef, () => open && setOpen(false), btnRef);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-[1000] bg-primary-accent text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>

      <header
        id="navbar"
        className={clsx(
          'fixed inset-x-0 top-0 z-40 shadow-sm transition-transform duration-300 dark:border-b dark:border-gray-700',
          'bg-white dark:bg-gray-900',
          visible ? 'translate-y-0' : '-translate-y-full',
          scrolled && 'backdrop-blur-md'
        )}
        aria-hidden={!visible}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex-grow md:flex-grow-0 text-center md:text-left">
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-primary-accent dark:text-primary-accent-dark"
            >
              Ganga Acharya
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="scroll-smooth transition-colors hover:text-primary-accent dark:hover:text-primary-accent-dark text-gray-600 dark:text-gray-300"
              >
                {label}
              </a>
            ))}
            <a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary-accent px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-primary-accent-hover dark:hover:bg-primary-accent-dark-hover"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <IconSwap show={currentTheme === 'light'}>
                <FaSun className="w-5 h-5" />
              </IconSwap>
              <IconSwap show={currentTheme === 'dark'}>
                <FaMoon className="w-5 h-5" />
              </IconSwap>
            </button>
          </nav>

          <div className="flex items-center space-x-2 md:hidden ml-auto">
            <button
              ref={btnRef}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-accent rounded-md"
            >
              <RiMenu5Fill className={clsx(
                'w-7 h-7 transition-transform duration-300 ease-in-out',
                open ? 'rotate-90 text-primary-accent' : 'rotate-0'
              )} />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={clsx(
          'md:hidden fixed inset-0 z-30 bg-black/50 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      <aside
        ref={panelRef}
        className={clsx(
          'md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 transform transition-all duration-500 origin-center',
          'bg-white dark:bg-gray-900',
          open ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none',
          scrolled && 'backdrop-blur-xl'
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-primary-accent dark:hover:text-primary-accent-dark transition"
          aria-label="Close menu"
        >
          <FaTimes className="w-7 h-7" />
        </button>
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Menu</h2>

          <nav className="flex flex-col gap-4">
            {navItems.map(({ id, label, icon: Icon }, idx) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={clsx(
                  'scroll-smooth flex items-center gap-4 rounded-md px-6 py-4 text-xl font-semibold text-gray-800 dark:text-white transform transition-transform duration-500 hover:scale-110 hover:-translate-y-1'
                )}
              >
                <Icon className="w-6 h-6 text-primary-accent dark:text-primary-accent-dark" />
                {label}
              </a>
            ))}
          </nav>

          <div>
            <a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-primary-accent py-3 px-4 text-white font-medium hover:bg-primary-accent-hover dark:hover:bg-primary-accent-dark-hover transition-colors"
            >
              <FaFileAlt className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
        <div className="absolute bottom-6">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-accent dark:hover:text-primary-accent-dark transition"
            aria-label="Toggle theme"
          >
            {currentTheme === 'light' ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
            <span className="text-sm">Switch Theme</span>
          </button>
        </div>
      </aside>
    </>
  );
}