/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Old URL → new URL, so existing links and search results keep working.
    return [{ source: "/portfolio", destination: "/work", permanent: true }];
  },
};

export default nextConfig;
