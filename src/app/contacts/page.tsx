import FormSection from "@/components/Contacts/FormSection";
import HeroSection from "@/components/Contacts/HeroSection";

export default function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black text-white py-20 px-20">
        <HeroSection/>
        <FormSection/>
    </div>
  );
}
