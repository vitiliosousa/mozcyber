"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import mozcyberlogo from "@/assets/mozcyberlogo.svg";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Sobre-Nós", href: "/about-us" },
    { label: "Eventos", href: "/events" },
    { label: "Recursos", href: "/resources" },
    { label: "Contactos", href: "/contacts" },
  ];

  return (
    <header className="w-full h-20 fixed bg-black border-b border-zinc-900 text-white flex items-center justify-between px-10 shadow-md z-50">
      <div>
        <Image
          src={mozcyberlogo}
          alt="MozCyber Logo"
          width={80}
          className="object-contain"
        />
      </div>
      <nav className="flex items-center gap-10 text-sm">
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
        className="text-white px-8 py-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600 transition-all"
      >
        Participar
      </button>
    </header>
  );
}
