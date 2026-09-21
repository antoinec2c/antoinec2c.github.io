import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CompetenciesCTI } from "./components/CompetenciesCTI";
import { Engagement } from "./components/Engagement";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "cti", "engagement", "timeline", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-slate-800 selection:text-white dark:selection:bg-slate-200 dark:selection:text-slate-900 transition-colors duration-300">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetenciesCTI />
        <Engagement />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

