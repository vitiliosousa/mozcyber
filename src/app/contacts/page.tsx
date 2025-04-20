import FormSection from "@/components/Contacts/FormSection";
import HeroSection from "@/components/Contacts/HeroSection";

export default function Contacts() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white px-4 md:px-10 py-20 space-y-16">
        <HeroSection/>
        <FormSection/>
    </main>
  );
}
