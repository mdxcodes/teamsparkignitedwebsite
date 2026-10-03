import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Team Spark Ignited",
  description: "Engineering the Future of Electric Mobility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-base text-gray-200">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="py-8 border-t border-white/10 text-center text-sm text-gray-500 bg-bg-surface mt-12">
          © {new Date().getFullYear()} Team Spark Ignited. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
