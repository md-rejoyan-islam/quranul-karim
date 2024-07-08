"use client";
import { ThemeProvider } from "next-themes";

// disable caching
export const dynamic = "force-dynamic";

export default function ThemeWrapperProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
