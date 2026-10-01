import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdulrahman Zidan — Real Estate Sales & Lead Management",
    short_name: "Abdulrahman Zidan",
    description:
      "U.S. Real Estate Cold Caller, Lead Manager, Appointment Setter and Virtual Assistant.",
    start_url: "/Abdulrahman-Zidan/",
    display: "standalone",
    background_color: "#070706",
    theme_color: "#070706",
    icons: [
      {
        src: "/Abdulrahman-Zidan/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
