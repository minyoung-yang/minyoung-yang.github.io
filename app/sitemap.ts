import { blogPosts } from "../src/data/posts";
import type { MetadataRoute } from "next";

const BASE_URL = "https://minyoung-yang.github.io/";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}about`,
      lastModified: new Date("2025-08-03"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}blog/${post.slug}`,
      lastModified: new Date(post.publishDate),
      changeFrequency: "yearly" as const,
      priority: 0.9,
    })),
  ];
}
