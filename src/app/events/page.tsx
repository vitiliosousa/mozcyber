import HeroSection from "@/components/Events/HeroSection";
import PopularEventsSection from "@/components/Events/PopularEventsSection";

export default function Events() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-black text-white px-4 md:px-10 py-20 space-y-16">
        <HeroSection/>
        <PopularEventsSection/>
    </main>
  );
}
