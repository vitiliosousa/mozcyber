"use client";
import { motion } from "motion/react";
import { events } from "@/data/events";
import CardEvent from "./CardEvent";

export default function PopularEventsSection() {
  return (
    <div className="flex items-center justify-center flex-col px-32 py-20 space-y-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text font-semibold"
      >
        Eventos em Destaque
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text"
      >
        Não perca nossos principais eventos que estão chegando.
      </motion.h2>
      <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 gap-4 w-full"
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
    </div>
  );
}
