import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-ink text-[#C9CDD0] mt-18">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 px-11 py-14">
        {/* Coluna 1: logo + descrição */}
        <div className="grid gap-3.5 content-start">
          <Image
            src="/assets/logo-acsl.png"
            alt="ACSL Editora"
            width={140}
            height={40}
            className="h-10 w-auto justify-self-start"
            loading="eager"
          />
          <p className="font-serif text-base leading-relaxed text-muted-faint max-w-[34ch]">
            Editoração eletrônica, publicações técnicas e institucionais.
          </p>
        </div>

        {/* Coluna 2: navegação */}
        <div className="grid gap-2.5 content-start text-[15px]">
          <div className="font-mono text-[11px] tracking-widest uppercase text-gold-mid">
            Navegação
          </div>
          <a href="#" className="hover:text-white transition-colors">Início</a>
          <a href="/about-us" className="hover:text-white transition-colors">Sobre nós</a>
          <a href="/contact" className="hover:text-white transition-colors">Contato</a>
          <a href="#" className="hover:text-white transition-colors">Publique com a ACSL</a>
        </div>

        {/* Coluna 3: contato */}
        <div className="grid gap-2.5 content-start text-[15px]">
          <div className="font-mono text-[11px] tracking-widest uppercase text-gold-mid">
            Contato
          </div>
          <a
            href="mailto:contato@acsleditora.com.br"
            className="hover:text-white transition-colors"
          >
            contato@acsleditora.com.br
          </a>
          <span>Rio de Janeiro · RJ</span>
        </div>
      </div>
    </footer>
  );
}
