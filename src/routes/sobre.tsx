import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-blueprint.jpg";
import { PageHeader } from "@/components/page-header";

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
    <>
      <PageHeader
        eyebrow="— 01 / Sobre"
        title="Engenharia construída por quem sabe o peso de cada viga."
        intro="Fundada em 1986 em Coronel Fabriciano, atendemos famílias, indústrias e comércios do Vale do Aço com o mesmo critério técnico do primeiro dia."
      />
      {/* Garantido o fundo adaptável (bg-background) e texto base (text-foreground) */}
      <section className="bg-background text-foreground py-20 lg:py-28">
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
              className="aspect-4/3 w-full object-cover rounded-sm shadow-sm"
            />
          </motion.div>
          <div className="col-span-12 space-y-6 lg:col-span-6">
            {/* Ajustado o contraste do text-foreground/80 para garantir leitura perfeita no modo light */}
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              A{" "}
              <strong className="text-ink font-semibold dark:text-white">
                Seno Engenharia Projetos Construções LTDA
              </strong>{" "}
              nasceu em 1986 com uma convicção simples: obra boa é a que atravessa gerações. Desde
              então, construímos relações tão duradouras quanto nossas estruturas.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              Nossa equipe técnica acompanha cada etapa — do estudo preliminar à entrega das chaves
              — com o rigor de quem entende que cada decisão de projeto reverbera por décadas.
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
                  className="flex items-start gap-3 text-sm text-foreground/90 font-medium"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
