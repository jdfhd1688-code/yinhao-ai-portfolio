"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectEvidence } from "@/components/project-evidence";
import { ProjectStatus } from "@/components/ProjectStatus";
import { localize, type Project } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

export function ProjectCaseStudy({ project, next }: { project: Project; next: Project }) {
  const { locale } = useLanguage(); const zh = locale === "zh";
  useEffect(() => { document.title = `${localize(project.title, locale)} — YINHAO`; }, [locale, project.title]);
  const sections = [
    [zh ? "01 / 项目为什么存在" : "01 / WHY THIS PROJECT EXISTS", localize(project.problem, locale)],
    [zh ? "02 / 洞察" : "02 / INSIGHT", localize(project.insight, locale)],
    [zh ? "03 / 正在设计什么" : "03 / WHAT I AM DESIGNING", localize(project.solution, locale)],
  ];
  return <main className="case"><Navigation />
    <header className="case__hero"><Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link><div className="case__meta"><span>{project.number}</span><span>{localize(project.category, locale)}</span><span>{project.year}</span></div><h1>{localize(project.title, locale)}</h1><p>{localize(project.statement, locale)}</p><ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} />{project.externalLinks && <div className="case__external-links">{project.externalLinks.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{localize(item.label, locale)} <ArrowUpRight size={16} /></a>)}</div>}{project.id === "youwozai" && <small className="demo-note">{zh ? "公开 Demo 使用模拟数据，请勿输入真实隐私或敏感信息。" : "The public demo uses simulated data. Do not enter real private or sensitive information."}</small>}{project.id === "legal-ai-agent" && <small className="demo-note">{zh ? "当前原型不构成正式法律意见，也不替代律师或企业法务判断。" : "The current prototype is not legal advice and does not replace professional legal judgment."}</small>}</header>
    <div className="case__image"><Image src={project.hero} alt={localize(project.title, locale)} fill priority sizes="100vw" /></div>
    <section className="case__summary"><p>{zh ? "项目概览" : "PROJECT OVERVIEW"} · {localize(project.subtitle, locale)}</p><h2>{localize(project.description, locale)}</h2></section>
    <section className="case__chapters">{sections.map(([label, copy]) => <article key={label}><span>{label}</span><p>{copy}</p></article>)}</section>
    <ProjectEvidence project={project} />
    <section className="case__workflow"><span>{zh ? "04 / 当前已实现工作流" : "04 / IMPLEMENTED WORKFLOW"}</span><h2>{zh ? "一步一步，成为系统。" : "A system, one step at a time."}</h2><ol>{project.workflow[locale].map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol></section>
    <section className="case__outcomes"><div><span>{zh ? "05 / 当前过程" : "05 / CURRENT PROCESS"}</span>{project.process[locale].map((item) => <p key={item}>{item}</p>)}</div><div><span>{zh ? "06 / 产品方向" : "06 / PRODUCT DIRECTION"}</span>{project.directions[locale].map((item) => <p key={item}>{item}</p>)}</div></section>
    <section className="case__reflection"><span>{zh ? "07 / 正在学习" : "07 / WHAT I AM LEARNING"}</span><blockquote>{localize(project.reflection, locale)}</blockquote></section>
    <section className="case__status-section"><div><span>{zh ? "08 / 当前构建状态" : "08 / CURRENT BUILD STATUS"}</span><ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} /></div><div><span>{zh ? "下一步" : "NEXT STEP"}</span><p>{localize(project.nextStep, locale)}</p></div></section>
    <Link href={next.ctaHref} className="next-project"><span>{zh ? "下一个项目" : "NEXT PROJECT"} · {next.number}</span><strong>{localize(next.title, locale)}</strong><ArrowRight /></Link>
  </main>;
}
