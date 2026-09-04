import Button from "./button";

export default function CtaBand() {
  return (
    <section className="bg-ink px-4 py-16">
      <div className="max-w-160 mx-auto text-center flex flex-col items-center gap-4">
        <h2 className="font-sans text-[34px] leading-[1.1] font-bold tracking-[-0.02em] text-gold-mid">
          Publique com a ACSL
        </h2>
        <p className="font-serif text-base text-cream/85 mb-2">
          Tem uma edição pronta ou quer levar sua instituição pras nossas páginas?
          Fale com a gente.
        </p>
        <Button href="/contato" variant="primary">
          Publique com a ACSL
        </Button>
      </div>
    </section>
  );
}