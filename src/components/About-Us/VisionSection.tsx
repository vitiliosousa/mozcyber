'use client'
import Image from "next/image";
import { motion } from "motion/react";
import vision from "@/assets/vision.svg";

export default function VisionSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 md:px-20 lg:px-32 pb-20 space-y-10 lg:space-y-0 lg:space-x-12">
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold"
        >
          Visão Missão
        </motion.h2>
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base"
        >
          Ser reconhecida como a principal referência em formação e desenvolvimento de talentos em cibersegurança na África Austral, contribuindo para um ecossistema digital mais seguro e para a inclusão de Moçambique no mapa global da tecnologia.
        </motion.p>
      </div>
      <Image
        src={vision}
        alt="vision"
        width={500}
        height={400}
        className="w-64 sm:w-80 lg:w-[500px] h-auto rounded-3xl"
      />
    </div>
  );
}
