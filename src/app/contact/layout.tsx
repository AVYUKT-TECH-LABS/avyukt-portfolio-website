import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://avyuktlabs.in/contact"),
  title:
    "Contact Avyukt Tech Labs | Web Design & App Development Company India & Dubai",
  description:
    "Get in touch with Avyukt Tech Labs for professional web design, web development, mobile app development, and IoT solutions. We serve clients across India and Dubai. Let’s build something exceptional together.",
  keywords: [
    "contact Avyukt Tech Labs",
    "web development company India contact",
    "web design company Dubai contact",
    "hire website developers India",
    "mobile app development India",
    "IoT solutions contact",
    "get quote for website design",
    "software company India contact",
  ],
  openGraph: {
    siteName: "Avyukt Tech Labs",
    locale: "en_US",
    title:
      "Contact Avyukt Tech Labs | Web Design & App Development Company India & Dubai",
    description:
      "Connect with Avyukt Tech Labs — India and Dubai's trusted web design, app development, and IoT company. Get project quotes, consultations, or support today.",
    type: "website",
    url: "https://avyuktlabs.in/contact",
    images: [
      {
        url: "https://avyuktlabs.in/img/og-contact.webp",
        alt: "Contact Avyukt Tech Labs - Web Design Company India Dubai",
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
      "Contact Avyukt Tech Labs | Web Design & App Development Company India & Dubai",
    description:
      "Reach out to Avyukt Tech Labs for web design, development, and IoT solutions. Serving clients across India and Dubai.",
    images: ["https://avyuktlabs.in/img/og-contact.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
