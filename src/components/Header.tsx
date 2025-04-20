"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import mozcyberlogo from "@/assets/mozcyberlogo.svg";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Sobre-Nós", href: "/about-us" },
    { label: "Eventos", href: "/events" },
    { label: "Recursos", href: "/resources" },
    { label: "Contactos", href: "/contacts" },
  ];

  return (
    <header className="w-full fixed bg-black border-b border-zinc-900 text-white shadow-md z-50">
      <div className="h-20 px-6 md:px-10 flex items-center justify-between">
        <a href="/">
          <Image
            src={mozcyberlogo}
            alt="MozCyber Logo"
            width={80}
            className="object-contain"
          />
        </a>

        {/* Botão Hamburger Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "text-red-500"
                  : "bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text hover:text-red-500"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => (window.location.href = "https://linktr.ee/mozcyber")}
          className="hidden md:block text-white px-6 py-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600 transition-all"
        >
          Participar
        </button>
      </div>

      {/* Navegação Mobile (dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden h-screen flex flex-col gap-4 px-6 pb-6 bg-black border-t border-zinc-800">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 transition-colors duration-300 ${
                pathname === item.href ? "text-red-500" : "text-zinc-300 hover:text-red-500"
              }`}
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.location.href = "https://linktr.ee/mozcyber";
            }}
            className="w-full text-white py-2 mt-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600 transition-all"
          >
            Participar
          </button>
        </div>
      )}
    </header>
  );
}
