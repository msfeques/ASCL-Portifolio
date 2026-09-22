"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./button";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/about-us", label: "Sobre nós" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <header>
      {/* Barra superior escura */}
      <div className="bg-ink text-white text-[11px] font-mono tracking-widest">
        <div className="max-w-310 mx-auto flex justify-center md:justify-between items-center px-4 md:px-10 py-2 gap-2">
          {/* Frase longa: some no mobile, aparece a partir do md */}
          <span className="hidden md:inline uppercase truncate">
            ACSL EDITORAÇÃO ELETRÔNICA E REVISTA BRASIL EM FOCO LEVANDO
            INFORMAÇÃO DESDE DE 2006
          </span>

          <a
            href="mailto:contato@acsleditora.com.br"
            className="text-gold hover:text-gold-light uppercase transition-colors whitespace-nowrap"
          >
            contato@acsleditora.com.br
          </a>
        </div>
      </div>

      {/* Barra de navegação principal */}
      <nav className="bg-white border-b border-border relative">
        <div className="max-w-310 mx-auto flex items-center justify-between px-4 md:px-10 py-4">
          <Link href="/" className="relative block h-10 w-[140px] shrink-0">
            <Image
              src="/assets/logo-acsl.png"
              alt="ACSL Editora"
              fill
              priority
              sizes="140px"
              className="object-contain"
            />
          </Link>

          {/* Links — só desktop */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-ink">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "border-b-2 border-gold pb-1"
                      : "text-muted hover:text-ink transition-colors pb-1 border-b-2 border-transparent"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Botão "Publique" — só desktop (no mobile ele mora dentro do menu) */}
          <div className="hidden md:inline-flex">
            <Button href="/contact#formulario-contato" variant="primary">
              Publique
            </Button>
          </div>

          {/* Botão hambúrguer — só mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Painel de navegação mobile */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-50">
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`min-h-[44px] flex items-center px-2 rounded-[2px] text-base font-medium
                      ${isActive ? "text-ink bg-surface-panel" : "text-muted"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-2">
                <Button href="/contact#formulario-contato" variant="primary">
                  Publique
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
