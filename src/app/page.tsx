import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Manifesto } from "@/components/sections/Manifesto";
import { Partners } from "@/components/sections/Partners";
import { Founder } from "@/components/sections/Founder";
import { BlogFeed } from "@/components/sections/BlogFeed";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <Manifesto />
      <Partners />
      <Founder />
      <BlogFeed />
      <Contact />
    </>
  );
}
