import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import p1 from "@/assets/product-1.jpg";
import p3 from "@/assets/product-3.jpg";
import p5 from "@/assets/product-5.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Rociarte" },
      { name: "description", content: "Colección visual de materas, plantas y ecosistemas creados a mano." },
    ],
  }),
  component: Gallery,
});

type Cat = "Todos" | "Materas" | "Plantas" | "Ecosistemas" | "Pedidos especiales";

const items: { src: string; alt: string; cat: Exclude<Cat, "Todos">; tall?: boolean }[] = [
  { src: g1, alt: "Helecho en matera", cat: "Plantas", tall: true },
  { src: g2, alt: "Detalle pintado", cat: "Materas" },
  { src: g3, alt: "Terrario", cat: "Ecosistemas" },
  { src: p1, alt: "Suculenta", cat: "Materas" },
  { src: g4, alt: "Regalo especial", cat: "Pedidos especiales", tall: true },
  { src: g5, alt: "Hierbas", cat: "Plantas" },
  { src: p3, alt: "Personalizada", cat: "Materas" },
  { src: g6, alt: "Hoja monstera", cat: "Plantas", tall: true },
  { src: p5, alt: "Macramé", cat: "Pedidos especiales" },
];

function Gallery() {
  const [cat, setCat] = useState<Cat>("Todos");
  const filtered = cat === "Todos" ? items : items.filter((i) => i.cat === cat);
  const cats: Cat[] = ["Todos", "Materas", "Plantas", "Ecosistemas", "Pedidos especiales"];

  return (
    <Layout>
      <Section eyebrow="Galería" title="Un jardín hecho a mano" subtitle="Explora nuestras creaciones y déjate inspirar.">
        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${cat === c ? "border-green-dark bg-green-dark text-primary-foreground" : "border-border bg-card hover:bg-muted"}`}
            >{c}</button>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((it, i) => (
            <figure key={i} className="group relative break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-paper)]">
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${it.tall ? "aspect-[3/4]" : "aspect-square"}`}
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[color:var(--green-light)]">{it.cat}</div>
                  <div className="font-display text-lg text-white">{it.alt}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
