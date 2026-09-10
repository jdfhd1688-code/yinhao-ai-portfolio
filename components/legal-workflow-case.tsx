"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { legalWorkflow } from "@/data/legalWorkflow";
import { useLanguage } from "@/messages/locale";

export function LegalWorkflowCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "AI法律文书协作与案件管理" : "AI Legal Document & Case Management"} — YINHAO`; }, [zh]);

  return (
    <main className="case legal-workflow-case">
      <Navigation />
      <header className="case__hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="case__meta"><span>03</span><span>LEGAL AI / WORKFLOW</span><span>2026</span></div>
        <p className="script-cue">REAL LAW-FIRM PRACTICE · HUMAN-IN-THE-LOOP · RISK CONTROL</p>
        <h1>{zh ? "AI法律文书协作与案件管理" : "AI Legal Document & Case Management"}</h1>
        <p>{zh ? "真实律所场景下的 Workflow、Human-in-the-loop 与知识沉淀实践" : "Workflow, human-in-the-loop and knowledge capture in a real law-firm setting"}</p>
        <ProjectStatus status="RELEASED" label={zh ? "真实案例 · 已完成" : "Real Case Study"} />
        <small className="demo-note">{zh ? "基于湖南芙蓉律师事务所（总所）真实工作札记整理，已做公开展示脱敏处理。" : "Based on real work notes from Hunan Furong Law Firm and de-identified for public display."}</small>
      </header>

      <section className="numbered-section legal-kpis">
        <span>01 / {zh ? "核心数据" : "KEY FACTS"}</span>
        <div className="legal-kpi-grid">{legalWorkflow.kpis.map((kpi) => <article key={kpi.value}><strong>{kpi.value}</strong><p>{kpi.label[locale]}</p></article>)}</div>
      </section>

      <section className="numbered-section">
        <span>02 / {zh ? "业务问题" : "BUSINESS PROBLEM"}</span>
        <h2>{zh ? <>先解决流程，<br /><em>再引入 AI。</em></> : <>First fix the process.<br /><em>Then introduce AI.</em></>}</h2>
        <div className="legal-problem-list">{legalWorkflow.problem.map((item) => <p key={item.zh}>{item[locale]}</p>)}</div>
      </section>

      <section className="numbered-section">
        <span>03 / {zh ? "案件管理机制" : "CASE MANAGEMENT"}</span>
        <div className="legal-three-flow">{legalWorkflow.caseManagement.map((item, index) => <div key={item.zh}><b>0{index + 1}</b><strong>{item[locale]}</strong></div>)}</div>
      </section>

      <section className="numbered-section">
        <span>04 / {zh ? "民事 / 刑事 / 行政 SOP" : "CIVIL / CRIMINAL / ADMINISTRATIVE SOP"}</span>
        <div className="sop-grid">{legalWorkflow.sops.map((sop) => <article key={sop.type.zh}><h3>{sop.type[locale]}</h3><div className="sop-stages">{sop.stages[locale].map((stage) => <span key={stage}>{stage}</span>)}</div><p>{sop.actions[locale]}</p></article>)}</div>
      </section>

      <section className="numbered-section legal-eight">
        <span>05 / {zh ? "AI 法律文书八部曲" : "EIGHT-STEP AI DOCUMENT WORKFLOW"}</span>
        <h2>{zh ? "AI 生成，人负责。" : "AI drafts. People decide."}</h2>
        <ol>{legalWorkflow.eightSteps.map((step, index) => <li key={step.zh}><b>{String(index + 1).padStart(2, "0")}</b><div><strong>{step[locale]}</strong><p>{step.detail[locale]}</p></div></li>)}</ol>
      </section>

      <section className="numbered-section legal-risk">
        <span>06 / {zh ? "风险控制" : "RISK CONTROL"}</span>
        <div className="risk-split">
          <article><span>AI</span>{legalWorkflow.riskControl.ai.map((item) => <p key={item.zh}>{item[locale]}</p>)}</article>
          <article><span>{zh ? "人" : "HUMAN"}</span>{legalWorkflow.riskControl.human.map((item) => <p key={item.zh}>{item[locale]}</p>)}</article>
        </div>
        <blockquote>{zh ? "AI 输出不是最终答案，而是需要专业规则、专家判断和用户反馈持续校正的中间产物。" : "AI output is not the final answer. It is an intermediate artifact refined by professional rules, expert judgment and user feedback."}</blockquote>
      </section>

      <section className="numbered-section">
        <span>07 / {zh ? "工具与权威信息源" : "TOOLS AND AUTHORITATIVE SOURCES"}</span>
        <div className="legal-tools">{legalWorkflow.tools.map((tool) => <article key={tool.tool}><div><span>{tool.task[locale]}</span><strong>{tool.tool}</strong></div><p>{tool.purpose[locale]}</p></article>)}</div>
        <p className="legal-tools-note">{zh ? "根据任务选工具，而不是为了 AI 而 AI。AI 能提效，但不能替代权威信息源。" : "Choose tools by task, not AI for its own sake. AI can improve efficiency but cannot replace authoritative sources."}</p>
      </section>

      <section className="numbered-section legal-capabilities">
        <span>08 / {zh ? "AI Solution 能力映射" : "AI SOLUTION CAPABILITY MAP"}</span>
        <div className="capability-map">{legalWorkflow.capabilityMapping.map((item) => <div key={item.practice.zh}><p>{item.practice[locale]}</p><strong>{item.capability[locale]}</strong></div>)}</div>
      </section>

      <section className="numbered-section legal-disclosure">
        <span>09 / {zh ? "公开展示说明" : "PUBLIC DISPLAY NOTE"}</span>
        <p>{zh ? "本案例已删除具体案件名称、当事人信息、案号、联系方式及内部敏感信息，仅用于展示工作方法与 AI Solution 思维，不构成法律意见。" : "Specific case names, client information, case numbers, contact details and internal sensitive information have been removed. This material only demonstrates working methods and AI Solution thinking; it is not legal advice."}</p>
        <div className="report-actions"><a href={legalWorkflow.reportPath} target="_blank" rel="noopener noreferrer">{zh ? "查看完整案例" : "View full case study"} <ArrowUpRight size={17} /></a><a href={legalWorkflow.reportPath} download>{zh ? "下载完整 PDF" : "Download full PDF"} <Download size={16} /></a></div>
      </section>
    </main>
  );
}
