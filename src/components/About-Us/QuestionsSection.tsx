'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function QuestionsSection() {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 items-center justify-between px-4 sm:px-8 md:px-20 lg:px-32 pb-10 max-w-4xl mx-auto w-full">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center"
      >
        Perguntas Frequentes
      </motion.h2>
      
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            question: "Como posso me tornar membro da Mozcyber?",
            answer: "Para se tornar membro, basta entrar em nossos canais de comunicação, como o WhatsApp. Você também pode participar de nossos eventos e workshops para conhecer a comunidade.",
            value: "item-1",
          },
          {
            question: "Quais são os requisitos para participar das competições?",
            answer: "Os requisitos variam de acordo com a competição. Algumas competições são abertas a todos os níveis de habilidade, enquanto outras podem ter categorias específicas para iniciantes, intermediários e avançados. Todas as informações específicas são divulgadas na página de cada evento.",
            value: "item-2",
          },
          {
            question: "Como posso propor uma parceria com a CyberMoz?",
            answer: "Para propor uma parceria, você pode entrar em contacto através do email mozcyber.community@gmail.com ou preencher o formulário de contacto, selecionando 'Parcerias' como assunto. Nossa equipe analisará sua proposta e entrará em contacto para discutir os detalhes. Valorizamos colaborações que possam fortalecer o ecossistema de cibersegurança em Moçambique.",
            value: "item-3",
          },
          {
            question: "Vocês têm programas para escolas ou universidades?",
            answer: "Sim, temos programas específicos para instituições educacionais. Oferecemos palestras, workshops e competições adaptadas para diferentes níveis educacionais. Também ajudamos a estabelecer clubes de cibersegurança em escolas e universidades. Entre em contacto conosco para discutir como podemos colaborar com sua instituição.",
            value: "item-4",
          },
        ].map((item, index) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text sm:text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-sm sm:text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
