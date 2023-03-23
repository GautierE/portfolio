import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePicture from "../../public/welcome/profile_picture.jpg";
import githubLogo from "../../public/welcome/github_logo.svg";
import linkedinLogo from "../../public/welcome/linkedin_logo.svg";
import emailIcon from "../../public/welcome/email_icon.svg";
import frenchFlag from "../../public/welcome/french_flag_icon.svg";
import ukFlag from "../../public/welcome/uk_flag_icon.svg";
import arrow from "../../public/arrow.png";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
export default function Welcome() {
  const router = useRouter();
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
    <div className="sticky flex flex-col w-full h-screen bg-white tall:top-0">
      <motion.button
        className="lg:z-2 z-10 mr-2 mt-2 flex w-[40%] items-center justify-evenly self-end rounded-lg bg-purple stroke-white px-2 py-1 text-xs text-white shadow-lg md:w-auto md:border-2 md:border-white md:bg-white md:stroke-black md:text-black lg:absolute lg:right-10 lg:top-10 lg:p-3 lg:text-xl"
        whileHover={{
          scale: 0.98,
          color: "#592d8c",
          stroke: "#592d8c",
          borderColor: "#592d8c",
        }}
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        <span className="md:mr-2 md:font-bold">{t("welcome.workBtn")}</span>
        <ChatIcon width={35} height={35} />
      </motion.button>
      <div className="mx-auto flex h-1/4 w-[90%] items-center md:hidden md:w-full lg:mt-32">
        <div className="relative z-10 select-none md:ml-2 lg:ml-28">
          <motion.h1
            className="text-3xl font-title lg:text-8xl medium:text-4xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {router.locale === "fr" && t("welcome.titleFirstPart")}

            {t("welcome.titleSecondPart")}
            <span className="md:font-bold md:text-white">
              {t("welcome.titleThirdPart")}
            </span>
          </motion.h1>
          <motion.p
            className="sticky mt-3 text-lg text-black md:mt-5 md:text-xl lg:text-3xl smallHeight:mt-0"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("welcome.subtitleFirstPart")}
            <span className="text-purple">
              {t("welcome.subtitlepurpletext")}
            </span>
            <br />
            {t("welcome.subtitleLastPart")}
          </motion.p>
          <Image
            src={arrow}
            alt="Arrow design"
            width={160}
            height={160}
            className={
              (router.locale === "fr"
                ? "right-0 top-32 mediumPlus:top-24"
                : "top-36 md:right-[-16%] medium:top-20") +
              " absolute right-0 overflow-hidden object-contain medium:right-0 tiny:right-0"
            }
          />
        </div>
      </div>
      <div className="relative mx-auto h-[45vh] w-[85%] md:absolute md:right-0 md:z-0 md:mt-0 md:h-full md:w-[56vw] lg:w-3/5 mediumPlus:w-[60%]">
        <Image
          src={profilePicture}
          alt="Profile picture"
          fill
          sizes="(max-width: 767px) 85vw,
          (max-width: 1199px) 56vw,
          100%"
          style={{ objectFit: "cover" }}
          quality={100}
          priority={true}
        />
        <motion.h1
          className={
            (router.locale === "fr" ? "welcome-title " : "") +
            "z-10 hidden font-title text-5xl md:absolute md:left-[-310px] md:top-20 md:block lg:left-[-400px] lg:text-6xl xl:left-[-485px] xl:text-7xl 2xl:left-[-495px] smallHeight:top-10 xxl:left-[-655px] xxl:text-8xl"
          }
          variants={animateText}
          custom={{ delay: 0 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {router.locale === "fr" && (
            <>
              {t("welcome.titleFirstPart")}
              <br />
            </>
          )}

          {t("welcome.titleSecondPart")}
          <span className="md:font-bold md:text-white">
            {t("welcome.titleThirdPart")}
          </span>
        </motion.h1>
        <motion.p
          className={
            (router.locale === "fr"
              ? "md:mt-40 lg:mt-24 smallHeight:mt-0 "
              : "") +
            "z-10 hidden text-lg text-black md:absolute md:top-40 md:left-[-325px] md:block md:text-xl lg:left-[-400px] lg:text-2xl xl:left-[-485px] xl:text-3xl 2xl:left-[-495px] xxl:top-48 xxl:left-[-655px]"
          }
          custom={{ delay: 0.5 }}
          variants={animateText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // style={{ marginTop: router.locale === "fr" ? "6rem" : "0" }}
        >
          {t("welcome.subtitleFirstPart")}
          <span className="text-purple">{t("welcome.subtitlepurpletext")}</span>
          <br />
          {t("welcome.subtitleLastPart")}
        </motion.p>
        <motion.a
          href="/welcome/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className={
            (router.locale === "fr"
              ? "md:mt-40 lg:mt-32 smallHeight:mt-0 "
              : "") +
            "hidden w-[60%] items-center justify-center self-center rounded bg-purple fill-white py-2 text-sm text-white shadow-lg md:absolute md:top-[15rem] md:left-[-290px] md:flex md:w-2/5 md:rounded-lg md:border-2 md:border-purple lg:left-[-400px] lg:p-3 lg:text-xl xl:left-[-485px] xl:text-2xl 2xl:left-[-495px] xxl:top-72 xxl:left-[-655px]"
          }
          whileHover={{
            scale: 0.98,
            backgroundColor: "#f5f4fc",
            color: "#592d8c",
            fill: "#592d8c",
          }}
        >
          <span className="mr-5">{t("welcome.cv")}</span>
          <CvIcon width={30} height={30} />
        </motion.a>
        <Image
          src={arrow}
          alt="Arrow design"
          className={
            (router.locale === "fr"
              ? "md:left-[-180px] lg:left-[-70px] lg:top-[13rem] 2xl:left-[-60px] xxl:top-[16rem] "
              : "md:left-[-200px] lg:left-[-160px] lg:top-[12rem] xl:left-[-140px] 2xl:left-[-120px] ") +
            "absolute top-[13rem] hidden aspect-[2] object-contain md:left-[-200px] md:block lg:aspect-auto "
          }
        />
      </div>

      <motion.a
        href="/welcome/cv.pdf"
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex w-[60%] items-center justify-center self-center rounded bg-purple fill-white py-2 text-sm text-white shadow-lg md:ml-2 md:mt-0 md:hidden md:w-2/5 md:self-auto md:rounded-lg md:border-2 md:border-purple md:text-lg lg:ml-28 lg:w-2/12 lg:p-3 lg:text-2xl"
        whileHover={{
          scale: 0.98,
          backgroundColor: "#f5f4fc",
          color: "#592d8c",
          fill: "#592d8c",
        }}
      >
        <span className="mr-5">{t("welcome.cv")}</span>
        <CvIcon width={30} height={30} />
      </motion.a>
      <div className="absolute bottom-0 flex justify-center left-2 md:left-10 md:bottom-10 md:justify-start">
        <div className="flex self-end justify-start">
          <motion.a
            href="https://github.com/GautierE"
            target="_blank"
            rel="noreferrer"
            whileHover={{ translateY: -8 }}
            className="z-10 mr-2 medium:mr-5"
          >
            <Image src={githubLogo} alt="Github logo" width={50} height={50} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gautier-edel/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ translateY: -8 }}
            className="z-10 mx-2 medium:mx-5"
          >
            <Image
              src={linkedinLogo}
              alt="Linkeding logo"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a
            href="mailto:gautier.edel.info@gmail.com"
            className="z-10 flex mx-2 medium:mx-5"
            whileHover={{ translateY: -8 }}
          >
            <Image src={emailIcon} alt="Email icon" width={40} height={40} />
          </motion.a>
          <motion.div
            className="z-10 flex mx-2 cursor-pointer medium:mx-5"
            whileHover={{ translateY: -8 }}
          >
            <Image
              src={frenchFlag}
              alt="French flag"
              width={40}
              height={40}
              onClick={() => {
                router.push(
                  {
                    route: router.pathname,
                    query: router.query,
                  },
                  router.asPath,
                  { locale: "fr" }
                );
              }}
            />
          </motion.div>
          <motion.div
            className="z-10 flex ml-2 cursor-pointer medium:ml-5"
            whileHover={{ translateY: -8 }}
          >
            <Image
              src={ukFlag}
              alt="Uk flag"
              width={40}
              height={40}
              onClick={() => {
                router.push(
                  {
                    route: router.pathname,
                    query: router.query,
                  },
                  router.asPath,
                  { locale: "en" }
                );
              }}
            />
          </motion.div>
        </div>
      </div>
      <motion.span
        initial={{ y: 300 }}
        animate={[
          {
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1.5,
            },
          },
          {
            translateY: -10,
            transition: {
              repeat: Infinity,
              repeatDelay: 5,
            },
          },
        ]}
        className="absolute right-3 bottom-10 after:absolute after:left-1/2 after:top-10 after:h-48 after:w-0.5 after:bg-purple after:content-[''] md:bottom-2 md:right-auto md:left-1/3 md:bottom-48 md:text-xl "
      >
        Scroll
      </motion.span>
    </div>
  );
}

const CvIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <path d="m504.441 172.066-36.506-36.506c-10.078-10.078-26.428-10.078-36.506 0L230.623 336.358a25.657 25.657 0 0 0-6.238 10.095l-18.253 54.758c-.913 2.748-1.203 5.572-1.178 8.38H51.202v25.6H230.402v-.154c2.807.026 5.632-.256 8.38-1.178l54.758-18.253a25.853 25.853 0 0 0 10.095-6.238L504.433 208.57c10.086-10.068 10.086-26.417.008-36.504zM230.623 409.378l18.253-54.758 36.506 36.506-54.759 18.252zm73.02-36.505-36.514-36.514 182.554-182.545 36.506 36.506-182.546 182.553zM137.73 51.2c-42.351 0-76.8 34.449-76.8 76.8s34.449 76.8 76.8 76.8 76.8-34.449 76.8-76.8-34.449-76.8-76.8-76.8zm0 128c-28.279 0-51.2-22.921-51.2-51.2s22.921-51.2 51.2-51.2c28.279 0 51.2 22.921 51.2 51.2s-22.921 51.2-51.2 51.2z" />
    <path d="M214.12 225.826c-2.219-12.177-12.817-21.026-25.19-21.026H86.53c-12.373 0-22.972 8.849-25.182 21.026L51.202 281.6H77.22l9.31-51.2h38.4v51.2h25.6v-51.2h38.4l9.31 51.2h26.018l-10.138-55.774zM230.402 76.8h153.6v25.6h-153.6zM51.202 332.8v25.6h142.217l6.682-20.053c.657-1.954 1.732-3.703 2.611-5.547H51.202zM230.402 153.6v25.6h121.181l25.6-25.6z" />
    <path d="M413.331 117.444c6.17-6.17 13.722-10.351 21.871-12.74V0H.002v512h435.2V314.027l-25.6 25.6V486.4h-384V25.6h384v95.573l3.729-3.729z" />
  </svg>
);

const ChatIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 40 30"
  >
    <g fill="#808184">
      <path d="m6.371 20.055-1.924 4.103a.5.5 0 0 0 .662.665l6.774-3.139a17.79 17.79 0 0 0 2.17.141c7.779 0 14.107-4.896 14.107-10.913C28.161 4.896 21.833 0 14.054 0S-.053 4.896-.053 10.912c0 3.733 2.391 7.12 6.424 9.143zM14.054 1c7.227 0 13.107 4.446 13.107 9.912s-5.88 9.913-13.107 9.913a17.17 17.17 0 0 1-2.187-.15.523.523 0 0 0-.273.042l-5.658 2.621 1.551-3.307a.499.499 0 0 0-.243-.666C3.301 17.542.947 14.382.947 10.912.947 5.446 6.827 1 14.054 1z" />
      <path d="M7.197 13.328a2.1 2.1 0 0 0 .491.059 1.99 1.99 0 0 0 1.572-.763 2.012 2.012 0 0 0 .369-1.728 1.984 1.984 0 0 0-1.451-1.451 2.014 2.014 0 0 0-2.062.705 2.01 2.01 0 0 0-.369 1.727c.17.71.739 1.279 1.45 1.451zm-.296-2.558a.996.996 0 0 1 .787-.383.987.987 0 0 1 .968.744c.076.317.011.628-.183.874-.244.31-.645.445-1.042.351a.987.987 0 0 1-.713-.713 1.003 1.003 0 0 1 .183-.873zM13.098 13.328a2.1 2.1 0 0 0 .491.059c.617 0 1.189-.278 1.571-.763a2.012 2.012 0 0 0 .369-1.728 1.984 1.984 0 0 0-1.451-1.451 2.016 2.016 0 0 0-2.062.705 2.013 2.013 0 0 0-.37 1.727 1.987 1.987 0 0 0 1.452 1.451zm-.296-2.558a.996.996 0 0 1 .787-.383.986.986 0 0 1 .968.744 1 1 0 0 1-.183.874 1.01 1.01 0 0 1-1.042.351.989.989 0 0 1-.714-.713 1 1 0 0 1 .184-.873zM18.998 13.328a2.1 2.1 0 0 0 .491.059 1.99 1.99 0 0 0 1.572-.763 2.012 2.012 0 0 0 .369-1.728 1.984 1.984 0 0 0-1.451-1.451 2.015 2.015 0 0 0-2.062.705 2.01 2.01 0 0 0-.369 1.727c.171.71.74 1.279 1.45 1.451zm-.296-2.558a.996.996 0 0 1 .787-.383.987.987 0 0 1 .968.744c.076.317.011.628-.183.874-.244.31-.646.445-1.042.351a.989.989 0 0 1-.714-.713 1.007 1.007 0 0 1 .184-.873zM29.908 12.218a.5.5 0 1 0-.286.959c3.847 1.146 6.431 4.009 6.431 7.121 0 2.683-1.917 5.206-5.003 6.585a.5.5 0 0 0-.286.557l.59 2.861-3.17-2.395a.525.525 0 0 0-.373-.096 13.48 13.48 0 0 1-1.916.142c-3.661 0-7.203-1.87-8.613-4.548a.5.5 0 1 0-.884.465c1.575 2.993 5.481 5.083 9.498 5.083.601 0 1.223-.041 1.851-.123l4.065 3.07a.496.496 0 0 0 .568.024.5.5 0 0 0 .223-.523l-.779-3.774c3.236-1.577 5.229-4.354 5.229-7.327 0-3.615-2.804-6.786-7.145-8.081z" />
    </g>
  </svg>
);
