import React from 'react';
import { motion } from 'framer-motion';

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
