"use client";
import { motion } from "motion/react";
import { events } from "@/data/events";
import CardEvent from "@/components/Home/CardEvent";

export default function PopularEventsSection() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-36 py-10 space-y-10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text"
      >
        Eventos da MozCyber
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-sm sm:text-base md:text-lg bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text"
      >
        Não perca nossos principais eventos que estão chegando.
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
            transition={{ duration: 0.6, delay: index * 0.2 }}>
            <CardEvent {...event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
