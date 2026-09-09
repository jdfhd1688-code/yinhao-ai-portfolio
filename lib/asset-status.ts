import { existsSync } from "node:fs";
import { join } from "node:path";

export function publicAssetExists(assetPath: string) {
  const relativePath = assetPath.replace(/^\/public\//, "").replace(/^\//, "");
  if (!relativePath || relativePath.includes("..")) return false;
  return existsSync(join(process.cwd(), "public", relativePath));
}

export function publicAssetUrl(assetPath: string) {
  return assetPath.replace(/^\/public/, "");
}
