import type { Metadata } from "next";
import Footer from "../components/footer/footer";
import Header from "../components/header/v2";
import "./globals.css";
import "./v2.css";

export const metadata: Metadata = {
  title: "Home | Avykut Tech Labs",
};

//.__className_fb0d26
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
