import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div>
        <h1>
          FullStack
          <br /> Developer
        </h1>
        <p>
          I am a passionate full stack developer skilled in building dynamic and
          user-friendly web applications. I have a strong background in both
          frontend and backend development
        </p>
      </div>
      <div>
        <img
          src="/waving-text.webp"
          alt="chibi avatar waving"
          className="min-w-[320px] min-h-[320px] object-fit"
        />
      </div>
    </section>
  );
}
