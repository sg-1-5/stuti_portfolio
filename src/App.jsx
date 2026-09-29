import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Experience, Projects, Skills, Achievements, Education, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}