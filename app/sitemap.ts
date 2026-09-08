import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://yihong-ai-portfolio.jdfhd1688.chatgpt.site"; return [{ url: base, lastModified: new Date() }, ...projects.map(({ id }) => ({ url: `${base}/work/${id}`, lastModified: new Date() }))]; }
