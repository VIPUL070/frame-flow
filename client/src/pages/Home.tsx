import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import PerformanceSection from "@/components/home/PerformanceSection";
import PricingSection from "@/components/home/PricingSection";
import WorkflowSteps from "@/components/home/WorkflowSteps";
import FaqSection from "@/components/home/FaqSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-canvas p-1.5 sm:p-4 lg:p-6">
      <div className="relative mx-auto p-2.5 max-w-350 overflow-hidden rounded-2xl bg-surface shadow-card">
        <Navbar />
        <main>
          <HeroSection />
          <WorkflowSteps />
          <PerformanceSection />
          <PricingSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;