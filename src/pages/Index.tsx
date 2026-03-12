import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import EquipeSection from "@/components/EquipeSection";
import EvenementsSection from "@/components/EvenementsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <ValuesSection />
      <ProgrammeSection />
      <EquipeSection />
      <EvenementsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
