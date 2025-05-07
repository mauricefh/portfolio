import { fullName } from "@/app/constants";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="c-space flex flex-wrap items-center justify-between gap-5 border-t border-black-300 pt-7 pb-3">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <Link
          href={"https://github.com/mauricefh"}
          title="mauricefh github profil"
          target="_blank"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="h-1/2 w-1/2"
            />
          </div>
        </Link>
      </div>

      <p className="text-white-500">
        © {year} {fullName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
