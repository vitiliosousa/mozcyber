import HeroSection from "@/components/Home/HeroSection";
import EventsSection from "@/components/Home/EventsSection";
import CoreTeamSection from "@/components/Home/CoreTeamSection";
import TestemonialsSection from "@/components/Home/TestemonialsSection";
import PartnerSection from "@/components/Home/PartnerSection";
import BuildingFutureSection from "@/components/Home/BuildingFutureSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white px-4 md:px-10 py-20 space-y-16">
      <HeroSection />
      <EventsSection />
      <BuildingFutureSection />
      <TestemonialsSection />
      <CoreTeamSection />
      <PartnerSection />
    </main>
  );
}
