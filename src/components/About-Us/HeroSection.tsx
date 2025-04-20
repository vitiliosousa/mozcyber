"use client";
import { motion } from "motion/react";
import Image from "next/image";
import team from "@/assets/team.svg";
import herosection from "@/assets/herosection.svg";

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
        <p>Sobre-Nós</p>
      </motion.div>

      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text leading-tight max-w-4xl"
      >
        Protegendo o futuro digital em Moçambique!
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base max-w-2xl"
      >
        Conheça a história, missão e os valores por trás da melhor comunidade de cibersegurança de Moçambique.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-center justify-center w-full max-w-5xl"
      >
        <Image
          src={team}
          alt="team"
          className="rounded-3xl w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
}
