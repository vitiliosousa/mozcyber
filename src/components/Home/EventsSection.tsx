"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import eventssection from "@/assets/eventssection.svg";
import CardEvent from "@/components/Home/CardEvent";
import hackonwednesdayevent from "@/assets/hackonwednesdayevent.svg";
import meetthegoatevent from "@/assets/meetthegoatevent.svg";
import nighthackevent from "@/assets/nighthackevent.svg";

export default function EventsSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-32 space-y-10 relative overflow-hidden">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold"
      >
        Eventos da Mozcyber
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex items-center justify-between gap-4 w-full"
      >
        {[
          {
            image: nighthackevent,
            title: "Night Hack: First edition",
            date: "5 de Abril a 10 de maio",
            location: "ISUTC",
            url: "/events/night-hack",
          },
          {
            image: meetthegoatevent,
            title: "Meet The Goats",
            date: "Periodicamente",
            location: "Online",
            url: "/events/meet-the-goats",
          },
          {
            image: hackonwednesdayevent,
            title: "Hack On Wednesday",
            date: "Finalizado",
            location: "Online",
            url: "/events/hack-on-wednesday",
          },
        ].map((event, index) => (
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-white bg-red px-8 py-2 rounded-3xl text-sm bg-red-500 hover:bg-red-600"
      >
        Ver todos os eventos
      </motion.button>
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
