import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/about"),
  title:
    "About Avyukt Tech Labs | Web Development, App & IoT Solutions Company India & Dubai",
  description:
    "Avyukt Tech Labs is a full-service web design, web development, and IoT solutions company based in India, serving clients across India and Dubai. We deliver creative, scalable, and high-performance digital solutions for global businesses.",
  keywords: [
    "about Avyukt Tech Labs",
    "web development company India",
    "mobile app development company",
    "IoT solutions provider India",
    "software development company Dubai",
    "custom web design services",
    "professional web development team",
    "UI UX design company India",
    "digital transformation partner",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "About Avyukt Tech Labs | Web Development, App & IoT Solutions Company India & Dubai",
    description:
      "Learn about Avyukt Tech Labs — a leading web design, app development, and IoT solutions company helping businesses in India and Dubai grow through technology and innovation.",
    type: "website",
    url: "https://avyuktlabs.in/about",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-about.webp",
        alt: "About Avyukt Tech Labs - Web Development Company India Dubai",
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
      "About Avyukt Tech Labs | Web Development, App & IoT Solutions Company India & Dubai",
    description:
      "We are Avyukt Tech Labs — a full-service technology company offering web, app, and IoT solutions across India and Dubai.",
    images: ["https://avyuktlabs.in/img/og-about.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon_io/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
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
