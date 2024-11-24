const TestimonialsSection = () => {
  return (
    <section className="pt-24 md:pt-0 pb-24 bg-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="testimonial-card bg-light p-8 rounded-lg shadow-lg">
            <p className="text-white/80 italic">
              &quot;Excellent service, delivered on time!&quot;
            </p>
            <h3 className="mt-4 text-xl text-accent">Client Name</h3>
            <p className="text-white/60">Position, Company</p>
          </div>
          {/* Add more testimonials */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
