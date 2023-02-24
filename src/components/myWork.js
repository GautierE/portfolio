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
    <div className="sticky top-0 h-screen bg-white md:h-[120vh]">
      <div className="mx-auto flex h-screen w-[90%] flex-col md:w-full">
        <div className="pt-5 md:ml-20 md:pt-20">
          <motion.h2
            className="select-none font-title text-3xl font-bold text-black md:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Take a look at my <br /> recent work
          </motion.h2>
          <motion.p
            className="mt-2 text-lg md:mt-5 md:text-xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            From school to personal projects, <br />
            through my one year work in a company.
          </motion.p>
        </div>
        <div className="mx-auto mt-2 flex h-full max-w-[1800px] flex-col md:mt-10 md:flex-row md:flex-wrap md:justify-center">
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
      className="mx-auto mb-5 w-full grow bg-white md:mb-7 md:w-[48%]"
      whileHover={{ translateY: -8 }}
      variants={animateProjects}
      custom={{ delay: 0 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative flex h-full w-full justify-evenly">
        <div
          className={
            "relative w-full rounded-3xl border-2 border-purple pt-2 pl-5 md:rounded-br-none md:rounded-tr-none md:rounded-tl-3xl md:rounded-bl-3xl md:border-r-0 md:pt-10 md:pl-10"
          }
        >
          <h5 className="text-xl max-[376px]:text-lg md:text-4xl">{title}</h5>
          <p className="mt-5 max-[376px]:text-xs md:w-5/6 md:text-lg">
            {description}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={`/projects/${route}`}
            className="underline underline-offset-4 max-[376px]:text-xs md:absolute md:bottom-7 md:text-lg"
          >
            Details
          </a>
        </div>
        <div className="absolute right-2 h-[60px] w-[60px] md:relative md:h-auto md:w-3/5 md:rounded-tr-3xl md:rounded-br-3xl md:border-2 md:border-l-0 md:border-purple">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
            className="md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
};
