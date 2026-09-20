"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Renders fully visible until the client has mounted and armed the
 * observer — so content stays visible with JS disabled, for crawlers, and
 * during the brief window before hydration, rather than depending on JS to
 * ever reveal it. Pure CSS transition (no JS-driven animation loop), so the
 * site-wide prefers-reduced-motion rule in globals.css already collapses
 * this to an instant, no-op reveal for anyone who asked for less motion.
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    // Defer arming to the next frame (rather than setting state synchronously
    // in the effect body) so this passes react-hooks/set-state-in-effect —
    // the two-step "mount, then arm" is intentional: it's what lets content
    // render fully visible for no-JS/crawlers before the client ever hides
    // it to animate it back in.
    const raf = requestAnimationFrame(() => setArmed(true));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const hidden = armed && !visible;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        hidden ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
