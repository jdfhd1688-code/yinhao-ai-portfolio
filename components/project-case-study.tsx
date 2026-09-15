"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectEvidence } from "@/components/project-evidence";
import { ProjectStatus } from "@/components/ProjectStatus";
import { localize, type Project } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

const legalAiIdentity = {
  category: { zh: "Legal AI · RAG · Workflow · Human-in-the-loop", en: "Legal AI · RAG · Workflow · Human-in-the-loop" },
  statement: {
    zh: "面向企业合同审查场景，设计从材料解析、法规检索、风险识别到人工复核的 AI Workflow。",
    en: "An AI workflow for enterprise contract review, connecting document parsing, legal retrieval, risk identification and human review.",
  },
} as const;

export function ProjectCaseStudy({ project, next }: { project: Project; next: Project }) {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  const isLegalAi = project.id === "legal-ai-agent";
  useEffect(() => { document.title = `${localize(project.title, locale)} — YINHAO`; }, [locale, project.title]);

  return (
    <main className={`case case--snapshot case--${project.id}`}>
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>{project.number}</span><span>{localize(isLegalAi ? legalAiIdentity.category : project.category, locale)}</span><span>{project.year}</span></div>
        <h1>{localize(project.title, locale)}</h1>
        {isLegalAi && <ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} />}
        <p>{localize(isLegalAi ? legalAiIdentity.statement : project.statement, locale)}</p>
        {!isLegalAi && <ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} />}
        {project.externalLinks && <div className="case__external-links">{project.externalLinks.map((item) => item.unavailable ? <span className="unavailable-link" key={item.href} aria-disabled="true">{localize(item.label, locale)}</span> : <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{localize(item.label, locale)} <ArrowUpRight size={16} /></a>)}</div>}
        {project.id === "youwozai" && <small className="demo-note">{zh ? "公开 Demo 使用模拟数据，请勿输入真实隐私或敏感信息。" : "The public demo uses simulated data. Do not enter real private or sensitive information."}</small>}
        {project.id === "legal-ai-agent" && <small className="demo-note">{zh ? "当前原型不构成正式法律意见，也不替代律师或企业法务判断。" : "The current prototype is not legal advice and does not replace professional legal judgment."}</small>}
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          {project.role && <section className="snapshot-block"><span>{isLegalAi ? (zh ? "我设计了什么" : "WHAT I DESIGNED") : (zh ? "我做了什么" : "MY ROLE")}</span><ul>{project.role[locale].map((item) => <li key={item}>{item}</li>)}</ul></section>}
          {project.workflow?.[locale]?.length > 0 && <section className="snapshot-block"><span>{isLegalAi ? (zh ? "核心流程" : "CORE WORKFLOW") : (zh ? "核心思路" : "CORE WORKFLOW")}</span><ol className="snapshot-flow">{project.workflow[locale].map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol></section>}
          {project.features && <section className="snapshot-block"><span>{isLegalAi ? (zh ? "风险控制" : "RISK CONTROL") : (zh ? "核心功能" : "KEY FEATURES")}</span>{isLegalAi ? <ul className="snapshot-risk">{project.features[locale].map((item) => <li key={item}>{item}</li>)}</ul> : <div className="snapshot-tags">{project.features[locale].map((item) => <span key={item}>{item}</span>)}</div>}</section>}
        </aside>
        <div className="snapshot-right"><ProjectEvidence project={project} /></div>
      </div>

      <Link href={next.ctaHref} className="next-project next-project--compact"><span>{zh ? "下一个项目" : "NEXT PROJECT"} · {next.number}</span><strong>{localize(next.title, locale)}</strong><ArrowRight /></Link>
    </main>
  );
}
