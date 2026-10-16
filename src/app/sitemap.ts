import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/contact"].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
  const studies = projects.map((p) => ({ url: `${site.url}/work/${p.slug}`, lastModified: new Date() }));
  return [...pages, ...studies];
}
