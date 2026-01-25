import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/web-hosting"),
  title: "Best Web Hosting Services in India – Fast, Secure & Affordable",
  description:
    "Reliable web hosting for startups & businesses. High-speed servers, free SSL, daily backups & WordPress hosting with 24/7 support.",
  keywords: [
    "web hosting",
    "web hosting services",
    "best web hosting",
    "cheap web hosting",
    "fast web hosting",
    "secure web hosting",
    "WordPress hosting",
    "cloud hosting",
    "business web hosting",
    "shared hosting",
    "VPS hosting",
    "India web hosting",
    "global web hosting",
    "reliable hosting provider",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title: "Best Web Hosting Services in India – Fast, Secure & Affordable",
    description:
      "Reliable web hosting for startups & businesses. High-speed servers, free SSL, daily backups & WordPress hosting with 24/7 support.",
    type: "website",
    url: "https://avyuktlabs.in/web-hosting",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-hosting.webp",
        alt: "Web Hosting Services - Avyukt Tech Labs",
        type: "image/webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avyuktlabs",
    title: "Best Web Hosting Services in India – Fast, Secure & Affordable",
    description:
      "Reliable web hosting for startups & businesses. High-speed servers, free SSL, daily backups & WordPress hosting with 24/7 support.",
    images: ["https://avyuktlabs.in/img/og-hosting.webp"],
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
