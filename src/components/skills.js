import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const frontEndLogos = [
    { url: "../../skills/html_logo.svg" },
    { url: "../../skills/css_logo.svg" },
    { url: "../../skills/js_logo.svg" },
    { url: "../../skills/nextjs_logo.svg" },
    { url: "../../skills/react_logo.svg" },
    { url: "../../skills/jquery_logo.svg" },
    { url: "../../skills/tailwind_logo.svg" },
    { url: "../../skills/bootstrap_logo.svg" },
    { url: "../../skills/framermotion_logo.webp" },
    { url: "../../skills/react_logo.svg" },
  ];

  const backEndLogos = [
    { url: "../../skills/php_logo.svg" },
    { url: "../../skills/symfony_logo.svg" },
    { url: "../../skills/doctrine_logo.svg" },
    { url: "../../skills/node_logo.svg" },
    { url: "../../skills/express_logo.svg" },
    { url: "../../skills/sequelize_logo.svg" },
    { url: "../../skills/mysql_logo.svg" },
    { url: "../../skills/sqlite_logo.svg" },
  ];

  const miscsLogos = [
    { url: "../../skills/git_logo.svg" },
    { url: "../../skills/agile_icon.svg" },
    { url: "../../skills/scrum_icon.svg" },
    { url: "../../skills/chrome_logo.svg" },
    { url: "../../skills/request_icon.svg" },
    { url: "../../skills/oauth_logo.svg" },
    { url: "../../skills/api_icon.svg" },
  ];
  const ref = useRef(null);

  const expandSkills = {
    hidden: ({ leftToRight }) => {
      return { x: leftToRight ? -2000 : 2000, opacity: 0 };
    },
    visible: ({ delay }) => {
      return {
        x: 0,
        opacity: 1,
        transition: {
          x: { delay, duration: 2, ease: "linear" },
          opacity: { delay, duration: 2, ease: "linear" },
        },
      };
    },
  };

  const drawCircles = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: ({ i, waitTime, itemCount, leftToRight }) => {
      let delay;

      if (leftToRight) {
        delay =
          i !== itemCount ? (itemCount - i) * 0.4 + waitTime : 0.3 + waitTime;
      } else {
        delay = i !== 0 ? i * 0.4 + waitTime : 0.3 + waitTime;
      }

      return {
        pathLength: 0,
        opacity: 1,
        transition: {
          pathLength: {
            delay: delay,
            type: "spring",
            duration: 2 + Math.random() * (1 - 0.1) + 0.1,
            bounce: 0,
          },
          opacity: { delay: delay, duration: 2.5 },
        },
      };
    },
  };

  const drawImages = {
    hidden: { opacity: 0 },
    visible: ({ i, waitTime, itemCount, leftToRight }) => {
      let delay;

      if (leftToRight) {
        delay =
          i !== itemCount ? (itemCount - i) * 0.4 + waitTime : 0.9 + waitTime;
      } else {
        delay = i !== 0 ? i * 0.4 + waitTime : 0.3 + waitTime;
      }

      return {
        translateX: "-19%",
        translateY: "-16%",
        opacity: 1,
        transition: {
          opacity: { delay, duration: 2.5 },
        },
      };
    },
  };

  return (
    <div
      className="sticky top-0 flex h-[130vh] flex-col items-center justify-center bg-gradient-to-r from-background-white to-lighter-blue"
      ref={ref}
    >
      <h2 className="absolute text-black select-none left-32 top-20 text-7xl">
        Skills
      </h2>
      <div className="absolute top-[15%] flex h-1/2 w-3/4 flex-col justify-evenly overflow-x-hidden rounded-md bg-gradient-to-r from-lighter-blue to-background-white  p-5 shadow">
        <div>
          <p className="pb-2 pl-2 text-2xl text-white">Front-end</p>
          <motion.div
            className="flex h-[100px] flex-row items-center justify-evenly rounded-full bg-gradient-to-r from-background-white via-background-white to-lighter-blue"
            variants={expandSkills}
            custom={{ leftToRight: true, delay: 0 }}
            initial="hidden"
            animate="visible"
          >
            {frontEndLogos.map((item, i) => (
              <svg key={i} className="max-w-[120px]">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="25%"
                  stroke="#3B4472"
                  variants={drawCircles}
                  custom={{
                    i: i,
                    waitTime: 0,
                    itemCount: frontEndLogos.length - 1,
                    leftToRight: true,
                  }}
                  className="rounded-stroke fill-white stroke-[4px]"
                />
                <motion.image
                  width="40%"
                  height="40%"
                  x="50%"
                  y="50%"
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 0,
                    itemCount: frontEndLogos.length - 1,
                    leftToRight: true,
                  }}
                  href={item.url}
                />
              </svg>
            ))}
          </motion.div>
        </div>
        <div>
          <p className="pb-2 pl-2 text-2xl text-white">Back-end</p>
          <motion.div
            className=" flex h-[100px] flex-row items-center justify-evenly rounded-full bg-gradient-to-r from-background-white via-background-white to-lighter-blue"
            variants={expandSkills}
            initial="hidden"
            animate="visible"
            custom={{ leftToRight: false, delay: 1.5 }}
          >
            {backEndLogos.map((item, i) => (
              <svg key={i} className="max-w-[120px]">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="25%"
                  stroke="#3B4472"
                  variants={drawCircles}
                  custom={{
                    i: i,
                    waitTime: 1.5,
                    itemCount: backEndLogos.length - 1,
                    leftToRight: false,
                  }}
                  className="rounded-stroke fill-white stroke-[4px]"
                />
                <motion.image
                  width="40%"
                  height="40%"
                  x="50%"
                  y="50%"
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 1.5,
                    itemCount: backEndLogos.length - 1,
                    leftToRight: false,
                  }}
                  href={item.url}
                />
              </svg>
            ))}
          </motion.div>
        </div>
        <div>
          <p className="pb-2 pl-2 text-2xl text-white">Miscs</p>
          <motion.div
            className=" flex h-[100px] flex-row items-center justify-evenly rounded-full  bg-gradient-to-r from-background-white via-background-white to-lighter-blue"
            variants={expandSkills}
            initial="hidden"
            animate="visible"
            custom={{ leftToRight: true, delay: 3 }}
          >
            {miscsLogos.map((item, i) => (
              <svg className="max-w-[120px]" key={i}>
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="25%"
                  stroke="#3B4472"
                  variants={drawCircles}
                  custom={{
                    i: i,
                    waitTime: 3,
                    itemCount: miscsLogos.length - 1,
                    leftToRight: true,
                  }}
                  className="rounded-stroke fill-white stroke-[4px]"
                />
                <motion.image
                  width="40%"
                  height="40%"
                  x="50%"
                  y="50%"
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 3,
                    itemCount: miscsLogos.length - 1,
                    leftToRight: true,
                  }}
                  href={item.url}
                />
              </svg>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
