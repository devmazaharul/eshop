import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getProductserver } from "@/data/ProductSrc";

const siteFont = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eshop",
  description: "Generated by mazahrul islam",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getProductserver();
  return (
    <html lang="en">
      <body className={`${siteFont.className} antialiased`}>
        <div className="md:w-[90%] w-[96%] mx-auto">
          <div>
            <Navbar />
          </div>
          <div className="md:w-[90%] mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
