import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main className="animate-fade-in">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
