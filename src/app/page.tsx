
import ForvibePointSection from "@/components/sections/ForvibePointSection/ForvibePointSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection/BenefitsSection";
import LogisticsSection from "@/components/sections/LogisticsSection/LogisticsSection";
import BoosterSection from "@/components/sections/BoosterSection/BoosterSection";
import SupportSection from "@/components/sections/SupportSection/SupportSection";
import FaqSection from "@/components/sections/FaqSection/FaqSection";
import ClientFlowSection from "@/components/sections/ClientFlowSection/ClientFlowSection";
import MarketingPlanSection from "@/components/sections/MarketingPlanSection/MarketingPlanSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ForvibePointSection />
      <BenefitsSection />
      <MarketingPlanSection />
      <ClientFlowSection />
      <LogisticsSection />
      <BoosterSection />
      <SupportSection />
      <FaqSection />
    </>
  );
}
