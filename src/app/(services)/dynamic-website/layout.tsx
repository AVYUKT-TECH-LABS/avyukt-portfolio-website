import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://avyuktlabs.in/dynamic-website"),
    title: "Dynamic Website Design in India | Avyukt Tech Labs",
    description: "At Avyukt Tech Labs we offer dynamic website design & development services for startups and small businesses at an affordable price.",
    keywords: "Dynamic website, dynamic website design, dynamic website packages India, dynamic website cost in india",
    openGraph: {
        siteName: "Dynamic Website Design in India | Avyukt Tech Labs",
        locale: 'en_US',
        title: "Dynamic Website Design in India | Avyukt Tech Labs",
        description: "At Avyukt Tech Labs we offer dynamic website design & development services for startups and small businesses at an affordable price.",
        type: "website",
        url: "https://avyuktlabs.in/dynamic-website",
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
        title: "Dynamic Website Design in India | Avyukt Tech Labs",
        description: "At Avyukt Tech Labs we offer dynamic website design & development services for startups and small businesses at an affordable price.",
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
    return children
}
