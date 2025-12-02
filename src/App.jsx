import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import NavDock from "./ui/NavDock";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GitHubStats from "./components/GitHubStats";
import MobileHeader from "./ui/MobileHeader";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    if (id === "#home") return window.scrollTo({ top: 0, behavior: "smooth" });
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background antialiased">
      {isMobile && <MobileHeader scrollTo={scrollTo} />}

      <div
        className={`mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ${
          isMobile ? "pt-16" : "pt-12 sm:pt-24"
        }`}
      >
        <main className="flex flex-col min-h-[100dvh] space-y-10 px-4 md:px-6 lg:px-0">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <GitHubStats />
          <Contact />
        </main>
      </div>

      <NavDock isMobile={isMobile} scrollTo={scrollTo} />
    </div>
  );
};

export default App;
