 
 
/* eslint-disable react-refresh/only-export-components */

import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
} from "lucide-react";

import heroImg from "@/assets/senoengenharia.png";
import aboutImg from "@/assets/about-blueprint.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

/* ---------------- ROUTE ---------------- */

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seno Engenharia — 40 anos construindo no Vale do Aço" },
      {
        name: "description",
        content:
          "Projetos, obras civis e gerenciamento de construção em Coronel Fabriciano/MG.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ---------------- HEADER ---------------- */

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-semibold text-xl">SENO</span>
          <span className="text-xs uppercase tracking-widest">Engenharia</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm opacity-70">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#obras">Obras</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-white"
        >
          Contato <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24">
        <motion.div {...fadeUp}>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Engenharia com precisão
          </h1>

          <p className="mt-6 max-w-xl text-white/80">
            40 anos entregando obras no Vale do Aço.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="sobre" className="py-28 border-b">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl font-bold">Sobre</h2>
        </motion.div>

        <motion.div {...fadeUp}>
          <img
            src={aboutImg}
            className="aspect-4/3 w-full object-cover"
          />
          <p className="mt-6 text-gray-600">
            Engenharia civil com foco em qualidade e durabilidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  return (
    <section id="servicos" className="py-28 border-b">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold mb-10">Serviços</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Projetos", "Obras", "Gestão"].map((s) => (
            <div key={s} className="p-6 border rounded">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
  return (
    <section id="obras" className="py-28 border-b">
      <div className="mx-auto max-w-7xl px-6 space-y-10">
        {[p1, p2, p3].map((img, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-6">
            <img src={img} className="aspect-4/3 object-cover" />
            <div className="flex items-center">
              Projeto {i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const { register, handleSubmit } = useForm();

  return (
    <section id="contato" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <form
          onSubmit={handleSubmit((d) => console.log(d))}
          className="space-y-4"
        >
          <input {...register("nome")} placeholder="Nome" className="border p-2 w-full" />
          <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
          <textarea {...register("msg")} className="border p-2 w-full" />

          <button className="bg-black text-white px-6 py-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="py-10 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Seno Engenharia
    </footer>
  );
}

/* ---------------- PAGE ---------------- */

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Index;