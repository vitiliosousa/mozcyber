"use client";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="h-full flex items-center justify-center w-full flex-col text-center space-y-6 mt-20 px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-1 px-3 text-xs bg-white text-black rounded-full"
      >
        <p>Eventos</p>
      </motion.div>
      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text px-4 sm:px-16 md:px-48 leading-10 sm:leading-14 md:leading-20"
      >
        Participe dos Nossos Eventos
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
      >
        Workshops, competições, conferências e encontros para aprender, competir e conectar-se com a comunidade de cibersegurança.
      </motion.h2>
      
    </div>
  );
}
