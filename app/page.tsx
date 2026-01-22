import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-black">
      <Navigation />
      <div className="scroll-mt-24">
        <Hero />
      </div>
      <div className="scroll-mt-24">
        <Skills />
      </div>
      <div className="scroll-mt-24">
        <About />
      </div>
      <div className="scroll-mt-24">
        <Projects />
      </div>
      <div className="scroll-mt-24">
        <Contact />
      </div>
      <div className="scroll-mt-24">
        <Footer />
      </div>
    </main>
  );
}
