import Image from "next/image";
import mozcyberlogo from "@/assets/mozcyberlogo.svg";
import {socialmedia} from "@/data/socialmedia";

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
        {socialmedia.map((social, index) => {
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-red-500 transition-colors"
            >
              <social.image />
            </a>
          );
        })}
      </div>

      <p className="text-center text-xs bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
        © 2025 Mozcyber. Todos os direitos reservados.
      </p>
    </footer>
  );
}
