import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/dynamic-website"),
  title:
    "Dynamic Website Design & Development Company India & Dubai | Avyukt Tech Labs",
  description:
    "Avyukt Tech Labs specializes in dynamic website design and development services for startups, SMEs, and enterprises. We build fast, secure, and scalable dynamic websites for clients across India and Dubai.",
  keywords: [
    "dynamic website design India",
    "dynamic website development company",
    "custom dynamic website development",
    "responsive dynamic websites",
    "affordable dynamic website packages",
    "dynamic website developers India",
    "CMS website development",
    "hire web developers Dubai",
    "Avyukt Tech Labs dynamic websites",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "Dynamic Website Design & Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "Professional dynamic website design and development company serving clients across India and Dubai. Create secure, scalable, and user-friendly websites with Avyukt Tech Labs.",
    type: "website",
    url: "https://avyuktlabs.in/dynamic-website",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-dynamic.webp",
        alt: "Dynamic Website Design & Development - Avyukt Tech Labs",
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
      "Dynamic Website Design & Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "Expert dynamic website design and development services for businesses in India and Dubai. Build powerful and flexible digital experiences.",
    images: ["https://avyuktlabs.in/img/og-dynamic.webp"],
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
