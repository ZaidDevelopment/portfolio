import React from "react";
import Image from "next/image";
import { BACKEND_SKILLS, FRONTEND_SKILLS } from "@/constants";

const Skills = () => {
  return (
    <div className="w-full" id="skills">
      <div className="mx-auto mt-5 max-w-5xl px-4 py-2 sm:px-6 md:mt-0 lg:px-8">
        <div className="relative">
          {/* Video element */}
          <video
            className="mx-auto rounded-3xl opacity-90"
            autoPlay
            loop
            muted
            width="100%"
          >
            <source src="/videos/animation-stars-earth.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Content container*/}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Content*/}
            <div className="flex w-[100%] flex-col items-center justify-center">
              <div className="text-center text-base font-bold text-white sm:text-2xl md:text-3xl">
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Making apps with modern technologies
                </span>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-around gap-4">
                {FRONTEND_SKILLS.map((image, index) => (
                  <Image
                    className="w-[7%]"
                    key={index}
                    src={image.image}
                    alt="tech icon"
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-around gap-4">
                {BACKEND_SKILLS.map((image, index) => (
                  <Image
                    className="w-[13%]"
                    key={index}
                    src={image.image}
                    alt="tech icon"
                    width={image.width}
                    height={image.height}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Design section */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 0 400 50">
          <circle cx="50" cy="50" r="40" fill="#ffffff" />
          <circle cx="50" cy="50" r="5" fill="#000000" />
        </svg>
        <div className="mt-6 w-[70%]">
          <p className="text-2xl font-bold sm:text-4xl md:text-6xl">
            Responsive
            <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              design{" "}
            </span>
            for sm, md and lg devices.
          </p>
          <p className="my-7 text-sm text-gray-400 sm:text-lg">
            Responsive web design that look good on all devices!
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1920px]">
        <Image
          className="mx-auto h-auto max-w-[100%] object-contain"
          src="/images/other-images/various-devices.jpg"
          alt="Multiple devices"
          width={5785}
          height={3340}
        />
      </div>
    </div>
  );
};

export default Skills;
