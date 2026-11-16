"use client";

// Lightbulb/streetlamp button in the nav. It flips `data-theme` on <html> and remembers
// the choice. There is no React state: CSS shows the right icon for the active
// theme, so the server and client HTML always match.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode). The switch still works for now.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className="theme-toggle rounded-full border border-line bg-card p-2 text-foreground transition hover:border-accent hover:text-accent"
    >
      {/* Light theme: a lightbulb. */}
      <svg
        className="theme-toggle__bulb"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
        <path d="M9 19h6M10 22h4" />
      </svg>
      {/* Dark theme: a streetlamp, lit. */}
      <svg
        className="theme-toggle__streetlamp"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 21V8a4 4 0 0 1 4-4h2" />
        <path d="M5 21h6" />
        <path d="M14 3h6l-1.2 3.5h-3.6z" />
        <path d="M17 10v2M13.6 9.6l-1.1 1.6M20.4 9.6l1.1 1.6" />
      </svg>
    </button>
  );
}
