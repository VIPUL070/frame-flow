import HeroSection from "../components/home/HeroSection";
import PerformanceSection from "@/components/home/PerformanceSection";
import PricingSection from "@/components/home/PricingSection";
import WorkflowSteps from "@/components/home/WorkflowSteps";
import FaqSection from "@/components/home/FaqSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WorkflowSteps />
      <PerformanceSection />
      <PricingSection />
      <FaqSection />
    </>
  );
};

export default Home;