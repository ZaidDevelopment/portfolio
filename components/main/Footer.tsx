import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

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
              className="transition-opacity hover:opacity-80"
            />
          </Link>
        </div>
        <hr className="border-gray-600" />
        <div className="py-9 text-center text-gray-400">
          <p>&copy; {currentYear} Zaid Development. All rights reserved.</p>
          <p className="text-xs">
            Images & Media &copy; {currentYear}{" "}
            <Link
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              Freepik
            </Link>{" "}
            &{" "}
            <Link
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              Unsplash
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
