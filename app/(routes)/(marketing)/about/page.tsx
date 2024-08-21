import React from "react";
import TextCarousel from "@/components/sub/TextCarousel";
import Link from "next/link";

const Page: React.FC = () => {
  const carouselItems = [
    "Front-End",
    "UX Design",
    "Agile",
    "NEXT.js 14",
    "Tailwind CSS",
    "TypeScript",
    "Responsive",
  ];
  return (
    <div className="mt-6 w-full">
      <div className="mx-auto mt-5 max-w-5xl px-4 py-2 sm:px-6 md:mt-0 lg:px-8">
        {/* Skills section */}
        <div className="relative">
          {/* Video element */}
          <video
            className="mx-auto opacity-90"
            autoPlay
            loop
            muted
            width="100%"
          >
            <source
              src="/videos/pattern-defocused-magic.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
          {/* Content container*/}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Content*/}
            <TextCarousel
              items={carouselItems}
              autoSlide
              autoSlideInterval={2500}
            />
            {/* Content ends*/}
          </div>
        </div>

        {/* About me section */}
        <div className="mt-6 w-full">
          <p className="text-2xl font-bold sm:text-4xl md:text-6xl">
            Education
          </p>
          <p className="my-7 text-sm text-gray-400 sm:text-lg">
            Graduated with a First Class Honours Degree in Software Engineering
            in 2014 from Brighton University, UK. Completed STEM gymnasium in
            Sweden.
          </p>

          <p className="text-2xl font-bold sm:text-4xl md:text-6xl">
            Professional Experience
          </p>
          <p className="my-7 text-sm text-gray-400 sm:text-lg">
            After graduation I worked with both small and global corporation,
            doing various roles in tech: Front-End Developer, Business Analyst
            and Scrum Master.
            <br />
            <br />
            This was a decision I made as a passionate individual about
            technology so that I have experience on both the business side and
            the tech side, as I strongly believe this helps me to become a
            better tech expert having a deep understanding of both side, not to
            mention it also helped me to identify my true passion in tech, which
            is, Front-End Development, creating responsive applications using
            the latest technologies.
          </p>

          <p className="text-2xl font-bold sm:text-4xl md:text-6xl">
            Interests
          </p>
          <p className="my-7 text-sm text-gray-400 sm:text-lg">
            Surfing, Music and Gym.
          </p>
        </div>
        <Link href="/contact">
          <button className="mt-3 rounded-lg bg-cyan-500 bg-opacity-20 px-3 py-1 shadow-md shadow-red-400 hover:bg-cyan-500 ">
            Contact
          </button>
        </Link>
        <hr className="mx-auto my-32 w-3/4 border-t-4 border-red-600 opacity-15" />
      </div>
    </div>
  );
};

export default Page;
