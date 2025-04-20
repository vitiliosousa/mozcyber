import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface CardEventProps {
  image: string;
  title: string;
  date: string;
  location: string;
  url: string;
}

export default function CardEvent({
  image,
  title,
  date,
  location,
  url,
}: CardEventProps) {
  return (
    <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-md transition hover:shadow-lg">
      <div className="w-full h-48 sm:h-56 md:h-64 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 space-y-3">
        <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>

        <div className="flex gap-2 items-center text-sm text-zinc-400">
          <Calendar className="size-4" />
          <span className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
            {date}
          </span>
        </div>

        <div className="flex gap-2 items-center text-sm text-zinc-400">
          <MapPin className="size-4" />
          <span className="bg-gradient-to-br from-zinc-200 to-zinc-400 text-transparent bg-clip-text">
            {location}
          </span>
        </div>

        <a
          href={url}
          rel="noopener noreferrer"
          className="inline-block w-full text-center mt-2 bg-white text-black px-4 py-2 text-sm rounded-xl hover:bg-zinc-300 transition"
        >
          Saber mais
        </a>
      </div>
    </div>
  );
}
