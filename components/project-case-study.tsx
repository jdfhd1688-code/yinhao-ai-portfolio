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

const youwozaiIdentity = {
  category: { zh: "AI Product · Emotional Companion · Safety Workflow", en: "AI Product · Emotional Companion · Safety Workflow" },
  statement: {
    zh: "一个把陪伴对话、结构化情绪记录、周期性反思与高风险守护连接起来的 AI 陪伴 MVP。",
    en: "An AI companion MVP connecting conversation, structured emotion tracking, periodic reflection and safety-aware human support.",
  },
  beyondChat: {
    zh: "单轮回复不能形成连续的陪伴。产品需要记住上下文、结构化情绪、支持回顾，并在识别到风险时连接现实支持。",
    en: "A single reply cannot create continuous companionship. The product needs to retain context, structure emotions, support reflection and connect people to real-world support when risk appears.",
  },
  decisions: [
    {
      title: { zh: "连续性", en: "Continuity" },
      description: { zh: "将聊天内容沉淀为可回顾的情绪与事件记录，让后续互动不只是重新开始一段新对话。", en: "Turns conversations into retrievable emotional and event context so later interactions can continue rather than restart." },
      flow: { zh: "对话 → 情绪与事件记录 → 后续上下文", en: "Conversation → Emotion & event records → Later context" },
    },
    {
      title: { zh: "反思与回顾", en: "Reflection" },
      description: { zh: "将聊天中的情绪、原因、场景和应对方式结构化，并进一步形成情绪历史、趋势与每周来信。", en: "Structures emotions, causes, situations and coping responses from conversations, then carries them into history, trends and a weekly letter." },
      flow: { zh: "对话 → 结构化情绪 → 历史 → 每周反思", en: "Conversation → Structured emotion → History → Weekly reflection" },
    },
    {
      title: { zh: "安全边界", en: "Safety" },
      description: { zh: "高风险场景不继续让模型自由聊天，而是进入明确的 Safety Workflow，并在用户授权范围内连接守护圈。", en: "High-risk situations do not remain in free-form model conversation; they enter an explicit safety workflow that can involve the Guardian Circle within the user’s authorization." },
      flow: { zh: "风险识别 → 支持回应 → 用户确认 / 授权 → 守护圈 → 模拟通知 / 审计", en: "Risk detection → Support → Confirmation / authorization → Guardian Circle → Simulated notification / audit" },
    },
  ],
  boundary: {
    zh: "当前 MVP 使用模拟数据验证产品结构、情绪记录与 Safety Workflow；它不是心理医疗或治疗服务，真实第三方通知尚未接入。请勿输入真实隐私或敏感信息。",
    en: "The current MVP uses simulated data to validate the product structure, emotion records and safety workflow. It is not a mental-healthcare or therapy service; real third-party notifications are not connected. Users should not enter private or sensitive information.",
  },
} as const;

export function ProjectCaseStudy({ project, next }: { project: Project; next: Project }) {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  const isLegalAi = project.id === "legal-ai-agent";
  const isYouwozai = project.id === "youwozai";
  const hasIdentityOverride = isLegalAi || isYouwozai;
  useEffect(() => { document.title = `${localize(project.title, locale)} — YINHAO`; }, [locale, project.title]);

  return (
    <main className={`case case--snapshot case--${project.id}`}>
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>{project.number}</span><span>{localize(isLegalAi ? legalAiIdentity.category : isYouwozai ? youwozaiIdentity.category : project.category, locale)}</span><span>{project.year}</span></div>
        <h1>{localize(project.title, locale)}</h1>
        {hasIdentityOverride && <ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} />}
        <p>{localize(isLegalAi ? legalAiIdentity.statement : isYouwozai ? youwozaiIdentity.statement : project.statement, locale)}</p>
        {!hasIdentityOverride && <ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} />}
        {project.externalLinks && <div className="case__external-links">{project.externalLinks.map((item) => item.unavailable ? <span className="unavailable-link" key={item.href} aria-disabled="true">{localize(item.label, locale)}</span> : <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{localize(item.label, locale)} <ArrowUpRight size={16} /></a>)}</div>}
        {isYouwozai && <small className="demo-note">{localize(youwozaiIdentity.boundary, locale)}</small>}
        {project.id === "legal-ai-agent" && <small className="demo-note">{zh ? "当前原型不构成正式法律意见，也不替代律师或企业法务判断。" : "The current prototype is not legal advice and does not replace professional legal judgment."}</small>}
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          {isYouwozai ? <>
            <section className="snapshot-block youwozai-beyond"><span>{zh ? "不只是聊天" : "BEYOND CHAT"}</span><p>{localize(youwozaiIdentity.beyondChat, locale)}</p></section>
            <section className="snapshot-block youwozai-decisions"><span>{zh ? "三个产品决策" : "THREE PRODUCT DECISIONS"}</span>{youwozaiIdentity.decisions.map((decision, index) => <article key={decision.title.en}><b>{String(index + 1).padStart(2, "0")}</b><h2>{localize(decision.title, locale)}</h2><p>{localize(decision.description, locale)}</p><small>{localize(decision.flow, locale)}</small></article>)}</section>
          </> : <>
            {project.role && <section className="snapshot-block"><span>{isLegalAi ? (zh ? "我设计了什么" : "WHAT I DESIGNED") : (zh ? "我做了什么" : "MY ROLE")}</span><ul>{project.role[locale].map((item) => <li key={item}>{item}</li>)}</ul></section>}
            {project.workflow?.[locale]?.length > 0 && <section className="snapshot-block"><span>{isLegalAi ? (zh ? "核心流程" : "CORE WORKFLOW") : (zh ? "核心思路" : "CORE WORKFLOW")}</span><ol className="snapshot-flow">{project.workflow[locale].map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol></section>}
            {project.features && <section className="snapshot-block"><span>{isLegalAi ? (zh ? "风险控制" : "RISK CONTROL") : (zh ? "核心功能" : "KEY FEATURES")}</span>{isLegalAi ? <ul className="snapshot-risk">{project.features[locale].map((item) => <li key={item}>{item}</li>)}</ul> : <div className="snapshot-tags">{project.features[locale].map((item) => <span key={item}>{item}</span>)}</div>}</section>}
          </>}
        </aside>
        <div className="snapshot-right"><ProjectEvidence project={project} /></div>
      </div>

      <Link href={next.ctaHref} className="next-project next-project--compact"><span>{zh ? "下一个项目" : "NEXT PROJECT"} · {next.number}</span><strong>{localize(next.title, locale)}</strong><ArrowRight /></Link>
    </main>
  );
}
