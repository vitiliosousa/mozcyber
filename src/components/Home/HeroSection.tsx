"use client";
import Image from "next/image";
import herosection from "@/assets/herosection.svg";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center w-full text-center mt-20  space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-1 px-3 text-xs bg-white text-black rounded-full"
      >
        <p>MozCyber Community 2025</p>
      </motion.div>

      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text max-w-4xl leading-tight"
      >
        Capacitando a próxima geração de especialistas em cibersegurança em Moçambique!
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-sm sm:text-base md:text-lg bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text max-w-2xl"
      >
        Aprende, Compete e Conecta-te com os Melhores na Área de Cibersegurança!
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "https://linktr.ee/mozcyber"}
          className="text-white px-8 w-full md:w-60 py-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600"
        >
          Junte-se à comunidade
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/about-us')}
          className="text-black px-8 py-2 w-full md:w-40 rounded-3xl text-sm bg-white hover:bg-zinc-300"
        >
          Saiba mais
        </motion.button>
      </motion.div>

      <Image
        src={herosection}
        alt="Hero Section"
        width={1000}
        height={1000}
        className="absolute  pointer-events-none -z-0"
      />
    </div>
  );
}
