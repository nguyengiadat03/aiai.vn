import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
