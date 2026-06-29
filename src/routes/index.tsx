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
import heroImg from "@/assets/senoengenharia.png";
import aboutImg from "@/assets/about-blueprint.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seno Engenharia — 40 anos construindo no Vale do Aço" },
      { name: "description", content: "Projetos, obras civis e gerenciamento de construção em Coronel Fabriciano/MG. CNPJ 20.853.842/0001-01." },
      { property: "og:title", content: "Seno Engenharia — Projetos e Construções" },
      { property: "og:description", content: "40 anos de engenharia em Coronel Fabriciano/MG." },
      { property: "og:url", content: "/" },
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
          foundingDate: "1985",
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
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">SENO</span>
          <span className="text-xs uppercase tracking-[0.25em] text-stone">Engenharia</span>
        </a>
        <nav className="hidden items-center gap-10 text-sm text-foreground/70 md:flex">
          <a href="#sobre" className="hover:text-ink transition">Sobre</a>
          <a href="#servicos" className="hover:text-ink transition">Serviços</a>
          <a href="#obras" className="hover:text-ink transition">Obras</a>
          <a href="#depoimentos" className="hover:text-ink transition">Clientes</a>
        </nav>
        <a
          href="#contato"
          className="group inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm text-primary-foreground transition hover:bg-terracotta"
        >
          Contato
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Obra em concreto da Seno Engenharia" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-12 gap-6 px-6 pb-16 pt-24 lg:px-10">
        <div className="col-span-12 flex flex-col justify-end lg:col-span-9">
          <motion.div {...fadeUp} className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone">
            <span className="h-px w-10 bg-terracotta" />
            Desde 1985 · Coronel Fabriciano, MG
          </motion.div>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] text-ink"
          >
            Construímos com<br />
            <span className="italic font-light text-terracotta">precisão</span> &amp; permanência.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg"
          >
            Quatro décadas projetando e executando obras residenciais, comerciais e industriais
            no Vale do Aço. Engenharia honesta, prazos cumpridos, obras que envelhecem bem.
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.25 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#contato" className="group inline-flex items-center gap-3 rounded-sm bg-terracotta px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-terracotta-deep">
              Solicitar orçamento
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#obras" className="inline-flex items-center gap-3 rounded-sm border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-ink">
              Ver obras
            </a>
          </motion.div>
        </div>
      </div>
      <div className="relative border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: "40", l: "anos de mercado" },
            { k: "200+", l: "obras entregues" },
            { k: "MG", l: "Vale do Aço" },
            { k: "100%", l: "prazo cumprido" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-8 lg:px-10">
              <div className="font-display text-3xl font-medium text-ink md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-stone">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 lg:px-10">
        <motion.div {...fadeUp} className="col-span-12 lg:col-span-5">
          <div className="sticky top-28">
            <div className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta">— 01 / Sobre</div>
            <h2 className="font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
              Engenharia construída por quem sabe o peso de cada viga.
            </h2>
          </div>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="col-span-12 space-y-6 lg:col-span-6 lg:col-start-7">
          <img src={aboutImg} alt="Equipe Seno revisando projetos" width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
            A <strong className="text-ink font-medium">Seno Engenharia Projetos Construções LTDA</strong> nasceu
            em Coronel Fabriciano em 1985 com uma convicção simples: obra boa é a que
            atravessa gerações. De lá pra cá, construímos para famílias, indústrias e
            comércios do Vale do Aço, com o mesmo critério técnico do primeiro dia.
          </p>
          <ul className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
            {[
              "CNPJ 20.853.842/0001-01",
              "Sede em Coronel Fabriciano/MG",
              "Equipe técnica própria",
              "Acompanhamento total da obra",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                {i}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { icon: Compass, title: "Projetos arquitetônicos", desc: "Estudo preliminar, anteprojeto e projeto executivo com foco em viabilidade e estética." },
  { icon: Ruler, title: "Projetos estruturais", desc: "Cálculo estrutural em concreto armado, aço e fundações para todo porte de obra." },
  { icon: Building2, title: "Construção civil", desc: "Execução completa de obras residenciais, comerciais e industriais — chave na mão." },
  { icon: Hammer, title: "Reformas e ampliações", desc: "Reformas estruturais, retrofits e ampliações com mínimo impacto operacional." },
  { icon: HardHat, title: "Obras industriais", desc: "Galpões, pavilhões e infraestrutura para o parque industrial do Vale do Aço." },
  { icon: ClipboardCheck, title: "Gerenciamento de obras", desc: "Planejamento, orçamento, fiscalização e controle de qualidade durante toda a execução." },
];

function Services() {
  return (
    <section id="servicos" className="border-b border-border bg-concrete/40 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta">— 02 / Serviços</div>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
              Do desenho à entrega das chaves.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/70">
            Soluções integradas em engenharia. Você fala com uma equipe só, do primeiro
            risco à última camada de tinta.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative bg-background p-8 transition hover:bg-ink lg:p-10"
            >
              <s.icon className="h-8 w-8 text-terracotta transition group-hover:text-terracotta" strokeWidth={1.4} />
              <h3 className="mt-8 font-display text-xl font-medium text-ink transition group-hover:text-background">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 transition group-hover:text-background/70">
                {s.desc}
              </p>
              <div className="mt-8 text-xs tabular-nums tracking-widest text-stone transition group-hover:text-background/40">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { img: p1, title: "Residencial Jardim das Acácias", type: "Residencial · Coronel Fabriciano", year: "2024" },
  { img: p2, title: "Edifício Comercial Centro", type: "Comercial · Ipatinga", year: "2023" },
  { img: p3, title: "Galpão Industrial Vale do Aço", type: "Industrial · Timóteo", year: "2022" },
];

function Projects() {
  return (
    <section id="obras" className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="mb-16">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta">— 03 / Obras</div>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            Um portfólio que se mede em metros quadrados e décadas.
          </h2>
        </motion.div>
        <div className="space-y-px bg-border">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contato"
              {...fadeUp}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group grid grid-cols-12 items-center gap-6 bg-background py-8 transition hover:bg-concrete/60"
            >
              <div className="col-span-12 px-4 md:col-span-5 md:px-6">
                <img src={p.img} alt={p.title} width={1024} height={1024} loading="lazy" className="aspect-[4/3] w-full object-cover grayscale transition duration-700 group-hover:grayscale-0" />
              </div>
              <div className="col-span-12 px-4 md:col-span-1 md:px-0">
                <div className="text-xs tabular-nums tracking-widest text-stone">0{i + 1}</div>
              </div>
              <div className="col-span-12 px-4 md:col-span-4 md:px-0">
                <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">{p.title}</h3>
                <div className="mt-2 text-sm text-foreground/60">{p.type}</div>
              </div>
              <div className="col-span-12 flex items-center justify-between gap-6 px-4 md:col-span-2 md:px-6">
                <div className="font-display text-2xl text-stone">{p.year}</div>
                <ArrowUpRight className="h-6 w-6 text-ink transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-terracotta" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { q: "A Seno entregou nossa fábrica três semanas antes do prazo. Em 30 anos de indústria, nunca vi obra correr tão limpa.", a: "Roberto Mendes", r: "Diretor Industrial · Vale do Aço" },
  { q: "Construíram a casa da nossa família com um cuidado que parece raro hoje. Cada detalhe foi conversado, cada prazo cumprido.", a: "Ana Paula Resende", r: "Cliente residencial · Ipatinga" },
  { q: "Profissionalismo do orçamento à última vistoria. Recomendo de olhos fechados para qualquer obra séria.", a: "Carlos Drummond", r: "Síndico · Coronel Fabriciano" },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="border-b border-border bg-ink py-28 text-background lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="mb-16">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta">— 04 / Clientes</div>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-background md:text-5xl">
            O que dizem de uma obra da Seno.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-px bg-background/10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.a}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col justify-between bg-ink p-8 lg:p-10"
            >
              <Quote className="h-8 w-8 text-terracotta" strokeWidth={1.2} />
              <blockquote className="mt-8 text-lg leading-relaxed text-background/90">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-10 border-t border-background/15 pt-5">
                <div className="font-display text-base font-medium text-background">{t.a}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-background/50">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

type FormValues = { nome: string; email: string; telefone: string; mensagem: string };

function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    const body = encodeURIComponent(
      `Nome: ${data.nome}\nEmail: ${data.email}\nTelefone: ${data.telefone}\n\n${data.mensagem}`,
    );
    window.location.href = `mailto:contato@senoengenharia.com.br?subject=Contato%20pelo%20site&body=${body}`;
    reset();
  };

  return (
    <section id="contato" className="border-b border-border py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="mb-16">
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta">— 05 / Contato</div>
          <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            Tem um projeto em mente? Vamos conversar.
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <motion.div {...fadeUp} className="col-span-12 space-y-8 lg:col-span-5">
            <div className="space-y-6">
              <a href="tel:+5531000000000" className="group flex items-start gap-4 border-b border-border pb-6">
                <Phone className="mt-1 h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone">Telefone</div>
                  <div className="mt-1 font-display text-xl text-ink transition group-hover:text-terracotta">(31) 0000-0000</div>
                </div>
              </a>
              <a href="mailto:contato@senoengenharia.com.br" className="group flex items-start gap-4 border-b border-border pb-6">
                <Mail className="mt-1 h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone">E-mail</div>
                  <div className="mt-1 font-display text-xl text-ink transition group-hover:text-terracotta">contato@senoengenharia.com.br</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone">Endereço</div>
                  <div className="mt-1 font-display text-xl leading-snug text-ink">Coronel Fabriciano<br />Minas Gerais — Brasil</div>
                  <div className="mt-2 text-sm text-foreground/60">CNPJ 20.853.842/0001-01</div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="Localização Seno Engenharia"
                src="https://www.google.com/maps?q=Coronel+Fabriciano,+MG&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale"
              />
            </div>
          </motion.div>

          <motion.form
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-12 space-y-6 border border-border bg-card p-8 lg:col-span-7 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Nome" error={formState.errors.nome?.message}>
                <input {...register("nome", { required: "Informe seu nome" })} className="field" />
              </Field>
              <Field label="Telefone" error={formState.errors.telefone?.message}>
                <input {...register("telefone", { required: "Informe um telefone" })} className="field" />
              </Field>
            </div>
            <Field label="E-mail" error={formState.errors.email?.message}>
              <input type="email" {...register("email", { required: "Informe seu e-mail" })} className="field" />
            </Field>
            <Field label="Sobre seu projeto" error={formState.errors.mensagem?.message}>
              <textarea rows={6} {...register("mensagem", { required: "Conte um pouco do que precisa" })} className="field resize-none" />
            </Field>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-6 py-4 text-sm font-medium text-primary-foreground transition hover:bg-terracotta md:w-auto"
            >
              Enviar mensagem
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-stone">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold text-ink">SENO</span>
            <span className="text-xs uppercase tracking-[0.25em] text-stone">Engenharia · Desde 1985</span>
          </div>
          <div className="text-xs text-stone">
            © {new Date().getFullYear()} Seno Engenharia Projetos Construções LTDA — ME. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
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
