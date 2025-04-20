"use client";

import { useState } from "react";
import { motion } from "motion/react";
import MemberCard from "@/components/Home/MemberCard";
import Image from "next/image";
import eventssection from "@/assets/eventssection.svg";
import { members } from "@/data/members";

export default function CoreTeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full space-y-6 overflow-hidden">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold">
        Core Team
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
        Conheça a equipa por trás dos diversos feitos da MozCyber
      </motion.p>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-stretch overflow-x-auto space-x-1"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            description={member.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </motion.div>
      <Image
        src={eventssection}
        alt="Fundo decorativo"
        width={1000}
        height={1000}
        className="absolute pointer-events-none"
      />
    </div>
  );
}
