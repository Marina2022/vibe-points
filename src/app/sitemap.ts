import { MetadataRoute } from "next";

// TODO: Replace BASE_URL with actual production domain
const BASE_URL = "https://for-vibe.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
