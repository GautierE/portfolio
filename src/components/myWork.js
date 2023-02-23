import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyWork() {
  const projectsContent = [
    {
      title: "Cloudmate",
      description:
        "Web-based tool to help sneaker resellers mainly through Paypal payment automation.",
      imageUrl: "/projects/cloudmate/cloudmate_logo.png",
      imageAlt: "Cloudmate logo",
      route: "cloudmate",
    },
    {
      title: "Robert's Adventure",
      description: "A serious game created for a school project using Unity.",
      imageUrl: "/projects/robert/robert_logo.png",
      imageAlt: "Robert's adventure screenshot",
      route: "roberts-adventure",
    },
    {
      title: "C-Koya Tech",
      description:
        "My work for C-Koya Tech as a fullstack Web & mobile developer.",
      imageUrl: "/projects/c_koya_tech/ckoya_logo.jpg",
      imageAlt: "a",
      route: "c-koya-tech",
    },
    {
      title: "Portfolio",
      description: "My personal website.",
      imageUrl: "/projects/cloudmate/cloudmate_logo.png",
      imageAlt: "a",
      route: "portfolio",
    },
  ];

  return (
    <div className="sticky top-0 mx-auto my-0 h-[130vh] w-full bg-white">
      <div className="pt-20 ml-20">
        <h2 className="text-6xl font-bold text-black select-none font-title">
          Take a look at my <br /> recent work
        </h2>
        <p className="mt-5 text-xl">
          From school to personal projects, <br />
          through my one year work in a company.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1800px] flex-wrap justify-center">
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
      className="mx-3 mb-7 min-h-[270px] min-w-[48%] max-w-[48%]  bg-white"
      whileHover={{ translateY: -8 }}
    >
      <div className="flex w-full h-full justify-evenly">
        <div
          className={
            "relative w-full rounded-tl-3xl rounded-bl-3xl border-2 border-r-0 border-purple pt-10 pl-10"
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
            className="border-2 border-l-0 rounded-tr-3xl rounded-br-3xl border-purple"
          />
        </div>
        {/* 
              <div className="w-10/12 border-2 border-l-0 rounded-tr-3xl rounded-br-3xl border-purple">
          <Image
            src={imageUrl}
            alt={imageAlt}
            height={200}
            width={200}
            className="rounded-tr-3xl rounded-br-3xl"
          />
        </div>
        */}
      </div>
    </motion.div>
  );
};
