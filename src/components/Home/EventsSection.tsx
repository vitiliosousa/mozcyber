"use client";

import { motion } from "motion/react";
import Image from "next/image";
import eventssection from "@/assets/eventssection.svg";
import CardEvent from "@/components/Home/CardEvent";
import { events } from "@/data/events";
import { useRouter } from "next/navigation";

export default function EventsSection() {
  const router = useRouter();

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-36 py-10 space-y-10 overflow-hidden">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
      >
        Eventos em destaque
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CardEvent {...event} />
          </motion.div>
        ))}
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        onClick={() => router.push("/events")}
        className="text-white px-8 py-2 w-full sm:w-60 rounded-3xl text-sm bg-red-500 hover:bg-red-600"
      >
        Ver todos os eventos
      </motion.button>
      <Image
        src={eventssection}
        alt="Fundo decorativo"
        width={1000}
        height={1000}
        className="absolute pointer-events-none "
      />
    </div>
  );
}
