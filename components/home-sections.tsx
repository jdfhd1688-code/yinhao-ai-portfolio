"use client";

import { motion, useReducedMotion } from "framer-motion";

const thoughts = ["I don't start with AI.", "I start with the problem.", "Then I design the workflow.", "Then AI becomes useful."];
const method = ["UNDERSTAND", "DESIGN", "BUILD", "ITERATE"];

export function Thinking() {
  const reduced = useReducedMotion();
  return (
    <section id="thinking" className="thinking-v2" aria-labelledby="thinking-title">
      <header><span>02 / HOW I THINK</span><h2 id="thinking-title">The tool comes<br /><em>after the question.</em></h2></header>
      <div className="thinking-v2__statements">
        {thoughts.map((thought, index) => (
          <motion.div key={thought} className="thinking-v2__statement" initial={reduced ? false : { opacity: 0.12, y: 42, letterSpacing: "-0.04em" }} whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.065em" }} viewport={{ amount: 0.65 }} transition={{ duration: 0.9 }}>
            <span>0{index + 1}</span><p>{thought}</p>
          </motion.div>
        ))}
      </div>
      <div className="method-road" aria-label="Understand, design, build, iterate">
        <svg viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true"><path d="M0 118 C250 35 420 145 610 84 C790 25 930 112 1200 48" /></svg>
        {method.map((item, index) => <div key={item} style={{ "--step": index } as React.CSSProperties}><span>0{index + 1}</span><strong>{item}</strong></div>)}
      </div>
    </section>
  );
}
