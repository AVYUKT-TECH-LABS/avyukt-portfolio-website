import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/about"),
  title: "Web Development India | Mobile App Development India | Web Agency India",
  description: "Avyukt Tech Labs, A full service affordable web design & development company in India provides web design, development & SEO services at cheap prices.",
  keywords: "affordable web design, creative web design, web design services, professional website design, cheap web design company",
  openGraph: {
    siteName: "Web Development India | Mobile App Development India | Web Agency India",
    locale: 'en_US',
    title: "Web Development India | Mobile App Development India | Web Agency India",
    description: "Avyukt Tech Labs, A full service affordable web design & development company in India provides web design, development & SEO services at cheap prices.",
    type: "website",
    url: "https://avyuktlabs.in/about",
    images: [
      {
        url: "https://avyuktlabs.in/img/logo.png",
        alt: "Avyukt Tech Labs",
        type: "image/png",
        width: 86,
        height: 81
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  twitter: {
    card: "summary",
    site: "@avyuktlabs",
    title: "Web Development India | Mobile App Development India | Web Agency India",
    description: "Avyukt Tech Labs, A full service affordable web design & development company in India provides web design, development & SEO services at cheap prices.",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
