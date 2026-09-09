"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectStatus } from "@/components/ProjectStatus";

export function ProjectShowcase() {
  const reduced = useReducedMotion();
  return (
    <section id="work" className="showcase" aria-labelledby="selected-work-title">
      <header className="showcase__header"><span>01 / SELECTED WORK</span><h2 id="selected-work-title">Stops along<br /><em>the road.</em></h2></header>
      {projects.map((project, index) => (
        <motion.article className={`showcase-project showcase-project--${index + 1}`} key={project.id} initial={reduced ? false : { opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="showcase-project__number"><span>{project.number}</span><i /></div>
          <div className="showcase-project__copy">
            <p>{project.category}<br />{project.year}</p><h3>{project.title}</h3><blockquote>{project.statement}</blockquote>
            <ProjectStatus status={project.status} />
            <Link href={project.ctaHref}>{project.ctaLabel} <ArrowUpRight size={18} /></Link>
          </div>
          <Link className="showcase-project__media" href={project.ctaHref} aria-label={`${project.ctaLabel}: ${project.title}`}>
            <Image src={project.hero} alt={`${project.title} concept visual`} fill sizes="(max-width: 800px) 100vw, 62vw" /><span>IN PROGRESS ↗</span>
          </Link>
        </motion.article>
      ))}
    </section>
  );
}
