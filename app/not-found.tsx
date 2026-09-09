"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { useLanguage } from "@/messages/locale";

export default function NotFound() {
  const { locale } = useLanguage();
  const zh = locale === "zh";
  return (
    <main className="not-found">
      <Navigation />
      <div><span>404 · {zh ? "走错了路" : "WRONG TURN"}</span><h1>{zh ? <>这条路，<br />暂时到不了那里。</> : <>This road<br />doesn&apos;t go there.</>}</h1><p>{zh ? "作品仍在向前，但这个页面不在当前旅程里。" : "The work is still moving, but this page isn't part of the journey."}</p><Link href="/"><ArrowLeft size={17} /> {zh ? "回到路上" : "Return to the road"}</Link></div>
    </main>
  );
}
