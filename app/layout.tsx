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
    "Read the Holy Quran with English, Arabic, Bengali, and Urdu Translation and Brief Commentary.",
  openGraph: {
    title: "Quranul Karim",
    description:
      "Read the Holy Quran with English, Arabic, Bengali, and Urdu Translation and Brief Commentary.",
    images: `${process.env.CLIENT_URL}/quran.webp`,
    url: `${process.env.CLIENT_URL}`,
  },
  authors: [
    {
      name: "Rejoyan",
      url: "https://rejoyan.com",
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
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="Read the Holy Quran with English Translation and Brief Commentary | Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary. Read the Holy Quran with English Translation and Brief Commentary. Read the Holy Quran with Arabic Ayat and English Translation and Brief Commentary."
        />
        <link rel="icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
        <meta
          property="og:image"
          content={process.env.CLIENT_URL + "/quran.webp"}
        />
      </head>

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
