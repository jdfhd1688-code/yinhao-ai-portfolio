import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yinhao-ai-portfolio.jdfhd1688.chatgpt.site"),
  title: { default: "YINHAO — AI Products, Agents & Stories", template: "%s — YINHAO" },
  description: "AI portfolio exploring products, agents and storytelling.",
  openGraph: { title: "YINHAO — AI Products, Agents & Stories", description: "AI portfolio exploring products, agents and storytelling.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
