"use client";
import { motion } from "motion/react";

export default function ValuesSection() {
  return (
    <div className="flex flex-col  space-y-6 items-center justify-between px-32">
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-semibold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text"
      >
        Nossos Valores
      </motion.h2>
      <motion.p
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center"
      >
        Na Mozcyber, nossos valores são o alicerce de tudo o que fazemos. Eles
        nos guiam em nossa missão de capacitar jovens talentos em cibersegurança
        e moldar um futuro digital mais seguro para Moçambique.
      </motion.p>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col space-y-2 items-center justify-center"
      >
        <h4 className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text  text-lg font-semibold">
          Ética Acima de Tudo
        </h4>
        <p className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center">
          Promovemos o uso responsável e legal do conhecimento em
          cibersegurança. Somos contra qualquer forma de hacking malicioso.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col space-y-2 items-center justify-center"
      >
        <h4 className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text  text-lg font-semibold">
          Comunidade e Inclusão
        </h4>
        <p className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center">
          Todos são bem-vindos. Criamos um espaço seguro e diverso para
          aprender, ensinar e crescer juntos, independentemente da experiência
          ou background.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col space-y-2 items-center justify-center"
      >
        <h4 className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text  text-lg font-semibold">
          Curiosidade e Investigação
        </h4>
        <p className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center">
          Incentivamos o espírito hacker: questionar, explorar e entender como
          as coisas funcionam — sempre com respeito e ética.
        </p>
      </motion.div>
    </div>
  );
}
