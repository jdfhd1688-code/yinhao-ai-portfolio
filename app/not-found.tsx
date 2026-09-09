import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";

export default function NotFound() {
  return (
    <main className="not-found">
      <Navigation />
      <div><span>404 · WRONG TURN</span><h1>This road<br />doesn&apos;t go there.</h1><p>The work is still moving, but this page isn&apos;t part of the journey.</p><Link href="/"><ArrowLeft size={17} /> Return to the road</Link></div>
    </main>
  );
}
