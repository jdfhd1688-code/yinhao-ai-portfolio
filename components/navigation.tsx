"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/messages/locale";

export function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <Link href="/" className="nav__brand" aria-label="YINHAO home">YINHAO<span>.</span></Link>
      <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
        {t.nav.map((label, index) => {
          const href = ["#work", "#thinking", "#about", "#contact"][index];
          return (
          <Link key={href} href={`/${href}`} onClick={() => setOpen(false)}>{label}</Link>
          );
        })}
      </nav>
      <div className="language-switch" role="group" aria-label={locale === "zh" ? "语言切换" : "Language selection"}>
        <button type="button" onClick={() => setLocale("zh")} aria-pressed={locale === "zh"} aria-label="切换到中文">中</button>
        <span>/</span>
        <button type="button" onClick={() => setLocale("en")} aria-pressed={locale === "en"} aria-label="Switch language to English">EN</button>
      </div>
      <button className="nav__toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open}>
        <span /><span />
      </button>
    </header>
  );
}
