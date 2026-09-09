import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { ShortDramaCase } from "@/components/short-drama-case";
import { FelicityCase } from "@/components/felicity-case";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return [...projects.map(({ id }) => ({ slug: id })), { slug: "ai-storytelling" }]; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title.zh, description: project.description.zh, alternates: { canonical: `/work/${project.id}` } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  if (project.id === "short-drama") return <ShortDramaCase />;
  if (project.id === "felicity-south-africa") return <FelicityCase />;
  const index = projects.findIndex(({ id }) => id === project.id);
  const next = projects[(index + 1) % projects.length];
  return <ProjectCaseStudy project={project} next={next} />;
}
