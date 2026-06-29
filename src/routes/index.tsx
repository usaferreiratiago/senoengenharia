import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Compass,
  HardHat,
  Hammer,
  ClipboardCheck,
  Ruler,
  Phone,
  Mail,
  MapPin,
  Quote,
  Check,
} from "lucide-react";

/**
 * ⚠️ SAFE FALLBACKS (evita crash por assets faltando)
 */
const heroImg = "/hero-construction.jpg";
const aboutImg = "/about-blueprint.jpg";
const p1 = "/project-1.jpg";
const p2 = "/project-2.jpg";
const p3 = "/project-3.jpg";

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
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="font-bold">SENO Engenharia</span>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#obras">Obras</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen pt-16">
      <img
        src={heroImg}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 text-white">
        <h1 className="text-5xl font-bold">
          Engenharia com precisão e permanência
        </h1>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <img src={aboutImg} className="w-full rounded" />
        <p className="mt-6 text-gray-600">
          Engenharia com décadas de experiência no Vale do Aço.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    "Projetos arquitetônicos",
    "Projetos estruturais",
    "Construção civil",
    "Gerenciamento de obras",
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div key={s} className="p-6 border rounded bg-white">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { img: p1, title: "Residencial Jardim" },
    { img: p2, title: "Edifício Centro" },
    { img: p3, title: "Galpão Industrial" },
  ];

  return (
    <section id="obras" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="border rounded overflow-hidden">
            <img src={p.img} className="h-48 w-full object-cover" />
            <div className="p-4">{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p>“Obra entregue antes do prazo.”</p>
      </div>
    </section>
  );
}

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

function Contact() {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const body = encodeURIComponent(JSON.stringify(data, null, 2));
    window.location.href = `mailto:contato@senoengenharia.com.br?body=${body}`;
    reset();
  };

  return (
    <section id="contato" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("nome")}
            placeholder="Nome"
            className="border p-2 w-full"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="border p-2 w-full"
          />
          <input
            {...register("telefone")}
            placeholder="Telefone"
            className="border p-2 w-full"
          />
          <textarea
            {...register("mensagem")}
            placeholder="Mensagem"
            className="border p-2 w-full"
          />
          <button className="bg-black text-white px-4 py-2">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm">
      © {new Date().getFullYear()} Seno Engenharia
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}