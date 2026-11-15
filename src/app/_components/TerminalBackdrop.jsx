"use client";

import { useEffect, useState } from "react";

// Decorative terminal behind the page. Lines are fetched from /terminal.json
// after mount, so nothing is in the server HTML (not crawled, no render cost).
// Text is rendered twice so the scroll animation (translateY -50%) loops
// without a visible seam.
export default function TerminalBackdrop() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/terminal.json")
      .then((r) => r.json())
      // Repeat so one copy is taller than any viewport.
      .then((/** @type {string[]} */ lines) =>
        setText(Array(4).fill(lines.join("\n")).join("\n")),
      )
      .catch(() => {});
  }, []);

  return (
    <div className="terminal-backdrop" aria-hidden="true">
      {text && (
        <div className="terminal-backdrop__scroll">
          <pre className="terminal-backdrop__text">{text}</pre>
          <pre className="terminal-backdrop__text">{text}</pre>
        </div>
      )}
    </div>
  );
}
