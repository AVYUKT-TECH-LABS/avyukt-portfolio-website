import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/ecommerce-website"),
  title:
    "eCommerce Website Design & Development Company India & Dubai | Avyukt Tech Labs",
  description:
    "Avyukt Tech Labs offers professional eCommerce website design and development services. Build scalable, user-friendly online stores that drive sales and growth. Serving clients across India and Dubai.",
  keywords: [
    "ecommerce website development India",
    "ecommerce design company Dubai",
    "custom online store development",
    "shopify website development India",
    "woocommerce ecommerce design",
    "magento development services",
    "ecommerce developers India",
    "responsive ecommerce websites",
    "hire ecommerce developers Dubai",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "eCommerce Website Design & Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "We build fast, secure, and high-converting eCommerce websites for clients in India and Dubai. From Shopify to custom builds, Avyukt Tech Labs delivers powerful online store solutions.",
    type: "website",
    url: "https://avyuktlabs.in/ecommerce-website",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-ecommerce.webp",
        alt: "eCommerce Website Design & Development - Avyukt Tech Labs",
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
      "eCommerce Website Design & Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "Leading eCommerce development company in India and Dubai. We create scalable, conversion-focused online stores tailored for your business.",
    images: ["https://avyuktlabs.in/img/og-ecommerce.webp"],
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
