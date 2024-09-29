import { MetadataRoute } from "next";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/search?q=", "/admin/", "/studio/"]
    },
    sitemap: ["https://avyuktlabs.in/sitemap.xml"]
  };
}