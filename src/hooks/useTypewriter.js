import { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Types each word, holds it, deletes it, then moves to the next.
 * With reduced motion it returns the first word and never animates.
 */
export default function useTypewriter(
  words,
  { typeMs = 65, deleteMs = 32, holdMs = 2200, gapMs = 350 } = {}
) {
  const [reduced] = useState(prefersReducedMotion);
  const [state, setState] = useState({ word: 0, chars: 0, deleting: false });

  useEffect(() => {
    if (reduced) return undefined;
    const full = words[state.word];
    let delay;
    let next;

    if (!state.deleting && state.chars < full.length) {
      delay = typeMs;
      next = { ...state, chars: state.chars + 1 };
    } else if (!state.deleting) {
      delay = holdMs;
      next = { ...state, deleting: true };
    } else if (state.chars > 0) {
      delay = deleteMs;
      next = { ...state, chars: state.chars - 1 };
    } else {
      delay = gapMs;
      next = { word: (state.word + 1) % words.length, chars: 0, deleting: false };
    }

    const id = setTimeout(() => setState(next), delay);
    return () => clearTimeout(id);
  }, [state, words, reduced, typeMs, deleteMs, holdMs, gapMs]);

  return reduced ? words[0] : words[state.word].slice(0, state.chars);
}
