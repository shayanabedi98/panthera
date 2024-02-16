import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LayoutBlurredCircle from "@/components/LayoutBlurredCircle";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantheras",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <div className="container mx-auto w-[1400px]">
          <Header />
          <LayoutBlurredCircle />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
