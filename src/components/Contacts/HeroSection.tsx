"use client";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="h-full flex items-center justify-center  w-full flex-col text-center space-y-4 mt-20 px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-1 px-2 text-xs bg-white text-black rounded-full"
      >
        <p>Contactos</p>
      </motion.div>
      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-6xl bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text px-48 leading-20"
      >
        Entre em Contacto Connosco
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
      >
        Estamos aqui para responder às suas perguntas, ouvir suas sugestões e construir uma comunidade mais forte de cibersegurança em Moçambique.
      </motion.h2>
    </div>
  );
}
