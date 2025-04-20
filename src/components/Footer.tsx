import Image from "next/image";
import mozcyberlogo from "@/assets/mozcyberlogo.svg";

import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-6 bg-black border-t border-zinc-800 gap-4 text-sm">
      <Image
        src={mozcyberlogo}
        alt="MozCyber Logo"
        width={80}
        className="object-contain"
      />

      <div className="flex items-center gap-6 text-white">
        <a
          href="https://linkedin.com/company/mozcyber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/mozcyber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://instagram.com/mozcyber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-pink-400 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/company/mozcyber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-red-600 transition-colors"
        >
          <Youtube className="w-5 h-5" />
        </a>
      </div>

      <p className="text-center text-xs bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
        © 2025 Mozcyber. Todos os direitos reservados.
      </p>
    </footer>
  );
}
