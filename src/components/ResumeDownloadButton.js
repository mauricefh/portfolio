import Link from "next/link";
export default function ResumeDownloadButton() {
  const resume = "/pdf/Maurice_Filiatreault_Developer.pdf";
  return (
    <Link
      href={resume}
      target="_blank"
      className="bg-primary text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      Download Resume
    </Link>
  );
}
