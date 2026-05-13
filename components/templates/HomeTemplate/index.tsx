import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  Navbar,
  PricingSection,
  ServicesSection,
  WorksSection,
} from "@/components/organisms";

const HomeTemplate = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
