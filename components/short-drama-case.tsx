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
  useEffect(() => { document.title = `${zh ? "小说 IP 改编与短剧编剧" : "IP Adaptation & Short Drama Screenwriting"} — YINHAO`; }, [zh]);

  return (
    <main className="case case--snapshot case--short-drama">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>05</span><span>IP ADAPTATION / SCREENWRITING</span><span>2 RELEASED WORKS</span></div>
        <h1>{zh ? "小说 IP 改编与短剧编剧" : "IP Adaptation & Short Drama Screenwriting"}</h1>
        <p>{zh ? "两部小说 IP 的短剧改编与正式发行作品。" : "Two released short-drama adaptations developed from existing novel IP."}</p>
        <ProjectStatus status="RELEASED" label={zh ? "两部作品已发行" : "2 Released Works"} />
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block drama-reflection"><span>{zh ? "商业复盘" : "COMMERCIAL REFLECTION"}</span><p className="snapshot-lead">{zh ? "完成一个作品 ≠ 让用户持续观看一个作品" : "Finishing a work ≠ making users keep watching it"}</p><p className="snapshot-note">{zh ? "两部作品均已完成制作并发行，但商业表现未达到预期。由此重新审视受众定位、节奏、钩子、选题与市场匹配；这些是后续需要验证的假设，而不是已经证明的失败原因。" : "Both works were produced and released, but commercial performance did not meet expectations. This prompted new hypotheses about audience fit, pacing, hooks, premise and market alignment—not proven explanations for the result."}</p></section>
        </aside>
        <div className="snapshot-right">
          <section className="drama-work-grid" aria-label={zh ? "两部发行作品" : "Two released works"}>
            {dramaWorks.map((work, index) => (
              <article className="snapshot-work" key={work.id}>
                <b>0{index + 1}</b>
                <h2>{work.title}</h2>
                <p>{zh ? "备选名" : "Alternate title"} · {work.altTitle}</p>
                {work.source && <p className="snapshot-source">{zh ? "原 IP" : "Source IP"} · {work.source[locale]}</p>}
                <div className="snapshot-tags">{work.facts[locale].map((fact) => <span key={fact}>{fact}</span>)}</div>
                <dl><div><dt>{zh ? "叙事引擎" : "NARRATIVE ENGINE"}</dt><dd>{work.engine[locale]}</dd></div><div><dt>{zh ? "我的职责" : "MY ROLE"}</dt><dd>{zh ? "小说 IP 改编 · 短剧编剧" : "IP Adaptation · Screenwriting"}</dd></div><div><dt>{zh ? "发行状态" : "RELEASE"}</dt><dd>{work.id === "wrong-marriage" ? (zh ? "第一季完成 · 已发行" : "Season 1 complete · Released") : (zh ? "已发行" : "Released")}</dd></div></dl>
                <a href={work.fullWatchUrl} target="_blank" rel="noopener noreferrer">{zh ? "查看发行作品" : "View Released Work"} <ArrowUpRight size={16} /></a>
              </article>
            ))}
          </section>
          <div className="snapshot-pdf drama-comparison">
            <span>{zh ? "双作品对照" : "TWO WORKS IN CONTRAST"}</span>
            <strong>{zh ? "同样是 IP 改编，<br />不同观众需要不同叙事引擎。" : "Same format.<br />Different audience.<br />Different narrative engine."}</strong>
            <p>{zh ? "两部作品分别对应女频都市系统与男频古装权谋，真实红果发行链接可点击查看。" : "One urban female-oriented system story and one historical male-oriented intrigue, both with real released-work links."}</p>
            <small>{zh ? "移动端打开体验更佳" : "Best viewed on mobile"}</small>
          </div>
        </div>
      </div>
    </main>
  );
}
