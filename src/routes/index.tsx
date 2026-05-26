import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Leaf } from "@/components/Leaf";
import { products } from "@/data/products";
import { Heart, Sprout, Brush, Tag, Truck, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rociarte — Arte y naturaleza para expresar sentimientos" },
      { name: "description", content: "Materas pintadas a mano y ecosistemas vivos creados con amor para cada momento especial." },
    ],
  }),
  component: Home,
});

const reasons = [
  { icon: Heart, title: "Hecho con amor", text: "Cada pieza nace de horas de dedicación artesanal." },
  { icon: Sprout, title: "Plantas 100% naturales", text: "Seleccionamos especies sanas, listas para florecer en tu hogar." },
  { icon: Brush, title: "Diseños personalizados", text: "Pinta con nosotros tu nombre, frase o color favorito." },
  { icon: Tag, title: "Precios flexibles", text: "Opciones para cada momento y presupuesto." },
  { icon: Truck, title: "Entregas a domicilio", text: "Llevamos tu creación hasta la puerta de tu casa." },
];

const testimonials = [
  { name: "María C.", text: "Mi matera personalizada llegó preciosa. Se nota el cariño en cada detalle.", rating: 5 },
  { name: "Andrés P.", text: "El ecosistema vivo que regalé fue todo un éxito. ¡Mil gracias Rociarte!", rating: 5 },
  { name: "Laura M.", text: "Calidad, arte y plantas hermosas. Volveré a comprar sin duda.", rating: 5 },
];

const faqs = [
  { q: "¿Puedo pedir un diseño personalizado?", a: "¡Sí! Pintamos a mano nombres, frases, colores y motivos especiales para cada ocasión." },
  { q: "¿Hacen entregas a domicilio?", a: "Sí, realizamos entregas en nuestras zonas de cobertura. Escríbenos por WhatsApp para coordinar." },
  { q: "¿Qué plantas funcionan en interior?", a: "Pothos, suculentas, cactus, helechos y zamioculcas son ideales para espacios interiores." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos Nequi, Daviplata y pago por QR compartido por WhatsApp." },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="watercolor-blob h-72 w-72 -left-20 top-10 bg-[color:var(--green-light)]" />
        <div className="watercolor-blob h-80 w-80 right-0 top-40 bg-[color:var(--terracotta)] opacity-30" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 md:grid-cols-2 md:items-center md:pb-24 md:pt-20">
          <div className="relative animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-green-dark backdrop-blur">
              <Leaf className="h-3 w-3 text-accent" />
              Hecho a mano en Colombia
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-green-dark md:text-7xl">
              Arte y naturaleza<br />
              <span className="italic text-accent">para expresar</span> sentimientos
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/75">
              Materas pintadas a mano y ecosistemas vivos creados con amor para
              cada momento especial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/productos"
                className="group inline-flex items-center gap-2 rounded-full bg-green-dark px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
              >
                Explora nuestras creaciones
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-green-dark/30 bg-background/60 px-7 py-3.5 text-sm font-medium text-green-dark backdrop-blur hover:bg-muted"
              >
                Contáctanos
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div><span className="block font-display text-2xl text-green-dark">+500</span>creaciones</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="block font-display text-2xl text-green-dark">100%</span>artesanal</div>
              <div className="h-8 w-px bg-border" />
              <div><span className="block font-display text-2xl text-green-dark">★ 5.0</span>reseñas</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-[color:var(--green-light)] opacity-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[var(--shadow-warm)]">
              <img src={heroImg} alt="Materas pintadas a mano con plantas" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-soft)] md:block">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-accent" fill="currentColor" />
                <div className="text-sm">
                  <div className="font-semibold text-green-dark">Pintado a mano</div>
                  <div className="text-xs text-muted-foreground">con dedicación</div>
                </div>
              </div>
            </div>
            <Leaf className="absolute -right-3 top-10 h-16 w-16 text-secondary animate-sway" />
          </div>
        </div>
      </section>

      {/* About preview */}
      <Section eyebrow="Quiénes somos">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-paper)]">
            <img src={aboutImg} alt="Plantas y materas en estantes" width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div>
            <h2 className="font-display text-4xl text-green-dark md:text-5xl">
              Pequeños jardines<br /><span className="italic text-accent">con alma propia</span>
            </h2>
            <p className="mt-5 text-foreground/75">
              En Rociarte nace cada matera como un poema visual: pincelada a pincelada
              creamos pequeños mundos de color y vida para acompañar tus emociones,
              regalos y rincones favoritos del hogar.
            </p>
            <Link to="/nosotros" className="mt-6 inline-flex items-center gap-2 text-green-dark hover:text-accent">
              Conoce nuestra historia <span>→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Products */}
      <Section eyebrow="Creaciones destacadas" title="Plantas que cuentan historias" center>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <article key={p.id} className="card-hover overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-paper)]">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="mb-1 text-xs uppercase tracking-wider text-accent">{p.category}</div>
                <h3 className="font-display text-2xl text-green-dark">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-green-dark">${p.price.toLocaleString("es-CO")}</span>
                  <Link to="/productos" className="text-sm text-accent hover:underline">Ver más →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/productos" className="inline-flex items-center gap-2 rounded-full bg-green-dark px-7 py-3 text-sm font-medium text-primary-foreground hover:scale-105 transition-transform">
            Ver todos los productos →
          </Link>
        </div>
      </Section>

      {/* Why us */}
      <section className="relative overflow-hidden bg-[color:var(--green-light)]/40 py-24">
        <div className="watercolor-blob h-72 w-72 -right-10 -top-10 bg-[color:var(--terracotta)]" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-green-dark">¿Por qué elegirnos?</div>
            <h2 className="font-display text-4xl text-green-dark md:text-5xl">Detalles que hacen la diferencia</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((r, i) => (
              <div key={r.title} className="group rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]" style={{ animation: `fade-up 0.6s ${i * 0.08}s both` }}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-green-dark group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-green-dark">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Section eyebrow="Testimonios" title="Historias que florecen" center>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-paper)] card-hover">
              <div className="mb-3 flex gap-0.5 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 italic">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent font-display text-white">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-medium text-green-dark">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Cliente Rociarte</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
        </div>
      </Section>
    </Layout>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-6 py-5 text-left">
        <span className="font-display text-lg text-green-dark">{q}</span>
        <ChevronDown className={`h-5 w-5 text-accent transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 text-sm text-muted-foreground animate-fade-in">{a}</div>}
    </div>
  );
}
