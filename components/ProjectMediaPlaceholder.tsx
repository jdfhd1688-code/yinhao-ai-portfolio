import type { PlannedAsset } from "@/data/projects";
import { ProjectStatus } from "@/components/ProjectStatus";

export function ProjectMediaPlaceholder({ title, subtitle, status, mediaType, aspectRatio, plannedPath }: Omit<PlannedAsset, "path"> & { plannedPath: string }) {
  return (
    <article className="planned-media" style={{ aspectRatio }} role="note" aria-label={`${title}, ${status.replaceAll("_", " ").toLowerCase()}`}>
      <div className="planned-media__top"><span>{mediaType}</span><ProjectStatus status={status} compact /></div>
      <div className="planned-media__path" aria-hidden="true"><i /><i /><i /></div>
      <div className="planned-media__copy"><strong>{title}</strong><p>{subtitle}</p><code>{plannedPath}</code></div>
    </article>
  );
}
