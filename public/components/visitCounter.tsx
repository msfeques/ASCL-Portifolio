"use client";

import { useEffect, useState } from "react";

interface VisitCounterProps {
  variant?: "hero" | "footer";
}

export default function VisitCounter({
  variant = "footer",
}: VisitCounterProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit-count") // GET puro, sem incrementar
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  const digitsStr = count !== null ? String(count).padStart(6, "0") : "······";
  const digits = digitsStr.split("");

  if (variant === "hero") {
    return (
      <div className="inline-flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
          Numero de Visitantes
        </span>
        <div className="flex gap-1 flex-wrap justify-center text-ink border border-border rounded-md px-3 py-2 shadow-sm">
          {digits.map((d, i) => (
            <Digit key={i} value={d} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.1em] text-muted-faint">
      <span className="uppercase">Visita nº</span>
      <div className="flex gap-[2px]">
        {digits.map((d, i) => (
          <Digit key={i} value={d} small />
        ))}
      </div>
    </div>
  );
}

function Digit({ value, small = false }: { value: string; small?: boolean }) {
  return (
    <span
      className={
        small
          ? "inline-block w-[9px] text-center text-muted-faint"
          : "relative inline-flex items-center justify-center w-6 h-8 md:w-7 md:h-9 rounded-[3px] bg-white border border-border text-ink/70 font-mono font-semibold text-lg md:text-xl tabular-nums overflow-hidden transition-all duration-300"
      }
    >
      {value}
    </span>
  );
}
