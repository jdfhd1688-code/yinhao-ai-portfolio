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
  useEffect(() => { document.title = `${zh ? "AI法律文书协作与案件管理" : "AI Legal Document Workflow & Case Management"} — YINHAO`; }, [zh]);

  const role = zh
    ? ["管理 30+ 多类型案件并行推进", "将民事 / 刑事 / 行政流程沉淀为 SOP", "形成 8 步 AI 法律文书协作流程", "使用 2+ 模型进行并行生成与交叉比较", "建立法条核验、律师审核与客户确认闭环"]
    : ["Coordinated 30+ cases across multiple case types", "Standardized civil, criminal and administrative workflows", "Developed an 8-step AI-assisted legal drafting SOP", "Compared outputs from 2+ models", "Built a review loop covering legal verification, lawyer review and client confirmation"];
  const facts = [
    { value: "30+", label: zh ? "案件" : "Cases" },
    { value: "8", label: zh ? "步 SOP" : "Step SOP" },
    { value: "3", label: zh ? "类流程" : "Workflow Types" },
    { value: "2+", label: zh ? "模型" : "Models" },
  ];

  return (
    <main className="case case--snapshot">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>03</span><span>LEGAL AI / WORKFLOW</span><span>2026</span></div>
        <h1>{zh ? "AI法律文书协作与案件管理" : "AI Legal Document Workflow & Case Management"}</h1>
        <p>{zh ? "真实律所场景下的 Workflow、Human-in-the-loop 与知识沉淀实践。" : "A real-world legal workflow case study combining case management, AI-assisted drafting and human review."}</p>
        <ProjectStatus status="RELEASED" label={zh ? "真实 Workflow Case Study" : "Real Workflow Case Study"} />
        <div className="case__external-links"><a href="/reports/legal-ai-workflow-case-study.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整 PDF" : "View Full PDF"} <ArrowUpRight size={16} /></a></div>
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block"><span>{zh ? "我做了什么" : "MY ROLE"}</span><ul>{role.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="snapshot-block"><span>{zh ? "核心思路" : "CORE WORKFLOW"}</span><ol className="snapshot-flow">{legalWorkflow.workflowAbstract.map((step, i) => <li key={step.zh}><b>{String(i + 1).padStart(2, "0")}</b><span>{step[locale]}</span></li>)}</ol></section>
          <section className="snapshot-block"><span>{zh ? "关键事实" : "KEY FACTS"}</span><div className="snapshot-facts">{facts.map((fact) => <div key={fact.value}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div></section>
        </aside>
        <div className="snapshot-right">
          <div className="snapshot-pdf">
            <span>{zh ? "8 步 AI 文书 SOP · Human-in-the-loop" : "8-step AI drafting SOP · Human-in-the-loop"}</span>
            <strong>{zh ? "AI 生成，人负责。" : "AI drafts. People decide."}</strong>
            <p>{zh ? "完整方法、法条核验与交付闭环见 PDF。" : "Full methodology, legal verification and delivery loop are in the PDF."}</p>
            <a href="/reports/legal-ai-workflow-case-study.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整 PDF" : "View Full PDF"} <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </div>
    </main>
  );
}
