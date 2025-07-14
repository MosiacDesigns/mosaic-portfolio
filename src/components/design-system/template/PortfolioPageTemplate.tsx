import PortfolioHero from "../organism/PortfolioHero";
import PortfolioGrid from "../organism/PortfolioGrid";
import PortfolioTestimonials from "../organism/PortfolioTestimonials";
import PortfolioCTA from "../organism/PortfolioCTA";
import Footer from "../organism/Footer";

const PortfolioPageTemplate = () => {
  return (
    <div className="min-h-screen bg-primary">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioTestimonials />
      <PortfolioCTA />
      <Footer />
    </div>
  );
};

export default PortfolioPageTemplate;
