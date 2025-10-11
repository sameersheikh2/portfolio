import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import NavDock from "./ui/NavDock";

const App = () => {
  return (
    <div className="min-h-screen bg-background antialiased py-12 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col min-h-[100dvh] space-y-10 px-4 md:px-6 lg:px-0">
          <Hero />
          <About />
          <Education />
          <Skills />
        </main>
      </div>

      {/* Fixed NavDock at the bottom */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <NavDock />
      </div>
    </div>
  );
};

export default App;
