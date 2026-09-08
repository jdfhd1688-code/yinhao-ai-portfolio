import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { ProjectEvidence } from "@/components/project-evidence";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ id }) => ({ slug: id })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex(({ id }) => id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="case"><Navigation />
      <header className="case__hero">
        <Link href="/#work" className="case__back"><ArrowLeft size={16} /> All work</Link>
        <div className="case__meta"><span>{project.number}</span><span>{project.category}</span><span>{project.year}</span></div>
        <h1>{project.title}</h1><p>{project.statement}</p>
      </header>
      <div className="case__image"><Image src={project.hero} alt={`${project.title} project cover`} fill priority sizes="100vw" /></div>
      <section className="case__summary"><p>{project.subtitle}</p><h2>{project.description}</h2></section>
      <section className="case__chapters">
        {[["01 / Problem", project.problem], ["02 / Insight", project.insight], ["03 / Solution", project.solution]].map(([label, copy]) => <article key={label}><span>{label}</span><p>{copy}</p></article>)}
      </section>
      <ProjectEvidence projectId={project.id} />
      <section className="case__workflow"><span>04 / WORKFLOW</span><h2>A system, one step at a time.</h2><ol>{project.workflow.map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol></section>
      <section className="case__outcomes"><div><span>05 / PROCESS</span>{project.process.map((item) => <p key={item}>{item}</p>)}</div><div><span>06 / RESULT</span>{project.result.map((item) => <p key={item}>{item}</p>)}</div></section>
      <section className="case__reflection"><span>07 / WHAT I LEARNED</span><blockquote>{project.reflection}</blockquote>{project.demo && <a className="arrow-link" href={project.demo} target="_blank" rel="noreferrer">Open live demo <ExternalLink size={17} /></a>}</section>
      <Link href={`/work/${next.id}`} className="next-project"><span>NEXT PROJECT · {next.number}</span><strong>{next.title}</strong><ArrowRight /></Link>
    </main>
  );
}
