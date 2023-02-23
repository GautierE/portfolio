import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyWork() {
  const projectsContent = [
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers. aPraesent sodales ex at tincidunt porttitor.",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers. aPraesent sodales ex at tincidunt porttitor.",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers. aPraesent sodales ex at tincidunt porttitor.",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers. aPraesent sodales ex at tincidunt porttitor.",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers. aPraesent sodales ex at tincidunt porttitor.",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers. aPraesent sodales ex at tincidunt porttitor.",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
  ];

  return (
    <div className="sticky mx-auto my-0 h-[130vh] w-full bg-white">
      <div className="pt-20 ml-20">
        <h2 className="text-6xl font-bold text-black select-none font-title">
          Take a look at my <br /> recent work
        </h2>
        <p className="mt-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Nullam laoreet tincidunt sodales.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1800px] flex-wrap justify-center">
        {projectsContent.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            route={project.route}
          />
        ))}
      </div>
    </div>
  );
}

const Project = ({ title, imageUrl, imageAlt, description, route, index }) => {
  return (
    <motion.div
      className="mx-3 mb-7 min-h-[270px] min-w-[48%] max-w-[48%]  bg-white"
      whileHover={{ translateY: -8 }}
    >
      <div className="flex w-full h-full justify-evenly">
        <div
          className={
            index === 0
              ? "relative w-full rounded-tl-3xl rounded-bl-3xl border-2 border-r-0 border-purple pt-10 pl-10"
              : "relative w-full rounded-tl-3xl rounded-bl-3xl border-2 border-r-0 border-black pt-10 pl-10"
          }
        >
          <h5 className="text-4xl">{title}</h5>
          <p className="w-5/6 mt-5 text-lg">{description}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={`/projects/${route}`}
            className="absolute text-lg underline bottom-7 underline-offset-4"
          >
            Details
          </a>
        </div>
        <div className="relative w-10/12">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill={true}
            className="rounded-tr-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
};
