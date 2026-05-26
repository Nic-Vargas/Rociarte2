import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { useState } from "react";
import customImg from "@/assets/custom.jpg";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/personalizados")({
  head: () => ({
    meta: [
      { title: "Pedidos a medida — Rociarte" },
      { name: "description", content: "Diseña tu matera única para cumpleaños, aniversarios, regalos y eventos especiales." },
    ],
  }),
  component: Custom,
});

const schema = z.object({
  name: z.string().trim().min(2, "Tu nombre").max(80),
  occasion: z.string().trim().min(2, "Ocasión").max(80),
  style: z.string().trim().min(2, "Estilo").max(120),
  colors: z.string().trim().min(2, "Colores").max(120),
  message: z.string().trim().max(500).optional(),
});

function Custom() {
  const [form, setForm] = useState({ name: "", occasion: "", style: "", colors: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0]?.message ?? "Revisa los campos");
      return;
    }
    toast.success("¡Recibimos tu solicitud! Te contactaremos por WhatsApp.");
    setForm({ name: "", occasion: "", style: "", colors: "", message: "" });
  }

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="watercolor-blob h-72 w-72 -right-10 top-20 bg-[color:var(--terracotta)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-[0.2em] text-green-dark">Pedidos a medida</div>
            <h1 className="font-display text-5xl text-green-dark md:text-6xl">
              Una matera <span className="italic text-accent">tan única</span> como tu historia
            </h1>
            <p className="mt-5 text-foreground/75">
              Pintamos diseños únicos para cumpleaños, aniversarios, regalos, decoraciones y eventos especiales.
              Cuéntanos tu idea y la haremos realidad pincelada a pincelada.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-warm)]">
            <img src={customImg} alt="Matera personalizada con flores" width={1200} height={900} loading="lazy" className="w-full" />
          </div>
        </div>
      </section>

      <Section eyebrow="Cuéntanos tu idea" title="Solicita tu pieza única">
        <form onSubmit={submit} className="mx-auto max-w-2xl space-y-5 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-paper)]">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input label="Nombre" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Input label="Ocasión" value={form.occasion} onChange={(v) => setForm({ ...form, occasion: v })} placeholder="Cumpleaños, regalo..." />
            <Input label="Estilo preferido" value={form.style} onChange={(v) => setForm({ ...form, style: v })} placeholder="Floral, minimalista, frase..." />
            <Input label="Colores" value={form.colors} onChange={(v) => setForm({ ...form, colors: v })} placeholder="Verde, terracota..." />
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Mensaje o detalles</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              maxLength={500}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--green-dark)]"
              placeholder="Cuéntanos más sobre tu idea..."
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-green-dark py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.01] transition-transform">
            Enviar solicitud
          </button>
        </form>
      </Section>
    </Layout>
  );
}

function Input({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={120}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--green-dark)]"
      />
    </div>
  );
}
