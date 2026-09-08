"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function RoadPath() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const paths = root.current.querySelectorAll<SVGPathElement>(".road-path__progress");
    const trigger = root.current.parentElement;
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: { trigger, start: "top top", end: "bottom bottom", scrub: 1.2 },
      });
    });
  }, { scope: root });

  return (
    <svg ref={root} className="road-path" viewBox="0 0 100 2200" preserveAspectRatio="none" aria-hidden="true">
      <path className="road-path__ghost" d="M52 0 C28 140 76 230 48 360 S23 590 58 720 S78 950 40 1090 S25 1320 55 1450 C66 1530 45 1610 50 1700 L50 2200" />
      <path className="road-path__progress" d="M52 0 C28 140 76 230 48 360 S23 590 58 720 S78 950 40 1090 S25 1320 55 1450 C66 1530 45 1610 50 1700 L50 2200" />
    </svg>
  );
}
