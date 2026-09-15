"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/data/projects";

const STORAGE_KEY = "yinhao-portfolio-language";
const ui = {
  zh: {
    nav: ["作品", "思考方式", "关于我", "联系"], menuOpen: "打开菜单", menuClose: "关闭菜单",
    workLabel: "01 / 作品", workTitle: <>沿途的<br /><em>几个停靠点。</em></>, featured: "正在路上的作品", featuredNote: "AI 产品、智能体、案例研究与工具研究。",
    released: <>有些东西，还在路上。<br /><em>有些，已经走进了现实。</em></>,
    thinkingLabel: "02 / 我如何思考", thinkingTitle: <>工具，永远在<br /><em>问题之后。</em></>, thoughts: ["我不会从 AI 开始。", "我先从问题开始。", "然后设计流程。", "最后才决定，AI 应该出现在哪里。"], method: ["理解", "设计", "构建", "迭代"],
    aboutLabel: "03 / 关于 · 路上的人", aboutLead: <>我在做 AI 产品、<br />智能体与故事，<br />让技术更懂人。</>, aboutBody: "我在探索 AI 如何理解人、解决真实世界的问题，并打开新的叙事方式。", aboutClosing: <>我仍在学习。<br />仍在构建。<br /><em>仍然在路上。</em></>, journey: ["心理学", "法律", "AI", "仍在探索"],
    contactLabel: "04 / 联系 · 路还在继续", contactBeats: ["我还没有到达\n山顶。", "我仍然\n在路上。", "也许，我们的路\n会在这里交汇。"], talk: "聊一聊", contactPending: "真实联系方式确认后将在这里开放。",
  },
  en: {
    nav: ["Work", "Thinking", "About", "Contact"], menuOpen: "Open menu", menuClose: "Close menu",
    workLabel: "01 / SELECTED WORK", workTitle: <>Stops along<br /><em>the road.</em></>, featured: "FEATURED WORK", featuredNote: "AI products, agents, case studies and tool research.",
    released: <>Some are still being built.<br /><em>Some already made it into the world.</em></>,
    thinkingLabel: "02 / HOW I THINK", thinkingTitle: <>The tool comes<br /><em>after the question.</em></>, thoughts: ["I don't start with AI.", "I start with the problem.", "Then I design the workflow.", "Then AI becomes useful."], method: ["UNDERSTAND", "DESIGN", "BUILD", "ITERATE"],
    aboutLabel: "03 / ABOUT · THE PERSON ON THE ROAD", aboutLead: <>I build AI products,<br />agents and stories<br />that make technology feel more human.</>, aboutBody: "I'm exploring how AI can understand people, solve real-world problems, and create new forms of storytelling.", aboutClosing: <>I&apos;m still learning.<br />Still building.<br /><em>Still on the way.</em></>, journey: ["Psychology", "Law", "AI", "Still exploring"],
    contactLabel: "04 / CONTACT · THE ROAD CONTINUES", contactBeats: ["I haven't reached\nthe summit yet.", "I'm still\non the way.", "Maybe our paths\ncross here."], talk: "LET'S TALK", contactPending: "Contact links will be activated when verified addresses are supplied.",
  },
} as const;

type LocaleContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: typeof ui.zh | typeof ui.en };
const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") setLocale(saved);
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    if (window.location.pathname === "/") {
      document.title = "YINHAO — AI Solution / AI Product / Workflow Design";
    }
    localStorage.setItem(STORAGE_KEY, locale);
  }, [hydrated, locale]);
  const value = useMemo(() => ({ locale, setLocale, t: ui[locale] }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLanguage() { const value = useContext(LocaleContext); if (!value) throw new Error("useLanguage must be used inside LanguageProvider"); return value; }
