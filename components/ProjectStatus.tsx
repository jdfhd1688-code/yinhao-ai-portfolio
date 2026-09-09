import type { ProjectStatusValue } from "@/data/projects";

const labels: Record<ProjectStatusValue, string> = {
  IN_PROGRESS: "In progress",
  PROTOTYPING: "Prototyping",
  PRODUCTION: "Production in progress",
  CASE_STUDY_PENDING: "Case study in development",
  COMING_SOON: "Coming soon",
};

export function ProjectStatus({ status, compact = false }: { status: ProjectStatusValue; compact?: boolean }) {
  return <div className={`project-status${compact ? " project-status--compact" : ""}`}><span>Status</span><strong>{labels[status]}</strong></div>;
}
