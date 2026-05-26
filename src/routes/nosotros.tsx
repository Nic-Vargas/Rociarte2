import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import aboutImg from "@/assets/about.jpg";
import processImg from "@/assets/process.jpg";
import { Heart, Sprout, Award, Sparkles, HandHeart } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Rociarte" },
      { name: "description", content: "Conoce la historia, misión y valores detrás de Rociarte." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, t: "Creatividad", d: "Cada pieza es única y nace de la inspiración." },
  { icon: Heart, t: "Amor", d: "Pintamos con dedicación y cariño." },
  { icon: Sprout, t: "Naturaleza", d: "Respeto profundo por las plantas que cuidamos." },
  { icon: Award, t: "Calidad", d: "Materiales nobles y acabados artesanales." },
  { icon: HandHeart, t: "Compromiso", d: "Cumplimos cada pedido con esmero." },
];

function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden pt-16 pb-10">
        <div className="watercolor-blob h-72 w-72 -left-20 top-10 bg-[color:var(--green-light)]" />
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-[0.2em] text-green-dark">Nuestra historia</div>
          <h1 className="font-display text-5xl text-green-dark md:text-6xl">
            Pequeños mundos vivos<br /><span className="italic text-accent">creados con las manos</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            Rociarte nació del amor por las plantas y el deseo de regalar emociones a través
            del arte. Hoy somos un pequeño taller donde cada matera se pinta con paciencia,
            calma y muchas hojas dibujadas.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-paper)]">
            <img src={aboutImg} alt="Colección de materas" width={1200} height={900} loading="lazy" className="w-full" />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl text-green-dark">Nuestra misión</h3>
              <p className="mt-2 text-foreground/75">Crear piezas únicas que conecten a las personas con la naturaleza y con quienes aman, a través del arte hecho a mano.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-green-dark">Nuestra visión</h3>
              <p className="mt-2 text-foreground/75">Llevar el arte y la vida vegetal a cada hogar de Colombia, transformando rincones cotidianos en pequeños jardines llenos de sentido.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Proceso creativo" title="Del barro al jardín" >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 space-y-5 text-foreground/75">
            <p>Seleccionamos cada matera, la lijamos, imprimamos y luego damos vida a sus motivos con pinceles finos y acuarela acrílica resistente.</p>
            <p>Después escogemos la planta perfecta para acompañarla: una suculenta tímida, un pothos juguetón o un musgo soñador.</p>
            <p>Al final, sellamos cada pieza con amor y se la llevamos a quien la espera.</p>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-warm)]">
            <img src={processImg} alt="Proceso de pintado" width={1200} height={900} loading="lazy" className="w-full" />
          </div>
        </div>
      </Section>

      <Section eyebrow="Nuestros valores" title="Lo que nos mueve" center>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.t} className="rounded-3xl border border-border bg-card p-6 text-center card-hover">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-green-dark">
                <v.icon className="h-5 w-5" />
              </div>
              <h4 className="font-display text-lg text-green-dark">{v.t}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
