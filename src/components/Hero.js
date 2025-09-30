import Image from "next/image";
import Container from "./Container";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function Hero() {
  function calculateDays() {
    let start = new Date(2022, 10);
    let end = new Date();
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    let years = daysDifference / 365;
    return years.toFixed(1);
  }

  function generateString() {
    let string = "";
    const yearsExperience = calculateDays();
    const arr = yearsExperience.split(".");
    if (arr[1] == 0) {
      string = ` ${arr[0]}+ years `;
    } else {
      string = ` ${arr[0]} years and ${arr[1]} months `;
    }
    return string;
  }

  const yearsExperienceString = generateString();

  return (
    <section id="hero" className="py-20 min-h-[400px]">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-[clamp(2.5rem, 5vw + 1rem, 4rem)] font-bold mb-4">
              Hi, I'm Maurice a FullStack Developer
            </h1>
            <p className="text-xl mb-8 text-muted">
              I am a passionate Full-Stack Developer with
              {yearsExperienceString} of experience in JavaScript (React,
              Next.js, TypeScript, Node.js) and Rust for performance
              optimization. Skilled in modernizing legacy systems and building
              scalable web/hybrid apps with AI integration (OpenAI API). Recent
              projects include a Strapi CMS site rebuild, Freenance MVP launch,
              and an SEO-optimized portfolio. Seeking remote roles to apply
              JS/Rust expertise.{" "}
            </p>
            <ResumeDownloadButton />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/waving-text.webp"
                alt="chibi avatar waving"
                priority
                fill
                className="object-container"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
