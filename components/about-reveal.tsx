"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function AboutReveal() {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="about-reveal" aria-labelledby="about-title">
      <motion.div className="about-reveal__portrait" initial={reduced ? false : { clipPath: "inset(12% 10% 12% 10%)", scale: 1.04 }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}>
        <div className="about-reveal__portrait-frame"><Image src="/media/about/yinhao-avatar.png" alt="Color portrait of YINHAO on the road" fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
      </motion.div>
      <div className="about-reveal__copy">
        <span>03 / ABOUT · THE PERSON ON THE ROAD</span><h2 id="about-title">Hi.<br />I&apos;m YINHAO.</h2>
        <p className="about-reveal__lead">I build AI products,<br />agents and stories<br />that make technology feel more human.</p>
        <p>I&apos;m exploring how AI can understand people, solve real-world problems, and create new forms of storytelling.</p>
        <p className="about-reveal__closing">I&apos;m still learning.<br />Still building.<br /><em>Still on the way.</em></p>
      </div>
      <div className="journey-words" aria-label="Journey from psychology through law to AI"><span>Psychology</span><span>Law</span><span>AI</span><span>Still exploring</span></div>
    </section>
  );
}
