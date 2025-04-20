'use client'
import Image from "next/image";
import mozdevz from "@/assets/mozdevz.svg";
import logo_cyber_labs from "@/assets/logo_cyber_labs.png";
import empire_master_logo from "@/assets/empire-master-logo.png";
import { motion } from "motion/react";
import eventssection from "@/assets/eventssection.svg";

export default function PartnerSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6 sm:px-12 md:px-32 space-y-6 py-10 relative overflow-hidden">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
      >
        Parceiros e Patrocinadores
      </motion.h1>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base text-center max-w-3xl"
      >
        Parceiros e patrocinadores que nos apoiam na organização de eventos,
        workshops e projectos que ajudam a impulsionar o desenvolvimento da
        comunidade
      </motion.p>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-8 w-full max-w-6xl"
      >
        <Image
          src={mozdevz}
          alt="Mozdevz"
          className="w-24 sm:w-32 md:w-40 h-auto object-contain"
        />
        <Image
          src={logo_cyber_labs}
          alt="Cyber Labs"
          className="w-24 sm:w-32 md:w-40 h-auto object-contain"
        />
        <Image
          src={empire_master_logo}
          alt="Empire Master"
          className="w-24 sm:w-32 md:w-40 h-auto object-contain"
        />
      </motion.div>

      <Image
        src={eventssection}
        alt="Hero Section"
        width={1000}
        height={1000}
        className="absolute bottom-0 pointer-events-none -z-10"
      />
    </div>
  );
}
