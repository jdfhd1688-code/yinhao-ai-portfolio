import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yihong.studio"),
  title: { default: "Yihong — AI Products, Agents & Stories", template: "%s — Yihong" },
  description: "AI portfolio exploring products, agents and storytelling.",
  openGraph: { title: "Yihong — AI Products, Agents & Stories", description: "AI portfolio exploring products, agents and storytelling.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
