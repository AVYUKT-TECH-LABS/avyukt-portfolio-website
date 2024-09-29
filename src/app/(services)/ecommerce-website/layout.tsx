import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://avyuktlabs.in/ecommerce-website"),
    title: "eCommerce Website Design & Development Company India | Avyukt Tech Labs",
    description: "Best eCommerce web design and development company in India. Get quality and creativity at cheap rates. Hire eCommerce website developers for your store today!",
    keywords: "eCommerce website, eCommerce website packages, affordable website , eCommerce web price, eCommerce web design company India, ecommerce website development, ecommerce development cost India",
    openGraph: {
        siteName: "eCommerce Website Design & Development Company India | Avyukt Tech Labs",
        locale: 'en_US',
        title: "eCommerce Website Design & Development Company India | Avyukt Tech Labs",
        description: "Best eCommerce web design and development company in India. Get quality and creativity at cheap rates. Hire eCommerce website developers for your store today!",
        type: "website",
        url: "https://avyuktlabs.in/ecommerce-website",
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
        title: "eCommerce Website Design & Development Company India | Avyukt Tech Labs",
        description: "Best eCommerce web design and development company in India. Get quality and creativity at cheap rates. Hire eCommerce website developers for your store today!",
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
