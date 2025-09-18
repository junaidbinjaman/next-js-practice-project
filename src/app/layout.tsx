import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GuestHeader from "@/components/GuestHeader";
import GuestFooter from "@/components/GuestFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Welcome to nextjs',
  description: 'This is a nextjs practice project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <GuestHeader />
        <main className="flex-1">
          {children}
        </main>
        <GuestFooter />
      </body>
    </html>
  );
}
