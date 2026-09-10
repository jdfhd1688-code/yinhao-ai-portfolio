"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { aiToolResearch } from "@/data/aiToolResearch";
import { useLanguage } from "@/messages/locale";

export function AiToolResearchCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "AI短剧 / AI剧本工具市场测评" : "AI Short Drama & Script Tool Research"} — YINHAO`; }, [zh]);

  return (
    <main className="case research-case">
      <Navigation />
      <header className="case__hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="case__meta"><span>04</span><span>AI RESEARCH / TOOL EVALUATION</span><span>2026</span></div>
        <p className="script-cue">DESKTOP RESEARCH · MARKET HORIZONTAL ANALYSIS · NOT A LAB BENCHMARK</p>
        <h1>{zh ? "AI短剧 / AI剧本工具市场测评" : "AI Short Drama & Script Tool Research"}</h1>
        <p>{zh ? "从模型能力比较到多模型编剧 Workflow 的 AI 工具选型研究" : "From model comparison to multi-model screenwriting workflow and tool selection"}</p>
        <ProjectStatus status="RELEASED" label={zh ? "桌面研究 · 已完成" : "Desktop Research"} />
        <small className="demo-note">{zh ? "本报告基于公开产品能力、行业报道、第三方横评与创作者社区反馈进行研究，不等同于统一实验环境下的实验室 Benchmark。" : "This report is desktop research based on public capabilities, industry reports, third-party reviews and creator feedback. It is not a controlled laboratory benchmark."}</small>
      </header>

      <section className="numbered-section">
        <span>01 / {zh ? "核心研究问题" : "CORE RESEARCH QUESTIONS"}</span>
        <div className="research-questions">{aiToolResearch.coreQuestions.map((item, index) => <p key={item.zh}><b>0{index + 1}</b>{item[locale]}</p>)}</div>
      </section>

      <section className="numbered-section">
        <span>02 / {zh ? "AI 短剧五类共性痛点" : "FIVE SHARED AI SHORT-DRAMA PAIN POINTS"}</span>
        <div className="research-pain-grid">{aiToolResearch.painPoints.map((item) => <article key={item.title.zh}><h3>{item.title[locale]}</h3><p>{item.detail[locale]}</p></article>)}</div>
      </section>

      <section className="numbered-section">
        <span>03 / {zh ? "通用大模型详细测评" : "GENERAL MODEL EVALUATION"}</span>
        <div className="tool-card-grid">{aiToolResearch.generalTools.map((tool) => <article key={tool.name}><div><h3>{tool.name}</h3><span>{tool.role[locale]}</span></div><p><b>{zh ? "优势" : "Strengths"}</b>{tool.strength[locale]}</p><p><b>{zh ? "局限" : "Limits"}</b>{tool.limit[locale]}</p></article>)}</div>
      </section>

      <section className="numbered-section">
        <span>04 / {zh ? "专业编剧工具与短剧 Agent" : "PROFESSIONAL TOOLS AND SHORT-DRAMA AGENTS"}</span>
        <div className="vertical-tool-list">{aiToolResearch.verticalTools.map((tool) => <article key={tool.name}><div><h3>{tool.name}</h3><span>{tool.role[locale]}</span></div><p>{tool.summary[locale]}</p></article>)}</div>
      </section>

      <section className="numbered-section research-matrix">
        <span>05 / {zh ? "横向评测表" : "HORIZONTAL COMPARISON"}</span>
        <div className="matrix-wrap">
          <table><thead><tr>{aiToolResearch.matrixColumns.map((col, index) => <th key={col}>{index === 0 && zh ? "工具" : col}</th>)}</tr></thead><tbody>{aiToolResearch.matrix.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table>
        </div>
        <small>{zh ? "这些评分属于基于公开能力与市场反馈的选型评分，不是官方 Benchmark，也不是统一测试环境下的实验结果。" : "These ratings are selection scores based on public capabilities and market feedback. They are not an official benchmark or controlled experiment."}</small>
      </section>

      <section className="numbered-section">
        <span>06 / {zh ? "推荐 AI 短剧编剧 Workflow" : "RECOMMENDED AI SCREENWRITING WORKFLOW"}</span>
        <ol className="research-workflow">{aiToolResearch.workflow.map((step) => <li key={step.step}><b>{step.step}</b><div><strong>{step.title[locale]}</strong><span>{step.tools}</span><p>{step.detail[locale]}</p></div></li>)}</ol>
      </section>

      <section className="numbered-section scoring-section">
        <span>07 / {zh ? "100 分评测框架" : "100-POINT EVALUATION FRAMEWORK"}</span>
        <div className="scoring-grid">{aiToolResearch.scoring.map((item) => <div key={item.label.zh}><span>{item.label[locale]}</span><strong>{item.weight}</strong></div>)}</div>
        <p className="scoring-note">{zh ? "建议用同一题材、同一背景设定、同一输出要求对主要工具进行横向测试，并记录 Prompt、版本、首轮结果、二轮修正、人工修改量及最终评分。" : "A controlled comparison should use the same premise, background and output requirements for each tool, recording prompts, versions, first-round results, second-round edits, human revision load and final scores."}</p>
      </section>

      <section className="numbered-section research-conclusion">
        <span>08 / {zh ? "核心结论" : "CONCLUSION"}</span>
        <blockquote>{zh ? "没有一个模型适合从创意直接一键生成精品短剧。" : "No single model can reliably one-shot a polished short drama from an idea."}</blockquote>
        <p>{zh ? "更成熟的生产方式是：通用模型负责创意与推演，专业 / 垂直工具负责结构和生产衔接，人工编剧负责人物、情绪、节奏、合规与最终取舍。" : "A more mature production process lets general models own creativity and reasoning, professional tools own structure and production, and human writers own character, emotion, pacing, compliance and final judgment."}</p>
        <div className="report-actions"><a href={aiToolResearch.reportPath} target="_blank" rel="noopener noreferrer">{zh ? "查看完整市场测评报告" : "View full research report"} <ArrowUpRight size={17} /></a><a href={aiToolResearch.reportPath} download>{zh ? "下载完整 PDF" : "Download full PDF"} <Download size={16} /></a></div>
      </section>
    </main>
  );
}
