import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://avyuktlabs.in/blogs"),
    title: "Explore Avyukt Tech Lab's Insights on Web Design and Development | Blog",
    description: "Delve into Avyukt Tech Lab's expert insights on web design, eCommerce development, app development and SEO. Stay updated with the latest trends and tips.",
    keywords: [],
    openGraph: {
        siteName: "Explore Avyukt Tech Lab's Insights on Web Design and Development | Blog",
        locale: 'en_US',
        title: "Explore Avyukt Tech Lab's Insights on Web Design and Development | Blog",
        description: "Delve into Avyukt Tech Lab's expert insights on web design, eCommerce development, app development and SEO. Stay updated with the latest trends and tips.",
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
        title: "Explore Avyukt Tech Lab's Insights on Web Design and Development | Blog",
        description: "Delve into Avyukt Tech Lab's expert insights on web design, eCommerce development, app development and SEO. Stay updated with the latest trends and tips.",
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
