import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";

const Page = () => {
  return (
    <div className="mt-1 w-full bg-[#f5f5f5] pb-4">
      <div className="relative h-[40vh] w-screen">
        <Image
          className="absolute opacity-80"
          layout="fill"
          objectFit="cover"
          src={"/images/portfolio/food-app2.png"}
          alt="/"
        />
      </div>
      <div className="mx-auto mt-3 max-w-5xl px-4 py-2 text-neutral-900 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-4">
            <h1 className="text-xl font-bold text-blue-500">
              Project overview
            </h1>
            <p className="text-slate-700">
              The user is able to search for food recipes from a search bar. The
              search bar has an API connection to{" "}
              <a
                href="https://spoonacular.com/"
                className="text-blue-500 no-underline hover:underline"
              >
                spoonacular
              </a>{" "}
              where it provides the data, which is then rendered using React,
              styled using CSS/Bootstrap.
            </p>
            <h2 className="mt-4 font-bold text-blue-950 underline">
              Skills learned and demonstrated
            </h2>
            <p className="text-slate-700">
              By doing this app, I learned the fundamentals of React, how to
              build a fully functional interactive single page application, a
              modular and component based application. How to connect to an
              external API, fetch the data, filter the data, render the data,
              and then style the data using Bootstrap and CSS3, ensuring
              it&apos;s responsive and fit any screen size: Mobile, PC and
              Tablets.
            </p>
            <div className="mt-5">
              <Link href={"https://github.com/ZaidDevelopment/foodapp"}>
                <button className="mr-3 rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  Code
                </button>
              </Link>
              <Link href={"https://foodapp-portfolio.netlify.app/"}>
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
                    <RxDotFilled className="mr-1 inline" /> React
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Javascript
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> JSX
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Bootstrap
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> CSS 3
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> HTML 5
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Node.js
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
