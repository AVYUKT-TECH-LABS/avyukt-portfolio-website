import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/static-website"),
  title:
    "Static Website Design & Development Company India & Dubai | Avyukt Tech Labs",
  description:
    "Avyukt Tech Labs provides static website design and development services for small businesses and startups. Build fast, secure, and lightweight websites optimized for performance and SEO.",
  keywords: [
    "static website design India",
    "static web development company",
    "affordable static website packages",
    "low cost web design India",
    "fast loading static websites",
    "SEO friendly static website",
    "business website design Dubai",
    "responsive static website India",
    "hire static web developers",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "Static Website Design & Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "Professional static website design and development services for startups and small businesses in India and Dubai.",
    type: "website",
    url: "https://avyuktlabs.in/static-website",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-static.webp",
        alt: "Static Website Design & Development - Avyukt Tech Labs",
        type: "image/webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avyuktlabs",
    title:
      "Static Website Design & Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "High-quality static website design services for startups and small businesses across India and Dubai. Lightweight, fast, and SEO optimized.",
    images: ["https://avyuktlabs.in/img/og-static.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
