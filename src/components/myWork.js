import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import cloudMateLogo from "../../public/projects/cloudmate/cloudmate_logo.png";
import cKoyaLogo from "../../public/projects/c_koya_tech/ckoya_logo.png";
import robertLogo from "../../public/projects/robert/robert_logo.png";
import arrow from "../../public/arrow.png";
import { useTranslation } from "next-i18next";

export default function MyWork() {
  const router = useRouter();

  const { t } = useTranslation("common");
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
      title: t("myWork.cloudmate.title"),
      description: t("myWork.cloudmate.desc"),
      imageUrl: cloudMateLogo,
      imageAlt: "Cloudmate logo",
      route: "cloudmate",
    },
    {
      title: t("myWork.ckoya.title"),
      description: t("myWork.ckoya.desc"),
      imageUrl: cKoyaLogo,
      imageAlt: "C-Koya Tech logo",
      route: "c-koya-tech",
    },
    {
      title: t("myWork.robert.title"),
      description: t("myWork.robert.desc"),
      imageUrl: robertLogo,
      imageAlt: "Robert's adventure logo",
      route: "roberts-adventure",
    },
    // {
    //   title: "Portfolio",
    //   description: "My personal website.",
    //   imageUrl: portfolioLogo,
    //   imageAlt: "a",
    //   route: "portfolio",
    // },
  ];

  return (
    <div className="sticky h-full bg-white tall:top-0 tall:h-screen">
      <div className="mx-auto flex h-full w-[90%] flex-col md:w-full">
        <div className="relative pt-5 md:ml-20 md:pt-10 xl:pt-10">
          <motion.h2
            className="select-none font-title text-3xl font-bold text-black md:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("myWork.titleFirstPart")} <br /> {t("myWork.titleSecondPart")}
          </motion.h2>
          <motion.p
            className="mt-2 text-lg md:mt-5 md:text-xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("myWork.subtitleFirstPart")} <br />
            {t("myWork.subtitleSecondPart")}
          </motion.p>
          <Image
            src={arrow}
            alt="Arrow design"
            width={250}
            height={250}
            className={
              (router.locale === "fr"
                ? "sm:top-24 sm:left-[60%] md:top-40 lg:left-[57%] xl:top-32 xl:left-[45%] 2xl:left-[37%]"
                : "sm:top-28 sm:left-[50%] lg:left-[33%] xl:top-24 xl:left-[30%] 2xl:left-[22%]") +
              " absolute hidden sm:block"
            }
          />
        </div>
        <div className="z-10 mx-auto mt-2 flex h-full max-w-[1800px] flex-col md:mt-5 md:flex-row md:flex-wrap md:justify-center">
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
  const router = useRouter();
  const { t } = useTranslation("common");
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
      className="mx-auto mb-5 w-full md:mb-7 md:w-[48%]"
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
            "relative flex w-full flex-col rounded-3xl border-2 border-purple bg-white pt-2 pl-5 md:rounded-br-none md:rounded-tr-none md:rounded-tl-3xl md:rounded-bl-3xl md:border-r-0 md:pt-10 md:pl-10"
          }
        >
          <h5 className="text-xl md:text-4xl tiny:text-lg">{title}</h5>
          <div className="flex h-full flex-col justify-around">
            <p className="mt-5 md:w-5/6 md:text-lg tiny:text-xs">
              {description}
            </p>
            {route !== "portfolio" && (
              <a
                href={`${router.locale}/projects/${route}`}
                className="underline underline-offset-4 md:text-lg tiny:text-xs"
              >
                {t("myWork.details")}
              </a>
            )}
          </div>
        </div>
        <div className="absolute right-2 h-[60px] w-[60px] md:relative md:right-0 md:h-auto md:w-3/5 md:rounded-tr-3xl md:rounded-br-3xl md:border-2 md:border-l-0 md:border-purple md:bg-white">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 60px,
            60%"
            style={{ objectFit: "contain" }}
            className="md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>
      </div>
    </motion.div>
  );
};
