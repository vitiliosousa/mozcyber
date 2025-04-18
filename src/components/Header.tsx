"use client";

import Image from "next/image";
import mozcyberlogo from "@/assets/mozcyberlogo.svg";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-20 fixed bg-black border-b-1 border-b-zinc-950 text-white flex items-center justify-between px-10  shadow-md z-50"
    >
      {/* Logo com leve animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Image
          src={mozcyberlogo}
          alt="MozCyber Logo"
          width={80}
          className="object-contain"
        />
      </motion.div>

      {/* Navegação com animação sequencial */}
      <motion.nav
        className="flex items-center gap-10 text-sm"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5,
            },
          },
        }}
      >
        {["Inicio", "Sobre-Nós", "Eventos", "Recursos", "Contactos"].map((item, idx) => (
          <motion.a
            key={idx}
            href={["/", "/about-us", "/events", "/resources", "/contacts"][idx]}
            className="hover:text-red-500 ease-in-out transition-colors duration-300 bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {item}
          </motion.a>
        ))}
      </motion.nav>

      {/* Botão com interação */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-white px-8 py-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600 transition-all"
      >
        Participar
      </motion.button>
    </motion.header>
  );
}
