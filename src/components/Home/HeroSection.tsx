"use client";
import Image from "next/image";
import herosection from "@/assets/herosection.svg";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="h-full flex items-center justify-center  w-full flex-col text-center space-y-4 mt-20">
      <motion.div
        initial={{  opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-1 px-2 text-xs bg-white text-black rounded-full"
      >
        <p>MozCyber Community 2025</p>
      </motion.div>
      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-6xl bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text px-48 leading-20"
      >
        Capacitando a próxima geração de especialistas em cibersegurança em
        Moçambique!
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
      >
        Aprende, Compete e Conecta-te com os Melhores na Área de Cibersegurança!
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-center justify-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white bg-red px-8 py-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600"
        >
          Junte se a comunidade
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-black bg-red px-8 py-2 rounded-3xl text-sm bg-white hover:bg-zinc-100"
        >
          Saiba mais
        </motion.button>
        <button />
      </motion.div>
      <Image
        src={herosection}
        alt="Hero Section"
        width={1000}
        height={1000}
        className="absolute pointer-events-none"
      />
    </div>
  );
}
