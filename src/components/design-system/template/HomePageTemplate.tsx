import Stats from "@/components/design-system/organism/Stats";
import LandingBanner from "../organism/LandingBanner";
import TechnologiesSection from "../organism/TechnologySection";
import ProjectsSection from "../organism/ProjectsSection";
import TestimonialsSection from "../organism/TestimonialSection";
import Footer from "../organism/Footer";

const HomePageTemplate = () => {
  return (
    <section className="h-full">
      <LandingBanner />
      <Stats />
      <TechnologiesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </section>
  );
};

export default HomePageTemplate;
