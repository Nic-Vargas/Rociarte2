import logoRociarte from "../assets/logo-rociarte.jpg";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoRociarte}
        alt="Logo Rociarte"
        className={compact ? "h-10 w-auto object-contain" : "h-14 w-auto object-contain"}
      />

      {!compact && (
        <div className="leading-tight">
          <div className="font-display text-xl font-semibold text-green-dark">
            Rociarte
          </div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
            Arte & Naturaleza
          </div>
        </div>
      )}
    </div>
  );
}