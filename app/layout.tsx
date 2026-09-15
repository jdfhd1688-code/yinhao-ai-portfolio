import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/messages/locale";

export const metadata: Metadata = {
  metadataBase: new URL("https://yinhao-ai-portfolio.netlify.app"),
  title: { default: "YINHAO — AI Solution / AI Product / Workflow Design", template: "%s — YINHAO" },
  description: "AI Solution / AI Product 作品集，展示 Legal AI、RAG、Agent、Workflow、Human-in-the-loop、AI Product 与真实商业交付。",
  alternates: { canonical: "/" },
  openGraph: { title: "YINHAO — AI Solution / AI Product / Workflow Design", description: "Legal AI、RAG、Agent、Workflow、Human-in-the-loop、AI Product 与真实商业交付作品集。", type: "website", url: "/", images: [{ url: "/media/hero/hero-road.png", width: 2048, height: 2048, alt: "YINHAO 个人作品集的夜路主视觉" }] },
  twitter: { card: "summary_large_image", title: "YINHAO — AI Solution / AI Product / Workflow Design", description: "AI Solution / AI Product portfolio spanning workflows, agents and real-world delivery.", images: ["/media/hero/hero-road.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" data-scroll-behavior="smooth"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
