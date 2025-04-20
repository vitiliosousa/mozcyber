import Image from "next/image";
import mozcyberlogo from "@/assets/mozcyberlogo.svg";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between h-20 px-10 text-sm bg-black border-t-1 border-t-zinc-950">
      <Image
        src={mozcyberlogo}
        alt="MozCyber Logo"
        width={80}
        className="object-contain"
      />
      <div className="space-x-10 flex items-center justify-center text-white">
        <a
          href="#"
          className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
        >
          Termos de uso
        </a>
        <a
          href="#"
          className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
        >
          Politicas de privacidade
        </a>
        <a
          href="#"
          className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
        >
          Contacto
        </a>
      </div>
      <p className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text">
        © 2025 Mozcyber Todos os direitos reservados.
      </p>
    </footer>
  );
}
