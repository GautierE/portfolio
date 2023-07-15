import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
import yancloneLogo from "../../../public/projects/yanclone/yanclone_logo.svg";
import defaultMap from "../../../public/projects/yanclone/defaultMap.png";
import createProperty from "../../../public/projects/yanclone/createProperty.png";
import propertyDetail from "../../../public/projects/yanclone/propertyDetail.png";
import editPropertyDetail from "../../../public/projects/yanclone/editPropertyDetail.png";
import loginPage from "../../../public/projects/yanclone/login.png";
import signupPage from "../../../public/projects/yanclone/signup.png";
import contactPage from "../../../public/projects/yanclone/contact.png";
import landing1Page from "../../../public/projects/yanclone/landing.png";
import landing2Page from "../../../public/projects/yanclone/landing2.png";
import landing3Page from "../../../public/projects/yanclone/landing3.png";

import htmlLogo from "../../../public/skills/html_logo.svg";
import cssLogo from "../../../public/skills/css_logo.svg";
import tailwindLogo from "../../../public/skills/tailwind_logo.svg";
import tsLogo from "../../../public/skills/typescript_logo.svg";
import angularLogo from "../../../public/skills/angular_logo.svg";
import karmaLogo from "../../../public/skills/karma_logo.svg";
import jasmineLogo from "../../../public/skills/jasmine_logo.svg";
import cassandraLogo from "../../../public/skills/cassandra_logo.svg";
import javaLogo from "../../../public/skills/java_logo.svg";
import mavenLogo from "../../../public/skills/maven_logo.svg";
import vercelLogo from "../../../public/skills/vercel_logo.svg";
import firebaseLogo from "../../../public/skills/firebase_logo.svg";
import gcpLogo from "../../../public/skills/googlecloud_logo.svg";
import gitLogo from "../../../public/skills/git_logo.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Yanclone() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const technoLogos = [
    { url: htmlLogo, desc: "HTML" },
    { url: cssLogo, desc: "CSS" },
    { url: tailwindLogo, desc: "Tailwind CSS" },
    { url: tsLogo, desc: "Typescript" },
    { url: angularLogo, desc: "Angular" },
    { url: jasmineLogo, desc: "Jasmine" },
    { url: karmaLogo, desc: "Karma" },
    { url: firebaseLogo, desc: "Firestore" },
    { url: firebaseLogo, desc: "Firebase authentication" },
    { url: vercelLogo, desc: "Vercel" },
    { url: javaLogo, desc: "Java" },
    { url: mavenLogo, desc: "Maven" },
    { url: cassandraLogo, desc: "Cassandra" },
    { url: gcpLogo, desc: "GCP" },
    { url: gitLogo, desc: "Git" },
  ];

  const carouselContent = [
    {
      caption: t("yanclone.screenshotsCaption.landing1"),
      imageUrl: landing1Page,
      imageAlt: t("yanclone.screenshotsCaption.landing1"),
    },
    {
      caption: "",
      imageUrl: landing2Page,
      imageAlt: t("yanclone.screenshotsCaption.landing2"),
    },
    {
      caption: "",
      imageUrl: landing3Page,
      imageAlt: t("yanclone.screenshotsCaption.landing3"),
    },
    {
      caption: t("yanclone.screenshotsCaption.defaultMap"),
      imageUrl: defaultMap,
      imageAlt: t("yanclone.screenshotsCaption.defaultMap"),
    },
    {
      caption: t("yanclone.screenshotsCaption.propertyDetail"),
      imageUrl: propertyDetail,
      imageAlt: t("yanclone.screenshotsCaption.propertyDetail"),
    },
    {
      caption: t("yanclone.screenshotsCaption.editPropertyDetail"),
      imageUrl: editPropertyDetail,
      imageAlt: t("yanclone.screenshotsCaption.editPropertyDetail"),
    },
    {
      caption: t("yanclone.screenshotsCaption.createProperty"),
      imageUrl: createProperty,
      imageAlt: t("yanclone.screenshotsCaption.createProperty"),
    },
    {
      caption: t("yanclone.screenshotsCaption.loginPage"),
      imageUrl: loginPage,
      imageAlt: t("yanclone.screenshotsCaption.loginPage"),
    },
    {
      caption: t("yanclone.screenshotsCaption.signupPage"),
      imageUrl: signupPage,
      imageAlt: t("yanclone.screenshotsCaption.signupPage"),
    },
    {
      caption: t("yanclone.screenshotsCaption.contactPage"),
      imageUrl: contactPage,
      imageAlt: t("yanclone.screenshotsCaption.contactPage"),
    },
  ];

  const carouselContainer = useRef(null);
  const carouselSize = useSize(carouselContainer);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: carouselPosition * -100 + "%",
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [carouselPosition, controls]);

  const moveToPrevious = () => {
    setCarouselPosition((old) => (old > 0 ? old - 1 : old));
  };

  const moveToNext = () => {
    setCarouselPosition((old) =>
      old < carouselContent.length - 1 ? old + 1 : old
    );
  };

  const handleGoBack = () => {
    if (
      history.length > 1 &&
      document.referrer.includes(window?.location?.host)
    ) {
      history.back();
    } else {
      if (router.locale === "fr") {
        window.location.href = "/fr";
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <>
      <motion.button
        onClick={handleGoBack}
        className="z-10 flex items-center self-center w-auto p-2 mx-auto mt-10 text-xl bg-white border-2 border-black rounded-lg shadow-lg top-10 left-10 justify-evenly stroke-black lg:sticky lg:mx-0 lg:mt-0 lg:p-4"
        whileHover={{
          scale: 0.98,
          color: "#592d8c",
          stroke: "#592d8c",
          borderColor: "#592d8c",
        }}
      >
        <BackArrow width={35} height={35} />
        <span className="md:mr-2 md:font-bold">{t("yanclone.gobackBtn")}</span>
      </motion.button>
      <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <h2 className="mt-5 text-3xl font-bold text-center text-black select-none font-title md:mt-0 md:text-6xl">
            Yanclone
          </h2>
          <Image
            src={yancloneLogo}
            alt={"Yanclone logo"}
            width={125}
            height={125}
            priority
          />
        </div>
        <div>
          <div className="flex justify-center">
            <button onClick={moveToPrevious} className="mr-5">
              ◀
            </button>
            <div className="w-10/12 overflow-hidden">
              <motion.div
                className="flex"
                ref={carouselContainer}
                animate={controls}
              >
                {carouselSize &&
                  carouselContent.map((item, index) => (
                    <CarouselItem
                      key={index}
                      caption={item.caption}
                      imageUrl={item.imageUrl}
                      imageAlt={item.imageAlt}
                      width={carouselSize.width}
                    />
                  ))}
              </motion.div>
            </div>
            <button onClick={moveToNext} className="ml-5">
              ▶
            </button>
          </div>
          <div className="flex justify-center mx-auto mt-5 mb-10">
            {carouselContent.map((item, index) => (
              <button
                key={index}
                className="w-3 h-3 mx-2 bg-black rounded-full"
                onClick={() => setCarouselPosition(index)}
                style={{
                  backgroundColor:
                    carouselPosition === index ? "black" : "gray",
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <motion.a
              className="mb-2 block rounded-lg border-2 border-[#0048ad] bg-[#0048ad] px-4 py-2 text-center text-xl text-white"
              href="https://yanclone.vercel.app/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 0.98,
                color: "#0048ad",
                backgroundColor: "#ffffff",
              }}
            >
              {t("yanclone.openAppBtnFirstPart")}
              {t("yanclone.openAppBtnSecondPart")}
              {t("yanclone.openAppBtnThirdPart")}
            </motion.a>
          </div>
        </div>
        <motion.a
          className="flex items-center self-center px-4 py-2 mb-2 text-xl text-white bg-black border-2 border-black rounded-lg fill-white"
          whileHover={{
            scale: 1.02,
            color: "#000000",
            fill: "#000000",
            backgroundColor: "#ffffff",
          }}
          href="https://github.com/GautierE/saas-real-estate-clone"
          target="_blank"
          rel="noreferrer"
        >
          Github - Front-end
          <GithubIcon width={40} height={40} />
        </motion.a>
        <motion.a
          className="flex items-center self-center px-4 py-2 mb-5 text-xl text-white bg-black border-2 border-black rounded-lg fill-white"
          whileHover={{
            scale: 1.02,
            color: "#000000",
            fill: "#000000",
            backgroundColor: "#ffffff",
          }}
          href="https://github.com/GautierE/real-estate-data-api"
          target="_blank"
          rel="noreferrer"
        >
          Github - Back-end
          <GithubIcon width={40} height={40} />
        </motion.a>
        <div className="flex flex-wrap items-center justify-center py-5 mx-5 bg-white border-t-2 border-purple md:mx-auto">
          {technoLogos.map((item, i) => (
            <div
              key={i}
              className="mx-4 flex w-[50px] flex-col items-center justify-center md:mx-2 md:w-auto"
            >
              <img
                src={item.url?.src}
                alt={item.desc}
                width={"55vw"}
                className="p-2 border-2 rounded-full border-purple"
              />
              <p className="whitespace-nowrap lg:text-[1.3vh]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            maxWidth: carouselSize ? (carouselSize.width * 70) / 100 : "auto",
          }}
          className="py-5 mx-auto mb-5 text-justify border-y-2 border-purple md:text-lg "
        >
          <p>{t("yanclone.text.firstPart")}</p>
          <br />
          <p>{t("yanclone.text.secondPart")}</p>
        </div>
      </div>
    </>
  );
}

const CarouselItem = ({ caption, imageUrl, imageAlt, width }) => {
  return (
    <div
      style={{ flexBasis: width }}
      className={`flex h-[85vh] w-full flex-[50%] shrink-0 grow-0  flex-col items-center justify-evenly bg-white shadow`}
    >
      <div className="relative mt-5 mb-5">
        <Image src={imageUrl} alt={imageAlt} priority />
      </div>
      <div className="mb-5 h-[5%] w-full text-center">
        <p className="text-lg">{caption}</p>
      </div>
    </div>
  );
};

const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

const BackArrow = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 18V14C19 11.7909 17.2091 10 15 10H5M5 10L9 6M5 10L9 14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      // Will be passed to the page component as props
    },
  };
}

const GithubIcon = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{"github"}</title>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 0 0 5 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1 2.15 2.15 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 0 1 1-2.71 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.87 3.87 0 0 1 1 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 0 1 .69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2Z" />
  </svg>
);
