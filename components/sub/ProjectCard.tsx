import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  page: string;
}

const ProjectCard = ({
  imageSrc,
  imageWidth,
  imageHeight,
  title,
  description,
  page,
}: ProjectCardProps) => {
  return (
    <div className="mb-5">
      <div className="group relative rounded-xl from-[#5651e5] to-[#709dff] hover:bg-gradient-to-r">
        <Image
          className="w-full rounded-xl group-hover:opacity-10"
          src={imageSrc}
          alt={`${title} image`}
          width={imageWidth}
          height={imageHeight}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-center text-3xl text-white md:text-2xl">
            {title}
          </h3>
          <Link href={page}>
            <button className="mt-6 rounded-lg bg-white px-4 py-2 text-center font-bold text-gray-700 hover:bg-slate-300 lg:text-sm">
              More Info
            </button>
          </Link>
        </div>
      </div>
      <h1 className="mt-2 text-base font-semibold text-slate-700">{title}</h1>
      <p className="text-base font-normal leading-none text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
