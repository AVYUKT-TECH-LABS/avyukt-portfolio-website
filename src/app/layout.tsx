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
    "Web Design India, Web Development Company India, Website Developers India",
  description:
    "Avyukt Tech Labs is the best web design company in India that offers quality web designing and website development services to its clients. Hire our website developers/designers Now!",
  keywords:
    "web design company in India, website design company India, web design India, website design services India, website developers in India, website designer in India, website designing in India",
  openGraph: {
    siteName:
      "Web Design India, Web Development Company India, Website Developers India",
    locale: "en_US",
    title:
      "Web Design India, Web Development Company India, Website Developers India",
    description:
      "Avyukt Tech Labs is the best web design company in India that offers quality web designing and website development services to its clients. Hire our website developers/designers Now!",
    type: "website",
    url: "https://avyuktlabs.in/",
    images: [
      {
        url: "https://avyuktlabs.in/img/logo-new-cropped.webp",
        alt: "AVYUKT TECH LABS",
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
  twitter: {
    card: "summary",
    site: "@avyuktlabs",
    title:
      "Web Design India, Web Development Company India, Website Developers India",
    description:
      "Avyukt Tech Labs is the best web design company in India that offers quality web designing and website development services to its clients. Hire our website developers/designers Now!",
  },
  verification: {
    google: "rO_R7xYZYgtQvX_-ScIJvAQlx9NGtrSqwkZdFhLWHzs",
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
      <GoogleTagManager gtmId="GTM-W67WG7C9" />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
