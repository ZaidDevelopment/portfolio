import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";

// Component for displaying technologies used in the project
const Technologies = () => {
  const techStack: string[] = ["JavaScript", "CSS 3", "HTML 5"];

  return (
    <div className="rounded-xl px-7 py-4 shadow-md shadow-gray-400 lg:px-0">
      <div className="mx-auto w-[90%] lg:w-[100%]">
        <div className="p-2">
          <p className="pb-4 text-center font-bold lg:pb-2">Technologies</p>
          <div className="grid grid-cols-2 justify-items-center gap-1 text-gray-600 sm:grid-cols-3 lg:ml-2 lg:grid-cols-1 lg:justify-items-start">
            {techStack.map((tech) => (
              <p key={tech} className="min-w-[95%]">
                <RxDotFilled className="mr-1 inline" /> {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const Page = () => {
  return (
    <div className="mt-1 w-full bg-[#f5f5f5] pb-4">
      {/* Image Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          className="absolute opacity-40"
          fill
          style={{ objectFit: "cover" }}
          src="/images/portfolio/dice-game.png"
          alt="Dice Game Project"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
      </div>

      {/* Content Section */}
      <div className="mx-auto mt-3 max-w-5xl px-4 py-2 text-neutral-900 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-4">
            <h1 className="text-xl font-bold text-blue-500">
              Project Overview
            </h1>
            <p className="text-slate-700">
              Refresh the page to roll the dice and see who wins—Player One or
              Player Two. A simple dice game implemented using JavaScript and
              HTML.
            </p>

            <h2 className="mt-4 font-bold text-blue-950 underline">
              Skills Learned and Demonstrated
            </h2>
            <p className="text-slate-700">
              This project allowed me to explore how JavaScript and HTML5 can be
              used together to manipulate the DOM. Although it&apos;s a simple
              project, it demonstrates core JavaScript, HTML5, and CSS3
              concepts.
            </p>

            {/* Buttons */}
            <div className="mt-5">
              <Link
                href="https://github.com/ZaidDevelopment/Dice-Game"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mr-3 inline-block rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                  Code
                </button>
              </Link>
              <Link
                href="https://zaiddevelopment.github.io/Dice-Game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mr-3 inline-block rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                  Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Technologies Section */}
          <Technologies />
        </div>

        {/* Back Button */}
        <Link href="/#projects">
          <button className="mb-5 mt-12 block text-center text-blue-500 underline hover:text-blue-700">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
