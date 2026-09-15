"use client";

import Image from "next/image";
import { ProjectMediaPlaceholder } from "@/components/ProjectMediaPlaceholder";
import { localize, type Project } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

const safetySteps = ["User Message", "Risk Screening", "Risk Level", "Context Review", "Supportive Response", "Safety Guidance", "Structured Record"];
const legalLayers = [
  ["INPUT", "Contract Upload"],
  ["PARSING", "Document Parsing", "Chunking"],
  ["RETRIEVAL", "Contract Clauses", "Legal Sources"],
  ["CONTROL", "Risk Assessment", "Human Review"],
  ["OUTPUT", "Structured JSON", "Review Report"],
];
const filmSteps = ["Concept", "Script", "Storyboard", "Character Consistency", "Image Generation", "Video Generation", "Voice / Music", "Editing", "Film in Progress"];

function AssetSlots({ project }: { project: Project }) {
  const { locale } = useLanguage();
  if (project.evidenceScreens?.length) {
    return (
      <div className="evidence-screens">
        {project.evidenceScreens.map((screen) => (
          <figure key={screen.src}>
            <div className="evidence-screen__media"><Image src={screen.src} alt={localize(screen.title, locale)} fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
            <figcaption><strong>{localize(screen.title, locale)}</strong><p>{localize(screen.caption, locale)}</p></figcaption>
          </figure>
        ))}
      </div>
    );
  }
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
  const layers = zh ? [
    ["输入", "合同上传"],
    ["解析", "材料解析", "文档切分"],
    ["检索", "合同条款", "法律法规"],
    ["控制", "风险判断", "人工复核"],
    ["输出", "结构化 JSON", "审查报告"],
  ] : legalLayers;
  return (
    <section className="evidence evidence--legal" aria-labelledby="architecture-title">
      <AssetSlots project={project} />
      <div className="evidence__heading"><span>{zh ? "系统证据 · 可验证边界" : "SYSTEM EVIDENCE · VERIFIABLE BOUNDARIES"}</span><h2 id="architecture-title">{zh ? <>限制模型自由度，<br />保留人工判断。</> : <>Constrain the model.<br />Keep human judgment.</>}</h2><p>{zh ? "重点不是让模型自由生成法律答案，而是通过双层 RAG、风险分级与人工复核，把模型限制在可验证的业务流程中。" : "The point is not to let the model freely generate legal answers, but to constrain it within a verifiable workflow through two-layer RAG, risk tiers and human review."}</p></div>
      <div className="architecture">{layers.map(([label, ...items], index) => <div key={label}><span>{label}</span>{items.map((item) => <strong key={item}>{item}</strong>)}{index < layers.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
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
