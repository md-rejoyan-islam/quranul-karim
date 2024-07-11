import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import ThemeWrapperProvider from "@/app/ThemeProvider";

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
        <ThemeWrapperProvider>
          {children}
          <Footer />
        </ThemeWrapperProvider>
      </body>
    </html>
  );
}
