import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pradheeppattambi.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/counselling/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/career/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/gallery/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
