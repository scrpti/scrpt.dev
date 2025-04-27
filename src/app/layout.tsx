import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Background from "@/components/Background"; // <-- Fondo separado
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "scrpt.dev | Portfolio",
  description: "Personal portfolio of Pedro (scrpt) - Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="h-full relative overflow-x-hidden">
        <Background />
        {children}
      </body>
    </html>

  );
}
