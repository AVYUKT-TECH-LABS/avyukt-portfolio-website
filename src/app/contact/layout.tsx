import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact Us - Avyukt Tech Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
