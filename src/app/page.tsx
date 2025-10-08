import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
// import Capabilities from "@/sections/Capabilities"; // ← remove this
import Contact from "@/sections/Contact";

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="main">
        <Hero />
        <About />
        {/* <Capabilities /> */} {/* ← remove this */}
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
