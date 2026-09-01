import { Footer } from "@/public/components/footer";
import Header from "@/public/components/header";

export default function Contact() {
  return (
    <div className="bg-cream min-h-screen">
      <main className="flex-1">
        <div className="bg-cream min-h-screen flex flex-col">
          <Header />
        </div>
        <div className="bg-cream min-h-screen flex flex-col">
            <main className="flex-1">{/* header e conteúdo */}</main>
            <Footer/>
        </div>
      </main>
    </div>
  );
}