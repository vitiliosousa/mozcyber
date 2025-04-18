'use client'
import hackonwednesdayevent from "@/assets/hackonwednesdayevent.svg";
import meetthegoatevent from "@/assets/meetthegoatevent.svg";
import nighthackevent from "@/assets/nighthackevent.svg";
import { useState } from "react";
import { motion } from "motion/react";
import MemberCard from "./MemberCard";

const members = [
    {
      name: "Walter Cumbucane",
      description: "Team Leader",
      image: nighthackevent,
    },
    {
      name: "Fabio White",
      description: "Co Leader",
      image: meetthegoatevent,
    },
    {
      name: "Vitilio Sousa",
      description: "Software Developer & Designer",
      image: hackonwednesdayevent,
    },
    {
      name: "Elton Nhaca",
      description: "Tech Specialist",
      image: nighthackevent,
    },
    {
        name: "Muthimbane Langa",
        description: "Tech Specialist",
        image: meetthegoatevent,
      },
      {
        name: "Patricio Mavume",
        description: "Tech Specialist",
        image: hackonwednesdayevent,
      }
  ];


export default function CoreTeamSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full space-y-6 overflow-hidden">
      <h1 className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text text-4xl font-semibold">
        Core Team
      </h1>
      <p className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
        Conheça a equipa por trás dos diversos feitos da MozCyber
      </p>

      <div className="flex items-stretch overflow-x-auto space-x-1" 
      /*onMouseLeave={() => setActiveIndex(null)}*/ >
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            description={member.description}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
