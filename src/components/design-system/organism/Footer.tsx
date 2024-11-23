const Footer = () => {
  return (
    <footer className="py-8 bg-dark">
      <div className="container mx-auto flex flex-col items-center gap-4 text-white">
        <div className="flex gap-6">
          <a href="https://twitter.com" className="text-accent">
            Twitter
          </a>
          <a href="https://linkedin.com" className="text-accent">
            LinkedIn
          </a>
          <a href="https://github.com" className="text-accent">
            GitHub
          </a>
        </div>
        <p className="mt-4 text-sm">
          © 2024 Mosaic Design. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
