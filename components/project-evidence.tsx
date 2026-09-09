import Image from "next/image";
import { ProjectMediaSlot } from "@/components/ProjectMediaSlot";
import type { Project } from "@/data/projects";

const safetySteps = ["User Message", "Risk Screening", "Risk Level", "Context Review", "Supportive Response", "Safety Guidance", "Structured Record"];
const legalLayers = [
  ["INPUT", "Upload Contract"],
  ["PARSING", "Document Parsing", "Clause Extraction"],
  ["KNOWLEDGE", "RAG", "Legal Knowledge Base", "Compliance Rules"],
  ["REASONING", "Risk Detection", "Compliance Reasoning"],
  ["OUTPUT", "Risk Level", "Legal Basis", "Revision Suggestion", "Structured Report"],
];
const filmSteps = ["Concept", "Script", "Storyboard", "Character Consistency", "Image Generation", "Video Generation", "Voice / Music", "Editing", "Film in Progress"];

function AssetSlots({ project }: { project: Project }) {
  return <div className="planned-media-grid">{project.plannedAssets.map((asset) => <ProjectMediaSlot key={asset.path} asset={asset} />)}</div>;
}

function SafetyWorkflow({ project }: { project: Project }) {
  return (
    <section className="evidence evidence--safety" aria-labelledby="safety-title">
      <div className="evidence__heading"><span>SAFETY DESIGN · IN DEVELOPMENT</span><h2 id="safety-title">Support with<br />a safety net.</h2><p>A calm, traceable response direction for moments when an ordinary conversation may carry higher risk.</p></div>
      <ol className="safety-flow">{safetySteps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span>{index < safetySteps.length - 1 && <i aria-hidden="true">↓</i>}</li>)}</ol>
      <AssetSlots project={project} />
    </section>
  );
}

function LegalArchitecture({ project }: { project: Project }) {
  return (
    <section className="evidence evidence--legal" aria-labelledby="architecture-title">
      <div className="evidence__heading"><span>PLANNED AI SOLUTION ARCHITECTURE</span><h2 id="architecture-title">The real problem wasn&apos;t<br />document summarization.</h2><p>It was turning scattered legal judgment into a repeatable workflow. This diagram communicates the current system direction, not a finished production architecture.</p></div>
      <div className="architecture">{legalLayers.map(([label, ...items], index) => <div key={label}><span>{label}</span>{items.map((item) => <strong key={item}>{item}</strong>)}{index < legalLayers.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
      <AssetSlots project={project} />
    </section>
  );
}

function FilmGallery({ project }: { project: Project }) {
  return (
    <section className="evidence evidence--film" aria-labelledby="film-title">
      <div className="film-poster"><Image src="/media/storytelling/cover.png" alt="Existing AI storytelling visual development artwork" fill sizes="(max-width: 800px) 100vw, 42vw" /><span>VISUAL DEVELOPMENT UNDERWAY · 2025—2026</span></div>
      <div className="evidence__heading"><span>PRODUCTION IN PROGRESS</span><h2 id="film-title">A world,<br />held together.</h2><p>The film is still being made. Generation makes frames possible; direction keeps them part of the same story.</p></div>
      <ol className="film-strip">{filmSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
      <AssetSlots project={project} />
    </section>
  );
}

export function ProjectEvidence({ project }: { project: Project }) {
  if (project.id === "youwozai") return <SafetyWorkflow project={project} />;
  if (project.id === "legal-ai-agent") return <LegalArchitecture project={project} />;
  return <FilmGallery project={project} />;
}
