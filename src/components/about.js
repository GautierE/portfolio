import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sneakerPicture from "../../public/about/sneakers.png";
import skatePicture from "../../public/about/skate.png";
import { useTranslation } from "next-i18next";

export default function About() {
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

  return (
    <div className="sticky w-full bg-white">
      <div className="mx-auto w-[90%] max-w-[1200px] pb-32">
        <div className="pt-10 md:pt-48">
          <motion.h2
            className="relative select-none pb-7 font-title text-4xl font-bold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-24 after:bg-purple after:content-[''] md:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("about.title")}
          </motion.h2>
          <motion.p
            className="max-w-[900px] pt-5 text-xl md:text-3xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("about.introFirstPart")}
            <br />
            {t("about.introSecondPart")}
          </motion.p>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-40 md:flex-row">
          <motion.p
            className="pt-5 text-lg text-justify md:mr-20 md:w-1/2 md:pt-0 md:text-2xl lg:pt-20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          >
            {t("about.sneakers.firstPart")}
            <br />
            <br />
            {t("about.sneakers.secondPart")}
            <br />
            <br />
            {t("about.sneakers.thirdPart")}
          </motion.p>
          <div className="relative mt-5 h-[48vh] w-[100%] md:mt-0 md:h-[601px] md:w-[450px]">
            <Image
              src={sneakerPicture}
              alt={"Sneakers picture"}
              fill
              sizes="(max-width: 767px) 100%,
              450px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center mt-10 md:mt-32 md:flex-row">
          <div className="relative mt-5 h-[48vh] w-[100%] md:mt-0 md:h-[601px] md:w-[450px]">
            <Image
              src={skatePicture}
              alt={"Skate picture"}
              fill
              sizes="(max-width: 767px) 100%,
              450px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <motion.p
            className="pt-5 text-lg text-justify md:ml-20 md:w-1/2 md:pt-0 md:text-2xl lg:pt-20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          >
            {t("about.skate.firstPart")}
            <br />
            <br />
            {t("about.skate.secondPart")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
