import HeroSection from "@/components/About-Us/HeroSection";
import MissionSection from "@/components/About-Us/MissionSection";
import QuestionsSection from "@/components/About-Us/QuestionsSection";
import ValuesSection from "@/components/About-Us/ValuesSection";
import VisionSection from "@/components/About-Us/VisionSection";

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white px-4 md:px-10 py-20 space-y-16">
          <HeroSection/>
          <MissionSection/>
          <VisionSection/>
          <ValuesSection/>
          <QuestionsSection/>
        </main>    
  );
}
