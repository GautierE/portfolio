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
          x: { delay, duration: 3, ease: "linear" },
          opacity: { delay, duration: 3, ease: "linear" },
        },
      };
    },
  };

  const drawCircles = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: ({ i, waitTime }) => {
      const delay = i * 0.3 + waitTime;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 3 + Math.floor(Math.random() * (1 - 0.1) + 0.1),
            bounce: 0,
          },
          opacity: { delay, duration: 2.5 },
        },
      };
    },
  };

  const drawImages = {
    hidden: { opacity: 0 },
    visible: ({ i, waitTime }) => {
      const delay = i * 0.3 + waitTime;
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
      className="sticky top-0 flex flex-col items-center justify-center h-screen bg-background-white"
      ref={ref}
    >
      <h2 className="self-start mt-12 ml-10 text-5xl text-white select-none bordered-title">
        Skills
      </h2>
      {isInView && (
        <div className="flex flex-col justify-around w-full h-full overflow-x-hidden">
          <motion.div
            className="flex h-[16%] flex-row items-center justify-evenly bg-gradient-to-r from-slate-300"
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
                      custom={{ i: i, waitTime: 3 }}
                      className="rounded-stroke fill-mint stroke-[4px]"
                    />
                    <motion.image
                      width="40%"
                      height="40%"
                      x="50%"
                      y="50%"
                      variants={drawImages}
                      custom={{ i: i, waitTime: 3 }}
                      href="../../techno_logos/html_logo.svg"
                    />
                  </svg>
                );
              }

              return technos;
            })()}
          </motion.div>
          <motion.div
            className="flex h-[16%] flex-row items-center justify-evenly bg-gradient-to-l from-slate-300"
            variants={expandSkills}
            initial="hidden"
            animate="visible"
            custom={{ leftToRight: false, delay: 2 }}
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
                      custom={{ i: i, waitTime: 5 }}
                      className="rounded-stroke fill-mint stroke-[4px]"
                    />
                    <motion.image
                      width="40%"
                      height="40%"
                      x="50%"
                      y="50%"
                      variants={drawImages}
                      custom={{ i: i, waitTime: 5 }}
                      href="../../techno_logos/html_logo.svg"
                    />
                  </svg>
                );
              }

              return technos;
            })()}
          </motion.div>
          <motion.div
            className="flex h-[16%] flex-row items-center justify-evenly bg-gradient-to-r from-slate-300"
            variants={expandSkills}
            initial="hidden"
            animate="visible"
            custom={{ leftToRight: true, delay: 4 }}
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
                      custom={{ i: i, waitTime: 7 }}
                      className="rounded-stroke fill-mint stroke-[4px]"
                    />
                    <motion.image
                      width="40%"
                      height="40%"
                      x="50%"
                      y="50%"
                      variants={drawImages}
                      custom={{ i: i, waitTime: 7 }}
                      href="../../techno_logos/html_logo.svg"
                    />
                  </svg>
                );
              }

              return technos;
            })()}
          </motion.div>
        </div>
      )}
    </div>
  );
}
