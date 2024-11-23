const FAQSection = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="faq-item">
            <h3 className="text-xl text-accent">
              How do I start working with you?
            </h3>
            <p className="mt-2 text-white/80">
              You can schedule a call through our Calendly link, or contact us
              directly through email.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-xl text-accent">
              What technologies do you specialize in?
            </h3>
            <p className="mt-2 text-white/80">
              We specialize in modern web technologies like React, Next.js, and
              Node.js, among others.
            </p>
          </div>
          {/* Add more FAQs */}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
