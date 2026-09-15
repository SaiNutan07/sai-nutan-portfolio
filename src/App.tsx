import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhatIBring from "./components/WhatIBring";

function App() {
  return (
    <div className="min-h-screen bg-ink text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhatIBring />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
