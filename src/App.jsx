import React from "react";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import WorkProcess from "./components/WorkProcess";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Projects from "./components/Projects";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center p-4">
        <div className="flex w-full justify-center gap-4 max-2xl:flex-wrap max-md:w-full">
          {/* Left Column */}
          <div className="grid h-fit grid-cols-1 gap-4">
            <Header />
            <Services />
            <Projects />
          </div>

          {/* Middle Column */}
          <div className="grid grid-cols-1 gap-4 max-md:w-full 2xl:h-fit ">
            <TechStack />
            <Stats />
            <CallToAction />

            <Footer />
          </div>

          {/* Right Column */}
          <div className="grid h-fit max-w-[65vh] grid-cols-1 gap-4">
            <WorkProcess />
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
