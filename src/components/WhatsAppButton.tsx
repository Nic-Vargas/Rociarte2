export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573000000000?text=Hola%20Rociarte%2C%20me%20interesa%20una%20de%20sus%20creaciones"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-[var(--shadow-warm)] transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M19.11 17.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34zM16.02 4C9.94 4 5 8.94 5 15.02c0 1.93.51 3.82 1.47 5.49L5 27l6.66-1.45a10.97 10.97 0 0 0 4.36.92c6.08 0 11.02-4.94 11.02-11.02S22.1 4 16.02 4z"/>
      </svg>
    </a>
  );
}
