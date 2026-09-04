"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { magazines } from "../data/magazines";
import MagazineCard from "./magazineCard";

export default function AcervoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [needsCollapse, setNeedsCollapse] = useState(false);

  // Mede a grade real (número de colunas muda por breakpoint, então a altura
  // de "1 linha + metade da próxima" precisa ser calculada, não fixa)
  const medir = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const children = Array.from(grid.children) as HTMLElement[];
    if (children.length === 0) return;

    // Agrupa os cards por linha, comparando o offsetTop de cada um
    const linhas: { top: number; height: number }[] = [];
    for (const child of children) {
      const top = Math.round(child.offsetTop);
      const height = child.offsetHeight;
      const linhaExistente = linhas.find((l) => Math.abs(l.top - top) < 4);
      if (!linhaExistente) {
        linhas.push({ top, height });
      }
    }

    // Se tudo cabe numa linha só, não precisa de gaveta
    if (linhas.length <= 1) {
      setNeedsCollapse(false);
      return;
    }

    const gapPx = parseFloat(getComputedStyle(grid).rowGap || "0");
    const linha1 = linhas[0];
    const linha2 = linhas[1];

    const altura = linha1.height + gapPx + linha2.height / 2;

    setCollapsedHeight(altura);
    setNeedsCollapse(true);
  }, []);

  useEffect(() => {
    // requestAnimationFrame garante que o layout já assentou antes de medir
    const raf = requestAnimationFrame(medir);

    const onResize = () => medir();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [medir]);

  const colapsado = needsCollapse && !expanded;

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-310 mx-auto">
        <div className="relative">
          <div
            ref={gridRef}
            style={
              colapsado && collapsedHeight
                ? { maxHeight: collapsedHeight }
                : undefined
            }
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden transition-[max-height] duration-500 ease-in-out"
          >
            {magazines.map((mag) => (
              <MagazineCard key={mag.id} magazine={mag} />
            ))}
          </div>

          {/* Degradê que "esconde" a metade de baixo da segunda linha */}
          {colapsado && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-cream to-transparent" />
          )}
        </div>

        {needsCollapse && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="min-h-11 px-6 py-2.5 rounded-xs border border-border-strong font-sans text-sm font-semibold text-ink hover:bg-surface-panel transition-colors focus-visible:outline-none focus-visible:border-gold focus-visible:shadow-[0_0_0_3px_rgba(200,144,26,0.16)]"
            >
              {expanded ? "Mostrar menos" : "Mostrar mais"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}