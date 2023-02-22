import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Skills() {
  const frontEndLogos = [
    { url: "/skills/html_logo.svg", desc: "HTML" },
    { url: "/skills/css_logo.svg", desc: "CSS" },
    { url: "/skills/js_logo.svg", desc: "Javascript" },
    { url: "/skills/nextjs_logo.svg", desc: "Next.js" },
    { url: "/skills/react_logo.svg", desc: "React" },
    { url: "/skills/jquery_logo.svg", desc: "jQuery" },
    { url: "/skills/tailwind_logo.svg", desc: "Tailwind CSS" },
    { url: "/skills/bootstrap_logo.svg", desc: "Bootstrap" },
    { url: "/skills/framermotion_logo.webp", desc: "Framer Motion" },
    { url: "/skills/react_logo.svg", desc: "React Native" },
  ];

  const backEndLogos = [
    { url: "../../skills/php_logo.svg", desc: "PHP" },
    { url: "../../skills/symfony_logo.svg", desc: "Symfony" },
    { url: "../../skills/doctrine_logo.svg", desc: "Doctrine" },
    { url: "../../skills/node_logo.svg", desc: "Node.js" },
    { url: "../../skills/express_logo.svg", desc: "Express.js" },
    { url: "../../skills/sequelize_logo.svg", desc: "Sequelize" },
    { url: "../../skills/mysql_logo.svg", desc: "MySQL" },
    { url: "../../skills/sqlite_logo.svg", desc: "SQLite" },
  ];

  const miscsLogos = [
    { url: "../../skills/git_logo.svg", desc: "Git" },
    { url: "../../skills/agile_icon.svg", desc: "Agile" },
    { url: "../../skills/scrum_icon.svg", desc: "Scrum" },
    { url: "../../skills/chrome_logo.svg", desc: "Chrome extension" },
    { url: "../../skills/request_icon.svg", desc: "HTTP Requests" },
    { url: "../../skills/oauth_logo.svg", desc: "Oauth" },
    { url: "../../skills/api_icon.svg", desc: "RESTful API" },
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
              <motion.div
                key={i}
                className="flex flex-col items-center w-full h-full justify-evenly"
                variants={drawImages}
                custom={{
                  i: i,
                  waitTime: 0,
                  itemCount: frontEndLogos.length - 1,
                  leftToRight: true,
                }}
              >
                <img src={item.url} alt={item.desc} width="40%" />
                <p className="whitespace-nowrap">{item.desc}</p>
              </motion.div>
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
              <div
                key={i}
                className="flex flex-col items-center w-full h-full justify-evenly"
              >
                <motion.img
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 1.5,
                    itemCount: backEndLogos.length - 1,
                    leftToRight: false,
                  }}
                  src={item.url}
                  alt={item.desc}
                  width="32%"
                />
                <p className="whitespace-nowrap">{item.desc}</p>
              </div>
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
              <div
                key={i}
                className="flex flex-col items-center w-full h-full justify-evenly"
              >
                <motion.img
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 3,
                    itemCount: miscsLogos.length - 1,
                    leftToRight: true,
                  }}
                  src={item.url}
                  alt={item.desc}
                  width="28%"
                />
                <p className="whitespace-nowrap">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
