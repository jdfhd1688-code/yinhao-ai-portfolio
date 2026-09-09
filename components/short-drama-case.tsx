"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { dramaCapabilities, dramaWorks } from "@/data/dramaWorks";
import { useLanguage } from "@/messages/locale";

export function ShortDramaCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "小说 IP 改编与短剧编剧" : "IP Adaptation & Short Drama"} — YINHAO`; }, [zh]);
  return (
    <main className="case drama-case"><Navigation />
      <header className="case__hero drama-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="case__meta"><span>03</span><span>{zh ? "小说 IP 改编 / 短剧编剧" : "IP ADAPTATION / SCREENWRITING"}</span><span>2 {zh ? "部已发行作品" : "RELEASED WORKS"}</span></div>
        <p className="script-cue">EPISODE 01 · SCENE 01 · A DIFFERENT NARRATIVE ENGINE</p>
        <h1>{zh ? "小说 IP 改编与短剧编剧" : "IP Adaptation & Short Drama"}</h1>
        <p>{zh ? "从小说 IP 到正式发行短剧" : "From Novel IP to Released Motion Comic"}</p><ProjectStatus status="RELEASED" />
      </header>
      <section className="drama-intro numbered-section"><span>01 / {zh ? "项目概览" : "OVERVIEW"}</span><h2>{zh ? <>不是简单压缩原著。<br /><em>而是重新判断，下一集为什么值得继续。</em></> : <>Not a shorter novel.<br /><em>A new reason to watch the next episode.</em></>}</h2><p>{zh ? "两部作品来自完全不同的小说 IP。一部是女频都市系统题材，一部是男频古装权谋。我的工作是重新判断什么必须留下、什么需要重组、人物何时出现、冲突如何提前。" : "The two works began as very different novel IPs: one female-oriented, urban and system-driven; the other male-oriented, historical and political. The work was to decide what must remain, what needed restructuring, when characters should enter, and where conflict had to move forward."}</p></section>
      <section className="drama-role numbered-section"><span>02 / {zh ? "我的职责" : "MY ROLE"}</span><div><strong>{zh ? "小说 IP 改编" : "IP Adaptation"}</strong><strong>{zh ? "短剧编剧" : "Screenwriting"}</strong></div></section>
      <section className="selected-dramas numbered-section"><span>03 / {zh ? "两部作品" : "SELECTED WORKS"}</span>{dramaWorks.map((work, index) => <article key={work.id}><div className="drama-work__index">WORK 0{index + 1}</div><h2>{work.title}</h2><p>{zh ? "备选名" : "Alternate title"} · {work.altTitle}</p><div className="drama-facts">{work.facts[locale].map((fact) => <span key={fact}>{fact}</span>)}</div><blockquote>{work.engine[locale]}</blockquote><ul>{work.decisions[locale].map((decision) => <li key={decision}>{decision}</li>)}</ul><a href={work.watchUrl} target="_blank" rel="noopener noreferrer">{zh ? "观看已发行作品" : "WATCH RELEASED WORK"} <ArrowUpRight size={17} /></a><small>{zh ? "移动端打开体验更佳" : "Best viewed on mobile."}</small></article>)}</section>
      <section className="adaptation-method numbered-section"><span>04 / {zh ? "从长篇 IP 到短剧" : "FROM IP TO SHORT-FORM DRAMA"}</span><ol>{(zh ? ["拆解原作的核心欲望与矛盾", "重新确定短剧目标受众", "调整人物进入与冲突顺序", "为每集建立情绪回报与离场钩子", "在连续升级中保留人物逻辑"] : ["Find the source story's central desire and conflict", "Reframe it for the short-form audience", "Reorder character entry and conflict", "Give each episode payoff and an exit hook", "Preserve character logic through escalation"]).map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol></section>
      <section className="drama-comparison numbered-section"><span>05 / {zh ? "双作品对照" : "TWO DIFFERENT ADAPTATION PROBLEMS"}</span><h2>Same format.<br />Different audience.<br /><em>Different narrative engine.</em></h2><div className="comparison-split"><article><b>WORK 01</b><h3>{zh ? "即时反击" : "Immediate payoff"}</h3><p>{zh ? "女频 · 都市 · 系统 · 现实冲突 · 高频事件轮换" : "Female-oriented · Urban · System · Real-life conflict · Frequent event rotation"}</p></article><article><b>WORK 02</b><h3>{zh ? "长期博弈" : "Long-form strategy"}</h3><p>{zh ? "男频 · 古装 · 权谋 · 身份信息差 · 人物博弈 · 关系推进" : "Male-oriented · Historical · Intrigue · Identity gaps · Character games · Relationship progression"}</p></article></div></section>
      <section className="writing-decisions numbered-section"><span>06 / {zh ? "代表性创作选择" : "WRITING DECISIONS"}</span><div className="editorial-lines">{(zh ? ["反踢座椅：把道德绑架原样返还", "弹幕：让观众舆论成为叙事的一部分", "掀错盖头：第一集建立身份信息差", "太监服：用误导完成付费节点反转", "公开护妻：让关系选择与权谋站队同时发生"] : ["Kicking the seat back: returning the moral coercion", "Audience comments: turning public sentiment into narrative", "The wrong veil: an identity gap in episode one", "The eunuch uniform: misdirection at a paywall turn", "Public protection: romance and political allegiance in one choice"]).map((item, index) => <p key={item}><b>0{index + 1}</b>{item}</p>)}</div></section>
      <section className="reflection-section numbered-section"><span>07 / {zh ? "项目复盘" : "REFLECTION"}</span><blockquote>{zh ? <>两部作品都走完了从小说 IP 拆解、受众定位、剧本改编到制作发行的链路。<br /><em>但商业表现没有达到预期。</em></> : <>Both works moved from IP analysis and audience positioning through adaptation, production and release.<br /><em>But commercial performance did not meet expectations.</em></>}</blockquote><h3>{zh ? "完成一个作品，与让用户持续观看一个作品，是两个不同的问题。" : "Finishing a work and sustaining attention are two different problems."}</h3><div className="reflection-questions">{(zh ? ["开篇钩子够不够快？", "前几集角色目标是否足够清晰？", "冲突密度和重复感如何平衡？", "情绪回报是否匹配目标用户？", "付费节点前是否建立足够期待？", "题材与平台用户是否真正匹配？", "宣发物料是否准确传递核心卖点？"] : ["Is the opening hook fast enough?", "Are character goals clear in the first episodes?", "How should conflict density balance repetition?", "Does the emotional payoff fit the audience?", "Is enough anticipation built before the paywall?", "Does the genre fit the platform audience?", "Do promotional materials carry the real premise?"]).map((q) => <p key={q}>{q}</p>)}</div><small>{zh ? "这些是复盘问题与待验证假设，并非由数据证明的结论。" : "These are reflection questions and hypotheses, not data-proven conclusions."}</small></section>
      <section className="capability-grid numbered-section"><span>08 / {zh ? "能力总结" : "WHAT THIS WORK TAUGHT ME"}</span><div>{dramaCapabilities.map((item, index) => <p key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</p>)}</div><p className="season-note">{zh ? "《错嫁藏拙天作之合》成稿共 68 集，以“第一季剧终”结束；未将后续大纲设想描述为已完成剧情。" : "The 68-episode screenplay ends with ‘End of Season One.’ Later outline ideas are not presented here as completed story."}</p></section>
    </main>
  );
}
