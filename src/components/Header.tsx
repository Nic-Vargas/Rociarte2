import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const leftNav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/galeria", label: "Galería" },
] as const;

const rightNav = [
  { to: "/personalizados", label: "A medida" },
  { to: "/contacto", label: "Contacto" },
] as const;

const mobileNav = [...leftNav, ...rightNav] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex min-h-36 max-w-7xl items-center justify-between px-5 py-6">
        <nav className="hidden items-center gap-1 md:flex">
          {leftNav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-green-dark"
              activeProps={{
                className:
                  "rounded-full px-4 py-2 text-sm text-green-dark bg-muted font-medium",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-[1.02]"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {rightNav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-green-dark"
              activeProps={{
                className:
                  "rounded-full px-4 py-2 text-sm text-green-dark bg-muted font-medium",
              }}
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

        <div className="md:hidden">
          <Link to="/" className="transition-transform hover:scale-[1.02]">
            <Logo compact />
          </Link>
        </div>

        <button
          className="ml-auto rounded-full p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col p-3">
            {mobileNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}

            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-green-dark px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Pedir ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}