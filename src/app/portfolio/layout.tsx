import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/portfolio"),
  title: "Website Design Portfolio, Web Design Websites | Avyukt Tech Labs",
  description: "Take a look at our web design portfolio websites which show our best website design and development work.",
  keywords: "Website Design Portfolio, Web Design Portfolio Websites, Best Website Design Portfolio, website Development Portfolio",
  openGraph: {
    siteName: "Website Design Portfolio, Web Design Websites | Avyukt Tech Labs",
    locale: 'en_US',
    title: "Website Design Portfolio, Web Design Websites | Avyukt Tech Labs",
    description: "Take a look at our web design portfolio websites which show our best website design and development work.",
    type: "website",
    url: "https://avyuktlabs.in/portfolio",
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
    title: "Website Design Portfolio, Web Design Websites | Avyukt Tech Labs",
    description: "Take a look at our web design portfolio websites which show our best website design and development work.",
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
