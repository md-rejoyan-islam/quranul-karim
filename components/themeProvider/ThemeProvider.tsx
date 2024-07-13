"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

// disable caching
export const dynamic = "force-dynamic";

export default function ThemeWrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
