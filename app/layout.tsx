import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yinhao-ai-portfolio.jdfhd1688.chatgpt.site"),
  title: { default: "YINHAO — AI Products, Agents & Stories", template: "%s — YINHAO" },
  description: "A portfolio by YINHAO exploring AI products, agents, workflows and storytelling.",
  alternates: { canonical: "/" },
  openGraph: { title: "YINHAO — AI Products, Agents & Stories", description: "A portfolio by YINHAO exploring AI products, agents, workflows and storytelling.", type: "website", url: "/", images: [{ url: "/media/hero/hero-road.png", width: 2048, height: 2048, alt: "A night road from YINHAO's portfolio journey" }] },
  twitter: { card: "summary_large_image", title: "YINHAO — AI Products, Agents & Stories", description: "AI products, agents, workflows and storytelling — all still in motion.", images: ["/media/hero/hero-road.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
