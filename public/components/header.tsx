"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
        <div className="max-w-[1240px] mx-auto flex justify-between items-center px-10 py-2">
          <span className="uppercase">
            Editoração eletrônica desde 2005
          </span>

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
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-10 py-4">
          <Link href="/">
            <Image
              src="/assets/logo-acsl.png"
              alt="ACSL Editora"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
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

          <button className="bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-6 py-2.5 rounded transition-colors">
            Publicar
          </button>
        </div>
      </nav>
    </header>
  );
}
