import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
export const metadata: Metadata = {
  title: "Signafile",
  description: "Unified Corporate Legal System by Crohoma SRL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
