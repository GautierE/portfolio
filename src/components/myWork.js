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
    <div className="via-background-white to-background-white sticky top-0 mx-auto my-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-mint">
      <h2 className="mb-10 select-none text-4xl text-black">My Work</h2>
      <div className="flex max-w-[1650px] flex-wrap justify-center">
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
      className="bg-background-white m-2 min-h-[250px] w-full
         max-w-[400px]
        shadow-lg"
      whileHover={{ translateY: -8 }}
    >
      <Link
        href={`/projects/${route}`}
        className="flex h-full w-full cursor-pointer flex-col items-center justify-evenly"
      >
        <div className="relative mt-3 mb-1 h-4/6 w-10/12">
          <Image src={imageUrl} alt={imageAlt} fill={true} />
        </div>
        <div className="h-2/6 w-full bg-gradient-to-r from-slate-200 pt-2 pl-5">
          <h5 className="text-lg font-bold">{title}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};
