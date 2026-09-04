"use client";

import { useState, FormEvent } from "react";
import Button from "./button";

type Motivo = "publicar" | "assinatura" | "anunciar";
type Status = "idle" | "enviando" | "enviado";

interface Errors {
  nome?: string;
  email?: string;
  mensagem?: string;
  consentimento?: string;
}

const MOTIVOS: { value: Motivo; label: string }[] = [
  { value: "publicar", label: "Quero publicar" },
  { value: "assinatura", label: "Assinatura / edições" },
  { value: "anunciar", label: "Anunciar" },
];

const MENSAGEM_MAX = 1200;

// Classes reaproveitadas (evita repetir a mesma string gigante em cada input)
const LABEL =
  "block mb-2 font-mono text-[11px] tracking-[0.14em] uppercase text-muted-light";
const INPUT_BASE =
  "min-h-[44px] w-full font-serif text-base px-3.5 py-3 rounded-[2px] " +
  "border-[1.5px] border-border-strong bg-white text-ink " +
  "focus:outline-none focus:border-gold " +
  "focus:shadow-[0_0_0_3px_rgba(200,144,26,0.16)]";
const INPUT_ERROR = "border-[#9E3B2E] bg-[#FDF3F1]";
const ERROR_TEXT = "mt-1.5 font-mono text-[11px] text-[#9E3B2E]";
const HELPER_TEXT = "mt-1.5 font-mono text-[11px] text-muted-light";

export default function Publish() {
  const [motivo, setMotivo] = useState<Motivo>("publicar");
  const [nome, setNome] = useState("");
  const [organizacao, setOrganizacao] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [publicacao, setPublicacao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [consentimento, setConsentimento] = useState(false);

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validar(): Errors {
    const novosErros: Errors = {};

    if (!nome.trim()) novosErros.nome = "Informe seu nome completo.";

    if (!email.trim()) {
      novosErros.email = "Informe um e-mail para retorno.";
    } else if (!email.includes("@") || !email.split("@")[1]?.includes(".")) {
      novosErros.email = "Endereço incompleto — inclua o domínio.";
    }

    if (!mensagem.trim())
      novosErros.mensagem = "Conte em poucas linhas o que você precisa.";

    if (!consentimento)
      novosErros.consentimento = "É preciso autorizar o uso dos dados para enviar.";

    return novosErros;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const novosErros = validar();
    setErrors(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    setStatus("enviando");
    // TODO (Dia 11): integrar envio real (Resend/EmailJS/API Route)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("enviado");
  }

  if (status === "enviado") {
    return (
      <section id="formulario-contato" className="w-full px-4 py-16 bg-cream scroll-mt-20">
        <div className="max-w-[480px] ml-auto border-[1.5px] border-ink rounded-[2px] p-6 bg-white">
          <p className="font-sans font-bold text-lg text-ink mb-1.5">Enviado</p>
          <p className="font-serif text-[15px] text-muted">
            Recebemos sua mensagem. Retornamos no e-mail informado.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario-contato" className="w-full px-4 py-16 bg-cream scroll-mt-20">
      <div className="max-w-[720px] ml-auto bg-white border border-border rounded-[2px] p-6 md:p-8">
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

          {/* Motivo do contato */}
          <fieldset className="border-none p-0 m-0">
            <legend className={LABEL}>Motivo do contato</legend>
            <div className="flex flex-wrap gap-2">
              {MOTIVOS.map((m) => (
                <label
                  key={m.value}
                  className={`relative flex items-center gap-2 min-h-[44px] px-4 py-2.5
                    border-[1.5px] rounded-[2px] font-serif text-sm text-ink cursor-pointer
                    ${motivo === m.value ? "border-gold" : "border-border-strong"}`}
                >
                  <input
                    type="radio"
                    name="motivo"
                    value={m.value}
                    checked={motivo === m.value}
                    onChange={() => setMotivo(m.value)}
                    className="absolute opacity-0 w-px h-px"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-[1.5px] flex-shrink-0
                      ${motivo === m.value ? "border-gold bg-gold" : "border-border-strong"}`}
                  />
                  {m.label}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Nome + Organização */}
          <div className="grid grid-cols-1 min-[721px]:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className={LABEL}>
                Nome completo <span className="text-[#9E3B2E]">*</span>
              </label>
              <input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Maria Andrade"
                className={`${INPUT_BASE} ${errors.nome ? INPUT_ERROR : ""}`}
                aria-invalid={!!errors.nome}
              />
              {errors.nome && <p className={ERROR_TEXT}>{errors.nome}</p>}
            </div>

            <div>
              <label htmlFor="organizacao" className={LABEL}>Organização</label>
              <input
                id="organizacao"
                value={organizacao}
                onChange={(e) => setOrganizacao(e.target.value)}
                placeholder="Instituição ou empresa"
                className={INPUT_BASE}
              />
            </div>
          </div>

          {/* E-mail + Telefone */}
          <div className="grid grid-cols-1 min-[721px]:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className={LABEL}>
                E-mail <span className="text-[#9E3B2E]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="maria@"
                className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : ""}`}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className={ERROR_TEXT}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="telefone" className={LABEL}>Telefone</label>
              <input
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(21) 90000-0000"
                className={INPUT_BASE}
              />
              <p className={HELPER_TEXT}>Opcional · usamos só para retorno.</p>
            </div>
          </div>

          {/* Publicação de interesse */}
          <div>
            <label htmlFor="publicacao" className={LABEL}>Publicação de interesse</label>
            <select
              id="publicacao"
              value={publicacao}
              onChange={(e) => setPublicacao(e.target.value)}
              className={INPUT_BASE}
            >
              <option value="">Selecione uma publicação</option>
              <option value="apa-fapes-bndes">APA-FAPES/BNDES</option>
              <option value="brasil-em-foco">Brasil em Foco</option>
              <option value="institucionais">Institucionais</option>
              <option value="outra">Outra</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="mensagem" className={LABEL}>
              Mensagem <span className="text-[#9E3B2E]">*</span>
            </label>
            <textarea
              id="mensagem"
              rows={5}
              maxLength={MENSAGEM_MAX}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Conte em poucas linhas o que você precisa."
              className={`${INPUT_BASE} min-h-[120px] resize-y ${errors.mensagem ? INPUT_ERROR : ""}`}
              aria-invalid={!!errors.mensagem}
            />
            <div className="flex justify-between items-start mt-1.5">
              {errors.mensagem ? (
                <p className={`${ERROR_TEXT} mt-0`}>{errors.mensagem}</p>
              ) : (
                <span />
              )}
              <span className="font-mono text-[11px] text-muted-light whitespace-nowrap">
                {mensagem.length} / {MENSAGEM_MAX}
              </span>
            </div>
          </div>

          {/* Consentimento */}
          <label className="flex items-start gap-2.5 font-serif text-sm text-muted cursor-pointer">
            <input
              type="checkbox"
              checked={consentimento}
              onChange={(e) => setConsentimento(e.target.checked)}
              className="w-5 h-5 min-w-5 mt-0.5 accent-gold"
            />
            <span>
              Autorizo a ACSL Editora a usar meus dados para responder este
              contato, conforme a política de privacidade.
            </span>
          </label>
          {errors.consentimento && <p className={ERROR_TEXT}>{errors.consentimento}</p>}

          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="primary" type="submit" disabled={status === "enviando"}>
              {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
            </Button>
            <span className="font-mono text-[11px] text-muted-light">
              Resposta em até 2 dias úteis
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}