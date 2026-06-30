import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Compass, HardHat, Hammer, ClipboardCheck, Ruler } from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando caminho relativo adequado para o Vite
import logoBg from "@/assets/senoengenharia.png";

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
    <div className="relative min-h-screen isolate">
      {/* Marca d'água em background (fixa e sutil) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-center bg-no-repeat opacity-[0.03] grayscale mix-blend-multiply"
        style={{
          backgroundImage: `url(${logoBg})`,
          backgroundSize: "40rem", // Ajuste o tamanho da marca d'água aqui se necessário
        }}
      />

      <PageHeader
        eyebrow="— 02 / Serviços"
        title="Do desenho à entrega das chaves."
        intro="Soluções integradas em engenharia. Você fala com uma equipe só, do primeiro risco à última camada de tinta."
      />

      {/* Seção com fundo cinza claro sutil transparente para revelar a marca d'água */}
      <section className="bg-zinc-50/80 py-20 lg:py-28 backdrop-blur-[1px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Grid com bordas finas e nítidas para o modo claro */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-zinc-200 bg-zinc-200/60 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white/90 p-8 transition-all duration-300 hover:shadow-md hover:z-10 lg:p-10 backdrop-blur-sm"
              >
                {/* Ícone com destaque terracota/laranja sofisticado */}
                <s.icon
                  className="h-8 w-8 text-amber-700 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.4}
                />

                {/* Título bem visível em grafite escuro */}
                <h3 className="mt-8 font-display text-xl font-semibold text-zinc-900">{s.title}</h3>

                {/* Descrição em cinza intermediário com excelente leitura */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.desc}</p>

                {/* Numeração em fonte mono espaçada e tom sutil */}
                <div className="mt-8 text-xs tabular-nums tracking-widest text-zinc-400 font-mono">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
