"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Work", "#work"],
  ["Thinking", "#thinking"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Navigation() {
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
      <Link href="/" className="nav__brand" aria-label="Yihong home">YIHONG<span>.</span></Link>
      <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={`/${href}`} onClick={() => setOpen(false)}>{label}</Link>
        ))}
      </nav>
      <button className="nav__toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        <span /><span />
      </button>
    </header>
  );
}
