'use client'
import Image from "next/image";
import { motion } from "motion/react";
import mission from "@/assets/mission.svg";

export default function MissionSection() {
  return (
    <div className="flex items-center justify-between px-32 py-20">
      <Image
        src={mission}
        width={500}
        height={400}
        alt="mission"
        className=" size-80 rounded-4xl"
      />
      <div className="w-1/2 space-y-2">
        <motion.h2
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold"
        >
          Nossa Missão
        </motion.h2>
        <motion.p
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text"
        >
          A Mozcyber nasceu com a missão de democratizar o conhecimento em
          cibersegurança em Moçambique, capacitando jovens talentos para
          enfrentar os desafios digitais do século XXI.
        </motion.p>
        <motion.p
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text"
        >
          Acreditamos que a segurança digital é um direito fundamental e que o
          desenvolvimento de habilidades nesta área é essencial para o
          crescimento tecnológico do país.
        </motion.p>
      </div>
    </div>
  );
}
