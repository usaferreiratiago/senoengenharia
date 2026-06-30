import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-blueprint.jpg";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Sobre — Seno Engenharia" },
      {
        name: "description",
        content:
          "Há 40 anos a Seno Engenharia projeta e constrói no Vale do Aço, em Coronel Fabriciano/MG.",
      },
      { property: "og:title", content: "Sobre a Seno Engenharia" },
      { property: "og:description", content: "40 anos de engenharia honesta no Vale do Aço." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
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
        eyebrow="— 01 / Sobre"
        title="Engenharia construída por quem sabe o peso de cada viga."
        intro="Fundada em 1986 em Coronel Fabriciano, atendemos famílias, indústrias e comércios do Vale do Aço com o mesmo critério técnico do primeiro dia."
      />

      {/* Seção com suporte completo a cores adaptáveis */}
      <section className="bg-white dark:bg-zinc-950 text-foreground py-20 lg:py-28 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-6"
          >
            <img
              src={aboutImg}
              alt="Equipe Seno revisando projetos"
              loading="lazy"
              className="aspect-4/3 w-full object-cover rounded-sm shadow-sm dark:opacity-90"
            />
          </motion.div>
          <div className="col-span-12 space-y-6 lg:col-span-6">
            <p className="text-base leading-relaxed text-foreground/85 dark:text-zinc-300 md:text-lg">
              A{" "}
              <strong className="text-zinc-900 font-semibold dark:text-white">
                Seno Engenharia Projetos Construções LTDA
              </strong>{" "}
              nasceu em 1986 com uma convicção simples: obra boa é a que atravessa gerações. Desde
              então, construímos relações tão duradouras quanto nossas estruturas.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 dark:text-zinc-400">
              Nossa equipe técnica acompanha cada etapa — do estudo preliminar à entrega das chaves
              — com o rigor de quem entende que cada decision de projeto reverbera por décadas.
            </p>
            <ul className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
              {[
                "CNPJ 20.853.842/0001-01",
                "Sede em Coronel Fabriciano/MG",
                "Equipe técnica própria",
                "Acompanhamento total da obra",
                "Atuação em todo Vale do Aço",
                "Mais de 200 obras entregues",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-foreground/90 dark:text-zinc-300 font-medium"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracotta dark:text-amber-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
