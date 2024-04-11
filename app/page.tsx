import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import ConnectSection from "@/components/ConnectSection";
import OfferingSection from "@/components/OfferingSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import WorkingsSection from "@/components/WorkingsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <ContactSection />
      <Footer />
    </main>
  );
}
