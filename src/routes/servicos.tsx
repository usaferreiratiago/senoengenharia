import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Compass, HardHat, Hammer, ClipboardCheck, Ruler } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Serviços — Seno Engenharia" },
      {
        name: "description",
        content:
          "Projetos arquitetônicos e estruturais, construção, reformas, obras industriais e gerenciamento de obras no Vale do Aço.",
      },
      { property: "og:title", content: "Serviços de engenharia — Seno" },
      { property: "og:description", content: "Do desenho à entrega das chaves." },
    ],
  }),
  component: Servicos,
});

const services = [
  {
    icon: Compass,
    title: "Projetos arquitetônicos",
    desc: "Estudo preliminar, anteprojeto e projeto executivo com foco em viabilidade e estética.",
  },
  {
    icon: Ruler,
    title: "Projetos estruturais",
    desc: "Cálculo estrutural em concreto armado, aço e fundações para todo porte de obra.",
  },
  {
    icon: Building2,
    title: "Construção civil",
    desc: "Execução completa de obras residenciais, comerciais e industriais — chave na mão.",
  },
  {
    icon: Hammer,
    title: "Reformas e ampliações",
    desc: "Reformas estruturais, retrofits e ampliações com mínimo impacto operacional.",
  },
  {
    icon: HardHat,
    title: "Obras industriais",
    desc: "Galpões, pavilhões e infraestrutura para o parque industrial do Vale do Aço.",
  },
  {
    icon: ClipboardCheck,
    title: "Gerenciamento de obras",
    desc: "Planejamento, orçamento, fiscalização e controle de qualidade.",
  },
];

function Servicos() {
  return (
    <>
      <PageHeader
        eyebrow="— 02 / Serviços"
        title="Do desenho à entrega das chaves."
        intro="Soluções integradas em engenharia. Você fala com uma equipe só, do primeiro risco à última camada de tinta."
      />
      <section className="bg-concrete/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-background p-8 transition hover:bg-ink lg:p-10"
              >
                <s.icon className="h-8 w-8 text-terracotta" strokeWidth={1.4} />
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
    </>
  );
}
