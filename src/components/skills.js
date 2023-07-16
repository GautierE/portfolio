import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import htmlLogo from "../../public/skills/html_logo.svg";
import cssLogo from "../../public/skills/css_logo.svg";
import jsLogo from "../../public/skills/js_logo.svg";
import typescriptLogo from "../../public/skills/typescript_logo.svg";
import nextjsLogo from "../../public/skills/nextjs_logo.svg";
import reactLogo from "../../public/skills/react_logo.svg";
import jqueryLogo from "../../public/skills/jquery_logo.svg";
import reactQueryLogo from "../../public/skills/react_query_logo.svg";
import angularLogo from "../../public/skills/angular_logo.svg";
import jasmineLogo from "../../public/skills/jasmine_logo.svg";
import karmaLogo from "../../public/skills/karma_logo.svg";
import tailwindLogo from "../../public/skills/tailwind_logo.svg";
import bootstrapLogo from "../../public/skills/bootstrap_logo.svg";
import framermotionLogo from "../../public/skills/framermotion_logo.webp";
import phpLogo from "../../public/skills/php_logo.svg";
import symfonyLogo from "../../public/skills/symfony_logo.svg";
import laravelLogo from "../../public/skills/laravel_logo.svg";
import doctrineLogo from "../../public/skills/doctrine_logo.svg";
import composerLogo from "../../public/skills/composer_logo.svg";
import nodeLogo from "../../public/skills/node_logo.svg";
import expressLogo from "../../public/skills/express_logo.svg";
import sequelizeLogo from "../../public/skills/sequelize_logo.svg";
import mysqlLogo from "../../public/skills/mysql_logo.svg";
import sqliteLogo from "../../public/skills/sqlite_logo.svg";
import cassandraLogo from "../../public/skills/cassandra_logo.svg";
import firebaseLogo from "../../public/skills/firebase_logo.svg";
import gcpLogo from "../../public/skills/googlecloud_logo.svg";
import vercelLogo from "../../public/skills/vercel_logo.svg";
import gitLogo from "../../public/skills/git_logo.svg";
import githubLogo from "../../public/skills/github_logo.svg";
import gitlabLogo from "../../public/skills/gitlab_logo.svg";
import dockerLogo from "../../public/skills/docker_logo.svg";
import bashLogo from "../../public/skills/bash_logo.svg";
import jiraLogo from "../../public/skills/jira_logo.svg";
import trelloLogo from "../../public/skills/trello_logo.svg";
import { useTranslation } from "next-i18next";

export default function Skills() {
  const { t } = useTranslation("common");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const [screenWidth, setScreenWidth] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setScreenWidth(divRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const frontEndBasicLogos = [
    { url: htmlLogo, desc: "HTML" },
    { url: cssLogo, desc: "CSS" },
    { url: jsLogo, desc: "Javascript" },
    { url: typescriptLogo, desc: "Typescript" },
    { url: tailwindLogo, desc: "Tailwind CSS" },
    { url: bootstrapLogo, desc: "Bootstrap" },
  ];

  const frontEndLibLogos = [
    { url: nextjsLogo, desc: "Next.js" },
    { url: reactLogo, desc: "React" },
    { url: angularLogo, desc: "Angular" },
    { url: jqueryLogo, desc: "jQuery" },
    { url: reactQueryLogo, desc: "React Query" },
    { url: framermotionLogo, desc: "Framer Motion" },
    { url: jasmineLogo, desc: "Jasmine" },
    { url: karmaLogo, desc: "Karma" },
    { url: reactLogo, desc: "React Native" },
  ];

  const backEndLogos = [
    { url: phpLogo, desc: "PHP" },
    { url: symfonyLogo, desc: "Symfony" },
    { url: laravelLogo, desc: "Laravel" },
    { url: doctrineLogo, desc: "Doctrine" },
    { url: composerLogo, desc: "Composer" },
    { url: nodeLogo, desc: "Node.js" },
    { url: expressLogo, desc: "Express.js" },
    { url: sequelizeLogo, desc: "Sequelize" },
  ];

  const databasesLogos = [
    { url: mysqlLogo, desc: "MySQL" },
    { url: sqliteLogo, desc: "SQLite" },
    { url: cassandraLogo, desc: "Cassandra" },
    { url: firebaseLogo, desc: "Firestore" },
  ];

  const devopsLogos = [
    { url: gcpLogo, desc: "GCP" },
    { url: firebaseLogo, desc: "Firebase" },
    { url: vercelLogo, desc: "Vercel" },
    { url: gitLogo, desc: "Git" },
    { url: gitlabLogo, desc: "GitLab" },
    { url: githubLogo, desc: "GitHub Actions" },
    { url: dockerLogo, desc: "Docker" },
    { url: bashLogo, desc: "Bash" },
    { url: jiraLogo, desc: "Jira" },
    { url: trelloLogo, desc: "Trello" },
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
  return (
    <div
      ref={divRef}
      className="sticky flex flex-col items-center justify-center h-screen overflow-x-hidden xl:bg-purple-white bg-purple tall:top-0"
    >
      <motion.h2
        className="left-10 top-5 ml-5 mr-0 select-none self-start font-title text-4xl text-white xl:ml-0 xl:mr-10 xl:self-end xl:text-[2.6rem] xl:font-bold xl:text-black xxl:mb-5 xxl:text-6xl"
        variants={animateText}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        {t("skills.title")}
      </motion.h2>
      <div className="w-full overflow-x-hidden md:mt-5">
        <motion.p className="pt-2 pl-2 text-lg text-white xl:pb-2 xl:pt-0 xl:text-2xl">
          {t("skills.frontEndBasic")}
        </motion.p>
        <SkillRow rowSkills={frontEndBasicLogos} screenWidth={screenWidth} />
      </div>
      <div className="w-full mt-5 overflow-x-hidden">
        <motion.p className="pt-2 pl-2 text-lg text-white xl:pb-2 xl:pt-0 xl:text-2xl">
          {t("skills.frontEndLib")}
        </motion.p>
        <SkillRow
          rowSkills={frontEndLibLogos}
          screenWidth={screenWidth}
          animate={true}
        />
      </div>
      {screenWidth >= 1024 ? (
        <div className="flex flex-col flex-wrap justify-between w-full mt-5 md:flex-row xl:flex-wrap">
          <div>
            <motion.p className="pt-2 pl-2 text-lg text-white xl:pb-2 xl:pt-0 xl:text-2xl">
              Backend
            </motion.p>
            <HalfSkillRow rowSkills={backEndLogos} leftToRight={true} />
          </div>
          <div>
            <motion.p className="pt-2 pr-2 text-lg text-white text-start md:text-end xl:pb-2 xl:pt-0 xl:text-2xl xl:text-black">
              Databases
            </motion.p>
            <HalfSkillRow rowSkills={databasesLogos} leftToRight={false} />
          </div>
        </div>
      ) : (
        <div className="w-full mt-5 overflow-x-hidden">
          <motion.p className="pt-2 pl-2 text-lg text-white xl:pb-2 xl:pt-0 xl:text-2xl">
            Backend &amp; Databases
          </motion.p>
          <SkillRow
            rowSkills={backEndLogos.concat(databasesLogos)}
            animate={true}
            screenWidth={screenWidth}
          />
        </div>
      )}
      <div className="w-full mt-5 overflow-x-hidden">
        <motion.p className="pt-2 pl-2 text-lg text-white xl:pb-2 xl:pt-0 xl:text-2xl">
          DevOps
        </motion.p>
        <SkillRow
          rowSkills={devopsLogos}
          animate={true}
          screenWidth={screenWidth}
        />
      </div>
    </div>
  );
}

const SkillRow = ({ rowSkills, animate, screenWidth }) => {
  // Generate a random initial position between -500 and -1000
  const initialPosition = Math.floor(Math.random() * (500 - 1000 + 1)) - 1000;

  // Generate a random duration between 30 and 40
  const duration = Math.floor(Math.random() * 11) + 30;

  return animate && screenWidth >= 1024 ? (
    <motion.div
      animate={{ x: [initialPosition, -200] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "mirror",
      }}
      className="flex h-[14vh] items-center justify-evenly overflow-y-hidden overflow-x-scroll rounded-lg border-2 border-purple bg-white md:h-[18vh] lg:h-[80px] xl:h-[100px] xl:flex-row xl:overflow-x-hidden"
      style={{ width: `${rowSkills.length * 40}vw` }}
    >
      {Array.from({ length: 4 }, () => rowSkills).map((logos) =>
        logos.map((item, i) => (
          <div
            key={i}
            className="flex w-[135px] shrink-0 grow-0 flex-col items-center justify-center lg:shrink lg:grow xl:h-full xl:w-full xl:justify-evenly"
          >
            <img
              src={item.url?.src}
              alt={item.desc}
              width={"55vw"}
              className="p-2 border-2 rounded-full border-purple"
            />
            <p className="whitespace-nowrap lg:text-[1.5vh]">{item.desc}</p>
          </div>
        ))
      )}
    </motion.div>
  ) : (
    <motion.div className="flex h-[14vh] overflow-y-hidden overflow-x-scroll border-2 border-y-purple bg-white md:h-[18vh] lg:h-[80px] lg:items-center lg:justify-evenly xl:h-[100px] xl:overflow-x-auto">
      {rowSkills.map((item, i) => (
        <div
          key={i}
          className="mx-10 flex w-[135px] shrink-0 grow-0 flex-col items-center justify-center lg:mx-0 lg:shrink lg:grow xl:h-full xl:w-full xl:justify-evenly"
        >
          <img
            src={item.url?.src}
            alt={item.desc}
            width={"55vw"}
            className="p-2 border-2 rounded-full border-purple"
          />
          <p className="whitespace-nowrap lg:text-[1.5vh]">{item.desc}</p>
        </div>
      ))}
    </motion.div>
  );
};

const HalfSkillRow = ({ rowSkills, leftToRight }) => {
  return (
    <div
      className={
        (leftToRight
          ? "rounded-br-lg rounded-tr-lg border-r-purple "
          : "rounded-tl-lg rounded-bl-lg border-l-purple ") +
        "h-[14vh] min-w-[47vw] max-w-[47vw] overflow-x-hidden overflow-y-hidden border-2 border-y-purple bg-white md:h-[18vh]  lg:h-[80px] xl:h-[100px]"
      }
    >
      <motion.div
        animate={{ x: [-1000, -200] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "mirror",
        }}
        className="flex flex-row items-center h-full justify-evenly"
        style={{ width: `${rowSkills.length * 40}vw` }}
      >
        {Array.from({ length: 4 }, () => rowSkills).map((logos) =>
          logos.map((item, i) => (
            <div
              key={i}
              className="flex w-[135px] shrink-0 grow-0 flex-col items-center justify-center lg:shrink lg:grow xl:h-full xl:w-full xl:justify-evenly"
            >
              <img
                src={item.url?.src}
                alt={item.desc}
                width={"55vw"}
                className="p-2 border-2 rounded-full border-purple"
              />
              <p className="whitespace-nowrap lg:text-[1.5vh]">{item.desc}</p>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};
