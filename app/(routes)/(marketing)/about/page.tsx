import React from "react";
import TextCarousel from "@/components/sub/TextCarousel";
import Link from "next/link";

// Define the types for carousel items
const carouselItems: string[] = [
  "Front-End",
  "UX Design",
  "Agile",
  "NEXT.js 14",
  "Tailwind CSS",
  "TypeScript",
  "Responsive",
];

const Page = () => {
  return (
    <div className="mt-6 w-full">
      <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="relative">
          {/* Video Background */}
          <video
            className="mx-auto w-full opacity-90"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Background video of defocused magic pattern"
          >
            <source
              src="/videos/pattern-defocused-magic.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Text Carousel Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <TextCarousel
              items={carouselItems}
              autoSlide
              autoSlideInterval={2500}
            />
          </div>
        </div>

        {/* About Me Section */}
        <section className="mt-6 w-full">
          {/* Education */}
          <AboutSection
            title="Education"
            description={
              <>
                I hold a{" "}
                <strong>
                  First Class Honours Degree in Software Engineering
                </strong>{" "}
                from <strong>Brighton University, UK</strong> (2014). Prior to
                that, I completed my studies at a STEM-focused gymnasium in
                Sweden, which solidified my foundation in analytical thinking
                and problem-solving.
              </>
            }
          />
          {/* Professional Experience */}
          <AboutSection
            title="Professional Experience"
            description={
              <>
                Since graduating, I have worked across various tech roles in
                both <strong>small startups</strong> and{" "}
                <strong>global corporations</strong>, gaining a broad spectrum
                of experience. My roles have included:
              </>
            }
          />
          <ul className="my-7 ml-0 list-inside list-disc pl-0 text-sm font-semibold text-gray-400 sm:text-lg">
            <li>Front-End Developer</li>
            <li>Business Analyst</li>
            <li>Scrum Master</li>
          </ul>
          <AboutSection
            description={
              <>
                This diverse background has allowed me to bridge the gap between{" "}
                <strong>business objectives</strong> and{" "}
                <strong>technical solutions</strong>, giving me a comprehensive
                understanding of how technology drives success. While I&apos;ve
                thrived in different areas of tech, my passion lies in{" "}
                <strong>Front-End Development</strong>, where I focus on
                building <strong>responsive, user-friendly applications</strong>{" "}
                using the latest frameworks and best practices.
              </>
            }
          />
          {/* Interests */}
          <AboutSection
            title="Interests"
            description={
              <>
                Outside of work, I enjoy <strong>surfing, playing music</strong>
                , and staying active at the <strong>gym</strong>. These
                activities fuel my creativity and keep me balanced, helping me
                approach challenges with a fresh perspective.
              </>
            }
          />
        </section>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="mt-3 rounded-lg bg-cyan-500 bg-opacity-20 px-4 py-2 shadow-md shadow-red-400 transition-colors hover:bg-cyan-500">
            Contact
          </button>
        </Link>

        {/* Divider */}
        <hr className="mx-auto mt-32 w-3/4 border-t-4 border-red-600 opacity-15" />
      </div>
      {/* Blend BG with Footer */}
      <div className="h-32 bg-gradient-to-b from-black to-[#191c1f]"></div>
    </div>
  );
};

export default Page;

type AboutSectionProps = {
  title?: string;
  description: React.ReactNode;
};

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => (
  <div className="mb-12">
    {title && (
      <h2 className="text-2xl font-bold sm:text-4xl md:text-6xl">{title}</h2>
    )}
    <p className="my-7 text-sm text-gray-400 sm:text-lg">{description}</p>
  </div>
);
