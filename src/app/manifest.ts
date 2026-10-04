import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bo2Ka2 App",
    short_name: "Bo2Ka2",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    lang: "fa",
    dir: "rtl",
    icons: [
      {
        src: "/images/bodokado-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
