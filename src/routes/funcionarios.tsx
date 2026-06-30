import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Reaproveitando os assets de imagem padrão ou substitua pelos arquivos corretos de equipe
import f1 from "@/assets/project-1.jpg";
import f2 from "@/assets/project-2.jpg";
import f3 from "@/assets/project-3.jpg";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

// FIX: String da rota adicionada explicitamente para evitar o erro 404
export const Route = createFileRoute("/funcionarios")({
  head: () => ({
    meta: [
      { title: "Equipe — Seno Engenharia" },
      {
        name: "description",
        content:
          "Conheça o corpo técnico e os diretores responsáveis pela excelência operacional da Seno Engenharia no Vale do Aço.",
      },
      { property: "og:title", content: "Equipe técnica — Seno Engenharia" },
      {
        property: "og:description",
        content: "Profissionais experientes construindo o futuro da região.",
      },
    ],
  }),
  component: Funcionarios,
});

// Mock com a lista de funcionários adaptado para o seu layout com paginação
const allStaff = [
  {
    img: f1,
    name: "Sérgio Reis",
    role: "Diretor Executivo & Engenheiro Civil",
    info: "Fundador · Especialista em Estruturas",
    year: "1986",
  },
  {
    img: f2,
    name: "Cláudio Almeida",
    role: "Diretor de Engenharia",
    info: "Gerenciamento de Obras Industriais",
    year: "1998",
  },
  {
    img: f3,
    name: "Mariana Souza",
    role: "Coordenadora de Projetos",
    info: "Arquitetura & Design Executivo",
    year: "2015",
  },
  {
    img: f1,
    name: "Rodrigo Costa",
    role: "Engenheiro de Campo",
    info: "Fiscalização e Controle de Qualidade",
    year: "2018",
  },
  {
    img: f2,
    name: "Ana Beatriz Lima",
    role: "Gestora Administrativa",
    info: "Planejamento e Controladoria Geral",
    year: "2012",
  },
  {
    img: f3,
    name: "Mateus Ferreira",
    role: "Técnico em Edificações",
    info: "Desenho Técnico e Levantamentos",
    year: "2021",
  },
];

const ITEMS_PER_PAGE = 5;

function Funcionarios() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allStaff.length / ITEMS_PER_PAGE);

  // Calcula quais funcionários exibir na página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStaff = allStaff.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Container de conteúdo que limita o alinhamento junto ao cabeçalho */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12">
        {/* Logo fixa colorida inserida diretamente acima do PageHeader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-start"
        >
          <img
            src={logoImg}
            alt="Seno Engenharia Logo"
            className="h-16 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
          />
        </motion.div>
      </div>

      <PageHeader
        eyebrow="— Nossa Equipe"
        title="O capital humano por trás de cada m² construído."
        intro="Profissionais de engenharia, arquitetura e gerenciamento focados em transformar riscos no papel em estruturas definitivas."
      />

      {/* Seção principal da listagem */}
      <section className="py-16 lg:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Listagem de Funcionários com divisores discretos */}
          <div className="space-y-px bg-zinc-200 dark:bg-zinc-800">
            {currentStaff.map((f, i) => {
              const globalIndex = startIndex + i + 1;
              const formattedIndex = globalIndex < 10 ? `0${globalIndex}` : globalIndex;

              return (
                <motion.div
                  key={`${f.name}-${globalIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 items-center gap-6 bg-white dark:bg-zinc-950 py-8"
                >
                  {/* Coluna da Foto do Funcionário */}
                  <div className="col-span-12 px-4 md:col-span-5 md:px-6">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={f.img}
                        alt={`Foto de ${f.name}`}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition duration-500 transform hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Coluna do Número Identificador */}
                  <div className="col-span-12 px-4 md:col-span-1 md:px-0">
                    <div className="text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono">
                      {formattedIndex}
                    </div>
                  </div>

                  {/* Coluna do Nome e Cargo */}
                  <div className="col-span-12 px-4 md:col-span-4 md:px-0">
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl tracking-tight">
                      {f.name}
                    </h3>
                    <div className="mt-1 text-sm text-amber-700 dark:text-amber-500 font-medium">
                      {f.role}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{f.info}</div>
                  </div>

                  {/* Coluna do Ano de Admissão / Contato */}
                  <div className="col-span-12 flex items-center justify-between gap-6 px-4 md:col-span-2 md:px-6">
                    <div className="font-display text-2xl font-medium text-zinc-400 dark:text-zinc-500">
                      {f.year}
                    </div>
                    {/* FIX: Redirecionando explicitamente para a rota de contato */}
                    <Link to="/contato" aria-label={`Entrar em contato com ${f.name}`}>
                      <ArrowUpRight className="h-6 w-6 text-zinc-800 dark:text-zinc-200 transition hover:text-amber-700 dark:hover:text-amber-500 hover:translate-x-0.5 hover:-translate-y-0.5 transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Componente de Navegação / Paginação */}
          <div className="mt-16 flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              Mostrando{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {startIndex + 1}
              </span>{" "}
              a{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {Math.min(startIndex + ITEMS_PER_PAGE, allStaff.length)}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {allStaff.length}
              </span>{" "}
              colaboradores
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-40 disabled:hover:bg-transparent"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Indicadores numéricos */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`h-10 w-10 text-sm font-semibold rounded-md transition ${
                      currentPage === index + 1
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                        : "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-40 disabled:hover:bg-transparent"
                aria-label="Próxima página"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
