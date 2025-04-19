'use client'
import Image from "next/image";
import mozdevz from "@/assets/mozdevz.svg";
import logo_cyber_labs from "@/assets/logo_cyber_labs.png";
import empire_master_logo from "@/assets/empire-master-logo.png";
import { motion } from "motion/react";
import eventssection from "@/assets/eventssection.svg";

export default function PartnerSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-32 space-y-4 py-20">
      <motion.h1
      initial={{ y: 40, opacity: 0 }}
      whileInView={{y:0, opacity:1}}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold">
        Parceiros e Patrocinadores
      </motion.h1>
      <motion.p
      initial={{y:40, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8}}
      viewport={{once:true, amount:0.3}}
      className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text  text-center">
        Parceiros e patrocinadores que nos apoiam na organização de eventos,
        workshops e projectos que ajudam a impulsionar o desenvolvimento da
        comunidade
      </motion.p>
      <motion.div
      initial={{y:40, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8}}
      viewport={{once:true, amount:0.3}}
      className="flex items-center justify-center gap-20">
        <Image
          src={mozdevz}
          alt="Mozdevz"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={logo_cyber_labs}
          alt="Mozdevz"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={empire_master_logo}
          alt="Mozdevz"
          width={200}
          height={200}
          className="object-contain"
        />  
      </motion.div>
      <Image
        src={eventssection}
        alt="Hero Section"
        width={1000}
        height={1000}
        className="absolute pointer-events-none"
      />
    </div>
  );
}
