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
