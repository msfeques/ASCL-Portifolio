import { Footer } from "@/public/components/footer";
import Header from "@/public/components/header";

export default function AboutUs() {
  return (
    <main>
      <Header />
      <section className="w-full px-4 pt-16 pb-12">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-4">
            Quem somos
          </p>
          <h1 className="font-sans text-[34px] md:text-[44px] leading-[1.1] font-bold tracking-[-0.02em] text-ink mb-6">
            Desenvolver o melhor conteúdo multidisciplinar não é só uma missão é
            nossa razão de existir.
          </h1>
          <p className="font-serif text-xl leading-[1.55] text-muted">
            Queremos ser reconhecidos como uma empresa comprometida com a
            comunicação e áreas afins, pela prestação de serviços com elevado
            padrão ético e de qualidade.
          </p>
        </div>
      </section>

      {/* Valores institucionais */}
      <section className="w-full px-4 py-12 bg-cream">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-[2px] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
              Valor 01
            </p>
            <h3 className="font-sans text-xl font-bold text-ink mb-2">Ética</h3>
            <p className="font-serif text-[15px] leading-[1.5] text-muted">
              A ética é o pano de fundo de cada decisão, das grandes campanhas
              às escolhas do dia a dia.
            </p>
          </div>

          <div className="bg-white border border-border rounded-[2px] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
              Valor 02
            </p>
            <h3 className="font-sans text-xl font-bold text-ink mb-2">
              Apartidária
            </h3>
            <p className="font-serif text-[15px] leading-[1.5] text-muted">
              Somos uma empresa apartidária, sem envolvimento em atividades
              político-partidárias.
            </p>
          </div>

          <div className="bg-white border border-border rounded-[2px] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
              Valor 03
            </p>
            <h3 className="font-sans text-xl font-bold text-ink mb-2">
              Mérito
            </h3>
            <p className="font-serif text-[15px] leading-[1.5] text-muted">
              Valorizamos a diferenciação pelo mérito, reconhecendo quem entrega
              excelência de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* Compromisso com a ética — resumo, não o documento jurídico inteiro */}
      <section className="w-full px-4 py-16">
        <div className="max-w-[720px] mx-auto border-l-[3px] border-gold pl-6">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
            Compromisso institucional
          </p>
          <p className="font-serif text-lg leading-[1.6] text-ink">
            Conduzimos nossos negócios sob um Código de Ética e Conduta e uma
            Política Anticorrupção formais, que orientam nosso relacionamento
            com clientes, parceiros, fornecedores e o poder público — sempre com
            transparência, integridade e repúdio a qualquer prática de corrupção
            ou suborno.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
