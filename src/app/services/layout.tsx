import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Our Services - Avyukt Tech Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
