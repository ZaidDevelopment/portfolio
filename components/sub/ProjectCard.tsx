import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
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
}: Props) => {
  return (
    // add key={index} ?
    <div className="mb-5">
      <div className="group relative rounded-xl from-[#5651e5] to-[#709dff] hover:bg-gradient-to-r">
        <Image
          className="w-[100%] rounded-xl group-hover:opacity-10"
          src={imageSrc}
          alt="project image"
          width={imageWidth}
          height={imageHeight}
        />
        <div className="absolute left-[50%] top-[50%] hidden w-full translate-x-[-50%] translate-y-[-50%] group-hover:block">
          <h3 className="text-center text-3xl text-white md:text-2xl">
            {title}
          </h3>
          <div className="mt-9 flex items-center justify-center md:mt-7">
            <Link href={page}>
              <button className="rounded-lg bg-white px-4 py-2 text-center font-bold text-gray-700 hover:bg-slate-300 lg:text-sm">
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mt-3 text-base font-semibold text-slate-700">{title}</h1>
      <p className="mt-1 text-base font-normal text-gray-500">{description}</p>
    </div>
  );
};

export default ProjectCard;
