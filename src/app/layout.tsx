import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "Mauricefh Portfolio",
  description:
    "A modern 3D portfolio built with Next.js, Three.js, and Tailwind CSS. Showcasing creative projects, skills, and seamless interactivity—deployed with Vercel for blazing-fast performance.",
  icons: "/assets/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
