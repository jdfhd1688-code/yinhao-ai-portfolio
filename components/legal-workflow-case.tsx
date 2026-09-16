"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { legalWorkflow } from "@/data/legalWorkflow";
import { useLanguage } from "@/messages/locale";

export function LegalWorkflowCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "AI 法律文书协作与案件管理" : "AI Legal Document Collaboration & Case Workflow"} — YINHAO`; }, [zh]);

  const facts = [
    { value: "30+", label: zh ? "案件" : "Cases" },
    { value: "8", label: zh ? "步 SOP" : "Step SOP" },
    { value: "3", label: zh ? "类流程" : "Workflow Types" },
    { value: "2+", label: zh ? "模型" : "Models" },
  ];
  const aiRole = zh ? ["初稿生成", "多模型参考", "文本整理辅助"] : ["Draft generation", "Multi-model references", "Text organization support"];
  const humanRole = zh
    ? ["案件逻辑判断", "法律适用核验", "模板与专业表达", "律师审核", "客户确认"]
    : ["Case-logic judgment", "Legal-application verification", "Template and professional expression", "Lawyer review", "Client confirmation"];

  return (
    <main className="case case--snapshot case--legal-workflow-case-study">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>03</span><span>LEGAL AI / WORKFLOW</span><span>2026</span></div>
        <h1>{zh ? "AI 法律文书协作与案件管理" : "AI Legal Document Collaboration & Case Workflow"}</h1>
        <p>{zh ? "在真实律所工作中，同时推进 30+ 多类型案件，并将案件跟踪、AI 文书协作与人工审核整理成可复用 Workflow。" : "A real law-firm practice coordinating 30+ cases and turning case tracking, AI-assisted drafting and human review into a reusable workflow."}</p>
        <ProjectStatus status="RELEASED" label={zh ? "真实 Workflow 案例" : "Real Workflow Case Study"} />
        <div className="case__external-links"><a href="/reports/legal-ai-workflow-case-study.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整案例 PDF" : "View Full Case Study PDF"} <ArrowUpRight size={16} /></a></div>
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block"><span>{zh ? "真实业务规模" : "REAL-WORLD CONTEXT"}</span><div className="snapshot-facts">{facts.map((fact) => <div key={fact.value}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div></section>
          <section className="snapshot-block"><span>{zh ? "8 步核心 Workflow" : "8-STEP CORE WORKFLOW"}</span><ol className="snapshot-flow">{legalWorkflow.eightSteps.map((step, i) => <li key={step.zh}><b>{String(i + 1).padStart(2, "0")}</b><span>{step[locale]}</span></li>)}</ol></section>
        </aside>
        <div className="snapshot-right">
          <div className="snapshot-pdf snapshot-pdf--workflow">
            <span>{zh ? "8 步 AI 文书 SOP · Human-in-the-loop" : "8-step AI drafting SOP · Human-in-the-loop"}</span>
            <strong>{zh ? "AI 生成，人负责。" : "AI drafts. People decide."}</strong>
            <div className="workflow-owners">
              <section><b>AI</b><ul>{aiRole.map((item) => <li key={item}>{item}</li>)}</ul></section>
              <section><b>{zh ? "人工" : "HUMAN"}</b><ul>{humanRole.map((item) => <li key={item}>{item}</li>)}</ul></section>
            </div>
            <p>{zh ? "AI 输出只是中间产物，不是最终法律判断。完整方法、法条核验与交付闭环见 PDF。" : "AI output is an intermediate artifact, not the final legal judgment. The full method, legal verification and delivery loop are documented in the PDF."}</p>
            <a href="/reports/legal-ai-workflow-case-study.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整案例 PDF" : "View Full Case Study PDF"} <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </div>
    </main>
  );
}
