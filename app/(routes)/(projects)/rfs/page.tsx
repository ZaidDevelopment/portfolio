import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";

const Page = () => {
  return (
    <div className="mt-1 w-full bg-[#f5f5f5] pb-4">
      <div className="relative h-[40vh] w-screen">
        <Image
          className="absolute opacity-60"
          layout="fill"
          objectFit="cover"
          src={"/images/portfolio/rfs.png"}
          alt="/"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-35"></div>
      </div>
      <div className="mx-auto mt-3 max-w-5xl px-4 py-2 text-neutral-900 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-4">
            <h1 className="text-xl font-bold text-blue-500">
              Project overview
            </h1>
            <p className="text-slate-700">
              One of my first projects to get my hands on JavaScript, HTML5, CSS
              and Bootstrap. A single page with an A-Z list of medical
              conditions, where each button representing a medical case, when
              clicked on, it will redirect the user {"("}healthcare professional
              {")"} to more information about the condition, helping them to
              speed up their work flow and diagnose patients.
            </p>
            <h2 className="mt-4 font-bold text-blue-950 underline">
              Skills learned and demonstrated
            </h2>
            <p className="text-slate-700">
              This project helped me further understand how core web
              technologies such as JavaScript, HTML 5 and CSS 3 are used to
              develop interactive websites. Now looking at the code after I have
              gained more experience as a developer, I would not write such
              code, as it&apos;s just too long and messy. I would use React
              making the code much smaller and articulate.
            </p>
            <div className="mt-5">
              <Link
                href={"https://github.com/ZaidDevelopment/Red-Flags-Prototype"}
              >
                <button className="mr-3 rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  Code
                </button>
              </Link>
              <Link
                href={"https://zaiddevelopment.github.io/Red-Flags-Prototype/"}
              >
                <button className="rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  Demo
                </button>
              </Link>
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
                    <RxDotFilled className="mr-1 inline" /> JavaScript
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> CSS 3
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> HTML 5
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Bootstrap
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
