"use client";

import type { ProjectStatusValue } from "@/data/projects";
import { useLanguage } from "@/messages/locale";

export function ProjectStatus({ status, compact = false, label }: { status: ProjectStatusValue; compact?: boolean; label?: string }) {
  const { locale } = useLanguage();
  const labels: Record<ProjectStatusValue, { zh: string; en: string }> = {
    IN_PROGRESS: { zh: "完善中", en: "In progress" }, RELEASED: { zh: "已发行", en: "Released" }, LIVE: { zh: "已上线", en: "Live" }, COMING_SOON: { zh: "即将呈现", en: "Coming soon" },
  };
  return <div className={`project-status project-status--${status.toLowerCase().replaceAll("_", "-")}${compact ? " project-status--compact" : ""}`}><span>{locale === "zh" ? "状态" : "Status"}</span><strong>{label || labels[status][locale]}</strong></div>;
}
