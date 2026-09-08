import { Navigation } from "@/components/navigation";
import { ScrollNarrative } from "@/components/scroll-narrative";
import { RoadPath } from "@/components/road-path";
import { ProjectShowcase } from "@/components/project-showcase";
import { Thinking } from "@/components/home-sections";
import { AboutReveal } from "@/components/about-reveal";
import { ContactFinale } from "@/components/contact-finale";

export default function Home() {
  return (
    <main className="journey-shell">
      <Navigation />
      <RoadPath />
      <ScrollNarrative />
      <ProjectShowcase />
      <Thinking />
      <AboutReveal />
      <ContactFinale />
    </main>
  );
}
