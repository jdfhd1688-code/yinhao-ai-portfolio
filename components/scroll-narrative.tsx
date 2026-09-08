"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useViewportVideo } from "@/hooks/use-viewport-video";

const scenes: { at: number[]; copy: React.ReactNode }[] = [
  { at: [0, 0.001, 0.16, 0.24], copy: <h1>A long road.</h1> },
  { at: [0.2, 0.3, 0.4, 0.49], copy: <h2>A sunrise<br /><em>somewhere ahead.</em></h2> },
  { at: [0.42, 0.52, 0.62, 0.7], copy: <h2>I&apos;m still<br />on the way.</h2> },
  { at: [0.64, 0.73, 0.84, 0.91], copy: <div className="narrative__identity"><strong>YINHAO</strong><span>AI Products<br />AI Agents<br />AI Storytelling</span></div> },
  { at: [0.84, 0.91, 0.98, 1], copy: <h2>Along the way,<br /><em>I made a few things.</em></h2> },
];

function Scene({ progress, at, children }: { progress: ReturnType<typeof useScroll>["scrollYProgress"]; at: number[]; children: React.ReactNode }) {
  const opacity = useTransform(progress, at, at[0] === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]);
  const y = useTransform(progress, [at[0], at[1], at[2], at[3]], [32, 0, 0, -28]);
  return <motion.div className="narrative__scene" style={{ opacity, y }}>{children}</motion.div>;
}

export function ScrollNarrative() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.09, reduced ? 1.09 : 1]);
  const brightness = useTransform(scrollYProgress, [0, 0.65, 1], [0.42, 0.68, 0.5]);
  useViewportVideo(videoRef);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => undefined);
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = soundOn;
    setSoundOn(!soundOn);
    if (video.paused) await video.play().catch(() => undefined);
  };

  return (
    <section ref={ref} className="narrative" aria-label="A journey still in progress">
      <div className="narrative__sticky">
        <motion.video ref={videoRef} className="narrative__video" style={{ scale, opacity: brightness }} autoPlay muted loop playsInline preload="auto" poster="/media/hero/hero-road.png">
          <source src="/media/hero/hero-road.mp4" type="video/mp4" />
        </motion.video>
        <div className="narrative__shade" />
        <p className="narrative__chapter">A PERSONAL JOURNEY · 2026</p>
        {scenes.map((scene, index) => <Scene key={index} progress={scrollYProgress} at={scene.at}>{scene.copy}</Scene>)}
        <button className="sound-toggle" type="button" onClick={toggleSound} aria-label={soundOn ? "Mute film audio" : "Play film audio"}>
          {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}<span>{soundOn ? "SOUND ON" : "PLAY SOUND"}</span>
        </button>
        <p className="narrative__progress">SCROLL <span /></p>
      </div>
    </section>
  );
}
