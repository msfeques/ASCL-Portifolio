"use client";

import { useEffect, useRef, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);
  const jaChamou = useRef(false);

  useEffect(() => {
    if (jaChamou.current) return;
    jaChamou.current = true;

    fetch("/api/visit-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <span className="font-mono text-[11px] tracking-[0.1em] text-muted-faint">
      {count !== null ? `Visita nº ${count.toLocaleString("pt-BR")}` : "…"}
    </span>
  );
}