import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Pauspan — Premium Service Solutions",
  description: "Pauspan delivers world-class service solutions that transform businesses. Expert strategy, impeccable execution, extraordinary results.",
  keywords: ["pauspan", "services", "consulting", "solutions", "business"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-text overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
