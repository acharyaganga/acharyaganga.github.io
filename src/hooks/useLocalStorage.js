import { useState, useCallback, useLayoutEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) return JSON.parse(saved);
    } catch (_) {}
    return key === 'theme'
      ? 'auto'
      : typeof initialValue === 'function'
      ? initialValue()
      : initialValue;
  });

  const resolveTheme = useCallback(
    (raw) =>
      raw === 'auto'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : raw,
    []
  );

  const applyTheme = useCallback(
    (raw) => {
      document.documentElement.classList.toggle('dark', resolveTheme(raw) === 'dark');
    },
    [resolveTheme]
  );

  const setValue = useCallback(
    (value) => {
      const valueToStore = typeof value === 'function' ? value(storedValue) : value;
      setStoredValue(valueToStore);
      try {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (_) {}
      if (key === 'theme') applyTheme(valueToStore);
    },
    [key, storedValue, applyTheme]
  );

  useLayoutEffect(() => {
    if (key !== 'theme') return;
    applyTheme(storedValue);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => storedValue === 'auto' && applyTheme('auto');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [key, storedValue, applyTheme]);

  return [storedValue, setValue];
}