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
    <div className="flex flex-col space-y-6 items-center justify-between px-32 py-20 w-full">
      <motion.h2
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      className="text-4xl font-semibold bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
        Perguntas Frequentes
      </motion.h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-lg">Como posso me tornar membro da Mozcyber?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
            Para se tornar membro, basta entrar em nossos canais de comunicação, como o WhatsApp. Você também pode participar de nossos eventos e workshops para conhecer a comunidade.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-lg">Quais são os requisitos para participar das competições?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
          Os requisitos variam de acordo com a competição. Algumas competições são abertas a todos os níveis de habilidade, enquanto outras podem ter categorias específicas para iniciantes, intermediários e avançados. Todas as informações específicas são divulgadas na página de cada evento.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-lg">Como posso propor uma parceria com a CyberMoz?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
          Para propor uma parceria, você pode entrar em contacto através do email mozcyber.community@gmail.com ou preencher o formulário de contacto, selecionando "Parcerias" como assunto. Nossa equipe analisará sua proposta e entrará em contacto para discutir os detalhes. Valorizamos colaborações que possam fortalecer o ecossistema de cibersegurança em Moçambique.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-lg">Vocês têm programas para escolas ou universidades?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
          Sim, temos programas específicos para instituições educacionais. Oferecemos palestras, workshops e competições adaptadas para diferentes níveis educacionais. Também ajudamos a estabelecer clubes de cibersegurança em escolas e universidades. Entre em contacto conosco para discutir como podemos colaborar com sua instituição.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
