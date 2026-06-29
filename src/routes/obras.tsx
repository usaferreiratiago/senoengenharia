import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as ContatoRoute } from "./contato";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
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

// Mock expandido com 20 obras para habilitar a navegação/paginação
const allProjects = [
  {
    img: p1,
    title: "Residencial Jardim das Acacia 1",
    type: "Residencial · Coronel Fabriciano",
    year: "2026",
  },
  { img: p2, title: "Edifício Comercial Centro", type: "Comercial · Ipatinga", year: "2026" },
  { img: p3, title: "Galpão Industrial Vale do Aço", type: "Industrial · Timóteo", year: "2025" },
  { img: p1, title: "Residencial Horto Classic", type: "Residencial · Ipatinga", year: "2025" },
  {
    img: p2,
    title: "Centro Logístico Norte",
    type: "Industrial · Santana do Paraíso",
    year: "2025",
  },
  {
    img: p3,
    title: "Edifício Prime Offices",
    type: "Comercial · Coronel Fabriciano",
    year: "2025",
  },
  { img: p1, title: "Condomínio Alphaville Vale", type: "Residencial · Timóteo", year: "2024" },
  { img: p2, title: "Clínica Integrada Ipatinga", type: "Comercial · Ipatinga", year: "2024" },
  { img: p3, title: "Expansão Industrial Aperam", type: "Industrial · Timóteo", year: "2024" },
  { img: p1, title: "Vivendas do Lago", type: "Residencial · Coronel Fabriciano", year: "2024" },
  { img: p2, title: "Supermercado DuVale", type: "Comercial · Santana do Paraíso", year: "2023" },
  {
    img: p3,
    title: "Sede Administrativa Cenibra",
    type: "Industrial · Belo Oriente",
    year: "2023",
  },
  { img: p1, title: "Residencial Bela Vista", type: "Residencial · Ipatinga", year: "2023" },
  { img: p2, title: "Shopping Vale Corporate", type: "Comercial · Ipatinga", year: "2023" },
  {
    img: p3,
    title: "Galpão Metalúrgica Fabriciano",
    type: "Industrial · Coronel Fabriciano",
    year: "2022",
  },
  { img: p1, title: "Residencial Bromélias", type: "Residencial · Timóteo", year: "2022" },
  {
    img: p2,
    title: "Centro Médico Fabriciano",
    type: "Comercial · Coronel Fabriciano",
    year: "2022",
  },
  {
    img: p3,
    title: "Usina Fotovoltaica Paraíso",
    type: "Industrial · Santana do Paraíso",
    year: "2021",
  },
  { img: p1, title: "Mansão Belvedere", type: "Residencial · Ipatinga", year: "2021" },
  { img: p2, title: "Hotel Premium Vale", type: "Comercial · Timóteo", year: "2021" },
];

const ITEMS_PER_PAGE = 5;

function Obras() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  // Calcula quais projetos exibir na página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <PageHeader
        eyebrow="— 03 / Obras"
        title="Um portfólio que se mede em metros quadrados e décadas."
        intro="Uma seleção de nossa história recente. Cada obra carrega o mesmo cuidado técnico, do projeto à última vistoria."
      />

      {/* Forçado fundo branco (bg-white) para o Modo Light */}
      <section className="py-16 lg:py-24 bg-white text-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Listagem de Obras com divisor sutil */}
          <div className="space-y-px bg-zinc-200">
            {currentProjects.map((p, i) => {
              // Calcula o índice global real do item (ex: 01, 02... até 20)
              const globalIndex = startIndex + i + 1;
              const formattedIndex = globalIndex < 10 ? `0${globalIndex}` : globalIndex;

              return (
                <motion.div
                  key={`${p.title}-${globalIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 items-center gap-6 bg-white py-8"
                >
                  {/* Coluna da Imagem */}
                  <div className="col-span-12 px-4 md:col-span-5 md:px-6">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition duration-500 transform hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Coluna do Número */}
                  <div className="col-span-12 px-4 md:col-span-1 md:px-0">
                    <div className="text-xs tabular-nums tracking-widest text-zinc-400 font-mono">
                      {formattedIndex}
                    </div>
                  </div>

                  {/* Coluna do Título e Tipo */}
                  <div className="col-span-12 px-4 md:col-span-4 md:px-0">
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 md:text-3xl tracking-tight">
                      {p.title}
                    </h3>
                    <div className="mt-2 text-sm text-zinc-500 font-medium">{p.type}</div>
                  </div>

                  {/* Coluna do Ano e Link */}
                  <div className="col-span-12 flex items-center justify-between gap-6 px-4 md:col-span-2 md:px-6">
                    <div className="font-display text-2xl font-medium text-zinc-400">{p.year}</div>
                    {/* Corrigido para usar o componente Link nativo do TanStack Router */}
                    <Link to=".." aria-label="Falar sobre obra similar">
                      <ArrowUpRight className="h-6 w-6 text-zinc-800 transition hover:text-amber-700 hover:translate-x-0.5 hover:-translate-y-0.5 transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Componente de Navegação / Paginação */}
          <div className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-6">
            <div className="text-sm text-zinc-500 font-medium">
              Mostrando <span className="font-semibold text-zinc-900">{startIndex + 1}</span> a{" "}
              <span className="font-semibold text-zinc-900">
                {Math.min(startIndex + ITEMS_PER_PAGE, allProjects.length)}
              </span>{" "}
              de <span className="font-semibold text-zinc-900">{allProjects.length}</span> obras
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-40 disabled:hover:bg-white"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Indicadores numéricos de página */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`h-10 w-10 text-sm font-semibold rounded-md transition ${
                      currentPage === index + 1
                        ? "bg-zinc-900 text-white"
                        : "border border-zinc-300 text-zinc-600 hover:bg-zinc-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 text-zinc-600 transition hover:bg-zinc-50 disabled:opacity-40 disabled:hover:bg-white"
                aria-label="Próxima página"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
