import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/enterprise-website"),
  title: "Enterprise Website Development Services | Avyukt Tech Labs",
  description:
    "Custom enterprise website development for scalable, secure businesses. We build high-performance enterprise websites that drive traffic, leads & growth.",
  keywords: [
    "enterprise website development",
    "enterprise web development company",
    "enterprise website design services",
    "enterprise website development india",
    "enterprise web development services",
    "enterprise web solutions",
    "scalable enterprise websites",
    "Avyukt labs",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title: "Enterprise Website Development Services | Avyukt Tech Labs",
    description:
      "Custom enterprise website development for scalable, secure businesses. We build high-performance enterprise websites that drive traffic, leads & growth.",
    type: "website",
    url: "https://avyuktlabs.in/enterprise-website",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-enterprise.webp",
        alt: "Enterprise Website Development - Avyukt Tech Labs",
        type: "image/webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avyuktlabs",
    title: "Enterprise Website Development Services | Avyukt Tech Labs",
    description:
      "Custom enterprise website development for scalable, secure businesses. We build high-performance enterprise websites that drive traffic, leads & growth.",
    images: ["https://avyuktlabs.in/img/og-enterprise.webp"],
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
