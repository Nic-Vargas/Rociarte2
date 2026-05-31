import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { useState } from "react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/Tetera.jpeg";
import p3 from "@/assets/DragonBall.jpeg";
import p4 from "@/assets/Groot.jpeg";
import p5 from "@/assets/Lengua2.jpeg";
import p6 from "@/assets/Legua.jpeg";
import p7 from "@/assets/Matera Simple.jpeg";
import p8 from "@/assets/Matera Simple1.jpeg";
import p9 from "@/assets/Matera Simple2.jpeg";
import p10 from "@/assets/Matera Simple3.jpeg";
import p11 from "@/assets/Matera Simple4.jpeg";
import p12 from "@/assets/Matera Simple5.jpeg";
import p13 from "@/assets/Matera Simple6.jpeg";
import p14 from "@/assets/Matera Simple7.jpeg";
import p15 from "@/assets/DragonBall2.jpeg";
import p16 from "@/assets/DragonBall3.jpeg";
import p17 from "@/assets/DragonBall4.jpeg";
import p18 from "@/assets/DragonBall5.jpeg";
import p19 from "@/assets/DragonBall6.jpeg";
import p20 from "@/assets/Starwars.jpeg";
import p21 from "@/assets/Starwars1.jpeg";
import p22 from "@/assets/Starwars2.jpeg";
import p23 from "@/assets/Starwars3.jpeg";
import p24 from "@/assets/Starwars4.jpeg";
import p25 from "@/assets/Starwars5.jpeg";
import p26 from "@/assets/Starwars6.jpeg";
import p27 from "@/assets/Starwars7.jpeg";
import p28 from "@/assets/Starwars8.jpeg";
import p29 from "@/assets/Enamorados.jpeg";
import p30 from "@/assets/Enamorados1.jpeg";
import p31 from "@/assets/Enamorados2.jpeg";
import p32 from "@/assets/Enamorados3.jpeg";
import p33 from "@/assets/Enamorados4.jpeg";
import p34 from "@/assets/Enamorados5.jpeg";
import p35 from "@/assets/Excabacion.jpeg";
import p36 from "@/assets/Faro.jpeg";
import p37 from "@/assets/Finca.jpeg";
import p38 from "@/assets/Finca1.jpeg";
import p39 from "@/assets/finca2.jpeg";
import p40 from "@/assets/finca4.jpeg";
import p41 from "@/assets/finca5.jpeg";
import p42 from "@/assets/finca6.jpeg";
import p43 from "@/assets/finca7.jpeg";
import p44 from "@/assets/Ton&Jerry.jpeg";
import p45 from "@/assets/Jardin Ada.jpeg";
import p46 from "@/assets/Jardin Ada2.jpeg";
import p47 from "@/assets/Pesebre.jpeg";
import p48 from "@/assets/Pesebre1.jpeg";
import p49 from "@/assets/MonstersINC.jpeg";
import p50 from "@/assets/MonstersINC1.jpeg";
import p51 from "@/assets/Coco.jpeg";
import p52 from "@/assets/Coco2.jpeg";
import p53 from "@/assets/Coco3.jpeg";
import p54 from "@/assets/Wall-E.jpeg";

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
  { src: p1, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p2, alt: "", cat: "Materas" },
  { src: p3, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p4, alt: "", cat: "Plantas" },
  { src: p5, alt: "", cat: "Plantas", tall: true},
  { src: p6, alt: "", cat: "Plantas" },
  { src: p7, alt: "", cat: "Materas", tall: true },
  { src: p8, alt: "", cat: "Materas"},
  { src: p9, alt: "", cat: "Materas", tall: true },
  { src: p10, alt: "", cat: "Materas"},
  { src: p11, alt: "", cat: "Materas", tall: true},
  { src: p12, alt: "", cat: "Materas" },
  { src: p13, alt: "", cat: "Materas", tall: true},
  { src: p14, alt: "", cat: "Materas" },
  { src: p15, alt: "", cat: "Pedidos especiales", tall: true},
  { src: p16, alt: "", cat: "Pedidos especiales" },
  { src: p17, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p18, alt: "", cat: "Pedidos especiales"},
  { src: p19, alt: "", cat: "Pedidos especiales" },
  { src: p20, alt: "", cat: "Pedidos especiales", tall: true},
  { src: p21, alt: "", cat: "Pedidos especiales" },
  { src: p22, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p23, alt: "", cat: "Pedidos especiales"},
  { src: p24, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p25, alt: "", cat: "Pedidos especiales"},
  { src: p26, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p27, alt: "", cat: "Pedidos especiales" },
  { src: p28, alt: "", cat: "Pedidos especiales", tall: true},
  { src: p29, alt: "", cat: "Ecosistemas" },
  { src: p30, alt: "", cat: "Ecosistemas", tall: true},
  { src: p31, alt: "", cat: "Ecosistemas" },
  { src: p32, alt: "", cat: "Ecosistemas", tall: true },
  { src: p33, alt: "", cat: "Ecosistemas"},
  { src: p34, alt: "", cat: "Ecosistemas", tall: true },
  { src: p35, alt: "", cat: "Pedidos especiales"},
  { src: p36, alt: "", cat: "Ecosistemas", tall: true },
  { src: p37, alt: "", cat: "Ecosistemas", tall: true },
  { src: p38, alt: "", cat: "Ecosistemas"},
  { src: p39, alt: "", cat: "Ecosistemas", tall: true },
  { src: p40, alt: "", cat: "Ecosistemas"},
  { src: p41, alt: "", cat: "Ecosistemas", tall: true },
  { src: p42, alt: "", cat: "Ecosistemas" },
  { src: p43, alt: "", cat: "Ecosistemas", tall: true},
  { src: p44, alt: "", cat: "Plantas" },
  { src: p45, alt: "", cat: "Pedidos especiales", tall: true},
  { src: p46, alt: "", cat: "Plantas" },
  { src: p47, alt: "", cat: "Materas", tall: true },
  { src: p48, alt: "", cat: "Plantas",},
  { src: p49, alt: "", cat: "Pedidos especiales", tall: true },
  { src: p50, alt: "", cat: "Pedidos especiales"},
  { src: p51, alt: "", cat: "Plantas", tall: true },
  { src: p52, alt: "", cat: "Materas" },
  { src: p53, alt: "", cat: "Plantas", tall: true},
  { src: p54, alt: "", cat: "Pedidos especiales"},
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
