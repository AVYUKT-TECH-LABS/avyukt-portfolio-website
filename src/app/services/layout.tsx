import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/services"),
  title: "Web Design and Development Services | Avyukt Tech Labs",
  description: "Avyukt Tech Labs, A professional website designing company in india offering responsive and user friendly web design and development services to its clients.",
  keywords: [],
  openGraph: {
    siteName: "Web Design and Development Services | Avyukt Tech Labs",
    locale: 'en_US',
    title: "Web Design and Development Services | Avyukt Tech Labs",
    description: "Avyukt Tech Labs, A professional website designing company in india offering responsive and user friendly web design and development services to its clients.",
    type: "website",
    url: "https://avyuktlabs.in/services",
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
    title: "Web Design and Development Services | Avyukt Tech Labs",
    description: "Avyukt Tech Labs, A professional website designing company in india offering responsive and user friendly web design and development services to its clients.",
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
