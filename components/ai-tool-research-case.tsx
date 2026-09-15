"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { useLanguage } from "@/messages/locale";

export function AiToolResearchCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "AI短剧 / AI剧本工具市场测评" : "AI Short Drama & Script Tool Research"} — YINHAO`; }, [zh]);

  const role = zh
    ? ["横向研究国内外 AI 编剧工具", "比较通用模型、专业编剧工具与短剧 Agent", "梳理模型能力边界与适用角色", "设计多模型编剧 Workflow", "建立 100 分工具选型框架"]
    : ["Researched major AI writing tools across domestic and international markets", "Compared general models, professional writing tools and short-drama agents", "Mapped model strengths, limitations and recommended roles", "Designed a multi-model scriptwriting workflow", "Built a 100-point evaluation framework for tool selection"];
  const method = zh
    ? ["桌面研究", "公开产品能力", "行业报道", "第三方横评", "创作者社区反馈"]
    : ["Desktop research", "Public product capabilities", "Industry reports", "Third-party comparisons", "Creator-community feedback"];

  return (
    <main className="case case--snapshot case--ai-tool-research-2026">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>04</span><span>AI RESEARCH / TOOL EVALUATION</span><span>2026</span></div>
        <h1>{zh ? "AI短剧 / AI剧本工具市场测评" : "AI Short Drama & Script Tool Research"}</h1>
        <p>{zh ? "从模型能力比较到多模型编剧 Workflow 的 AI 工具选型研究。" : "A tool-selection study covering AI writing models, specialized tools and multi-model script workflows."}</p>
        <ProjectStatus status="RELEASED" label={zh ? "Research Case Study" : "Research Case Study"} />
        <div className="case__external-links"><a href="/reports/ai-script-tool-research-2026.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整报告" : "View Full Report"} <ArrowUpRight size={16} /></a></div>
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block"><span>{zh ? "我做了什么" : "MY ROLE"}</span><ul>{role.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="snapshot-block"><span>{zh ? "研究方法" : "RESEARCH METHOD"}</span><div className="snapshot-tags">{method.map((item) => <span key={item}>{item}</span>)}</div><p className="snapshot-note">{zh ? "这不是统一实验环境 Benchmark。" : "This is not a laboratory benchmark conducted under a unified test environment."}</p></section>
          <section className="snapshot-block"><span>{zh ? "核心结论" : "CORE CONCLUSION"}</span><p className="snapshot-lead">{zh ? "没有一个模型适合从创意直接一键生成精品短剧。" : "No single model is suitable for producing a polished short drama from idea to final script in one pass."}</p></section>
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
              <p>{zh ? "完整工具矩阵、八步 Workflow 与 100 分评测框架见 PDF。" : "Full tool matrix, eight-step workflow and 100-point evaluation framework are in the PDF."}</p>
              <a href="/reports/ai-script-tool-research-2026.pdf" target="_blank" rel="noopener noreferrer">{zh ? "查看完整报告" : "View Full Report"} <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
