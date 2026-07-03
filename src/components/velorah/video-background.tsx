"use client";

import { useEffect, useRef } from "react";

/**
 * Fullscreen looping background video. Purely decorative — hidden from
 * assistive tech, and paused for users who prefer reduced motion.
 */
export function VideoBackground({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Autoplay can be blocked; the navy backdrop stands in.
        });
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 z-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
