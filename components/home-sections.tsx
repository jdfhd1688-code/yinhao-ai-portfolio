"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-12%" }} transition={{ duration: reduced ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundGate, setSoundGate] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -70]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 0.82;
    video.play().then(() => {
      setSoundOn(true);
      setSoundGate(false);
    }).catch(() => {
      video.muted = true;
      void video.play();
    });
  }, []);

  const enterWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    setSoundGate(false);
    setSoundOn(true);
    video.muted = false;
    video.volume = 0.82;
    try {
      await video.play();
    } catch {
      video.muted = true;
      setSoundOn(false);
      await video.play();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !soundOn;
    video.muted = !next;
    setSoundOn(next);
    if (video.paused) void video.play();
  };

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <motion.video ref={videoRef} className="hero__video" style={{ scale }} autoPlay loop playsInline preload="auto" poster="/media/hero/hero-road.png">
        <source src="/media/hero/hero-road.mp4" type="video/mp4" />
      </motion.video>
      <div className="hero__shade" />
      <motion.div className="hero__copy" style={{ opacity, y }}>
        <p className="kicker">A PERSONAL JOURNEY · 2026</p>
        <h1>A long road.<br /><em>A sunrise somewhere ahead.</em></h1>
        <div className="hero__identity">
          <p>I&apos;m still on the way.</p>
          <div><strong>Yihong</strong><span>AI Products · AI Agents · AI Storytelling</span></div>
        </div>
      </motion.div>
      <a className="scroll-cue" href="#work"><span>SCROLL TO CONTINUE</span><ArrowDown size={16} /></a>
      {soundGate && <button className="sound-gate" type="button" onClick={enterWithSound}><span>ENTER WITH SOUND</span><b>↗</b></button>}
      {!soundGate && <button className="sound-toggle" type="button" onClick={toggleSound} aria-label={soundOn ? "Mute video" : "Unmute video"}>SOUND {soundOn ? "ON" : "OFF"}</button>}
    </section>
  );
}

export function RoadLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 20%"] });
  return <div className="road-line" ref={ref} aria-hidden="true"><motion.span style={{ scaleY: scrollYProgress }} /></div>;
}

export function Work() {
  return (
    <section id="work" className="work">
      <div className="interlude"><FadeIn><p>Along the way,<br /><em>I made a few things.</em></p></FadeIn></div>
      <div className="section-intro"><span>01 / SELECTED WORK</span><h2>Things I built<br />along the way.</h2></div>
      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <div className="project__copy">
              <span className="project__number">{project.number}</span>
              <p className="project__meta">{project.category}<br />{project.year}</p>
              <h3>{project.title}</h3>
              <p className="project__statement">{project.statement}</p>
              <Link className="arrow-link" href={`/work/${project.id}`}>View case study <ArrowRight size={18} /></Link>
            </div>
            <Link href={`/work/${project.id}`} className="project__media" aria-label={`View ${project.title} case study`}>
              <Image src={project.hero} alt={`${project.title} project cover`} fill sizes="(max-width: 800px) 100vw, 58vw" />
              <span>VIEW</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

const thoughts = ["I don't start with AI.", "I start with the problem.", "Then I design the workflow.", "Then AI becomes useful."];
const method = [["Understand", "Find the real problem."], ["Design", "Turn complexity into workflow."], ["Build", "Use AI where it actually matters."], ["Iterate", "Test, observe, improve."]];
const capabilities = ["AI Solution Design", "Product Thinking", "AI Agent", "RAG", "Workflow Design", "Prompt Engineering", "API Integration", "JSON / Structured Output", "AI Storytelling", "Rapid Prototyping"];

export function Thinking() {
  return (
    <section id="thinking" className="thinking">
      <div className="section-intro"><span>02 / HOW I THINK</span><h2>The tool comes<br /><em>after the question.</em></h2></div>
      <div className="thoughts">{thoughts.map((thought, i) => <FadeIn key={thought} className="thought"><span>0{i + 1}</span><p>{thought}</p></FadeIn>)}</div>
      <ol className="method">{method.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><strong>{title}</strong><p>{text}</p></li>)}</ol>
      <div className="capabilities" aria-label="Capabilities">{capabilities.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about">
      <div className="about__portrait"><Image src="/media/about/yihong-avatar.png" alt="Portrait of Yihong" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
      <div className="about__copy">
        <span>03 / ABOUT</span>
        <h2>Hi.<br />I&apos;m Yihong.</h2>
        <p className="about__lead">I build AI products, agents and stories that make technology feel more human.</p>
        <p>I&apos;m exploring how AI can understand people, solve real-world problems, and create new forms of storytelling.</p>
        <p className="about__closing">I&apos;m still learning.<br />Still building.<br /><em>Still on the way.</em></p>
        <div className="journey" aria-label="Journey">{["Psychology", "Law", "AI", "Still exploring"].map((item, i) => <span key={item}>{item}{i < 3 && <b>→</b>}</span>)}</div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact">
      <Image src="/media/hero/walking-road.png" alt="A solitary road leading into the night" fill sizes="100vw" />
      <div className="contact__shade" />
      <div className="contact__copy">
        <span>04 / CONTACT</span>
        <h2>I haven&apos;t reached<br />the summit yet.</h2>
        <p><em>I&apos;m still on the way.</em><br />Maybe our paths cross here.</p>
        <a className="contact__cta" href="mailto:hello@yihong.studio">Let&apos;s build something together <Mail size={18} /></a>
        <div className="contact__links"><a href="mailto:hello@yihong.studio">Email</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><a href="#">Resume</a><a href="#">LinkedIn</a></div>
      </div>
    </section>
  );
}
