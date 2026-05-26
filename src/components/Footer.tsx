import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.96_0.02_85)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-justify text-sm text-muted-foreground">
            Materas pintadas a mano y ecosistemas vivos creados con amor, para llenar tu hogar de
            naturaleza y arte.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/rociartevargarden2/" aria-label="Instagram" className="rounded-full bg-muted p-2 text-green-dark transition-transform hover:scale-110">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-lg text-green-dark">Enlaces</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/nosotros" className="hover:text-accent">Nosotros</Link></li>
            <li><Link to="/productos" className="hover:text-accent">Productos</Link></li>
            <li><Link to="/galeria" className="hover:text-accent">Galería</Link></li>
            <li><Link to="/personalizados" className="hover:text-accent">A medida</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-lg text-green-dark">Contacto</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> +57 317 367 0450</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-accent" /> hola@rociarte.co</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Colombia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Rociarte. Hecho a mano con amor.</p>
          <p>Arte y naturaleza juntas para expresar sentimientos.</p>
        </div>
      </div>
    </footer>
  );
}
