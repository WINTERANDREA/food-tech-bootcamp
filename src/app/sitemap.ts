import { MetadataRoute } from "next";
import { getAllProjects, getAllPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();
  const posts = getAllPosts();

  return [
    {
      url: "https://foodtechbootcamp.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://foodtechbootcamp.com/manifesto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map((p) => ({
      url: `https://foodtechbootcamp.com/projects/${p.slug}`,
      lastModified: new Date(p.updated || p.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `https://foodtechbootcamp.com/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
