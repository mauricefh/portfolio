import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center">
      <div className="">
        <h2 className="font-family-display text-6xl text-primary mb-2">
          Full Stack
          <br /> Developer
        </h2>
        <p className="font-family-body text-2xl text-foreground">
          I am a passionate full stack developer skilled in building dynamic and
          user-friendly web applications. I have a strong background in both
          frontend and backend development
        </p>
      </div>
      <div>
        <Image
          src="/waving-text.webp"
          alt="chibi avatar waving"
          width={0}
          height={0}
          style={{ display: "block", maxWidth: "100%" }}
        />
      </div>
    </section>
  );
}
