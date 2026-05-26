import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Smartphone, QrCode, Truck, MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Rociarte" },
      { name: "description", content: "Escríbenos para pedidos personalizados, pagos y entregas." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email(),
  message: z.string().trim().min(5).max(800),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error("Por favor completa los campos correctamente");
      return;
    }
    toast.success("¡Mensaje enviado! Te responderemos pronto.");
    setForm({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <Layout>
      <Section eyebrow="Contáctanos" title="Hablemos sobre tu próxima creación" subtitle="Estamos aquí para resolver tus dudas y diseñar contigo.">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <form onSubmit={submit} className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-paper)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Teléfono" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={800}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--green-dark)]"
              />
            </div>
            <button type="submit" className="w-full rounded-full bg-green-dark py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:scale-[1.01] transition-transform">
              Enviar mensaje
            </button>
          </form>

          <div className="space-y-5">
            <InfoCard icon={MessageCircle} title="WhatsApp directo" text="Escríbenos para coordinar tus pedidos personalizados. Respondemos rápido y con cariño.">
              <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-full bg-green-dark px-5 py-2 text-xs font-medium text-primary-foreground">Abrir WhatsApp →</a>
            </InfoCard>

            <InfoCard icon={Smartphone} title="Métodos de pago">
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Nequi</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Daviplata</li>
                <li className="flex items-center gap-2"><QrCode className="h-3.5 w-3.5 text-accent" /> Pago por QR (compartido en privado por WhatsApp)</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Truck} title="Envíos y entregas" text="Envío gratis en compras superiores a $120.000. Entregas en ciudad y municipios cercanos.">
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" /> Cobertura local — consulta tu zona
              </div>
            </InfoCard>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} maxLength={120} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--green-dark)]" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, children }: { icon: React.ComponentType<{ className?: string }>; title: string; text?: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-paper)] card-hover">
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-muted text-green-dark">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl text-green-dark">{title}</h3>
      {text && <p className="mt-1 text-sm text-muted-foreground">{text}</p>}
      {children}
    </div>
  );
}
