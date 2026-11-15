"use client";

import { useEffect, useRef, useState } from "react";

// How far the terminal text moves per pixel of page scroll. Below 1 so the
// text trails the page, which gives the parallax depth.
const PARALLAX = 0.35;

// Decorative terminal window behind the page (one window, not a page frame).
// Lines are fetched from /terminal.json after mount, so nothing is in the
// server HTML (not crawled, no render cost).
// The text only moves when the page scrolls (parallax). It is rendered twice
// so the offset can wrap around at half its height without a visible seam.
export default function TerminalBackdrop() {
  const [text, setText] = useState("");
  /** @type {import("react").RefObject<HTMLDivElement | null>} */
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("/terminal.json")
      .then((r) => r.json())
      // Repeat so one copy is taller than any viewport.
      .then((/** @type {string[]} */ lines) =>
        setText(Array(4).fill(lines.join("\n")).join("\n")),
      )
      .catch(() => {});
  }, []);

  useEffect(() => {
    // The scrolling element only exists once the text has loaded.
    const el = scrollRef.current;
    if (!text || !el) return;
    // Respect reduced motion: leave the text where it is.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const loop = el.offsetHeight / 2; // height of one copy of the text
      if (loop <= 0) return;
      const shift = (window.scrollY * PARALLAX) % loop;
      el.style.transform = `translateY(${-shift}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <div className="terminal-backdrop" aria-hidden="true">
      {/* Window title bar: decorative, the dots are not buttons. */}
      <div className="terminal-bar">
        <span className="terminal-bar__dot terminal-bar__dot--close" />
        <span className="terminal-bar__dot terminal-bar__dot--min" />
        <span className="terminal-bar__dot terminal-bar__dot--max" />
      </div>
      {text && (
        <div ref={scrollRef} className="terminal-backdrop__scroll">
          <pre className="terminal-backdrop__text">{text}</pre>
          <pre className="terminal-backdrop__text">{text}</pre>
        </div>
      )}
    </div>
  );
}
