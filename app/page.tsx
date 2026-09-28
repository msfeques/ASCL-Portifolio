import AcervoGrid from "@/public/components/acervoGrid";
import Hero from "@/public/components/hero";
import VisitCounter from "@/public/components/visitCounter"; // ajuste o caminho conforme seu projeto

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <main>
        <div className="bg-cream min-h-screen flex flex-col">
          <main className="flex-1">
            <div className="flex justify-center py-6">
              <VisitCounter variant="hero" />
            </div>
            <Hero />
            <AcervoGrid />
          </main>
        </div>
      </main>
    </div>
  );
}
