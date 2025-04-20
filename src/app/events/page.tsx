import HeroSection from "@/components/Events/HeroSection";
import PopularEventsSection from "@/components/Events/PopularEventsSection";

export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white py-20 px-20">
        <HeroSection/>
        <PopularEventsSection/>
    </div>
  );
}
