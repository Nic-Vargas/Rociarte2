import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/galeria", label: "Galería" },
  { to: "/personalizados", label: "A medida" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="transition-transform hover:scale-[1.02]">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-green-dark"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm text-green-dark bg-muted font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="ml-2 rounded-full bg-green-dark px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            Pedir ahora
          </Link>
        </nav>
        <button
          className="rounded-full p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col p-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
