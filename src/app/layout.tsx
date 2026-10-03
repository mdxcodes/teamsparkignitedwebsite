import type { Metadata, Viewport } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teamsparkignited.edu"),
  title: {
    default: "Team Spark Ignited | Student Motorsport Engineering",
    template: "%s | Team Spark Ignited",
  },
  description:
    "Engineering the future of electric mobility. Team Spark Ignited designs, fabricates, and races high-performance electric vehicles.",
  keywords: [
    "electric vehicles",
    "student motorsport",
    "engineering team",
    "EV racing",
    "formula student",
    "electric kart",
    "motorsport engineering",
  ],
  authors: [{ name: "Team Spark Ignited" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teamsparkignited.edu",
    siteName: "Team Spark Ignited",
    title: "Team Spark Ignited | Student Motorsport Engineering",
    description:
      "Engineering the future of electric mobility. Design, fabrication, and racing of high-performance electric vehicles.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Team Spark Ignited - Student Motorsport Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Spark Ignited | Student Motorsport Engineering",
    description:
      "Engineering the future of electric mobility. Design, fabrication, and racing of high-performance electric vehicles.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-base text-gray-200">
        {/* Skip to main content – keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-red focus:text-bg-base focus:font-orbitron focus:text-sm focus:rounded-sm"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
