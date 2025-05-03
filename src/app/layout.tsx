import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";

import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // Adjust weights as needed
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kk.shahid",
  description: "Portfolio of Khandoker Shahidujjaman Shahid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${poppins.variable} antialiased bg-black text-white`}
      >
        <Header />
        <StairTransition />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
