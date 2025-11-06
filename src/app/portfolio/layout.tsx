import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/portfolio"),
  title: "Web Design & Development Portfolio | Avyukt Tech Labs India & Dubai",
  description:
    "Explore Avyukt Tech Labs portfolio showcasing custom web design, eCommerce, mobile app, and IoT projects. Trusted by clients across India and Dubai in industries like real estate, healthcare, education, and finance.",
  keywords: [
    "web design portfolio India",
    "website development portfolio",
    "ecommerce website projects",
    "mobile app portfolio",
    "IoT solutions showcase",
    "web development case studies",
    "Avyukt Tech Labs portfolio",
    "website design examples India",
    "custom web application portfolio",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "Web Design & Development Portfolio | Avyukt Tech Labs India & Dubai",
    description:
      "Discover Avyukt Tech Labs web design, app development, and IoT projects for clients across India and Dubai. Our portfolio highlights innovative, scalable, and beautifully crafted digital products.",
    type: "website",
    url: "https://avyuktlabs.in/portfolio",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-portfolio.webp",
        alt: "Avyukt Tech Labs Portfolio - Web Design & App Development India Dubai",
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
      "Web Design & Development Portfolio | Avyukt Tech Labs India & Dubai",
    description:
      "Showcasing our best web design, app development, and IoT work for clients across India and Dubai. Explore our portfolio.",
    images: ["https://avyuktlabs.in/img/og-portfolio.webp"],
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
  return <Suspense>{children}</Suspense>;
}
