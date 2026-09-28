import { Footer } from "@/public/components/footer";

export default function companyPolicy() {
  return (
    <main>
      {/* Manifesto / abertura */}
      <section className="w-full px-4 pt-16 pb-12">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-4">
            Compliance & Governança
          </p>
          <h1 className="font-sans text-[34px] md:text-[44px] leading-[1.1] font-bold tracking-[-0.02em] text-ink mb-6">
            Código de Ética e Conduta
          </h1>
          <p className="font-serif text-xl leading-[1.55] text-muted">
            Este Código reforça os valores éticos da ACSL e os princípios que
            orientam a condução de todos os nossos trabalhos — observado por
            Presidência, Vice-Presidência, funcionários e parceiros comerciais.
          </p>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="w-full px-4 py-12 bg-cream">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-[2px] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
              Missão
            </p>
            <p className="font-serif text-[15px] leading-[1.6] text-muted">
              Desenvolver o melhor conteúdo multidisciplinar — mais que uma
              missão, nossa razão de existir.
            </p>
          </div>

          <div className="bg-white border border-border rounded-[2px] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
              Visão
            </p>
            <p className="font-serif text-[15px] leading-[1.6] text-muted">
              Ser reconhecida como empresa comprometida na área de comunicação e
              afins pela prestação de serviços com elevado padrão ético e de
              qualidade.
            </p>
          </div>

          <div className="bg-white border border-border rounded-[2px] p-6">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
              Valores
            </p>
            <p className="font-serif text-[15px] leading-[1.6] text-muted">
              Ética, apartidarismo e valorização do mérito guiam cada decisão da
              empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Princípios institucionais */}
      <section className="w-full px-4 py-16">
        <div className="max-w-[900px] mx-auto">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3 text-center">
            Princípios institucionais
          </p>
          <h2 className="font-sans text-[28px] md:text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-ink mb-10 text-center">
            O que orienta nossas decisões
          </h2>

          <div className="flex flex-col gap-5">
            <div className="border-l-[3px] border-gold pl-5">
              <h3 className="font-sans text-lg font-bold text-ink mb-1.5">
                Foco na excelência
              </h3>
              <p className="font-serif text-[15px] leading-[1.6] text-muted">
                Buscamos padrões superiores de qualidade e atualização
                constante, exercendo funções com precisão e sempre superando
                desafios.
              </p>
            </div>

            <div className="border-l-[3px] border-gold pl-5">
              <h3 className="font-sans text-lg font-bold text-ink mb-1.5">
                Honestidade e ética
              </h3>
              <p className="font-serif text-[15px] leading-[1.6] text-muted">
                Agimos com respeito aos direitos humanos e ao meio ambiente,
                repudiando qualquer forma de assédio, fraude ou corrupção.
              </p>
            </div>

            <div className="border-l-[3px] border-gold pl-5">
              <h3 className="font-sans text-lg font-bold text-ink mb-1.5">
                Compromisso com as normas
              </h3>
              <p className="font-serif text-[15px] leading-[1.6] text-muted">
                Cumprimos leis e normas aplicáveis, internas e externas, e
                repudiamos o uso de software não licenciado.
              </p>
            </div>

            <div className="border-l-[3px] border-gold pl-5">
              <h3 className="font-sans text-lg font-bold text-ink mb-1.5">
                Integridade profissional
              </h3>
              <p className="font-serif text-[15px] leading-[1.6] text-muted">
                Exercemos as atividades de forma isenta, sem usar a posição na
                instituição para obter benefícios pessoais ou de terceiros.
              </p>
            </div>

            <div className="border-l-[3px] border-gold pl-5">
              <h3 className="font-sans text-lg font-bold text-ink mb-1.5">
                Proteção da informação e do conhecimento
              </h3>
              <p className="font-serif text-[15px] leading-[1.6] text-muted">
                Respeitamos direitos autorais e propriedade intelectual, e
                protegemos a confidencialidade de informações internas e de
                terceiros — inclusive após o desligamento da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Padrões de conduta nos relacionamentos */}
      <section className="w-full px-4 py-16 bg-cream">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3 text-center">
            Padrões de conduta
          </p>
          <h2 className="font-sans text-[28px] md:text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-ink mb-10 text-center">
            Como nos relacionamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-border rounded-[2px] p-6">
              <h3 className="font-sans text-base font-bold text-ink mb-2">
                Com a própria empresa
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-muted">
                Zelamos pelo patrimônio e recursos da ACSL, usamos com
                responsabilidade socioambiental os recursos de escritório, e nos
                apresentamos a compromissos de trabalho no horário e trajados
                adequadamente.
              </p>
            </div>

            <div className="bg-white border border-border rounded-[2px] p-6">
              <h3 className="font-sans text-base font-bold text-ink mb-2">
                Entre o público interno
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-muted">
                Acolhemos opiniões divergentes de caráter construtivo e mantemos
                o ambiente de trabalho livre de embaraços vindos de críticas
                infundadas ou boatos.
              </p>
            </div>

            <div className="bg-white border border-border rounded-[2px] p-6">
              <h3 className="font-sans text-base font-bold text-ink mb-2">
                Com parceiros comerciais e fornecedores
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-muted">
                Exigimos confidencialidade e aderência às mesmas condutas éticas
                da ACSL, com seleção baseada em critérios transparentes, justos
                e objetivos — rejeitando qualquer indício de trabalho escravo,
                infantil ou práticas ilícitas.
              </p>
            </div>

            <div className="bg-white border border-border rounded-[2px] p-6">
              <h3 className="font-sans text-base font-bold text-ink mb-2">
                Com os clientes
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-muted">
                Agimos de maneira transparente e ética, analisando
                cuidadosamente os riscos de cada projeto para proteger a
                reputação da ACSL e das partes envolvidas.
              </p>
            </div>

            <div className="bg-white border border-border rounded-[2px] p-6 md:col-span-2">
              <h3 className="font-sans text-base font-bold text-ink mb-2">
                Com agentes públicos
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-muted">
                Respeitamos rigorosamente as leis anticorrupção e antissuborno
                que regem relações com agentes públicos nacionais e
                internacionais, de todas as esferas de poder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Política Anticorrupção */}
      <section className="w-full px-4 py-16 bg-forest">
        <div className="max-w-[900px] mx-auto">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-mid mb-3 text-center">
            Política Anticorrupção
          </p>
          <h2 className="font-sans text-[28px] md:text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-cream mb-8 text-center">
            Tolerância zero à corrupção
          </h2>

          <div className="font-serif text-base leading-[1.7] text-cream/85 flex flex-col gap-5 mb-10">
            <p>
              A ACSL proíbe e não tolera nenhuma prática de corrupção, suborno,
              pagamento ou recebimento de propina — seja com a Administração
              Pública, nacional ou estrangeira, ou com empresas privadas, com
              base na lei anticorrupção brasileira e internacional (Lei nº
              12.846/13).
            </p>
            <p>
              Todos os colaboradores, fornecedores, terceiros e parceiros que
              atuam em nome da ACSL estão proibidos de oferecer, prometer,
              autorizar ou receber, direta ou indiretamente, qualquer vantagem
              indevida para agentes públicos. Nenhum colaborador, terceiro ou
              parceiro sofrerá retaliação por recusar-se a pagar ou receber
              propina.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 border border-white/20 rounded-[2px] p-5">
              <h3 className="font-sans text-sm font-bold text-gold-mid mb-1.5 uppercase tracking-wide">
                Brindes e hospitalidades
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-cream/80">
                Só são permitidos brindes institucionais sem valor comercial.
                Presentes com valor devem ser declarados.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-[2px] p-5">
              <h3 className="font-sans text-sm font-bold text-gold-mid mb-1.5 uppercase tracking-wide">
                Conflito de interesses
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-cream/80">
                Nenhum colaborador usa sua posição na empresa para benefício
                próprio ou envolvimento em negócios conflitantes.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-[2px] p-5">
              <h3 className="font-sans text-sm font-bold text-gold-mid mb-1.5 uppercase tracking-wide">
                Doações políticas
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-cream/80">
                A ACSL não se envolve em atividades político-partidárias nem
                realiza contribuições políticas em nome da empresa.
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-[2px] p-5">
              <h3 className="font-sans text-sm font-bold text-gold-mid mb-1.5 uppercase tracking-wide">
                Registros contábeis
              </h3>
              <p className="font-serif text-sm leading-[1.6] text-cream/80">
                Todas as operações são documentadas e aprovadas com precisão,
                sem espaço para registros falsos ou enganosos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governança */}
      <section className="w-full px-4 py-16">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep mb-3">
            Governança
          </p>
          <p className="font-serif text-lg leading-[1.7] text-muted">
            Este Código é mantido por um Comitê de Ética permanente, que
            esclarece dúvidas, avalia eventuais descumprimentos e revisa o
            documento anualmente. Vigente desde 15 de janeiro de 2017, por tempo
            indeterminado.
          </p>
        </div>
      </section>
    </main>
  );
}
