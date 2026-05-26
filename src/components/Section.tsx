import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className={`mb-12 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs uppercase tracking-[0.2em] text-green-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}
          {title && <h2 className="font-display text-4xl text-green-dark md:text-5xl text-balance">{title}</h2>}
          {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
