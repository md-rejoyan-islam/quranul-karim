import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

import { SettingsProvider } from "@/provider/SettingsProvider";
import ThemeWrapperProvider from "@/provider/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.CLIENT_URL}`),
  title: "Quranul Karim",
  description:
    "Read the Holy Quran with English Translation and Brief Commentary | Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary.",
  openGraph: {
    title: "Quranul Karim",
    description:
      "Read the Holy Quran with English Translation and Brief Commentary | Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary.",
    images: `/quran.webp`,
    url: `${process.env.CLIENT_URL}`,
  },
  authors: [
    {
      name: "Md. Rejoyan Islam",
      url: "https://md-rejoyan-islam.github.io",
    },
  ],
  keywords: [
    "Quran",
    "Quranul Karim",
    "Holy Quran",
    "Islam",
    "Arabic Quran",
    "Quran Translation",
    "Quran Commentary",
    "Read Quran Online",
    "Islamic Studies",
  ],
  creator: "Rejoyan",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          poppins.className + " dark:bg-dark_bg_primary bg-bg_primary  "
        }
      >
        <SettingsProvider>
          <ThemeWrapperProvider>{children}</ThemeWrapperProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
