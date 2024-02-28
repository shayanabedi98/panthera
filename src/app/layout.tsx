import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LayoutBlurredCircle from "@/components/LayoutBlurredCircle";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantheras",
  description:
    "Web, graphic design, & digital marketing mastery: UX/UI, SEO, content strategy, and branding to elevate your online presence and engage effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <LayoutBlurredCircle />
        <div className="overflow-x-hidden container mx-auto 2xl:w-[1400px]">
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
