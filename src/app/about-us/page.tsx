import HeroSection from "@/components/About-Us/HeroSection";
import MissionSection from "@/components/About-Us/MissionSection";
import QuestionsSection from "@/components/About-Us/QuestionsSection";
import ValuesSection from "@/components/About-Us/ValuesSection";
import VisionSection from "@/components/About-Us/VisionSection";

export default function AboutUs() {
  return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white py-20 px-20" >
          <HeroSection/>
          <MissionSection/>
          <VisionSection/>
          <ValuesSection/>
          <QuestionsSection/>
        </div>    
  );
}
