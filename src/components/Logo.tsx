import logoRociarte from "../assets/logo-rociarte.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={logoRociarte}
        alt="Logo Rociarte"
        className={
          compact
            ? "h-16 w-auto object-contain"
            : "h-28 w-auto object-contain"
        }
      />

      {!compact && (
        <span className="mt-1 text-xs uppercase tracking-[0.35em] text-accent">
          Arte & Naturaleza
        </span>
      )}
    </div>
  );
}