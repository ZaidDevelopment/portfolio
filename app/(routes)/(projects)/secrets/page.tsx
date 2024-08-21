import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";

const Page = () => {
  return (
    <div className="mt-1 w-full bg-[#f5f5f5] pb-4">
      <div className="relative h-[40vh] w-screen">
        <Image
          className="absolute opacity-90"
          layout="fill"
          objectFit="cover"
          src={"/images/portfolio/secrets.png"}
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
              The user can register an account, and then be able to submit a
              secret note anonymously for other users to read. The user details
              are stored into a Mongo Database. Once the user logs in, they can
              see the secrets of other users, including their own published
              secret.
            </p>
            <h2 className="mt-4 font-bold text-blue-950 underline">
              Skills learned and demonstrated
            </h2>
            <p className="text-slate-700">
              The purpose of this application was to get some experience writing
              back-end code using Node.js, Express, MongoDB and EJS. I am a
              front-end developer but it is still vital to understand what is
              happening in the back-end, hence I did this project to have an
              understanding of the fundamentals of back-end development. The
              data was rendered using HTML, JavaScript and styled using CSS and
              Bootstrap.
            </p>
            <div className="mt-5">
              <Link href={"https://github.com/ZaidDevelopment/Secrets"}>
                <button className="rounded-lg border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  Code
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
                    <RxDotFilled className="mr-1 inline" /> Node.js
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Express
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> EJS
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Javascript
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> HTML 5
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> CSS 3
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> Bootstrap
                  </p>
                  <p className="min-w-[95%]">
                    <RxDotFilled className="mr-1 inline" /> MongoDB
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
