import React from "react";
import Image from "next/image";
import { BACKEND_SKILLS, FRONTEND_SKILLS, Skill } from "@/constants";

// Types for the skill images
interface SkillImageProps {
  skill: Skill;
}

// Individual Skill Component
const SkillImage = ({ skill }: SkillImageProps) => (
  <div className="w-[7%]">
    <Image
      className="h-auto max-w-full transition-transform duration-200 hover:scale-110"
      src={skill.image}
      alt={`${skill.skillName} icon`}
      width={skill.width}
      height={skill.height}
      priority
    />
  </div>
);

// Main Skills Component
const Skills = () => {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto max-w-5xl px-4 pt-2 sm:mt-5 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Video Background */}
          <video
            className="mx-auto rounded-3xl opacity-90"
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            aria-label="Background animation of stars and earth"
          >
            <source src="/videos/animation-stars-earth.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center">
              <h2 className="text-center text-xl font-bold text-white sm:text-4xl md:mt-5 md:text-5xl">
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Making apps with modern technologies
                </span>
              </h2>
              {/* Desktop display - Skill Icons*/}
              <div className="w-full">
                <div className="mt-12 hidden flex-wrap items-center justify-center gap-8 md:flex">
                  {FRONTEND_SKILLS.map((skill, index) => (
                    <SkillImage key={index} skill={skill} />
                  ))}
                </div>
              </div>
              <div className="w-full">
                <div className="mt-12 hidden flex-wrap items-center justify-center gap-8 md:flex">
                  {BACKEND_SKILLS.map((skill, index) => (
                    <SkillImage key={index} skill={skill} />
                  ))}
                </div>
              </div>
              {/* Mobile display - Skill Icons*/}
              <div className="w-full">
                <div className="mt-5 flex flex-wrap items-center justify-center gap-5 md:hidden">
                  {FRONTEND_SKILLS.slice(0, 5).map((skill, index) => (
                    <SkillImage key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive Design Section */}
      <ResponsiveDesignSection />
    </section>
  );
};

export default Skills;

// Responsive Design Section Component
const ResponsiveDesignSection = () => {
  return (
    <>
      <div className="mx-auto mt-2 max-w-5xl px-4 pb-2 sm:px-6 md:mt-5 lg:px-8">
        <div className="w-4/5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="60 0 400 50">
            <circle cx="50" cy="50" r="40" fill="#ffffff" />
            <circle cx="50" cy="50" r="5" fill="#000000" />
          </svg>

          <h3 className="text-2xl font-bold sm:text-4xl md:text-6xl">
            Responsive
            <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              design{" "}
            </span>
            for sm, md and lg devices.
          </h3>

          <p className="my-7 text-sm text-gray-400 sm:text-lg">
            Responsive web design that looks good on all devices!
          </p>
        </div>
      </div>

      {/* Devices Image */}
      <div className="mx-auto max-w-[1920px]">
        <Image
          className="mx-auto h-auto w-full object-contain"
          src="/images/other-images/various-devices.jpg"
          alt="Multiple devices displaying responsive design"
          width={5785}
          height={3340}
        />
      </div>
    </>
  );
};
