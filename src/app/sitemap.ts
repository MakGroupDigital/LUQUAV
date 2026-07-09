import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.95, changeFrequency: "monthly" },
  { path: "/commencer-un-projet", priority: 0.95, changeFrequency: "monthly" },
  { path: "/nos-realisations", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.85, changeFrequency: "monthly" },
  { path: "/devenir-partenaire", priority: 0.8, changeFrequency: "monthly" },
  { path: "/partenariats", priority: 0.75, changeFrequency: "monthly" },
  { path: "/telecharger", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.65, changeFrequency: "weekly" },
  { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politique-utilisation", priority: 0.3, changeFrequency: "yearly" },
  { path: "/reglement-rgpd", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
