"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectStatus } from "@/components/ProjectStatus";
import { localize } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

export function ProjectShowcase() {
  const { locale, t } = useLanguage();
  const reduced = useReducedMotion();
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const featured = ordered.filter((project) => project.group === "featured");
  const released = ordered.filter((project) => project.group === "released");
  const renderProject = (project: (typeof projects)[number], index: number) => (
    <motion.article className={`showcase-project showcase-project--${index + 1}`} key={project.id} initial={reduced ? false : { opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
      <div className="showcase-project__number"><span>{project.number}</span><i /></div>
      <div className="showcase-project__copy">
        <p>{localize(project.category, locale)}<br />{project.year}</p><h3>{localize(project.title, locale)}</h3><small>{localize(project.subtitle, locale)}</small><blockquote>{localize(project.statement, locale)}</blockquote>
        <ProjectStatus status={project.status} label={localize(project.statusLabel, locale)} />
        <div className="showcase-project__links"><Link href={project.ctaHref}>{localize(project.ctaLabel, locale)} <ArrowUpRight size={18} /></Link>{project.externalLinks?.map((item) => item.unavailable ? <span className="unavailable-link" key={item.href} aria-disabled="true">{localize(item.label, locale)}</span> : <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{localize(item.label, locale)} <ArrowUpRight size={15} /></a>)}</div>
      </div>
      <Link className="showcase-project__media" href={project.ctaHref} aria-label={`${localize(project.ctaLabel, locale)}: ${localize(project.title, locale)}`}>
        {project.id === "short-drama" ? <div className="project-title-art project-title-art--drama"><small>64 EPISODES</small><strong>{locale === "zh" ? "现实反击" : "REAL-WORLD\nCONFLICT"}</strong><i>×</i><strong>{locale === "zh" ? "古装权谋" : "HISTORICAL\nINTRIGUE"}</strong><small>68 EPISODES</small></div> : project.id === "felicity-south-africa" ? <div className="project-title-art project-title-art--felicity"><small>ZERO → LIVE · ≈ 3 WEEKS</small><strong>FELICITY<br />SOLAR</strong><em>SOUTH AFRICA</em></div> : <Image src={project.hero} alt={localize(project.title, locale)} fill sizes="(max-width: 800px) 100vw, 62vw" />}
        <span>{project.cardTag ? localize(project.cardTag, locale) : project.status === "LIVE" ? (locale === "zh" ? "已上线 ↗" : "LIVE ↗") : project.status === "RELEASED" ? (locale === "zh" ? "两部作品已发行 ↗" : "2 RELEASED WORKS ↗") : (locale === "zh" ? "完善中 ↗" : "IN PROGRESS ↗")}</span>
      </Link>
    </motion.article>
  );
  return (
    <section id="work" className="showcase" aria-labelledby="selected-work-title">
      <header className="showcase__header"><span>{t.workLabel}</span><h2 id="selected-work-title">{t.workTitle}</h2></header>
      <div className="work-tier"><span>{t.featured}</span><p>{t.featuredNote}</p></div>
      {featured.map(renderProject)}
      <div className="work-transition"><span>RELEASED &amp; REAL WORK</span><h2>{t.released}</h2></div>
      {released.map((project, index) => renderProject(project, index + 2))}
    </section>
  );
}
