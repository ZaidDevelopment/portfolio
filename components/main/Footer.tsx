import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#191c1f]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-12">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logos/logo.png"
              alt="Zaid Development logo"
              width={110}
              height={110}
            />
          </Link>
        </div>
        <hr className="border-gray-600" />
        <div className="py-9 text-center text-[#68727b]">
          <p>&copy; {currentYear} Zaid Development. All rights reserved.</p>
          <p className="text-xs">
            Images & Media &copy; {currentYear}{" "}
            <a
              className="underline hover:text-[#beccd6]"
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>{" "}
            &{" "}
            <a
              className="underline hover:text-[#beccd6]"
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
