"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ProjectStatus } from "@/components/ProjectStatus";
import { useLanguage } from "@/messages/locale";

export function FelicityCase() {
  const { locale } = useLanguage(); const zh = locale === "zh";
  useEffect(() => { document.title = `${zh ? "南非市场数字化落地" : "South Africa Digital Launch"} — YINHAO`; }, [zh]);
  const role = zh ? ["网站从 0 到上线搭建", "页面与信息整理", "产品内容整理", "图片、视频与价格资料整理", "上线推进"] : ["Website setup from zero to launch", "Information and content organization", "Product content organization", "Image, video and price-list preparation", "Launch coordination"];
  return <main className="case felicity-case"><Navigation />
    <header className="case__hero"><Link href="/#work" className="case__back"><ArrowLeft size={16} /> {zh ? "返回作品" : "All work"}</Link><div className="case__meta"><span>04</span><span>SOUTH AFRICA</span><span>≈ 3 WEEKS</span></div><h1>{zh ? "南非市场数字化落地" : "South Africa Digital Launch"}</h1><p>Felicity Solar South Africa</p><ProjectStatus status="LIVE" /></header>
    <a className="felicity-live-frame" href="https://www.felicitysolarsa.co.za/" target="_blank" rel="noopener noreferrer" aria-label={zh ? "访问 Felicity Solar South Africa 真实官网" : "Visit the live Felicity Solar South Africa website"}><span>FELICITY SOLAR</span><strong>SOUTH AFRICA</strong><small>{zh ? "真实官网 · 已上线" : "LIVE COMMERCIAL WEBSITE"} ↗</small></a>
    <section className="numbered-section felicity-context"><span>01 / {zh ? "项目背景" : "CONTEXT"}</span><h2>{zh ? <>从南非本地业务需求，<br /><em>到一个真正上线的商业官网。</em></> : <>From local market needs<br /><em>to a live commercial website.</em></>}</h2><p>{zh ? "Felicity Solar South Africa 需要一个承载公司信息、产品内容与市场资料的正式线上入口。我参与了网站从零搭建到上线的完整推进，周期约三周。" : "Felicity Solar South Africa needed a live destination for company information, products and market-facing materials. I helped move the website from zero to launch in roughly three weeks."}</p></section>
    <section className="numbered-section felicity-role"><span>02 / {zh ? "我的职责" : "MY ROLE"}</span><div>{role.map((item, index) => <p key={item}><b>0{index + 1}</b>{item}</p>)}</div></section>
    <section className="numbered-section zero-to-live"><span>03 / {zh ? "从零到上线" : "FROM ZERO TO LIVE"}</span><ol>{(zh ? ["梳理页面与业务信息", "整理产品内容与资料", "准备图片、视频和价格资料", "完成网站页面搭建", "协调并推进正式上线"] : ["Organize pages and business information", "Prepare product content", "Coordinate image, video and price materials", "Build the website", "Move the work through launch"]).map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></li>)}</ol></section>
    <section className="numbered-section live-website"><span>04 / {zh ? "真实官网" : "LIVE WEBSITE"}</span><h2>Felicity Solar<br />South Africa</h2><a href="https://www.felicitysolarsa.co.za/" target="_blank" rel="noopener noreferrer">{zh ? "访问官网" : "VISIT LIVE SITE"} <ArrowUpRight /></a></section>
    <section className="numbered-section felicity-evidence"><span>05 / {zh ? "真实官网截图" : "LIVE WEBSITE SCREEN"}</span><div className="evidence-screens"><figure><div className="evidence-screen__media"><Image src="/media/felicity/home.png" alt={zh ? "Felicity Solar South Africa 官网首页" : "Felicity Solar South Africa website homepage"} fill sizes="100vw" /></div><figcaption><strong>{zh ? "Felicity Solar South Africa 官网" : "Felicity Solar South Africa Website"}</strong><p>{zh ? "真实上线商业官网首页。" : "Live commercial website homepage."}</p></figcaption></figure></div></section>
    <section className="numbered-section felicity-learning"><span>06 / {zh ? "我学到的" : "WHAT I LEARNED"}</span><blockquote>{zh ? "把页面、产品内容、媒体和协作组织好，本身就是让一个商业项目真正落地的一部分。" : "Organizing pages, product content, media and coordination is part of what makes a commercial project real."}</blockquote><small>{zh ? "本案例不声明未经提供的 SEO、流量、转化、销售增长或用户研究成果。" : "This case study makes no unsupported claims about SEO, traffic, conversion, sales growth or user research."}</small></section>
  </main>;
}
