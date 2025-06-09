import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 p-3 bg-primary-accent text-white rounded-full shadow-lg hover:bg-primary-accent-hover dark:hover:bg-primary-accent-dark-hover transition-all"
      >
        <FaChevronUp />
      </button>
    )
  );
}