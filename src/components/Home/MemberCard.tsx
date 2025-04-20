"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { Instagram, Linkedin } from "lucide-react";

interface MemberCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export default function MemberCard({
  image,
  name,
  description,
  isActive,
  onClick,
}: MemberCardProps) {
  return (
    <motion.div
      onMouseEnter={onClick}
      className={`relative cursor-pointer transition-all duration-500 overflow-hidden ${
        isActive ? "w-96" : "w-28"
      } h-96`}
      animate={{ flexGrow: isActive ? 1 : 0 }}
    >
      <Image src={image} alt={name} fill className="object-cover" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between absolute bottom-0 bg-black/80 text-white p-4 w-full"
      >
        <div className="">
          <h3 className="text-xl">{name}</h3>
          <p className="text-red-500">{description}</p>
        </div>
        <div className="flex">
          <a
            href="#"
            className="text-white hover:text-red-500 transition-colors duration-300 mr-2"
          >
            <Instagram size={30} />
          </a>
          <a
            href="#"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <Linkedin size={30} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
