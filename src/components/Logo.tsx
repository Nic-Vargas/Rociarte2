import { Leaf } from "./Leaf";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-dark text-green-light shadow-[var(--shadow-soft)]">
        <Leaf className="h-5 w-5 -rotate-12" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="font-display text-xl font-semibold text-green-dark">Rociarte</div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-accent">Arte & Naturaleza</div>
        </div>
      )}
    </div>
  );
}
