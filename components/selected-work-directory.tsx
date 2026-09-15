"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, localize } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

const directoryCopy = {
  "legal-ai-agent": {
    group: "AI SOLUTION / PRODUCT",
    meta: { zh: "Legal AI · RAG · Workflow · Human-in-the-loop", en: "Legal AI · RAG · Workflow · Human-in-the-loop" },
    summary: {
      zh: "面向企业合同审查场景，设计从材料解析、法规检索、风险识别到人工复核的 AI Workflow。",
      en: "An AI workflow for enterprise contract review, from document parsing and legal retrieval to risk detection and human review.",
    },
  },
  youwozai: {
    group: "AI SOLUTION / PRODUCT",
    meta: { zh: "AI Product · Agent · Safety Workflow · Emotion AI", en: "AI Product · Agent · Safety Workflow · Emotion AI" },
    summary: {
      zh: "将陪伴聊天、情绪记录、每周总结和高风险守护连接成完整 AI 产品流程。",
      en: "A complete AI product flow connecting companion chat, emotion records, weekly reflection and high-risk safety support.",
    },
  },
  "legal-workflow-case-study": {
    group: "AI SOLUTION / PRODUCT",
    meta: { zh: "Legal AI · Workflow · SOP · Human-in-the-loop", en: "Legal AI · Workflow · SOP · Human-in-the-loop" },
    summary: {
      zh: "基于真实律所实践，将 30+ 案件管理、8 步 AI 文书 SOP 与人工复核沉淀为可复用 Workflow。",
      en: "A reusable workflow drawn from real legal practice: 30+ cases, an eight-step AI drafting SOP and human review.",
    },
  },
  "ai-tool-research-2026": {
    group: "RESEARCH / REAL WORK",
    meta: { zh: "AI Research · Tool Evaluation · Multi-model Workflow", en: "AI Research · Tool Evaluation · Multi-model Workflow" },
    summary: {
      zh: "横向研究主流 AI 编剧工具，并设计多模型协同与 100 分评测框架。",
      en: "Research across major AI writing tools, with a multi-model workflow and a 100-point evaluation framework.",
    },
  },
  "short-drama": {
    group: "RESEARCH / REAL WORK",
    meta: { zh: "IP Adaptation · Screenwriting · Narrative Design", en: "IP Adaptation · Screenwriting · Narrative Design" },
    summary: {
      zh: "两部小说 IP 完成短剧改编并正式制作发行，覆盖女频都市与男频古装两种叙事引擎。",
      en: "Two novel IPs adapted, produced and released across urban female-oriented and historical male-oriented narrative engines.",
    },
  },
  "felicity-south-africa": {
    group: "RESEARCH / REAL WORK",
    meta: { zh: "Commercial Delivery · Overseas Market · Website Launch", en: "Commercial Delivery · Overseas Market · Website Launch" },
    summary: {
      zh: "从南非本地业务需求出发，参与商业官网从 0 到上线的真实交付。",
      en: "A real commercial delivery from local South African business needs to a live website launch.",
    },
  },
} as const;

export function SelectedWorkDirectory() {
  const { locale } = useLanguage();
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const groups = ["AI SOLUTION / PRODUCT", "RESEARCH / REAL WORK"] as const;

  return (
    <section id="selected-work" className="work-directory" aria-labelledby="work-directory-title">
      <header className="work-directory__header">
        <span>{locale === "zh" ? "01 / 作品目录" : "01 / SELECTED WORK"}</span>
        <div>
          <h2 id="work-directory-title">{locale === "zh" ? "作品目录" : "SELECTED WORK"}</h2>
          <p>{locale === "zh" ? "AI Solution · AI Product · Workflow · Research · Real Work" : "AI Solution · AI Product · Workflow · Research · Real-world Delivery"}</p>
        </div>
      </header>
      <div className="work-directory__columns">
        {groups.map((group) => (
          <div className="work-directory__group" key={group}>
            <h3>{group}</h3>
            {ordered.filter((project) => directoryCopy[project.id as keyof typeof directoryCopy].group === group).map((project) => {
              const copy = directoryCopy[project.id as keyof typeof directoryCopy];
              return (
                <article className="directory-project" key={project.id}>
                  <div className="directory-project__top"><span>{project.number}</span><small>{localize(copy.meta, locale)}</small></div>
                  <h4>{localize(project.title, locale)}</h4>
                  <p>{localize(copy.summary, locale)}</p>
                  <div className="directory-project__footer">
                    <strong>{localize(project.statusLabel, locale)}</strong>
                    <div>
                      <Link href={project.ctaHref}>{localize(project.ctaLabel, locale)} <ArrowUpRight size={14} /></Link>
                      {project.id === "felicity-south-africa" && <a href="https://www.felicitysolarsa.co.za/" target="_blank" rel="noopener noreferrer">{locale === "zh" ? "访问官网" : "Visit Live Site"} <ArrowUpRight size={13} /></a>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
