import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Encode_Sans_Expanded } from "next/font/google";
import Footer from "../components/footer/footer";
import Header from "../components/header/v2";
import "./globals.css";
import "./v2.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/"),
  title:
    "Web Design, App Development & IoT Solutions Company in India & Dubai | Avyukt Tech Labs",
  description:
    "Avyukt Tech Labs is a full-service web design, web development, mobile app, and IoT solutions company serving clients in India and Dubai. We build scalable, user-friendly digital products that help businesses grow online.",
  keywords: [
    "web design company India",
    "website development company India",
    "mobile app development India",
    "IoT solutions company",
    "custom web application development",
    "responsive website design",
    "software development company India",
    "web development company Dubai",
    "hire website developers India",
    "UI UX design services India",
    "enterprise app development",
    "digital transformation company India",
    "technology consulting Dubai",
    "ecommerce development India",
    "website maintenance services",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "Web Design, App Development & IoT Solutions Company in India & Dubai | Avyukt Tech Labs",
    description:
      "Avyukt Tech Labs offers professional web design, app development, and IoT solutions to businesses across India and Dubai. From startups to enterprises, we craft tailored digital experiences that deliver measurable growth.",
    type: "website",
    url: "https://avyuktlabs.in/",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-landing.webp",
        alt: "Avyukt Tech Labs - Web Design & Development Company India Dubai",
        type: "image/webp",
        width: 1200,
        height: 630,
      },
      {
        url: "https://avyuktlabs.in/img/logo-new-cropped.webp",
        alt: "Avyukt Tech Labs Logo",
        type: "image/webp",
        width: 86,
        height: 81,
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
    title:
      "Web Design, App Development & IoT Solutions Company in India & Dubai | Avyukt Tech Labs",
    description:
      "Leading web design, app development, and IoT company helping businesses in India and Dubai build powerful, scalable, and engaging digital platforms.",
    images: ["https://avyuktlabs.in/img/og-landing.webp"],
  },
  verification: {
    google: "rO_R7xYZYgtQvX_-ScIJvAQlx9NGtrSqwkZdFhLWHzs",
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

const encoded_sans_expanded = Encode_Sans_Expanded({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={encoded_sans_expanded.className}
    >
      <GoogleTagManager gtmId="GTM-PZ2MBPCK" />
      {/*       <GoogleTagManager gtmId="AW-17025867407" /> */}
      {/*       <GoogleAnalytics gaId="G-JGYN2BBC12" /> */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
