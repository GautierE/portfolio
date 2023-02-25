import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Skills() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    {
      url: "../../skills/webscrapping_icon.svg",
      desc: "Web scrapping/automation",
    },
    { url: "../../skills/oauth_logo.svg", desc: "Oauth" },
    { url: "../../skills/api_icon.svg", desc: "RESTful API" },
  ];

  const animateText = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const expandSkills = {
    hidden: ({ leftToRight }) => {
      return { x: leftToRight ? -2000 : 2000, opacity: 0 };
    },
    visible: ({ delay }) => {
      return {
        x: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 2,
          ease: "linear",
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
    <div className="sticky flex flex-col items-center justify-center h-screen xl:bg-purple-white bg-purple tall:top-0">
      <motion.h2
        className="self-start mb-5 ml-5 mr-0 text-4xl text-white select-none left-10 top-5 font-title xl:ml-0 xl:mr-10 xl:self-end xl:text-6xl xl:font-bold xl:text-black"
        variants={animateText}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        Skills
      </motion.h2>
      <div className="flex h-[90%] w-[90%] flex-col justify-evenly overflow-x-hidden rounded-md bg-white px-2 shadow md:h-4/5 xl:top-[17%] xl:w-3/4  xl:justify-evenly xl:p-5">
        <div className="">
          <motion.p
            className="pt-2 pl-2 text-lg xl:pb-2 xl:pt-0 xl:text-2xl"
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            Front-end
          </motion.p>
          <motion.div
            className="flex h-[16vh] flex-col flex-wrap items-center justify-evenly overflow-y-hidden overflow-x-scroll rounded-lg border-2   border-purple bg-white md:h-[22vh] xl:h-[100px] xl:flex-row xl:flex-nowrap xl:overflow-x-auto xl:rounded-full"
            variants={expandSkills}
            custom={{ leftToRight: true, delay: 0 }}
            initial="hidden"
            animate={controls}
          >
            {frontEndLogos.map((item, i) => (
              <motion.div
                key={i}
                className="flex w-[135px] flex-col items-center justify-center xl:h-full xl:w-full xl:justify-evenly"
                variants={drawImages}
                custom={{
                  i: i,
                  waitTime: 0,
                  itemCount: frontEndLogos.length - 1,
                  leftToRight: true,
                }}
              >
                <motion.img
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 0,
                    itemCount: frontEndLogos.length - 1,
                    leftToRight: true,
                  }}
                  src={item.url}
                  alt={item.desc}
                  width={"55vw"}
                  className="p-2 border-2 rounded-full border-purple"
                />
                <p className="whitespace-nowrap lg:text-[1.5vh]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="">
          <motion.p
            className="pt-2 pl-2 text-lg xl:pb-2 xl:pt-0 xl:text-2xl"
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.5,
                  duration: 1,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            Back-end
          </motion.p>
          <motion.div
            className="flex h-[16vh] flex-col flex-wrap items-center justify-evenly overflow-y-hidden overflow-x-scroll rounded-lg border-2   border-purple bg-white md:h-[22vh] xl:h-[100px] xl:flex-row xl:flex-nowrap xl:overflow-x-auto xl:rounded-full"
            variants={expandSkills}
            initial="hidden"
            animate={controls}
            custom={{ leftToRight: false, delay: 1 }}
          >
            {backEndLogos.map((item, i) => (
              <div
                key={i}
                className="flex w-[135px] flex-col items-center justify-center xl:h-full xl:w-full xl:justify-evenly"
              >
                <motion.img
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 1,
                    itemCount: backEndLogos.length - 1,
                    leftToRight: false,
                  }}
                  src={item.url}
                  alt={item.desc}
                  width={"55vw"}
                  className="p-2 border-2 rounded-full border-purple"
                />
                <p className="whitespace-nowrap lg:text-[1.5vh]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="">
          <motion.p
            className="pt-2 pl-2 text-lg xl:pb-2 xl:pt-0 xl:text-2xl"
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 3,
                  duration: 1,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate={controls}
          >
            Miscs
          </motion.p>
          <motion.div
            className="flex h-[16vh] flex-col flex-wrap items-center justify-evenly overflow-y-hidden overflow-x-scroll rounded-lg  border-2 border-purple bg-white md:h-[22vh] xl:h-[100px] xl:flex-row xl:flex-nowrap xl:overflow-x-auto xl:rounded-full"
            variants={expandSkills}
            initial="hidden"
            animate={controls}
            custom={{ leftToRight: true, delay: 2.5 }}
          >
            {miscsLogos.map((item, i) => (
              <div
                key={i}
                className="flex w-[135px] flex-col items-center justify-center xl:h-full xl:w-full xl:justify-evenly"
              >
                <motion.img
                  variants={drawImages}
                  custom={{
                    i: i,
                    waitTime: 2.5,
                    itemCount: miscsLogos.length - 1,
                    leftToRight: true,
                  }}
                  src={item.url}
                  alt={item.desc}
                  width={"55vw"}
                  className="p-2 border-2 rounded-full border-purple"
                />
                <p className="whitespace-nowrap lg:text-[1.5vh]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
