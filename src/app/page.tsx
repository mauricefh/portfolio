"use client";
// import Clients from "@/app/sections/Clients";
import dynamic from "next/dynamic";

// Dynamically import Hero with SSR disabled
const Hero = dynamic(() => import("@/app/sections/Hero"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});
const Navbar = dynamic(() => import("@/app/sections/Navbar"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});
const About = dynamic(() => import("@/app/sections/About"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});
const Projects = dynamic(() => import("@/app/sections/Projects"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});
const WorkExperience = dynamic(() => import("@/app/sections/Experience"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});
const Contact = dynamic(() => import("@/app/sections/Contact"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});
const Footer = dynamic(() => import("@/app/sections/Footer"), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />,
});

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
