import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Syne } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseFont = Inter({
    subsets: ['latin'],
   display: 'swap',
   variable: '--font-space-default',
   });

   const displayFont = Syne({
      subsets: ['latin'],
      display: 'swap',
      variable: '--font-space-display',
    });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`${baseFont.variable} ${displayFont.variable} scroll-smooth`}>{children}</body>
    </html>
  );
}
