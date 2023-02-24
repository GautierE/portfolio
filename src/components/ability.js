import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Ability() {
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
    <div className="px-auto sticky top-0 h-screen w-full bg-white sm:h-[130vh]">
      <div className="mx-auto flex h-full flex-col items-center sm:h-[100vh] sm:justify-center">
        <div className="mt-5 w-[90%] text-center sm:mb-14 sm:mt-0 sm:w-1/3">
          <motion.h2
            className="text-3xl font-bold font- mb-7 font-title sm:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
          >
            Specialities
          </motion.h2>
          <motion.p
            className="sm:text-xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
          >
            I have built all types of applications in the past and I have now
            decided to focus on web and mobile apps.
          </motion.p>
        </div>
        <div className="flex h-full w-[90%] flex-col justify-evenly sm:h-auto sm:w-full sm:flex-row">
          <div className="px-5 pt-3 pb-5 text-black sm:w-1/4 sm:pt-7 sm:pb-14">
            <div className="flex items-center sm:block">
              <div className="w-[65px] rounded-full border-2 border-purple p-3">
                <Image
                  src="/ability/figma_logo.svg"
                  alt="Figma logo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="ml-2 text-xl sm:ml-0 sm:mt-2 sm:text-2xl">
                Product design
              </p>
            </div>
            <p className="mt-2 sm:mt-5 sm:text-lg">
              From idea, to wireframes, to prototype, to final version, I
              provide you with stunning and pixel perfect design for your
              website or mobile app.
            </p>
          </div>
          <motion.div
            className="px-5 pt-5 pb-5 text-white border rounded-lg bg-purple sm:w-1/4 sm:pt-7 sm:pb-14"
            custom={{ delay: 0 }}
            variants={animateAbility}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center sm:block">
              <div className="w-[65px] rounded-full border-2 p-3">
                <Image
                  src="/ability/code_logo.svg"
                  alt="Vs code logo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="ml-2 text-xl sm:ml-0 sm:mt-2 sm:text-2xl">
                Web development
              </p>
            </div>
            <p className="mt-2 sm:mt-5 sm:text-lg">
              Whether I design your website, or you come with your own design, I
              build fully responsive websites that adapt both on desktop and
              mobile devices.
            </p>
          </motion.div>
          <motion.div
            className="px-5 pt-3 pb-5 text-black sm:w-1/4 sm:pt-7 sm:pb-14"
            custom={{ delay: 0.7 }}
            variants={animateAbility}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex items-center sm:block">
              <div className="w-[65px] rounded-full border-2 border-purple p-3">
                <Image
                  src="/ability/react_native_logo.svg"
                  alt="React native logo"
                  width={60}
                  height={60}
                />
              </div>
              <p className="ml-2 text-xl sm:ml-0 sm:mt-2 sm:text-2xl">
                Mobile development
              </p>
            </div>
            <p className="mt-2 sm:mt-5 sm:text-lg">
              If your ideas go well beyond the web, I can also develop fully
              functional mobile apps for Android and iOS, complete with the
              server-side implementations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
