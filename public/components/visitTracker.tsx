"use client";

import { useEffect, useRef } from "react";

// Garante 1 incremento por aba/sessão, mesmo com StrictMode
// rodando o efeito 2x em dev.
export default function VisitTracker() {
  const jaChamou = useRef(false);

  useEffect(() => {
    if (jaChamou.current) return;
    jaChamou.current = true;

    if (sessionStorage.getItem("visita_registrada")) return;

    fetch("/api/visit-count", { method: "POST" })
      .then(() => {
        sessionStorage.setItem("visita_registrada", "1");
      })
      .catch(() => {});
  }, []);

  return null;
}
