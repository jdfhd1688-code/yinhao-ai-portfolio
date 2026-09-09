"use client";

import { type RefObject, useEffect } from "react";
import { useMotionValue } from "framer-motion";

export function useSectionProgress(ref: RefObject<HTMLElement | null>) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const update = () => {
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const travelled = -section.getBoundingClientRect().top;
      progress.set(Math.min(1, Math.max(0, travelled / distance)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(section);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [progress, ref]);

  return progress;
}
