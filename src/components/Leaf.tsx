export function Leaf({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
      <path
        d="M8 56 C 8 24, 32 8, 56 8 C 56 32, 40 56, 8 56 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M12 52 C 24 36, 40 20, 54 12"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
