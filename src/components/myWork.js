import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyWork() {
  const animateText = {
    hidden: { y: 30, opacity: 0 },
    visible: ({ delay }) => {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      };
    },
  };

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
      imageUrl: "/projects/c_koya_tech/ckoya_logo.png",
      imageAlt: "C-Koya Tech logo",
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
    <div className="sticky top-0 mx-auto my-0 h-screen w-full bg-white sm:h-[130vh]">
      <div className="ml-5 h-[21%] pt-6 sm:ml-20 sm:h-auto sm:pt-20">
        <motion.h2
          className="text-3xl font-bold text-black select-none font-title sm:text-6xl"
          variants={animateText}
          custom={{ delay: 0 }}
          initial="hidden"
          whileInView="visible"
        >
          Take a look at my <br /> recent work
        </motion.h2>
        <motion.p
          className="mt-2 text-lg sm:mt-5 sm:text-xl"
          custom={{ delay: 0.5 }}
          variants={animateText}
          initial="hidden"
          whileInView="visible"
        >
          From school to personal projects, <br />
          through my one year work in a company.
        </motion.p>
      </div>
      <div className="mx-auto mt-5 flex h-[76%] max-w-[1800px] flex-col sm:mt-10 sm:h-auto sm:flex-row sm:flex-wrap sm:justify-center">
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
  const animateProjects = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="mx-auto mb-5 h-full w-[90%] bg-white sm:mb-7 sm:h-auto sm:min-h-[270px] sm:w-auto sm:min-w-[48%]  sm:max-w-[48%]"
      whileHover={{ translateY: -8 }}
      variants={animateProjects}
      custom={{ delay: 0 }}
      initial="hidden"
      whileInView="visible"
    >
      <div className="relative flex w-full h-full justify-evenly">
        <div
          className={
            "relative w-full rounded-3xl border-2 border-purple pt-2 pl-5 sm:rounded-br-none sm:rounded-tr-none sm:rounded-tl-3xl sm:rounded-bl-3xl sm:border-r-0 sm:pt-10 sm:pl-10"
          }
        >
          <h5 className="text-xl sm:text-4xl">{title}</h5>
          <p className="mt-3 sm:mt-5 sm:w-5/6 sm:text-lg">{description}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={`/projects/${route}`}
            className="underline underline-offset-4 sm:absolute sm:bottom-7 sm:text-lg"
          >
            Details
          </a>
        </div>
        <div className="absolute right-5 h-[60px] w-[60px] sm:relative sm:h-auto sm:w-10/12">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill={true}
            sizes="100%"
            className="sm:rounded-tr-3xl sm:rounded-br-3xl sm:border-2 sm:border-l-0 sm:border-purple"
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
