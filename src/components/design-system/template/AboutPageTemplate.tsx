import AboutHero from "@/components/design-system/organism/AboutHero";
import ServicesSection from "@/components/design-system/organism/ServicesSection";
import TeamSection from "@/components/design-system/organism/TeamSection";
import CompanyMissionSection from "@/components/design-system/organism/CompanyMissionSection";
import Footer from "@/components/design-system/organism/Footer";

const AboutPageTemplate = () => {
  return (
    <section className="h-full">
      <AboutHero />
      <CompanyMissionSection />
      <ServicesSection />
      <TeamSection />
      <Footer />
    </section>
  );
};

export default AboutPageTemplate;
