import { Navigation } from "@/components/navigation";
import { About, Contact, Hero, RoadLine, Thinking, Work } from "@/components/home-sections";

export default function Home() {
  return <main><Navigation /><Hero /><RoadLine /><Work /><Thinking /><About /><Contact /></main>;
}
