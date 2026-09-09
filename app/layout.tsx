import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/messages/locale";

export const metadata: Metadata = {
  metadataBase: new URL("https://yinhao-ai-portfolio.jdfhd1688.chatgpt.site"),
  title: { default: "YINHAO — AI 产品、智能体与创作", template: "%s — YINHAO" },
  description: "YINHAO 的个人作品集，记录 AI 产品、AI Agent、短剧创作与真实商业项目，以及仍在继续的探索。",
  alternates: { canonical: "/" },
  openGraph: { title: "YINHAO — AI 产品、智能体与创作", description: "YINHAO 的个人作品集：AI 产品、智能体、短剧编剧与真实商业交付。", type: "website", url: "/", images: [{ url: "/media/hero/hero-road.png", width: 2048, height: 2048, alt: "YINHAO 个人作品集的夜路主视觉" }] },
  twitter: { card: "summary_large_image", title: "YINHAO — AI 产品、智能体与创作", description: "AI 产品、智能体、工作流与故事创作，一切仍在路上。", images: ["/media/hero/hero-road.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" data-scroll-behavior="smooth"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
