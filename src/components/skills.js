import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
        pathLength: 1,
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
      className="sticky top-0 flex h-[130vh] flex-col items-center justify-center bg-background-white "
      ref={ref}
    >
      <h2 className="absolute text-black select-none left-32 top-20 text-7xl">
        Skills
      </h2>
      <div className="absolute top-[15%] flex h-1/2 w-3/4 flex-col justify-evenly overflow-x-hidden rounded-md bg-gradient-to-r from-custom-blue to-lighter-blue  p-5 shadow">
        <div>
          <p className="pb-2 pl-2 text-2xl text-white">Front-end</p>
          <motion.div
            className="flex h-[100px] flex-row items-center justify-evenly rounded-full  bg-white"
            variants={expandSkills}
            custom={{ leftToRight: true, delay: 0 }}
            initial="hidden"
            animate="visible"
          >
            {(() => {
              const technos = [];

              for (let i = 0; i < 6; i++) {
                technos.push(
                  <svg className="max-w-[120px]">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="25%"
                      stroke="#3B4472"
                      variants={drawCircles}
                      custom={{
                        i: i,
                        waitTime: 0,
                        itemCount: 5,
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
                        itemCount: 5,
                        leftToRight: true,
                      }}
                      href="../../techno_logos/html_logo.svg"
                    />
                  </svg>
                );
              }

              return technos;
            })()}
          </motion.div>
        </div>
        <div>
          <p className="pb-2 pl-2 text-2xl text-white">Back-end</p>
          <motion.div
            className=" flex h-[100px] flex-row items-center justify-evenly rounded-full  bg-white"
            variants={expandSkills}
            initial="hidden"
            animate="visible"
            custom={{ leftToRight: false, delay: 1.5 }}
          >
            {(() => {
              const technos = [];

              for (let i = 0; i < 6; i++) {
                technos.push(
                  <svg className="max-w-[120px]">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="25%"
                      stroke="#3B4472"
                      variants={drawCircles}
                      custom={{
                        i: i,
                        waitTime: 1.5,
                        itemCount: 5,
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
                        itemCount: 5,
                        leftToRight: false,
                      }}
                      href="../../techno_logos/html_logo.svg"
                    />
                  </svg>
                );
              }

              return technos;
            })()}
          </motion.div>
        </div>
        <div>
          <p className="pb-2 pl-2 text-2xl text-white">Tools</p>
          <motion.div
            className=" flex h-[100px] flex-row items-center justify-evenly rounded-full  bg-white"
            variants={expandSkills}
            initial="hidden"
            animate="visible"
            custom={{ leftToRight: true, delay: 3 }}
          >
            {(() => {
              const technos = [];

              for (let i = 0; i < 6; i++) {
                technos.push(
                  <svg className="max-w-[120px]">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="25%"
                      stroke="#3B4472"
                      variants={drawCircles}
                      custom={{
                        i: i,
                        waitTime: 3,
                        itemCount: 5,
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
                        itemCount: 5,
                        leftToRight: true,
                      }}
                      href="../../techno_logos/html_logo.svg"
                    />
                  </svg>
                );
              }

              return technos;
            })()}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
