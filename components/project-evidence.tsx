"use client";

import Image from "next/image";
import { ProjectMediaPlaceholder } from "@/components/ProjectMediaPlaceholder";
import { localize, type Project } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

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
  const systems = zh ? [
    ["连续性", "结构化情绪记录", "心情历史与查 / 改 / 删", "AI 记忆管理"],
    ["反思与回顾", "每周来信", "情绪趋势", "成长相册"],
    ["安全边界", "高风险识别", "逐人授权与守护圈", "站内模拟通知", "Audit 与撤销", "隐私设置"],
  ] : [
    ["Continuity", "Structured emotion records", "Mood history with edit / delete", "AI memory controls"],
    ["Reflection", "Weekly letters", "Emotion trends", "Growth album"],
    ["Safety", "High-risk detection", "Per-person authorization and Guardian Circle", "In-app simulated notifications", "Audit and revocation", "Privacy settings"],
  ];
  return (
    <section className="evidence evidence--safety" aria-labelledby="safety-title">
      <AssetSlots project={project} />
      <div className="evidence__heading"><span>{zh ? "当前 MVP · 已实现范围" : "CURRENT MVP · IMPLEMENTED SCOPE"}</span><h2 id="safety-title">{zh ? <>从对话，走向连续、<br />反思与安全边界。</> : <>From conversation to<br />continuity, reflection and safety.</>}</h2><p>{zh ? "这些能力不是独立功能清单，而是同一条陪伴 Workflow 中的三个相互连接的系统。" : "These are not isolated features. They are three connected systems within one companion workflow."}</p></div>
      <div className="youwozai-evidence-grid">{systems.map(([title, ...items], index) => <section key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div>
      <p className="youwozai-supporting-note">{zh ? "语音与 fallback 能力保留为辅助功能，不作为当前产品核心证据。" : "Voice and fallback capabilities remain supporting features rather than core product evidence."}</p>
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
