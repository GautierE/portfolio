import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyWork() {
  return (
    <div className="sticky top-0 mx-auto my-0 flex h-screen w-full flex-col items-center justify-start bg-[#f5f4fc]">
      <h2 className="mt-20 mb-10 select-none text-4xl text-black">My Work</h2>
      <div className="flex flex-wrap justify-center">
        <Project
          title="Cloudmate"
          description="Web-based tool to help sneaker resellers"
          imageUrl="/projects/robert/robert_background.png"
          imageAlt="a"
        />
        <Project
          title="C-Koya Tech"
          description="My ten weeks internship in C-Koya Tech"
          imageUrl="/projects/robert/robert_background.png"
          imageAlt="a"
        />
        <Project
          title="C-Koya Tech"
          description="My one year work in C-Koya Tech"
          imageUrl="/projects/robert/robert_background.png"
          imageAlt="a"
        />
        <Project
          title="Personal website"
          description="blablalabblablalabblablalab"
          imageUrl="/projects/robert/robert_background.png"
          imageAlt="a"
        />
        <Project
          title="Robert's adventure"
          description="blablalabblablalabblablal"
          imageUrl="/projects/robert/robert_background.png"
          imageAlt="a"
        />
        <Project
          title="?"
          description="Coming soon..."
          imageUrl="/projects/robert/robert_background.png"
          imageAlt="a"
        />
      </div>
    </div>
  );
}

const Project = ({ title, imageUrl, imageAlt, description }) => {
  return (
    <motion.div
      className="m-2 flex min-h-[250px] w-full max-w-[400px] flex-[50%] flex-col items-center justify-evenly bg-[#f5f4fc] shadow-lg"
      whileHover={{ translateY: -8 }}
    >
      <div className="relative mt-3 mb-1 h-4/6 w-10/12">
        <Image src={imageUrl} alt={imageAlt} fill={true} />
      </div>
      <div className="h-2/6 w-full bg-gradient-to-r from-slate-200 pt-2 pl-5">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};
