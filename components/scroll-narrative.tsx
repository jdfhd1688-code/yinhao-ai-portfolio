"use client";

import { type MotionValue, motion, useReducedMotion, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useViewportVideo } from "@/hooks/use-viewport-video";
import { useSectionProgress } from "@/hooks/use-section-progress";
import { useLanguage } from "@/messages/locale";

function Scene({ progress, at, children, opening = false }: { progress: MotionValue<number>; at: number[]; children: React.ReactNode; opening?: boolean }) {
  const opacity = useTransform(progress, at, at[0] === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]);
  const y = useTransform(progress, [at[0], at[1], at[2], at[3]], opening ? [0, 0, 0, -28] : [32, 0, 0, -28]);
  return <motion.div className={`narrative__scene${opening ? " narrative__scene--opening" : ""}`} style={{ opacity, y }}>{children}</motion.div>;
}

export function ScrollNarrative() {
  const { locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [media, setMedia] = useState({ isMobile: false, saveData: false, slow: false });
  const reduced = useReducedMotion();
  const scrollYProgress = useSectionProgress(ref);
  const scale = useTransform(scrollYProgress, [0, 1], [1.09, reduced ? 1.09 : 1]);
  const brightness = useTransform(scrollYProgress, [0, 0.65, 1], [0.42, 0.68, 0.5]);
  const scenes: { at: number[]; copy: React.ReactNode }[] = locale === "zh" ? [
    { at: [0, 0.001, 0.16, 0.24], copy: <h1>一段很长的路。</h1> },
    { at: [0.2, 0.3, 0.4, 0.49], copy: <h2>为了赶上明早<br /><em>山顶的日出。</em></h2> },
    { at: [0.42, 0.52, 0.62, 0.7], copy: <h2>我仍然<br />在路上。</h2> },
    { at: [0.64, 0.73, 0.84, 0.91], copy: <div className="narrative__identity"><strong>YINHAO</strong><span>AI 解决方案<br />AI 产品<br />Workflow 设计</span></div> },
    { at: [0.84, 0.91, 0.98, 1], copy: <h2>沿途，<br /><em>我做了一些东西。</em></h2> },
  ] : [
    { at: [0, 0.001, 0.16, 0.24], copy: <h1>A long road.</h1> },
    { at: [0.2, 0.3, 0.4, 0.49], copy: <h2>A sunrise<br /><em>somewhere ahead.</em></h2> },
    { at: [0.42, 0.52, 0.62, 0.7], copy: <h2>I&apos;m still<br />on the way.</h2> },
    { at: [0.64, 0.73, 0.84, 0.91], copy: <div className="narrative__identity"><strong>YINHAO</strong><span>AI Solution<br />AI Product<br />Workflow Design</span></div> },
    { at: [0.84, 0.91, 0.98, 1], copy: <h2>Along the way,<br /><em>I made a few things.</em></h2> },
  ];
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 800px)");
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    setMedia({ isMobile: mq.matches, saveData: !!conn?.saveData, slow: conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g" });
  }, []);
  useViewportVideo(videoRef, !reduced);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduced) {
      video.pause();
      video.currentTime = 0;
      return;
    }
    if (media.saveData || media.slow) {
      video.pause();
      return;
    }
    video.muted = true;
    void video.play().catch(() => undefined);
  }, [reduced, media.saveData, media.slow]);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = soundOn;
    setSoundOn(!soundOn);
    if (video.paused) await video.play().catch(() => undefined);
  };

  return (
    <section ref={ref} className="narrative" aria-label={locale === "zh" ? "仍在继续的旅程" : "A journey still in progress"}>
      <div className="narrative__sticky">
        <motion.video ref={videoRef} className="narrative__video" style={{ scale, opacity: brightness }} autoPlay muted loop playsInline preload={media.isMobile ? "metadata" : "auto"} poster={media.isMobile ? "/media/hero/hero-poster.webp" : "/media/hero/hero-road.png"}>
          <source src={media.isMobile ? "/media/hero/hero-mobile.mp4" : "/media/hero/hero-road.mp4"} type="video/mp4" />
        </motion.video>
        <div className="narrative__shade" />
        <p className="narrative__chapter">{locale === "zh" ? "一段个人旅程 · 2026" : "A PERSONAL JOURNEY · 2026"}</p>
        {scenes.map((scene, index) => <Scene key={index} progress={scrollYProgress} at={scene.at} opening={index === 0}>{scene.copy}</Scene>)}
        <button className="sound-toggle" type="button" onClick={toggleSound} aria-label={soundOn ? (locale === "zh" ? "关闭声音" : "Mute film audio") : (locale === "zh" ? "播放声音" : "Play film audio")}>
          {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}<span>{soundOn ? (locale === "zh" ? "声音已开启" : "SOUND ON") : (locale === "zh" ? "播放声音" : "PLAY SOUND")}</span>
        </button>
        <p className="narrative__progress">{locale === "zh" ? "继续滚动" : "SCROLL"} <span /></p>
      </div>
    </section>
  );
}
