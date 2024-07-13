import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeWrapperProvider from "@/components/themeProvider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + " dark:bg-dark_bg_primary bg-bg_primary  "}
      >
        <ThemeWrapperProvider>{children}</ThemeWrapperProvider>
      </body>
    </html>
  );
}
