"use client";

import Image from "next/image";
import { ProjectMediaPlaceholder } from "@/components/ProjectMediaPlaceholder";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

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
  return <div className="planned-media-grid">{project.plannedAssets.map((asset) => <ProjectMediaPlaceholder key={asset.path} {...asset} />)}</div>;
}

function SafetyWorkflow({ project }: { project: Project }) {
  const { locale } = useLanguage(); const zh = locale === "zh";
  const steps = zh ? ["用户消息", "风险筛查", "风险等级", "语境复核", "支持性回应", "安全引导", "结构化记录"] : safetySteps;
  return (
    <section className="evidence evidence--safety" aria-labelledby="safety-title">
      <div className="evidence__heading"><span>{zh ? "已实现 · 高风险安全工作流" : "IMPLEMENTED · HIGH-RISK SAFETY WORKFLOW"}</span><h2 id="safety-title">{zh ? <>支持之外，<br />还要有安全边界。</> : <>Support with<br />a safety net.</>}</h2><p>{zh ? "当前 MVP 已实现高风险识别、支持性回应、模拟守护人通知与审计记录；真实第三方通知仍属于后续能力。" : "The MVP implements risk screening, supportive response, simulated guardian notification and audit records. Real third-party notification remains future work."}</p></div>
      <ol className="safety-flow">{steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span>{index < steps.length - 1 && <i aria-hidden="true">↓</i>}</li>)}</ol>
      <AssetSlots project={project} />
    </section>
  );
}

function LegalArchitecture({ project }: { project: Project }) {
  const { locale } = useLanguage(); const zh = locale === "zh";
  return (
    <section className="evidence evidence--legal" aria-labelledby="architecture-title">
      <div className="evidence__heading"><span>{zh ? "当前原型 · 已实现架构" : "CURRENT PROTOTYPE · IMPLEMENTED ARCHITECTURE"}</span><h2 id="architecture-title">{zh ? <>真正的问题，<br />不是文档总结。</> : <>The real problem wasn&apos;t<br />document summarization.</>}</h2><p>{zh ? "当前原型已把文档解析、混合检索、风险判断、引用校验、人工复核与报告连接成可运行工作流；它不是生产系统或正式法律意见。" : "The current prototype connects parsing, hybrid retrieval, risk reasoning, citation checks, human review and reporting in a runnable workflow. It is not a production system or legal advice."}</p></div>
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
