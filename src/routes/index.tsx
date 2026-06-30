import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seno Engenharia — 40 anos construindo no Vale do Aço" },
      {
        name: "description",
        content:
          "Projetos, obras civis e gerenciamento de construção em Coronel Fabriciano/MG. CNPJ 20.853.842/0001-01.",
      },
      { property: "og:title", content: "Seno Engenharia — Projetos e Construções" },
      { property: "og:description", content: "40 anos de engenharia em Coronel Fabriciano/MG." },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Seno Engenharia Projetos Construções LTDA - ME",
          taxID: "20.853.842/0001-01",
          foundingDate: "1986",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coronel Fabriciano",
            addressRegion: "MG",
            addressCountry: "BR",
          },
          areaServed: "Vale do Aço, Minas Gerais",
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Container de conteúdo que posiciona a logo no topo da página */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 absolute top-0 left-0 right-0 z-20">
        {/* Logo fixa colorida adaptável */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-start"
        >
          <img
            src={logoImg}
            alt="Seno Engenharia Logo"
            className="h-16 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
          />
        </motion.div>
      </div>

      {/* Seção Hero */}
      <section className="relative min-h-screen overflow-hidden pt-24 bg-white dark:bg-zinc-950 text-foreground transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Obra em concreto da Seno Engenharia"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          {/* Degradê sobreposto ajustado para fazer a transição correta no claro e escuro */}
          <div className="absolute inset-0 bg-linear-to-b from-white/40 via-white/20 to-white dark:from-zinc-950/40 dark:via-zinc-950/20 dark:to-zinc-950" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-12 gap-6 px-6 pb-16 pt-24 lg:px-10">
          <div className="col-span-12 flex flex-col justify-end lg:col-span-9">
            <motion.div
              {...fadeUp}
              className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone dark:text-zinc-400 font-semibold"
            >
              <span className="h-px w-10 bg-terracotta" />
              Desde 1986 · Coronel Fabriciano, MG
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] text-ink dark:text-zinc-100 tracking-tight"
            >
              Construímos com
              <br />
              <span className="italic font-light text-terracotta dark:text-amber-500">
                precisão
              </span>{" "}
              &amp; permanência.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 dark:text-zinc-300 md:text-lg"
            >
              Quatro décadas projetando e executando obras residenciais, comerciais e industriais no
              Vale do Aço. Engenharia honesta, prazos cumpridos, obras que envelhecem bem.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="."
                className="group inline-flex items-center gap-3 rounded-sm bg-terracotta px-6 py-3.5 text-sm font-medium text-white transition hover:bg-terracotta-deep shadow-sm"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="."
                className="inline-flex items-center gap-3 rounded-sm border border-ink/20 dark:border-zinc-800 px-6 py-3.5 text-sm font-medium text-ink dark:text-zinc-200 transition hover:border-ink dark:hover:border-zinc-400 hover:bg-ink/5 dark:hover:bg-zinc-900"
              >
                Ver obras
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Grid de Métricas */}
        <div className="relative border-t border-border dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border dark:divide-zinc-800 md:grid-cols-4">
            {[
              { k: "40", l: "anos de mercado" },
              { k: "200+", l: "obras entregues" },
              { k: "MG", l: "Vale do Aço" },
              { k: "100%", l: "prazo cumprido" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-8 lg:px-10">
                <div className="font-display text-3xl font-medium text-ink dark:text-zinc-100 md:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-stone dark:text-zinc-500 font-medium">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Navegação Interna */}
      <section className="bg-white dark:bg-zinc-950 text-foreground border-b border-border dark:border-zinc-800 py-24 lg:py-32 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:px-10">
          {[
            {
              to: "/sobre",
              n: "01",
              t: "Sobre",
              d: "40 anos de engenharia honesta no Vale do Aço.",
            },
            {
              to: "/servicos",
              n: "02",
              t: "Serviços",
              d: "Projetos, construção, reformas e gerenciamento de obras.",
            },
            {
              to: "/obras",
              n: "03",
              t: "Obras",
              d: "Portfólio residencial, comercial e industrial.",
            },
            {
              to: "/clientes",
              n: "04",
              t: "Clientes",
              d: "O que dizem de uma obra feita pela Seno.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex items-start justify-between gap-6 border-t border-border dark:border-zinc-800 pt-8 transition hover:border-ink dark:hover:border-zinc-400"
              search={function (current: never): never {
                throw new Error("Function not implemented.");
              }}
              params={function (current: never): never {
                throw new Error("Function not implemented.");
              }}
            >
              <div>
                <div className="text-xs tabular-nums tracking-widest text-stone dark:text-zinc-500">
                  — {c.n}
                </div>
                <h2 className="mt-3 font-display text-3xl font-medium text-ink dark:text-zinc-100">
                  {c.t}
                </h2>
                <p className="mt-2 max-w-md text-sm text-foreground/85 dark:text-zinc-400">{c.d}</p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-ink dark:text-zinc-200 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-terracotta dark:group-hover:text-amber-500" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
