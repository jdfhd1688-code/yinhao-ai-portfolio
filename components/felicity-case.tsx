"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { useLanguage } from "@/messages/locale";

export function FelicityCase() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "南非市场数字化落地" : "South Africa Digital Launch"} — YINHAO`; }, [zh]);

  const role = zh
    ? ["参与官网从 0 到上线", "整理页面与产品信息", "整理图片、视频与价格资料", "推进网站上线", "支持南非本地业务展示"]
    : ["Supported the website from zero to launch", "Organized page and product information", "Prepared image, video and pricing materials", "Coordinated the launch process", "Supported local business presentation in South Africa"];
  const flow = zh
    ? ["本地业务需求", "信息整理", "页面组织", "产品素材", "上线推进", "LIVE"]
    : ["Local business needs", "Information organization", "Page structure", "Product assets", "Launch coordination", "LIVE"];
  return (
    <main className="case case--snapshot case--felicity-south-africa">
      <Navigation />
      <header className="snapshot-hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link>
        <div className="snapshot-hero__meta"><span>06</span><span>SOUTH AFRICA · LIVE</span><span>≈ 3 WEEKS</span></div>
        <h1>{zh ? "南非市场数字化落地" : "South Africa Digital Launch"}</h1>
        <p>{zh ? "从南非本地业务需求到真实上线商业官网的交付。" : "From local South African business needs to a live commercial website."}</p>
        <ProjectStatus status="LIVE" label={zh ? "已上线" : "LIVE"} />
        <div className="case__external-links"><a href="https://felicitysolar.co.za/" target="_blank" rel="noopener noreferrer">{zh ? "访问官网" : "Visit Live Site"} <ArrowUpRight size={16} /></a></div>
      </header>

      <div className="snapshot-grid">
        <aside className="snapshot-left">
          <section className="snapshot-block"><span>{zh ? "我做了什么" : "MY ROLE"}</span><ul>{role.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section className="snapshot-block"><span>{zh ? "核心流程" : "CORE FLOW"}</span><ol className="snapshot-flow">{flow.map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol></section>
        </aside>
        <div className="snapshot-right">
          <div className="evidence-screens">
            <figure>
              <div className="evidence-screen__media"><Image src="/media/felicity/home.png" alt={zh ? "Felicity Solar South Africa 官网首页" : "Felicity Solar South Africa website homepage"} fill sizes="(max-width: 800px) 100vw, 60vw" /></div>
              <figcaption><strong>{zh ? "真实上线商业官网" : "Live commercial website"}</strong><p>{zh ? "真实官网首页截图" : "Live homepage screenshot"}</p></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
