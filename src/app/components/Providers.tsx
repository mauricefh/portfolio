"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
}
