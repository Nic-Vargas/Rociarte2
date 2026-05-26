import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { products, categories } from "@/data/products";
import { useMemo, useState } from "react";
import { ShoppingBag, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Rociarte" },
      { name: "description", content: "Materas pintadas a mano, ecosistemas vivos y plantas para tu hogar." },
    ],
  }),
  component: Products,
});

function Products() {
  const [size, setSize] = useState<string>("");
  const [price, setPrice] = useState<number>(150000);
  const [plant, setPlant] = useState<string>("");
  const [loc, setLoc] = useState<string>("");
  const [cat, setCat] = useState<string>("");

  const plantTypes = useMemo(() => Array.from(new Set(products.map((p) => p.plant))), []);

  const filtered = products.filter((p) =>
    (!size || p.size === size) &&
    p.price <= price &&
    (!plant || p.plant === plant) &&
    (!loc || p.location === loc) &&
    (!cat || p.category === cat)
  );

  return (
    <Layout>
      <Section eyebrow="Tienda" title="Productos hechos a mano" subtitle="Explora nuestras materas, ecosistemas vivos y plantas seleccionadas con amor.">
        {/* Category chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setCat("")}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${cat === "" ? "border-green-dark bg-green-dark text-primary-foreground" : "border-border bg-card hover:bg-muted"}`}
          >Todos</button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${cat === c ? "border-green-dark bg-green-dark text-primary-foreground" : "border-border bg-card hover:bg-muted"}`}
            >{c}</button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Filters */}
          <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-paper)]">
            <h3 className="mb-4 font-display text-lg text-green-dark">Filtros</h3>

            <Field label="Tamaño">
              <Select value={size} onChange={setSize} options={["", "Pequeña", "Mediana", "Grande"]} labels={["Todos", "Pequeña", "Mediana", "Grande"]} />
            </Field>

            <Field label={`Precio máx: $${price.toLocaleString("es-CO")}`}>
              <input type="range" min={30000} max={150000} step={5000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-[color:var(--green-dark)]" />
            </Field>

            <Field label="Tipo de planta">
              <Select value={plant} onChange={setPlant} options={["", ...plantTypes]} labels={["Todas", ...plantTypes]} />
            </Field>

            <Field label="Ubicación">
              <Select value={loc} onChange={setLoc} options={["", "Interior", "Exterior", "Ambos"]} labels={["Todas", "Interior", "Exterior", "Interior/Exterior"]} />
            </Field>

            <button onClick={() => { setSize(""); setPrice(150000); setPlant(""); setLoc(""); setCat(""); }} className="mt-4 w-full rounded-full border border-border py-2 text-sm hover:bg-muted">
              Limpiar
            </button>
          </aside>

          {/* Grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
                No encontramos productos con esos filtros.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <article key={p.id} className="card-hover flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-paper)]">
                    <div className="aspect-square overflow-hidden">
                      <img src={p.image} alt={p.name} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="text-[10px] uppercase tracking-wider text-accent">{p.category}</div>
                      <h3 className="mt-1 font-display text-xl text-green-dark">{p.name}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                        <span className="rounded-full bg-muted px-2 py-0.5">{p.size}</span>
                        <span className="rounded-full bg-muted px-2 py-0.5">{p.plant}</span>
                        <span className="rounded-full bg-muted px-2 py-0.5">{p.location}</span>
                      </div>
                      <div className="mt-4 flex items-end justify-between">
                        <span className="font-display text-xl text-green-dark">${p.price.toLocaleString("es-CO")}</span>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-green-dark px-3 py-2 text-xs font-medium text-primary-foreground hover:scale-[1.02] transition-transform">
                          <ShoppingBag className="h-3.5 w-3.5" /> Agregar
                        </button>
                        <Link to="/contacto" className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-xs hover:bg-muted">
                          <MessageCircle className="h-3.5 w-3.5" /> Contactar
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

function Select({ value, onChange, options, labels }: { value: string; onChange: (v: string) => void; options: string[]; labels: string[] }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--green-dark)]">
      {options.map((o, i) => <option key={o + i} value={o}>{labels[i]}</option>)}
    </select>
  );
}
