import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/services"),
  title:
    "Web Design, App Development & IoT Solutions | Avyukt Tech Labs India & Dubai",
  description:
    "Avyukt Tech Labs offers professional web design, eCommerce, mobile app development, and IoT solutions. Serving businesses across India and Dubai in industries like education, real estate, healthcare, finance, and more.",
  keywords: [
    "web design company India",
    "website development Dubai",
    "ecommerce website development",
    "mobile app development services",
    "IoT solutions company",
    "custom web application development",
    "responsive website design",
    "UI UX design services",
    "enterprise web development",
    "software development company India",
    "tech company Dubai",
    "website design for education sector",
    "real estate website development",
    "healthcare app development",
    "finance software solutions",
    "restaurant website design",
    "travel and transport website development",
    "IT and software services India",
    "business website design Dubai",
    "custom web development firm",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title: "Web Design, App Development & IoT Solutions | Avyukt Tech Labs",
    description:
      "Professional web design, app development, and IoT solutions for businesses in India and Dubai. Avyukt Tech Labs delivers responsive, scalable, and user-focused digital products across multiple sectors.",
    type: "website",
    url: "https://avyuktlabs.in/services",
    images: [
      {
        url: "https://avyuktlabs.in/img/logo.png",
        alt: "Avyukt Tech Labs Logo",
        type: "image/png",
        width: 86,
        height: 81,
      },
      {
        url: "https://avyuktlabs.in/img/og-services.jpg",
        alt: "Web Design & Development Services by Avyukt Tech Labs",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  twitter: {
    card: "summary_large_image",
    site: "@avyuktlabs",
    title: "Web Design, App Development & IoT Solutions | Avyukt Tech Labs",
    description:
      "Leading web design, app development, and IoT solutions provider serving clients in India and Dubai. Custom, scalable, and industry-focused technology solutions.",
    images: ["https://avyuktlabs.in/img/og-services.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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
