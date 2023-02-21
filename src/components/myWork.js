import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MyWork() {
  const projectsContent = [
    {
      title: "Cloudmate",
      description: "Web-based tool to help sneaker resellers",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description: "Web-based tool to help sneaker resellers",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description: "Web-based tool to help sneaker resellers",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description: "Web-based tool to help sneaker resellers",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description: "Web-based tool to help sneaker resellers",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
    {
      title: "Cloudmate",
      description: "Web-based tool to help sneaker resellers",
      imageUrl: "/projects/robert/robert_background.png",
      imageAlt: "a",
      route: "roberts-adventure",
    },
  ];
  return (
    <div className="sticky top-0 mx-auto my-0 flex h-[110vh] w-full flex-col items-center justify-start bg-gradient-to-b from-mint via-background-white to-background-white">
      <h2 className="mt-20 text-black select-none text-7xl">My Work</h2>
      <div className="mt-24 flex max-w-[1650px] flex-wrap justify-center">
        {projectsContent.map((project, index) => (
          <Project
            key={index}
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

const Project = ({ title, imageUrl, imageAlt, description, route }) => {
  return (
    <motion.div
      className="m-2 min-h-[250px] w-full max-w-[400px]
         bg-background-white
        shadow-lg"
      whileHover={{ translateY: -8 }}
    >
      <Link
        href={`/projects/${route}`}
        className="flex flex-col items-center w-full h-full cursor-pointer justify-evenly"
      >
        <div className="relative w-10/12 mt-3 mb-1 h-4/6">
          <Image src={imageUrl} alt={imageAlt} fill={true} />
        </div>
        <div className="w-full pt-2 pl-5 h-2/6 bg-gradient-to-r from-slate-200">
          <h5 className="text-lg font-bold">{title}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};
