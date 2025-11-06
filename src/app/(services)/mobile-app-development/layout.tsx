import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/mobile-app-development"),
  title: "Mobile App Development Company India & Dubai | Avyukt Tech Labs",
  description:
    "Avyukt Tech Labs delivers custom mobile app development services for iOS and Android. Hire expert mobile app developers in India and Dubai to build secure, scalable, and high-performance apps.",
  keywords: [
    "mobile app development India",
    "mobile app developers Dubai",
    "iOS app development company",
    "Android app development company India",
    "cross platform app development",
    "React Native developers India",
    "Flutter app development company",
    "custom mobile applications",
    "enterprise app development India",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title: "Mobile App Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "Trusted mobile app development company offering Android, iOS, and cross-platform app solutions for businesses in India and Dubai.",
    type: "website",
    url: "https://avyuktlabs.in/mobile-app-development",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-mobile-app.webp",
        alt: "Mobile App Development Company India & Dubai - Avyukt Tech Labs",
        type: "image/webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avyuktlabs",
    title: "Mobile App Development Company India & Dubai | Avyukt Tech Labs",
    description:
      "Hire mobile app developers in India and Dubai for scalable, secure, and high-performance app solutions.",
    images: ["https://avyuktlabs.in/img/og-mobile-app.webp"],
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
