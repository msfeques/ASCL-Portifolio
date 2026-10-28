"use client";

import { useEffect, useRef } from "react";
import partnersData from "@/data/partners.json";

interface Partner {
  name: string;
  logo: string;
  url: string; // vazio = logo sem link
}

const PARTNERS = partnersData as Partner[];

const TITULO = "Empresas parceiras";

// Acima disso, divide em duas fileiras (uma pra cada lado)
const LIMITE_UMA_FILEIRA = 14;

// Largura do cartão (168) + espaçamento (40) = 208px por logo
const LARGURA_ITEM = 208;

function Logo({ partner, decorativo }: { partner: Partner; decorativo: boolean }) {
  const caixa =
    "group flex items-center justify-center w-[168px] h-20 shrink-0 p-3 " +
    "rounded-xl bg-white border border-border shadow-sm " +
    "transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-gold-deep";

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={partner.logo}
      alt={decorativo ? "" : partner.name}
      loading="lazy"
      decoding="async"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      className="max-h-full max-w-full object-contain select-none"
    />
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visitar site de ${partner.name}`}
        tabIndex={decorativo ? -1 : undefined}
        draggable={false}
        className={caixa}
      >
        {img}
      </a>
    );
  }

  return <div className={caixa}>{img}</div>;
}

function MarqueeRow({
  items,
  reverse = false,
  speed = 40, // px por segundo
}: {
  items: Partner[];
  reverse?: boolean;
  speed?: number;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);

  // Quantas cópias da lista pra sempre cobrir a tela (mínimo 2 pro loop emendar)
  const copias = Math.max(2, Math.ceil(1920 / (items.length * LARGURA_ITEM)) + 1);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const reduzirMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let pos = 0; // posição "real" (com decimais), o scrollLeft arredonda
    let ultimo = performance.now();
    let raf = 0;
    let pausado = false;
    let arrastando = false;
    let visivel = true;
    let inicioX = 0;
    let inicioPos = 0;

    const periodo = () => el.scrollWidth / copias;

    const normalizar = () => {
      const p = periodo();
      if (!p) return;
      pos = ((pos % p) + p) % p;
    };

    const tick = (agora: number) => {
      const dt = agora - ultimo;
      ultimo = agora;
      if (!pausado && !arrastando && visivel && !reduzirMovimento) {
        pos += ((reverse ? -1 : 1) * speed * dt) / 1000;
        normalizar();
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") pausado = true;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") pausado = false;
    };

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      arrastando = true;
      el.dataset.moved = "false";
      inicioX = e.clientX;
      inicioPos = pos;
    };

    const onMove = (e: PointerEvent) => {
      if (!arrastando) return;
      const dx = e.clientX - inicioX;
      if (el.dataset.moved !== "true") {
        if (Math.abs(dx) < 6) return; // pequeno tremor = clique, não arraste
        el.dataset.moved = "true";
        el.setPointerCapture(e.pointerId);
      }
      pos = inicioPos - dx;
      normalizar();
      el.scrollLeft = pos;
    };

    const onUp = () => {
      arrastando = false;
    };

    // Se arrastou, não deixa o "soltar" virar clique no link
    const onClickCapture = (e: MouseEvent) => {
      if (el.dataset.moved === "true") {
        e.preventDefault();
        e.stopPropagation();
        el.dataset.moved = "false";
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visivel = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(el);

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("click", onClickCapture, true);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, [copias, reverse, speed]);

  return (
    <div
      ref={viewportRef}
      className={
        "overflow-x-hidden cursor-grab active:cursor-grabbing select-none " +
        "[touch-action:pan-y] py-2"
      }
      style={{
        // Bordas esmaecendo pro fundo creme
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <ul className="flex w-max items-center" aria-label={TITULO}>
        {Array.from({ length: copias }).flatMap((_, c) =>
          items.map((p) => (
            <li
              key={`${p.logo}-${c}`}
              className="mr-10"
              aria-hidden={c > 0 ? true : undefined}
            >
              <Logo partner={p} decorativo={c > 0} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

export default function PartnersMarquee() {
  if (PARTNERS.length === 0) return null;

  const duasFileiras = PARTNERS.length > LIMITE_UMA_FILEIRA;
  const metade = Math.ceil(PARTNERS.length / 2);
  const fileiraA = duasFileiras ? PARTNERS.slice(0, metade) : PARTNERS;
  const fileiraB = duasFileiras ? PARTNERS.slice(metade) : [];

  return (
    <section className="w-full py-16 bg-cream border-t border-b border-border overflow-hidden">
      <div className="mb-10 flex flex-col items-center gap-3 px-4">
        <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-deep text-center">
          {TITULO}
        </p>
        <span className="h-px w-12 bg-gold-deep/60" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={fileiraA} speed={40} />
        {fileiraB.length > 0 && (
          <MarqueeRow items={fileiraB} reverse speed={40} />
        )}
      </div>
    </section>
  );
}