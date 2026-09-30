import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return {rules:{userAgent:"*",allow:"/"},sitemap:"https://zidmatrix.github.io/Abdulrahman-Zidan/sitemap.xml"}; }
