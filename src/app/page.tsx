"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <div className="rounded-lg bg-surface p-6">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <p className="text-muted">Welcome to my portfolio</p>
          <button className="rounded bg-accent px-4 py-2 text-foreground hover:bg-accent-hover">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
