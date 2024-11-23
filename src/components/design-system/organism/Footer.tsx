const Footer = () => {
  return (
    <footer className="py-8 bg-dark">
      <div className="container mx-auto flex flex-col items-center gap-4 text-white">
        <div className="flex gap-6">
          <a href="https://x.com/MosaicDesigns06" className="text-accent">
            Twitter
          </a>
          <a href="https://www.instagram.com/mosaicdesigns06/" className="text-accent">
            Instagram
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
