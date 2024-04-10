import CompaniesSection from "@/components/CompaniesSection";
import ConnectIdeaSection from "@/components/ConnectIdeaSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OfferingSection from "@/components/OfferingSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import WorkingsSection from "@/components/WorkingsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <CompaniesSection />
      <OfferingSection />
      <ConnectSection />
      <TestimonialSection />
      <PricingSection />
      <WorkingsSection />
      <ConnectIdeaSection />
      <Footer />
    </main>
  );
}
