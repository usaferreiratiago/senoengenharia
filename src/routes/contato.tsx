import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Contato — Seno Engenharia" },
      {
        name: "description",
        content:
          "Solicite orçamento ou tire dúvidas com a equipe da Seno Engenharia em Coronel Fabriciano/MG.",
      },
      { property: "og:title", content: "Fale com a Seno Engenharia" },
      { property: "og:description", content: "Solicite orçamento ou tire dúvidas." },
    ],
  }),
  component: Contato,
});

type FormValues = { nome: string; email: string; telefone: string; mensagem: string };

function Contato() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const body = encodeURIComponent(
      `Nome: ${data.nome}\nEmail: ${data.email}\nTelefone: ${data.telefone}\n\nMENSAGEM:\n${data.mensagem}`,
    );
    window.location.href = `mailto:contato@senoengenharia.com.br?subject=Contato%20pelo%20site&body=${body}`;
    reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="— 05 / Contato"
        title="Tem um projeto em mente? Vamos conversar."
        intro="Conte um pouco sobre sua obra. Respondemos em até um dia útil."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 lg:px-10">
          {/* Informações de Contato e Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 space-y-8 lg:col-span-5"
          >
            <div className="space-y-6">
              <a
                href="tel:+5531000000000"
                className="group flex items-start gap-4 border-b border-border pb-6"
              >
                <Phone className="mt-1 h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone">Telefone</div>
                  <div className="mt-1 font-display text-xl text-ink transition group-hover:text-terracotta">
                    (31) 0000-0000
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@senoengenharia.com.br"
                className="group flex items-start gap-4 border-b border-border pb-6"
              >
                <Mail className="mt-1 h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone">E-mail</div>
                  <div className="mt-1 font-display text-xl text-ink transition group-hover:text-terracotta">
                    contato@senoengenharia.com.br
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-terracotta" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone">Endereço</div>
                  <div className="mt-1 font-display text-xl leading-snug text-ink">
                    Coronel Fabriciano
                    <br />
                    Minas Gerais — Brasil
                  </div>
                  <div className="mt-2 text-sm text-foreground/60">CNPJ 20.853.842/0001-01</div>
                </div>
              </div>
            </div>

            <div className="aspect-4/3 w-full overflow-hidden border border-border">
              {/* Ajustado: Removida a classe 'grayscale' para exibir o mapa com suas cores originais */}
              <iframe
                title="Localização Seno Engenharia"
                src="https://www.google.com/maps?q=Coronel+Fabriciano,+MG&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-12 space-y-6 border border-border bg-card p-8 lg:col-span-7 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Nome" error={formState.errors.nome?.message}>
                <input
                  type="text"
                  {...register("nome", { required: "Informe seu nome" })}
                  className="field"
                />
              </Field>
              <Field label="Telefone" error={formState.errors.telefone?.message}>
                <input
                  type="tel"
                  {...register("telefone", { required: "Informe um telefone" })}
                  className="field"
                />
              </Field>
            </div>

            <Field label="E-mail" error={formState.errors.email?.message}>
              <input
                type="email"
                {...register("email", {
                  required: "Informe seu e-mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido",
                  },
                })}
                className="field"
              />
            </Field>

            <Field label="Sobre seu projeto" error={formState.errors.mensagem?.message}>
              <textarea
                rows={6}
                {...register("mensagem", { required: "Conte um pouco do que precisa" })}
                className="field resize-none"
              />
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
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-stone">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
