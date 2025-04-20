'use client'
import Image from "next/image";
import { motion } from "motion/react";
import mission from "@/assets/mission.svg";

export default function MissionSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 md:px-20 lg:px-32 py-10 space-y-10 lg:space-y-0 lg:space-x-12">
      <Image
        src={mission}
        alt="mission"
        width={500}
        height={400}
        className="w-64 sm:w-80 lg:w-[500px] h-auto rounded-3xl"
      />
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <motion.h2
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold"
        >
          Nossa Missão
        </motion.h2>
        <motion.p
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base"
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
          className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base"
        >
          Acreditamos que a segurança digital é um direito fundamental e que o
          desenvolvimento de habilidades nesta área é essencial para o
          crescimento tecnológico do país.
        </motion.p>
      </div>
    </div>
  );
}
