import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://usmle-step-3.koydo.app/sitemap.xml",
    host: "https://usmle-step-3.koydo.app",
  };
}
