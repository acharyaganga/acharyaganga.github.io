(function () {
  try {
    var saved = localStorage.getItem('theme'); // "light" | "dark" | "auto" | null
    // Older builds stored the value JSON-encoded ('"dark"').
    if (saved && saved.charAt(0) === '"') saved = saved.slice(1, -1);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved === 'dark' || saved === 'light' ? saved : prefersDark ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f172a' : '#f8fafc');
  } catch (_) {}
})();
