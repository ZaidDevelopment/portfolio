import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-6 w-full" id="about">
      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Left section */}
          <div className="w-[70%]">
            <p className="text-2xl font-bold sm:text-4xl md:text-6xl">
              Providing{" "}
              <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                the best
              </span>{" "}
              project exprience
            </p>
            <p className="my-7 text-sm text-gray-400 sm:text-lg">
              I&apos;m a Frontend Software Engineer with experience in Website,
              Mobile, and Software development. Check out my projects and
              skills.
            </p>

            <Link href="/about">
              <button className="rounded-lg bg-cyan-500 bg-opacity-20 px-3 py-1 shadow-md shadow-red-400 hover:bg-cyan-500 ">
                Learn More
              </button>
            </Link>
          </div>
          {/* Right section */}
          <div className="w-[30%]">
            <div className="max-w-full">
              <Image
                src="/images/icons/mainIconsdark.svg"
                alt="tech icons"
                height={650}
                width={650}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
