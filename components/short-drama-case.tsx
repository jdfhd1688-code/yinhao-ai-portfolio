"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { dramaWorks } from "@/data/dramaWorks";
import { useLanguage } from "@/messages/locale";

export function ShortDramaCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "小说 IP 改编与短剧编剧" : "IP Adaptation & Short Drama"} — YINHAO`; }, [zh]);

  const role = zh
    ? ["小说 IP 拆解", "受众定位", "人物与关系重构", "分集设计", "Hook / Conflict 设计", "短剧剧本创作"]
    : ["IP analysis", "Audience positioning", "Character and relationship adaptation", "Episode design", "Hook and conflict design", "Short-form screenwriting"];

  return (
    <main className="case case--snapshot case--short-drama">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>05</span><span>IP ADAPTATION / SHORT DRAMA</span><span>2 RELEASED WORKS</span></div>
        <h1>{zh ? "小说 IP 改编与短剧编剧" : "IP Adaptation & Short Drama"}</h1>
        <p>{zh ? "两部小说 IP 的短剧改编与正式发行作品。" : "Two released short-drama adaptations developed from existing novel IP."}</p>
        <ProjectStatus status="RELEASED" label={zh ? "两部作品已发行" : "2 Released Works"} />
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block"><span>{zh ? "我的职责" : "MY ROLE"}</span><ul>{role.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="snapshot-block"><span>{zh ? "两部作品" : "SELECTED WORKS"}</span>
            {dramaWorks.map((work, index) => (
              <div className="snapshot-work" key={work.id}>
                <b>0{index + 1}</b>
                <h3>{work.title}</h3>
                <p>{zh ? "备选名" : "Alternate title"} · {work.altTitle}</p>
                {work.source && <p className="snapshot-source">{zh ? "原 IP" : "Source IP"} · {work.source[locale]}</p>}
                <div className="snapshot-tags">{work.facts[locale].map((fact) => <span key={fact}>{fact}</span>)}</div>
                <a href={work.fullWatchUrl} target="_blank" rel="noopener noreferrer">{zh ? "观看已发行作品" : "WATCH RELEASED WORK"} <ArrowUpRight size={16} /></a>
              </div>
            ))}
          </section>
          <section className="snapshot-block"><span>{zh ? "Reflection" : "REFLECTION"}</span><p className="snapshot-lead">{zh ? "完成一个作品 ≠ 让用户持续观看一个作品" : "Finishing a work ≠ making users keep watching it"}</p><p className="snapshot-note">{zh ? "两部作品均已完成制作并发行，但商业表现未达到预期。" : "Both works were completed and released, but their commercial performance did not meet expectations."}</p></section>
        </aside>
        <div className="snapshot-right">
          <div className="snapshot-pdf">
            <span>{zh ? "双作品对照" : "TWO WORKS IN CONTRAST"}</span>
            <strong>{zh ? "同样是 IP 改编，<br />不同观众需要不同叙事引擎。" : "Same format.<br />Different audience.<br />Different narrative engine."}</strong>
            <p>{zh ? "两部作品分别对应女频都市系统与男频古装权谋，真实红果发行链接可点击查看。" : "One urban female-oriented system story and one historical male-oriented intrigue, both with real released-work links."}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
