"use client";
import { motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { socialmedia } from "@/data/socialmedia";

export default function FormSection() {
  return (
    <div className="h-full flex items-center justify-center w-full flex-col text-center space-y-6 mt-20 px-6 sm:px-8 md:px-16 lg:px-20">
      <div className="flex flex-col lg:flex-row h-full items-start justify-between w-full gap-12">
        <div className="w-full lg:w-1/2 h-full flex flex-col space-y-6 items-start justify-start text-left">
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text lg:text-start text-center"
          >
            Envie-nos uma mensagem
          </motion.h2>
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-center sm:text-start"
          >
            Preencha o formulário e entraremos em contacto o mais breve
            possível. Sua mensagem é importante para nós.
          </motion.p>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-sm text-zinc-300"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              <span>+258 84 040 1358</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" />
              <span>+258 84 373 0048</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />
              <span>mozcyber.community@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Maputo, Moçambique</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-4 pt-4"
          >
            {socialmedia.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-red-500 transition-colors"
                >
                  <social.image />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.form
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          action=""
          className="flex flex-col space-y-4 w-full lg:w-1/2 bg-zinc-900 p-6 rounded-2xl"
        >
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 flex flex-col items-start text-sm space-y-2">
              <label className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Nome Completo
              </label>
              <Input
                type="text"
                placeholder="Alfredo Ferreira"
                className="h-12"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col items-start text-sm space-y-2">
              <label className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
                Email
              </label>
              <Input
                type="email"
                placeholder="alfredo.ferreira@gmail.com"
                className="h-12"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-start text-sm space-y-2">
            <label className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Assunto
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Assunto</SelectLabel>
                  <SelectItem value="suporte">Suporte Geral</SelectItem>
                  <SelectItem value="parcerias">Parcerias</SelectItem>
                  <SelectItem value="educacao">Educação e Formação</SelectItem>
                  <SelectItem value="competicoes">Competições</SelectItem>
                  <SelectItem value="outro">Outro Assunto</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full flex flex-col items-start text-sm space-y-2">
            <label className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
              Mensagem
            </label>
            <Textarea
              placeholder="Escreva sua mensagem aqui..."
              className="h-40"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <button className="bg-red-500 w-full text-sm px-4 py-2 rounded-lg">
              Enviar Mensagem
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
