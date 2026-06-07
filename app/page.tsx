import Grain from "@/components/ui/Grain";
import Header from "@/components/ui/Header";
import Hero from "@/components/hero/Hero";
import WorkIndex from "@/components/work/WorkIndex";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Grain />
      <Header />
      <main id="main">
        <Hero />
        <WorkIndex />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
