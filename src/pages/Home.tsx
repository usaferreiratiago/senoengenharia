import SEO from "../components/SEO";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SEO
        title="Seno Engenharia | Projetos e Construções"
        description="Empresa de engenharia com mais de 40 anos de experiência em Coronel Fabriciano-MG, especializada em projetos, construções, consultoria e gerenciamento de obras."
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Map />
      </main>

      <Footer />
    </>
  );
}