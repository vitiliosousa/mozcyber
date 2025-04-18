import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CoreTeamSection from "@/components/CoreTeamSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white">
        <HeroSection/>
        <EventsSection/>
        <CoreTeamSection/>
    </div>
  );
}
