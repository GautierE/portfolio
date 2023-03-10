import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import figmaLogo from "../../public/ability/figma_logo.svg";
import codeLogo from "../../public/ability/code_logo.svg";
import reactLogo from "../../public/ability/react_native_logo.svg";
import { useTranslation } from "next-i18next";

export default function Ability() {
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

  const animateAbility = {
    hidden: { x: -200, opacity: 0 },
    visible: ({ delay }) => {
      return {
        x: 0,
        opacity: 1,
        transition: {
          x: {
            delay,
            duration: 1,
            ease: "easeInOut",
          },
          opacity: {
            delay,
            duration: 1,
            ease: "easeInOut",
          },
        },
      };
    },
  };

  return (
    <div className="px-auto sticky w-full bg-white lg:h-[130vh] tall:top-0 tall:h-screen">
      <div className="flex flex-col items-center h-full mx-auto xl:h-screen xl:justify-center">
        <div className="mt-10 w-[90%] text-center lg:mb-14 lg:mt-5 lg:w-1/3">
          <motion.h2
            className="mb-3 text-3xl font-bold font-title md:text-4xl lg:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("ability.title")}
          </motion.h2>
          <motion.p
            className="md:text-xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("ability.subtitle")}
          </motion.p>
        </div>
        <div className="flex h-full w-[90%] flex-col justify-evenly lg:h-auto lg:w-full lg:flex-row">
          <div className="px-5 pt-3 pb-5 text-black lg:w-1/4 lg:pt-7 lg:pb-14">
            <div className="flex items-center lg:block">
              <div className="w-[65px] rounded-full border-2 border-purple p-3">
                <Image
                  src={figmaLogo}
                  alt="Figma logo"
                  width={60}
                  height={60}
                />
              </div>

              <p className="ml-2 text-xl lg:ml-0 lg:mt-2 lg:text-2xl">
              {t("ability.design.title")}
              </p>
            </div>
            <p className="mt-2 text-xs md:text-lg lg:mt-5">
            {t("ability.design.text")}
            </p>
          </div>
          <motion.div
            className="px-5 pt-5 pb-5 text-white border rounded-lg bg-purple lg:w-1/4 lg:pt-7 lg:pb-14"
            custom={{ delay: 0 }}
            variants={animateAbility}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center lg:block">
              <div className="w-[65px] rounded-full border-2 p-3">
                <Image
                  src={codeLogo}
                  alt="Vs code logo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="ml-2 text-xl lg:ml-0 lg:mt-2 lg:text-2xl">
              {t("ability.web.title")}
              </p>
            </div>
            <p className="mt-2 text-xs md:text-lg lg:mt-5">
            {t("ability.web.text")}

            </p>
          </motion.div>
          <motion.div
            className="px-5 pt-3 pb-5 text-black lg:w-1/4 lg:pt-7 lg:pb-14"
            custom={{ delay: 0.7 }}
            variants={animateAbility}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center lg:block">
              <div className="w-[65px] rounded-full border-2 border-purple p-3">
                <Image
                  src={reactLogo}
                  alt="React native logo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="ml-2 text-xl lg:ml-0 lg:mt-2 lg:text-2xl">
              {t("ability.mobile.title")}
              </p>
            </div>
            <p className="mt-2 text-xs md:text-lg lg:mt-5">
            {t("ability.mobile.text")}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
