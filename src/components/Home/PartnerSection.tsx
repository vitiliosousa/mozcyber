'use client'
import Image from "next/image";
import { motion } from "motion/react";
import eventssection from "@/assets/eventssection.svg";
import { partners } from "@/data/partners";

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
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Image
              src={partner.image}
              alt={partner.title}
              className="w-24 sm:w-32 md:w-40 h-auto object-contain"
            />
          </motion.div>
        ))}
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
