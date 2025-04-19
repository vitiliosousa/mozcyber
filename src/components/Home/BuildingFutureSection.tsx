"use client";
import { Book, Users, Waypoints } from "lucide-react";
import { motion } from "motion/react";

export default function BuildingFutureSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-32 space-y-10 py-20">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold"
      >
        Construindo o Futuro Digital de Moçambique
      </motion.h2>
      <motion.p
      initial={{y:40, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.8}}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center">
        Nossa comunidade está dedicada a capacitar jovens moçambicanos com habilidades essenciais em cibersegurança, promovendo um ambiente digital mais seguro e criando oportunidades para a próxima geração. 
      </motion.p>
        <div className="flex items-center justify-center w-full h-full gap-10">
            <motion.div
            initial={{x:-40, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.8}}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-zinc-800 w-72 h-72 rounded-2xl p-6 flex flex-col space-y-1">
                <div className="bg-red-500 text-black rounded-full size-14 items-center justify-center flex">
                    <Book className="size-8"/>
                </div>
                <h3 className="text-white">Aprender</h3>
                <p className="text-sm text-zinc-400">Cursos, workshops e recursos educacionais para desenvolver habilidades em cibersegurança, desde o nível básico até o avançado.</p>
            </motion.div>
            <motion.div
            initial={{y:40, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.8}}
            viewport={{ once: true, amount: 0.3 }}
             className="bg-zinc-800 w-72 h-72 rounded-2xl p-6 flex flex-col space-y-1">
                <div className="bg-red-500 text-black rounded-full size-14 items-center justify-center flex">
                    <Users className="size-8"/>
                </div>
                <h3 className="text-white">Competir</h3>
                <p className="text-sm text-zinc-400">Desafios e competições para testar suas habilidades, ganhar reconhecimento e preparar-se para competições internacionais.</p>
            </motion.div>
            <motion.div
            initial={{x:40, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.8}}
            viewport={{ once: true, amount: 0.3 }}
             className="bg-zinc-800 w-72 h-70 rounded-2xl p-6 flex flex-col space-y-1">
                <div className="bg-red-500 text-black rounded-full size-14 items-center justify-center flex">
                    <Waypoints className="size-8"/>
                </div>
                <h3 className="text-white">Conectar</h3>
                <p className="text-sm text-zinc-400">Construa uma rede de contatos com profissionais e entusiastas, participe de eventos e encontre oportunidades de carreira.</p>
            </motion.div>
        </div>
        
    </div>
  );
}
