## Semana 2 — Hero, Home completa e Sobre Nós

### Dia 6 (Segunda) — Hero (com capas reais)
- [ ] Componente `Hero`: capa em destaque (edição corrente) + `--shadow-cover` na imagem
- [ ] Título D1 (68px/0.98, peso 800) + lede (21px/1.55, serif)
- [ ] Botões: "Ler última edição" (primário) + "Ver todo o acervo" (terciário)

### Dia 7 (Terça) — Montagem da Home
- [ ] Unir: Hero → Acervo (com filtros) → Faixa "Publique com a ACSL" → Footer
- [ ] Ajustar espaçamento entre seções pela escala oficial (`--space-6`: 72px, `--space-7`: 120px)
- [ ] Conferir se nada compete visualmente com as capas ("a capa manda")

### Dia 8 (Quarta) — Sobre Nós (estrutura)
- [ ] Manifesto curto (H2 — 34px/1.1, peso 700)
- [ ] Coluna única de texto serif com foto ao lado (max-width 62ch)
- [ ] Bloco de linha do tempo (história da ACSL)

## Semana 3 — Funcionalidade, navegação, responsividade e deploy

### Dia 11 (Segunda) — Contato funcional
- [ ] Integrar envio (Resend, EmailJS ou API Route própria)
- [ ] Validação de campos obrigatórios
- [ ] Teste real de envio e recebimento do e-mail

### Dia 12 (Terça) — Navegação completa
- [ ] Barra utilitária superior escura ("Editoração eletrônica desde 2005" + e-mail)
- [ ] Nav principal com logo + links (Início, Sobre Nós, Contato) + botão "Assinar"
- [ ] Conferir consistência do menu nas 3 páginas

### Dia 13 (Quarta) — Responsividade mobile
- [ ] Revisar Home (Hero + Acervo + CTA), Sobre Nós e Contato em telas pequenas
- [ ] Menu mobile (hambúrguer ou versão simplificada da nav)
- [ ] Grid do acervo cai para 2 colunas / 1 coluna no mobile

### Dia 14 (Quinta) — Revisão geral e SEO
- [ ] Meta tags (title, description) nas 3 páginas
- [ ] Otimizar imagens de capas (peso e formato)
- [ ] Rodar Lighthouse, corrigir pontos críticos
- [ ] Checar contraste de cor conforme regras do design system (dourado claro nunca em texto pequeno)

### Dia 15 (Sexta) — Deploy e entrega
- [ ] Deploy na Vercel + variáveis de ambiente (serviço de e-mail)
- [ ] Configurar domínio `revistabrasilemfoco.com.br` (DNS + SSL)
- [ ] Teste final no ar (desktop e mobile)
- [ ] Entrega ao cliente + solicitar aprovação e depoimento (cláusula de portfólio)

---

## Checklist final antes de considerar "pronto"
- [ ] Site no ar no domínio correto, com https ativo
- [ ] Home, Sobre Nós e Contato responsivas (mobile, tablet, desktop)
- [ ] Formulário de contato testado e funcionando, com validação de erro
- [ ] Filtros do acervo (busca, ano, categoria) funcionando corretamente
- [ ] Cores e tipografia conferidas contra os tokens do Design System v1.0
- [ ] Cliente aprovou o conteúdo final
- [ ] Depoimento/autorização de portfólio obtidos
- [ ] Repositório organizado no GitHub, com README, pronto pra virar case
