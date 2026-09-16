"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { aiToolResearch } from "@/data/aiToolResearch";
import { useLanguage } from "@/messages/locale";

export function AiToolResearchCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "AI 短剧 / AI 剧本工具市场测评" : "AI Short Drama / AI Script Tool Research"} — YINHAO`; }, [zh]);

  const findings = zh
    ? ["不同模型的优势分布在不同创作阶段", "垂直工具更接近生产流程，但创意与人物质量仍需人工判断", "稳定方案不是寻找“最强模型”，而是设计合理 Workflow"]
    : ["Different models are strongest at different creative stages", "Vertical tools sit closer to production, but creativity and character quality still require human judgment", "The stable answer is workflow design—not a search for one “best model”"];

  return (
    <main className="case case--snapshot case--ai-tool-research-2026">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>04</span><span>AI RESEARCH / TOOL EVALUATION</span><span>2026</span></div>
        <h1>{zh ? "AI 短剧 / AI 剧本工具市场测评" : "AI Short Drama / AI Script Tool Research"}</h1>
        <p>{zh ? "研究问题：单一模型能否从创意到成片，独立完成成熟短剧生产？" : "Research question: Can one model independently take a mature short drama from idea to production?"}</p>
        <ProjectStatus status="RELEASED" label={zh ? "研究案例" : "Research Case Study"} />
        <div className="case__external-links"><a href="/reports/ai-script-tool-research-2026.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整研究 PDF" : "View Full Research PDF"} <ArrowUpRight size={16} /></a></div>
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block research-findings"><span>{zh ? "三个关键发现" : "THREE KEY FINDINGS"}</span><ol>{findings.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></li>)}</ol><p className="snapshot-note">{zh ? "结论来自桌面研究，不是统一实验条件下的 Benchmark。" : "Findings come from desktop research, not a controlled benchmark under unified test conditions."}</p></section>
          <section className="snapshot-block"><span>{zh ? "推荐 8 步 Workflow" : "RECOMMENDED 8-STEP WORKFLOW"}</span><ol className="snapshot-flow">{aiToolResearch.workflow.map((step, index) => <li key={step.step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step.title[locale]}</span></li>)}</ol></section>
        </aside>
        <div className="snapshot-right">
          <div className="snapshot-pdf snapshot-pdf--ai-research">
            <div className="snapshot-pdf__media">
              <Image
                src="/media/ai-tool-research/ai-tool-research-hero.jpg"
                alt={zh ? "AI 剧本工具研究与多模型工作流设计场景" : "AI script-tool research and multi-model workflow design workspace"}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 60vw"
              />
            </div>
            <div className="snapshot-pdf__content">
              <span>{zh ? "Tool Landscape · 多模型工具选型" : "Tool Landscape · Multi-model selection"}</span>
              <strong>{zh ? "通用模型 → 垂直工具 → 人工终审" : "General models → specialized tools → human review"}</strong>
              <p>{zh ? "没有单一模型适合每个阶段。完整工具矩阵与研究依据见 PDF。" : "No single model wins every stage. The complete tool matrix and research basis are documented in the PDF."}</p>
              <a href="/reports/ai-script-tool-research-2026.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整研究 PDF" : "View Full Research PDF"} <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <section className="research-framework">
            <div><span>{zh ? "选型结构 · 非模型排名" : "SELECTION STRUCTURE · NOT A MODEL RANKING"}</span><strong>{zh ? "100 分评测框架" : "100-point evaluation framework"}</strong></div>
            <dl>{aiToolResearch.scoring.map((criterion) => <div key={criterion.label.en}><dt>{criterion.label[locale]}</dt><dd>{criterion.weight}</dd></div>)}</dl>
            <p>{zh ? "框架用于统一选型维度；网页不展示模型总分或星级排名。" : "The framework aligns selection criteria; the page does not present model totals or star rankings."}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
