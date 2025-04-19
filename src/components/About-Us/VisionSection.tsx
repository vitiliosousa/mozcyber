'use client'
import Image from "next/image";
import { motion } from "motion/react";
import vision from "@/assets/vision.svg";

export default function VisionSection() {
  return (
    <div className="flex items-center justify-between px-32 pb-20">
      <div className="w-1/2 space-y-2">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold"
        >
          Visão Missão
        </motion.h2>
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text"
        >
          Ser reconhecida como a principal referência em formação e desenvolvimento de talentos em cibersegurança na África Austral, contribuindo para um ecossistema digital mais seguro e para a inclusão de Moçambique no mapa global da tecnologia.
        </motion.p>
        
      </div>
      <Image
        src={vision}
        width={500}
        height={400}
        alt="vision"
        className=" size-80 rounded-4xl"
      />
    </div>
  );
}
