import AcervoGrid from "@/public/components/acervoGrid";
import Hero from "@/public/components/hero";

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <main>
        <div className="bg-cream min-h-screen flex flex-col">
          <main className="flex-1">
            <Hero />
            <AcervoGrid />
          </main>
        </div>
      </main>
    </div>
  );
}
