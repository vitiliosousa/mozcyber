'use client'
import Image from "next/image";
import testemonialssection from "@/assets/testemonialssection.svg";
import { motion } from "motion/react";

import AnimatedTestimonialsDemo from "@/components/Home/Testemonials";
export default function TestemonialsSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold"
      >O que dizem os nossos participantes?</motion.h2>
      <AnimatedTestimonialsDemo />
      <Image
        src={testemonialssection}
        alt="Hero Section"
        width={1000}
        height={1000}
        className="absolute pointer-events-none"
      />
    </div>
  );
}
