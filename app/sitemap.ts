import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

const lastModified = new Date("2026-10-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/solutions",
    "/industries",
    "/mining",
    "/how-we-work",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
