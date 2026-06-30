import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Clientes — Seno Engenharia" },
      {
        name: "description",
        content:
          "Depoimentos de clientes residenciais, comerciais e industriais atendidos pela Seno Engenharia.",
      },
      { property: "og:title", content: "Clientes — Seno Engenharia" },
      { property: "og:description", content: "O que dizem de uma obra feita pela Seno." },
    ],
  }),
  component: Clientes,
});

const testimonials = [
  {
    q: "A Seno entregou nossa fábrica três semanas antes do prazo. Em 30 anos de indústria, nunca vi obra correr tão limpa.",
    a: "Roberto Mendes",
    r: "Diretor Industrial · Vale do Aço",
  },
  {
    q: "Construíram a casa da nossa família com um cuidado que parece raro hoje. Cada detalhe foi conversado, cada prazo cumprido.",
    a: "Ana Paula Resende",
    r: "Cliente residencial · Ipatinga",
  },
  {
    q: "Profissionalismo do orçamento à última vistoria. Recomendo de olhos fechados para qualquer obra séria.",
    a: "Carlos Drummond",
    r: "Síndico · Coronel Fabriciano",
  },
];

function Clientes() {
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
        eyebrow="— 04 / Clientes"
        title="O que dizem de uma obra da Seno."
        intro="Famílias, síndicos e diretores industriais que confiaram suas obras à Seno Engenharia."
      />

      <section className="bg-muted dark:bg-zinc-900/40 py-20 text-foreground lg:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-px bg-border dark:bg-zinc-800 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col justify-between bg-card dark:bg-zinc-900 p-8 lg:p-10 transition-colors duration-300"
              >
                <Quote className="h-8 w-8 text-primary dark:text-amber-500" strokeWidth={1.2} />
                <blockquote className="mt-8 text-lg leading-relaxed text-foreground/90 dark:text-zinc-300">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-10 border-t border-border dark:border-zinc-800 pt-5">
                  <div className="font-heading text-base font-medium text-foreground dark:text-zinc-100">
                    {t.a}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground dark:text-zinc-500">
                    {t.r}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
