import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Hobbies />
      <Footer />
    </>
  );
}
