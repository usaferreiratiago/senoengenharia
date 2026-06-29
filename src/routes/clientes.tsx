import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { PageHeader } from "@/components/page-header";

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
    <>
      <PageHeader
        eyebrow="— 04 / Clientes"
        title="O que dizem de uma obra da Seno."
        intro="Famílias, síndicos e diretores industriais que confiaram suas obras à Seno Engenharia."
      />
      <section className="bg-muted py-20 text-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col justify-between bg-card p-8 lg:p-10"
              >
                <Quote className="h-8 w-8 text-primary" strokeWidth={1.2} />
                <blockquote className="mt-8 text-lg leading-relaxed text-foreground/90">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-10 border-t border-border pt-5">
                  <div className="font-heading text-base font-medium text-foreground">{t.a}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {t.r}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
