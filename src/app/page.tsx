"use client";
import Navbar from "@/app/sections/Navbar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Projects from "@/app/sections/Projects";
import Clients from "@/app/sections/Clients";
import WorkExperience from "@/app/sections/Experience";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
