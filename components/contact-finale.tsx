"use client";

import Image from "next/image";
import { MotionValue, motion, useReducedMotion, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useSectionProgress } from "@/hooks/use-section-progress";
import { useLanguage } from "@/messages/locale";

function FinaleBeat({ beat, index, progress, reduced }: { beat: string; index: number; progress: MotionValue<number>; reduced: boolean | null }) {
  const start = index * 0.21;
  const opacity = useTransform(progress, index === 0 ? [0, 0.001, 0.2, 0.28] : [start, start + 0.08, start + 0.2, start + 0.28], index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.08, start + 0.28], [reduced ? 0 : 30, 0, reduced ? 0 : -24]);
  return <motion.h2 id={index === 0 ? "contact-title" : undefined} style={{ opacity, y }}>{beat.split("\n").map((line) => <span key={line}>{line}</span>)}</motion.h2>;
}

export function ContactFinale() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const scrollYProgress = useSectionProgress(ref);
  const ctaOpacity = useTransform(scrollYProgress, [0.68, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.68, 0.8], [30, 0]);
  return (
    <section id="contact" ref={ref} className="finale" aria-labelledby="contact-title">
      <div className="finale__sticky">
        <div className="finale__image"><Image src="/media/hero/walking-road.png" alt={locale === "zh" ? "夜路上继续前行的人" : "A solitary figure continuing along a road at night"} fill sizes="100vw" /></div>
        <div className="finale__shade" /><span className="finale__label">{t.contactLabel}</span>
        {t.contactBeats.map((beat, index) => <FinaleBeat key={beat} beat={beat} index={index} progress={scrollYProgress} reduced={reduced} />)}
        <motion.div className="finale__cta" style={{ opacity: ctaOpacity, y: ctaY }}>
          <p>{t.talk} <ArrowUpRight /></p>
          <div className="finale__pending" aria-label="Contact links pending"><span>Email</span><span>GitHub</span><span>Resume</span><span>LinkedIn</span></div>
          <small>{t.contactPending}</small>
        </motion.div>
      </div>
    </section>
  );
}
