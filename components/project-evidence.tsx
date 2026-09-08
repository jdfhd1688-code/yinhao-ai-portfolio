"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function MediaPlaceholder({ path, title }: { path: string; title: string }) {
  return <div className="media-placeholder" role="note"><span>REAL MEDIA NEEDED</span><strong>{title}</strong><code>{path}</code></div>;
}

const safetySteps = ["User Message", "Risk Screening", "Risk Level", "Context Review", "Supportive Response", "Safety Guidance", "Structured Record"];

export function SafetyWorkflow() {
  const reduced = useReducedMotion();
  return (
    <section className="evidence evidence--safety" aria-labelledby="safety-title">
      <div className="evidence__heading"><span>PRODUCT EVIDENCE / SAFETY</span><h2 id="safety-title">Support with<br />a safety net.</h2><p>A calm, traceable response path for moments when an ordinary conversation may carry higher risk.</p></div>
      <ol className="safety-flow">
        {safetySteps.map((step, index) => <motion.li key={step} initial={reduced ? false : { opacity: 0.2, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.6, delay: index * 0.04 }}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span>{index < safetySteps.length - 1 && <i aria-hidden="true">↓</i>}</motion.li>)}
      </ol>
      <div className="evidence-grid">
        <MediaPlaceholder title="Conversation UI" path="/public/media/youwozai/chat.png" />
        <MediaPlaceholder title="Emotion record" path="/public/media/youwozai/emotion-record.png" />
        <MediaPlaceholder title="Weekly letter" path="/public/media/youwozai/weekly-letter.png" />
        <MediaPlaceholder title="Guardian circle" path="/public/media/youwozai/guardian-circle.png" />
      </div>
    </section>
  );
}

const legalLayers = [
  ["INPUT", "Upload Contract"],
  ["PARSING", "Document Parsing", "Clause Extraction"],
  ["KNOWLEDGE", "RAG", "Legal Knowledge Base", "Compliance Rules"],
  ["REASONING", "Risk Detection", "Compliance Reasoning"],
  ["OUTPUT", "Risk Level", "Legal Basis", "Revision Suggestion", "Structured Report"],
];

export function LegalArchitecture() {
  const reduced = useReducedMotion();
  return (
    <section className="evidence evidence--legal" aria-labelledby="architecture-title">
      <div className="evidence__heading"><span>AI SOLUTION ARCHITECTURE</span><h2 id="architecture-title">The real problem wasn&apos;t<br />document summarization.</h2><p>It was turning scattered legal judgment into a repeatable workflow.</p></div>
      <div className="architecture">
        {legalLayers.map(([label, ...items], index) => <motion.div key={label} initial={reduced ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, delay: index * 0.06 }}><span>{label}</span>{items.map((item) => <strong key={item}>{item}</strong>)}{index < legalLayers.length - 1 && <i aria-hidden="true">→</i>}</motion.div>)}
      </div>
      <div className="evidence-grid evidence-grid--two"><MediaPlaceholder title="Contract upload" path="/public/media/legal-agent/contract-upload.png" /><MediaPlaceholder title="Risk report" path="/public/media/legal-agent/risk-report.png" /></div>
    </section>
  );
}

const filmSteps = ["Concept", "Script", "Storyboard", "Character Consistency", "Image Generation", "Video Generation", "Voice / Music", "Editing", "Final Film"];

export function FilmGallery() {
  return (
    <section className="evidence evidence--film" aria-labelledby="film-title">
      <div className="film-poster"><Image src="/media/storytelling/cover.png" alt="Existing AI storytelling portrait artwork" fill sizes="(max-width: 800px) 100vw, 42vw" /><span>AI STORYTELLING · 2025—2026</span></div>
      <div className="evidence__heading"><span>CREATIVE PROCESS</span><h2 id="film-title">A world,<br />held together.</h2><p>Generation makes frames possible. Direction keeps them part of the same story.</p></div>
      <ol className="film-strip">{filmSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
      <div className="evidence-grid evidence-grid--film"><MediaPlaceholder title="Storyboard frame" path="/public/media/storytelling/storyboard-01.jpg" /><MediaPlaceholder title="Film preview" path="/public/media/storytelling/film-01.mp4" /></div>
    </section>
  );
}

export function ProjectEvidence({ projectId }: { projectId: string }) {
  if (projectId === "youwozai") return <SafetyWorkflow />;
  if (projectId === "legal-ai-agent") return <LegalArchitecture />;
  return <FilmGallery />;
}
