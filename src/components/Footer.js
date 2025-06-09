import React from 'react';
import { FaHeart } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="bg-slate-200 dark:bg-gray-950 text-gray-600 dark:text-gray-400 py-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-2 text-center">
      <p className="text-sm">
        &copy; {currentYear} Ganga Acharya. All rights reserved.
      </p>
      <p className="text-xs flex items-center gap-2">
        Crafted with
        <FaHeart className="w-3.5 h-3.5 text-primary-accent inline-block" />
        using React, Tailwind CSS &amp; JavaScript.
      </p>
    </div>
  </footer>
);

export default Footer;
