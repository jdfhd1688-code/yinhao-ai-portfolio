"use client";

import { RefObject, useEffect } from "react";

export function useViewportVideo(ref: RefObject<HTMLVideoElement | null>, active = true) {
  useEffect(() => {
    const video = ref.current;
    if (!video || !active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [active, ref]);
}
