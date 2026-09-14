import { Footer } from "@/public/components/footer";
import Header from "@/public/components/header";
import AcervoGrid from "@/public/components/acervoGrid";
import Hero from "@/public/components/hero";

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <main>
       <Header />
        <div className="bg-cream min-h-screen flex flex-col">
          <main className="flex-1">
            <Hero />
            <AcervoGrid />
          </main>
          <Footer/>
        </div>
      </main>
    </div>
  );
}
