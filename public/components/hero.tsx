import Image from "next/image";
import Button from "@/public/components/button";
import { magazines } from "@/public/data/magazines";

export default function Hero() {
  // Ordena por data (mais recente primeiro) — a "edição atual" é sempre
  // calculada a partir dos dados reais, nunca fixada manualmente
  const ordenadas = [...magazines].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [atual, ...resto] = ordenadas;
  const atras = resto.slice(0, 2); // até 2 capas espiando atrás

  return (
    <section className="w-full px-4 pt-16 pb-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-4">
            Edição atual
          </p>

          <h1 className="font-sans text-[44px] md:text-[68px] leading-[0.98] font-extrabold tracking-[-0.03em] text-ink mb-6">
            Ideias que ficam nas páginas, não só no feed.
          </h1>

          <p className="font-serif text-xl leading-[1.55] text-muted max-w-[46ch] mb-8">
            A ACSL publica revistas institucionais e técnicas — do agronegócio
            à gestão pública — pra quem quer ler de verdade, não só rolar a tela.
          </p>

          <div className="flex flex-wrap gap-4">
            {atual && (
              <Button href={atual.link} variant="primary">
                Ler última edição
              </Button>
            )}
            <Button href="#acervo" variant="secondary">
              Ver todo o acervo
            </Button>
          </div>
        </div>

        {/* Pilha de capas */}
        {atual && (
          <div className="relative w-full max-w-[380px] mx-auto aspect-[3/4]">
            {/* Capas de trás — espiando, só pra dar noção de acervo */}
            {atras[1] && (
              <div className="absolute inset-0 rotate-[4deg] translate-x-3 translate-y-2 sm:rotate-[8deg] sm:translate-x-6 sm:translate-y-3 opacity-60">
                <Image
                  src={atras[1].coverImage}
                  alt=""
                  fill
                  className="object-cover rounded-[2px] shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
                />
              </div>
            )}
            {atras[0] && (
              <div className="absolute inset-0 rotate-[-3deg] -translate-x-2 translate-y-1 sm:rotate-[-6deg] sm:-translate-x-4 sm:translate-y-2 opacity-80">
                <Image
                  src={atras[0].coverImage}
                  alt=""
                  fill
                  className="object-cover rounded-[2px] shadow-[0_18px_44px_rgba(0,0,0,0.35)]"
                />
              </div>
            )}

            {/* Capa em destaque — edição atual */}
            <div className="relative w-full h-full">
              <Image
                src={atual.coverImage}
                alt={`Capa da edição atual: ${atual.title}`}
                fill
                priority
                className="object-cover rounded-[2px] shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 1024px) 80vw, 380px"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}