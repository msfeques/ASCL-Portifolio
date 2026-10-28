/**
 * scripts/generate-partners.mjs
 *
 * Lê a pasta public/assets/partners e gera/atualiza data/partners.json.
 *
 *  - Logo novo na pasta  -> entra no JSON (com url vazia)
 *  - Logo que já estava  -> mantém o nome e a url que você editou
 *  - Logo apagado        -> sai do JSON
 *
 * Uso (na raiz do projeto):
 *   node scripts/generate-partners.mjs
 */

import fs from "fs";
import path from "path";

const PASTA = path.join(process.cwd(), "public", "assets", "partners");
const SAIDA = path.join(process.cwd(), "data", "partners.json");
const EXTENSOES = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif"]);

if (!fs.existsSync(PASTA)) {
  console.error(`Pasta não encontrada: ${PASTA}`);
  process.exit(1);
}

// Entradas já existentes (pra preservar nome/url editados à mão)
let existentes = [];
if (fs.existsSync(SAIDA)) {
  try {
    existentes = JSON.parse(fs.readFileSync(SAIDA, "utf-8"));
  } catch {
    console.warn("partners.json existente está inválido — será recriado.");
  }
}
const porLogo = new Map(existentes.map((p) => [p.logo, p]));

function nomeLegivel(arquivo) {
  return path
    .parse(arquivo)
    .name.replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const arquivos = fs
  .readdirSync(PASTA)
  .filter((f) => EXTENSOES.has(path.extname(f).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));

const lista = arquivos.map((arquivo) => {
  const logo = `/assets/partners/${encodeURIComponent(arquivo)}`;
  const anterior = porLogo.get(logo);
  return {
    name: anterior?.name ?? nomeLegivel(arquivo),
    logo,
    url: anterior?.url ?? "",
  };
});

fs.mkdirSync(path.dirname(SAIDA), { recursive: true });
fs.writeFileSync(SAIDA, JSON.stringify(lista, null, 2) + "\n");

const novos = lista.filter((p) => !porLogo.has(p.logo)).length;
const removidos = existentes.filter(
  (p) => !lista.some((l) => l.logo === p.logo),
).length;
console.log(
  `${lista.length} logos no JSON (${novos} novos, ${removidos} removidos).`,
);
