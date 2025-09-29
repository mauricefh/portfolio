import Image from "next/image";
import AutoGrid from "./AutoGrid";

export default function Hero() {
  return (
    <section id="hero" className="py-20 min-h-[400px]">
      <div className="container mx-auto px-4 md:flex md:items-center">
        <div className="md:max-w-1/2 md:pb-48">
          <h1 className="text-5xl md:text-6xl">
            Hi, I'm Maurice a FullStack Developer
          </h1>
          <p className="text-2xl">
            I am a passionate full stack developer skilled in building dynamic
            and user-friendly web applications. I have a strong background in
            both frontend and backend development
          </p>
        </div>
        <div className="md:max-w-1/2">
          <img
            src="/waving-text.webp"
            alt="chibi avatar waving"
            className="min-w-[320px] min-h-[320px] object-fit"
          />
        </div>
      </div>
    </section>
  );
}
