import ServicesHero from "../organism/ServicesHero";
import ServicesGrid from "../organism/ServicesGrid";
import ServicesProcess from "../organism/ServicesProcess";
import ServicesCTA from "../organism/ServicesCTA";
import Footer from "../organism/Footer";

const ServicesPageTemplate = () => {
  return (
    <div className="min-h-screen bg-primary">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default ServicesPageTemplate;
