import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Obras — Seno Engenharia" },
      {
        name: "description",
        content:
          "Portfólio de obras residenciais, comerciais e industriais entregues pela Seno Engenharia no Vale do Aço.",
      },
      { property: "og:title", content: "Obras — Seno Engenharia" },
      {
        property: "og:description",
        content: "Portfólio que se mede em metros quadrados e décadas.",
      },
    ],
  }),
  component: Obras,
});

const projects = [
  {
    img: p1,
    title: "Residencial Jardim das Acácias",
    type: "Residencial · Coronel Fabriciano",
    year: "2024",
  },
  { img: p2, title: "Edifício Comercial Centro", type: "Comercial · Ipatinga", year: "2023" },
  { img: p3, title: "Galpão Industrial Vale do Aço", type: "Industrial · Timóteo", year: "2022" },
];

function Obras() {
  return (
    <>
      <PageHeader
        eyebrow="— 03 / Obras"
        title="Um portfólio que se mede em metros quadrados e décadas."
        intro="Uma seleção recente. Cada obra carrega o mesmo cuidado técnico, do projeto à última vistoria."
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-px bg-border">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-12 items-center gap-6 bg-background py-8"
              >
                <div className="col-span-12 px-4 md:col-span-5 md:px-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                  />
                </div>
                <div className="col-span-12 px-4 md:col-span-1 md:px-0">
                  <div className="text-xs tabular-nums tracking-widest text-stone">0{i + 1}</div>
                </div>
                <div className="col-span-12 px-4 md:col-span-4 md:px-0">
                  <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm text-foreground/60">{p.type}</div>
                </div>
                <div className="col-span-12 flex items-center justify-between gap-6 px-4 md:col-span-2 md:px-6">
                  <div className="font-display text-2xl text-stone">{p.year}</div>
                  <Link to="/contato" aria-label="Falar sobre obra similar">
                    <ArrowUpRight className="h-6 w-6 text-ink transition hover:text-terracotta" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
