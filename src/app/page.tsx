import HeroSection from "@/components/Home/HeroSection";
import EventsSection from "@/components/Home/EventsSection";
import CoreTeamSection from "@/components/Home/CoreTeamSection";
import TestemonialsSection from "@/components/Home/TestemonialsSection";
import PartnerSection from "@/components/Home/PartnerSection";
import BuildingFutureSection from "@/components/Home/BuildingFutureSection";

export default function Home() {
  return (
    <div
    className="flex flex-col items-center justify-center w-full h-full bg-black text-white py-20" >
        <HeroSection/>
        <EventsSection/>
        <BuildingFutureSection/>
        <TestemonialsSection/>
        <CoreTeamSection/>
        <PartnerSection/>
    </div>
  );
}
