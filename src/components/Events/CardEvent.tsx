import { Calendar, MapPin, Clock } from "lucide-react";

import Image from "next/image";

interface CardEventProps {
    image: string;
    title: string;
    date: string;
    location: string;
    url: string;
  }
export default function CardEvent({ image, title, date, location, url }: CardEventProps) {
  
    return (
    <div className="">
      <Image src={image} alt="" className="rounded-2xl" />
      <div className="mt-2 space-y-1">
        <h1 className="text-xl">{title}</h1>
        <div className="flex gap-2 items-center justify-start">
          <Calendar className="text-zinc-400 size-4" />
          <p className="text-sm bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text">
            {date}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-start">
          <MapPin className="text-zinc-400 size-4" />
          <p className="text-sm bg-gradient-to-br from-zinc-200 to-zinc-400  text-transparent bg-clip-text">
            {location}
          </p>
        </div>
        <button className="bg-white text-black px-4 text-sm rounded-xl">Sobre</button>
      </div>
    </div>
  );
}
