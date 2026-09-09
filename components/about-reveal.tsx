"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/messages/locale";

export function AboutReveal() {
  const { t, locale } = useLanguage();
  const reduced = useReducedMotion();
  return (
    <section id="about" className="about-reveal" aria-labelledby="about-title">
      <motion.div className="about-reveal__portrait" initial={reduced ? false : { clipPath: "inset(12% 10% 12% 10%)", scale: 1.04 }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}>
        <div className="about-reveal__portrait-frame"><Image src="/media/about/yinhao-avatar.png" alt={locale === "zh" ? "路上的 YINHAO 彩色肖像" : "Color portrait of YINHAO on the road"} fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
      </motion.div>
      <div className="about-reveal__copy">
        <span>{t.aboutLabel}</span><h2 id="about-title">Hi.<br />I&apos;m YINHAO.</h2>
        <p className="about-reveal__lead">{t.aboutLead}</p><p>{t.aboutBody}</p><p className="about-reveal__closing">{t.aboutClosing}</p>
      </div>
      <div className="journey-words" aria-label={t.journey.join(", ")}>{t.journey.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
  );
}
