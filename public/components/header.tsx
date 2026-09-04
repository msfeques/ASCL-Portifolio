"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./button";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/about-us", label: "Sobre nós" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <header>
      {/* Barra superior escura */}
      <div className="bg-ink text-white text-[11px] font-mono tracking-widest">
        <div className="max-w-310 mx-auto flex justify-between items-center px-10 py-2">
          <span className="uppercase">ACSL EDITORAÇÃO ELETRÔNICA E REVISTA BRASIL EM FOCO LEVANDO INFORMAÇÃO DESDE DE 2006</span>

          <a
            href="mailto:contato@acsleditora.com.br"
            className="text-gold hover:text-gold-light uppercase transition-colors"
          >
            contato@acsleditora.com.br
          </a>
        </div>
      </div>

      {/* Barra de navegação principal */}
      <nav className="bg-white border-b border-border">
        <div className="max-w-310 mx-auto flex items-center justify-between px-10 py-4">
          <Link href="/" className="relative block h-10 w-[140px]">
            <Image
              src="/assets/logo-acsl.png"
              alt="ACSL Editora"
              fill
              priority
              sizes="140px"
              className="object-contain"
            />
          </Link>

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

          <Button href="/contact#formulario-contato" variant="primary">
            Publique
          </Button>
        </div>
      </nav>
    </header>
  );
}
