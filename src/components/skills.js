import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.3;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const x = ($t) => {
    return 50 * $t * Math.cos($t);
  };
  const y = ($t) => {
    return 50 * $t * Math.sin($t);
  };

  const circles = [];
  for (let t = 0; t < 18 * 1; t += 1) {
    circles.push({ x: x(t), y: y(t) });
  }
  return (
    <div
      className="sticky flex items-center justify-center h-screen bg-light-purple"
      ref={ref}
    >
      {isInView && (
        <motion.svg
          width="80%"
          height="100%"
          viewBox="-1100 -1000 2200 2200"
          initial="hidden"
          animate="visible"
        >
          {circles.map((coordinates, index) => (
            <motion.circle
              key={index}
              cx={coordinates.x}
              cy={coordinates.y}
              r="90"
              stroke="#3B4472"
              variants={draw}
              custom={index}
              className="rounded-stroke fill-mint stroke-[4px]"
            />
          ))}
        </motion.svg>
      )}
    </div>
  );
}
