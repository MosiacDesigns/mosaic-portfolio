const ProjectsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-12">Projects We’ve Worked On</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="project-card bg-light p-6 rounded-lg shadow-lg">
            <img
              src="/project-image.png"
              alt="Project"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl text-accent">Project Name</h3>
            <p className="mt-2 text-white/80">
              Short description of the project.
            </p>
          </div>
          {/* Add more project cards */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
