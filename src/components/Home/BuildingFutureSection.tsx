"use client";

import { Book, Users, Waypoints } from "lucide-react";
import { motion } from "motion/react"; 

export default function BuildingFutureSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 md:px-16 xl:px-32 space-y-10 py-10">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-3xl md:text-4xl font-semibold text-center"
      >
        Construindo o Futuro Digital de Moçambique
      </motion.h2>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center text-sm md:text-base max-w-4xl"
      >
        Nossa comunidade está dedicada a capacitar jovens moçambicanos com
        habilidades essenciais em cibersegurança, promovendo um ambiente digital
        mais seguro e criando oportunidades para a próxima geração.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 lg:gap-10">
        {/* Card 1 */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-zinc-800 w-full max-w-sm rounded-2xl p-6 flex flex-col space-y-3 text-center"
        >
          <div className="bg-red-500 text-black rounded-full size-14 flex items-center justify-center mx-auto">
            <Book className="size-8" />
          </div>
          <h3 className="text-white text-lg font-medium">Aprender</h3>
          <p className="text-sm text-zinc-400">
            Cursos, workshops e recursos educacionais para desenvolver
            habilidades em cibersegurança, desde o nível básico até o avançado.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-zinc-800 w-full max-w-sm rounded-2xl p-6 flex flex-col space-y-3 text-center"
        >
          <div className="bg-red-500 text-black rounded-full size-14 flex items-center justify-center mx-auto">
            <Users className="size-8" />
          </div>
          <h3 className="text-white text-lg font-medium">Competir</h3>
          <p className="text-sm text-zinc-400">
            Desafios e competições para testar suas habilidades, ganhar
            reconhecimento e preparar-se para competições internacionais.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-zinc-800 w-full max-w-sm rounded-2xl p-6 flex flex-col space-y-3 text-center"
        >
          <div className="bg-red-500 text-black rounded-full size-14 flex items-center justify-center mx-auto">
            <Waypoints className="size-8" />
          </div>
          <h3 className="text-white text-lg font-medium">Conectar</h3>
          <p className="text-sm text-zinc-400">
            Construa uma rede de contatos com profissionais e entusiastas,
            participe de eventos e encontre oportunidades de carreira.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
