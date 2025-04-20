"use client";
import { motion } from "motion/react";

export default function ValuesSection() {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6 items-center justify-between px-4 sm:px-8 md:px-20 lg:px-32 pb-10 max-w-4xl mx-auto">
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center"
      >
        Nossos Valores
      </motion.h2>

      <motion.p
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center text-sm sm:text-base"
      >
        Na Mozcyber, nossos valores são o alicerce de tudo o que fazemos. Eles
        nos guiam em nossa missão de capacitar jovens talentos em cibersegurança
        e moldar um futuro digital mais seguro para Moçambique.
      </motion.p>

      {[
        {
          title: "Ética Acima de Tudo",
          text: "Promovemos o uso responsável e legal do conhecimento em cibersegurança. Somos contra qualquer forma de hacking malicioso.",
        },
        {
          title: "Comunidade e Inclusão",
          text: "Todos são bem-vindos. Criamos um espaço seguro e diverso para aprender, ensinar e crescer juntos, independentemente da experiência ou background.",
        },
        {
          title: "Curiosidade e Investigação",
          text: "Incentivamos o espírito hacker: questionar, explorar e entender como as coisas funcionam — sempre com respeito e ética.",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ x: i % 2 === 0 ? 40 : -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col space-y-2 items-center justify-center text-center"
        >
          <h4 className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-lg sm:text-xl font-semibold">
            {item.title}
          </h4>
          <p className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
