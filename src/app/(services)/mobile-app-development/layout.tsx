import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://avyuktlabs.in/mobile-app-development"),
    title: "Mobile App Development Company India, App Developer",
    description: "Trusted Mobile app development company in India. Hire expert mobile app developers for high-performance app development services!",
    keywords: "Mobile App Development Company India, Mobile App Development India, Mobile App developers India, Mobile App Cost India",
    openGraph: {
        siteName: "Mobile App Development Company India, App Developer",
        locale: 'en_US',
        title: "Mobile App Development Company India, App Developer",
        description: "Trusted Mobile app development company in India. Hire expert mobile app developers for high-performance app development services!",
        type: "website",
        url: "https://avyuktlabs.in/mobile-app-development",
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
        title: "Mobile App Development Company India, App Developer",
        description: "Trusted Mobile app development company in India. Hire expert mobile app developers for high-performance app development services!",
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
