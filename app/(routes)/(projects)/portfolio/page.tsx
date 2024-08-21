import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";

export const Page = () => {
  return (
    <div className="mt-1 w-full bg-[#f5f5f5] pb-4">
      <div className="relative h-[40vh] w-screen">
        <Image
          className="absolute"
          layout="fill"
          objectFit="cover"
          src={"/images/portfolio/portfolio2.png"}
          alt="/"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-15"></div>
      </div>
      <div className="mx-auto mt-3 max-w-5xl px-4 py-2 text-neutral-900 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-4">
            <h1 className="text-xl font-bold text-blue-500">
              Project overview
            </h1>
            <p className="text-slate-700">
              The purpose of this project is to demonstrate my front-end web
              development and design skills, using the latest web technologies
              such as React, Next.js 14, TypeScrip and Tailwind. Additionally I
              demonstrate a full understanding of responsive web design, and a
              mobile first approach, ensuring the web page looks aesthetically
              beautiful on all device sizes, mobile, tablet and desktops.
            </p>
            <h2 className="mt-4 font-bold text-blue-950 underline">
              Skills learned and demonstrated
            </h2>
            <p className="text-slate-700">
              By doing this project I learned and demonstrate how to make a
              single page application, while ensuring the project and the code
              is modular, leading to less repeated and messy code, and much
              easier code base to read and manage. How to use different break
              points ensuring responsive design for all different screen sizes.
              Connecting to third party API: using{" "}
              <a
                href="https://formspree.io/"
                className="text-blue-500 no-underline hover:underline"
              >
                Formspree
              </a>{" "}
              to process the contact form and working with the latest web
              technologies: React, Next.js 14, TypeScript and Tailwind CSS.
            </p>
            <div className="mt-5">
              <button className="mr-3 rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Code
              </button>
              <button className="rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Demo
              </button>
            </div>
          </div>
          <div className="rounded-xl px-7 py-4 shadow-md shadow-gray-400 lg:px-0">
            <div className="mx-auto w-[90%] lg:w-[100%]">
              <div className="p-2">
                <p className="pb-4 text-center font-bold lg:pb-2">
                  Technologies
                </p>
                <div className="grid grid-cols-2 justify-items-center gap-1 text-gray-600 sm:grid-cols-3 lg:ml-2 lg:grid-cols-1 lg:justify-items-start">
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> NEXT.js
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> React
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Tailwind
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> TypeScript
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> JavaScript
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> CSS 3
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> HTML 5
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> JSX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="mb-5 mt-12 underline">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
