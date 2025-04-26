"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MemberCard from "@/components/Home/MemberCard";
import Image from "next/image";
import eventssection from "@/assets/eventssection.svg";
import { members } from "@/data/members";
import MemberCardMobile from "@/components/Home/MemberCardMobile";

export default function CoreTeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-10 lg:px-20 w-full space-y-6 overflow-hidden">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
      >
        Core Team
      </motion.h1>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base md:text-lg text-center max-w-3xl"
      >
        Conheça a equipa da MozCyber
      </motion.p>

      <div className="md:hidden w-full">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {members.map((member, index) => (
            <MemberCardMobile
              key={index}
              image={member.image}
              name={member.name}
              description={member.description}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </motion.div>
      </div>
      <div className="hidden md:block w-full">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-stretch overflow-x-auto space-x-2 py-4 scrollbar-thin scrollbar-thumb-zinc-700"
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
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </motion.div>
      </div>

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