import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import ThemeWrapperProvider from "@/components/themeProvider/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

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
        <ThemeWrapperProvider>{children}</ThemeWrapperProvider>
      </body>
    </html>
  );
}
