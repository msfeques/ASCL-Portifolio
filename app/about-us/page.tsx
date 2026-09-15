export default function AboutUs() {
  return (
    <main>
      <section className="w-full px-4 py-16 bg-cream">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ">
          {/* Coluna 1 — Sobre a ACSL Editora */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-4">
              Desde 2006
            </p>
            <h1 className="font-sans text-[30px] md:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-ink mb-6">
              Transformamos dados complexos em narrativas que inspiram.
            </h1>

            <div className="font-serif text-base leading-[1.7] text-muted flex flex-col gap-4">
              <p>
                A ACSL Editora nasceu em 2006 com o objetivo de oferecer ao
                mercado editorial brasileiro uma linha de publicações
                institucionais à frente do seu tempo, antenada com as novas
                tecnologias.
              </p>
              <p>
                Ao longo de duas décadas, foram muitas as contribuições para a
                consolidação de uma comunicação corporativa e institucional de
                alto impacto. Desde os primeiros passos, a editora soube
                acompanhar a transição do papel para as plataformas digitais,
                transformando dados complexos e relatórios institucionais em
                narrativas atraentes, informativas e com grande valor estético.
                A empresa consolidou-se como uma parceira estratégica de grandes
                organizações, cooperativas e marcas que buscam registrar sua
                história e fortalecer seu posicionamento no mercado através de
                conteúdos rigorosamente apurados e de excelência editorial.
              </p>
              <p>
                Com essa sólida bagagem, a ACSL Editora posiciona-se como a
                parceira ideal para instituições, organizações empresariais e
                entidades associativas que desejam produzir periódicos de alto
                nível ou eternizar momentos marcantes de suas trajetórias. Seja
                para celebrar aniversários corporativos, registrar marcos
                históricos ou fortalecer a comunicação com seus públicos,
                transformamos o legado de cada organização em publicações
                memoráveis, unindo tradição editorial, inovação tecnológica e o
                compromisso de contar histórias que inspiram o futuro.
              </p>
            </div>
          </div>

          {/* Coluna 2 — Revista Brasil em Foco, em destaque num card verde */}
          <div className="bg-forest text-cream rounded-[4px] p-8 md:p-10">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-mid mb-4">
              Nosso carro-chefe
            </p>
            <h2 className="font-sans text-[26px] md:text-[30px] leading-[1.2] font-bold tracking-[-0.02em] text-cream mb-6">
              Revelar o Brasil que dá certo.
            </h2>

            <div className="font-serif text-base leading-[1.7] text-cream/85 flex flex-col gap-4">
              <p>
                Essa é a proposta da Revista Brasil em Foco. Mais do que um
                veículo de comunicação, somos um ecossistema dedicado a dar voz
                e visibilidade aos brasileiros que fazem a diferença e às ações
                que fortalecem o desenvolvimento do país, inspirando novas
                conquistas. Com circulação nacional em formatos digital e
                impresso, cruzamos fronteiras para mapear e compartilhar
                histórias de sucesso que impulsionam o progresso nas áreas de
                economia, agronegócio, cooperativismo, saúde, qualidade de vida,
                tecnologia, ciência, empreendedorismo, sustentabilidade e
                literatura.
              </p>
              <p>
                Acreditamos no poder transformador da palavra bem apurada e do
                jornalismo de excelência. Nossa equipe multidisciplinar de
                jornalistas, analistas e fotógrafos trabalha com rigor técnico e
                sensibilidade para entregar, a cada edição, grandes reportagens,
                entrevistas exclusivas com lideranças expressivas e análises
                aprofundadas sobre o cenário de negócios, agroindústria e
                desenvolvimento socioeconômico.
              </p>
              <p>
                Seja na folha de papel ou na tela do dispositivo digital, a
                Revista Brasil em Foco conecta você ao melhor do potencial
                brasileiro, conectando passado, presente e futuro em páginas que
                inspiram transformação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
