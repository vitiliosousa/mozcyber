import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";


interface MemberCardMobileProps {
  image: StaticImageData;
  name: string;
  description: string;
  instagram?: string;
  linkedin?: string;
}


export default function MemberCardMobile({ image, name, description, instagram, linkedin }: MemberCardMobileProps) {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-full">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium">{name}</h3>
              <p className="text-red-500 text-sm">{description}</p>
            </div>
            <div className="flex">
              <a href={instagram} className="text-white hover:text-red-500 transition-colors duration-300 mr-2">
                <Instagram size={16} />
              </a>
              <a href={linkedin} className="text-white hover:text-red-500 transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}