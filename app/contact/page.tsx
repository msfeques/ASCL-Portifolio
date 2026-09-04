import { Footer } from "@/public/components/footer";
import Header from "@/public/components/header";
import Publish from "@/public/components/publish";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-cream min-h-screen">
      <main className="flex-1">
        <Header />
        <div className="bg-cream min-h-screen flex flex-col">
          <main className="flex-1 flex flex-col lg:flex-row items-stretch">
            {/* Imagem — full bleed à esquerda, sem padding */}
            <div className="relative hidden lg:block lg:w-1/2 min-w-0 bg-cream">
              <Image
                src="/assets/yellowbook.png"
                alt="ACSL Editora"
                fill
                sizes="50vw"
                className="object-contain p-8"
              />
            </div>

            {/* Texto + formulário à direita, com padding próprio */}
            <div className="flex flex-col items-start gap-4 lg:w-1/2 min-w-0 px-6 lg:px-16 py-16 justify-center">
              <h1 className="text-black font-bold font-[archivo] text-4xl">
                Fale Conosco<span className="text-gold">.</span>
              </h1>
              <p className="font-serif text-base text-muted max-w-[560px]">
                Nada melhor que uma boa conversa para esclarecer dúvidas e
                questões pendentes! Ligue pra gente, será um prazer falar com
                você!
              </p>
              <Publish />
            </div>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
}
