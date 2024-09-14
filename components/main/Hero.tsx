import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mt-6 w-full" id="about">
      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Left Section */}
          <div className="mb-8 w-full md:mb-0 md:w-7/12">
            <h1 className="text-2xl font-bold sm:text-4xl md:text-6xl">
              Providing{" "}
              <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                the best
              </span>{" "}
              project experience
            </h1>
            <p className="my-7 text-sm text-gray-400 sm:text-lg">
              I&apos;m a Frontend Software Engineer with experience in Website,
              Mobile, and Software development. Check out my projects and
              skills.
            </p>

            <Link href="/about">
              <button className="rounded-lg bg-cyan-500 bg-opacity-20 px-4 py-2 shadow-md shadow-red-400 transition duration-300 ease-in-out hover:bg-cyan-500">
                Learn More
              </button>
            </Link>
          </div>
          {/* Right Section */}
          <div className="hidden md:block md:w-5/12">
            <Image
              src="/images/icons/mainIconsdark.svg"
              alt="Tech icons"
              height={665}
              width={664}
              className="h-auto max-w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
