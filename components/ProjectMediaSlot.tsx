import Image from "next/image";
import type { PlannedAsset } from "@/data/projects";
import { publicAssetExists, publicAssetUrl } from "@/lib/asset-status";
import { ProjectMediaPlaceholder } from "@/components/ProjectMediaPlaceholder";

export function ProjectMediaSlot({ asset }: { asset: PlannedAsset }) {
  if (!publicAssetExists(asset.path)) return <ProjectMediaPlaceholder {...asset} plannedPath={`/public${asset.path}`} />;

  const src = publicAssetUrl(asset.path);
  if (asset.path.endsWith(".mp4")) {
    return <article className="planned-media planned-media--available" style={{ aspectRatio: asset.aspectRatio }}><video controls muted playsInline preload="metadata" aria-label={asset.title}><source src={src} type="video/mp4" /></video></article>;
  }

  return <article className="planned-media planned-media--available" style={{ aspectRatio: asset.aspectRatio }}><Image src={src} alt={asset.subtitle || asset.title} fill sizes="(max-width: 800px) 100vw, 48vw" /></article>;
}
