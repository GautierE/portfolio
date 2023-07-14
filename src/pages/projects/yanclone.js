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

export default function RobertsAdventure() {
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
      caption: t("yanclone.screenshotsCaption.landing2"),
      imageUrl: landing2Page,
      imageAlt: t("yanclone.screenshotsCaption.landing2"),
    },
    {
      caption: t("yanclone.screenshotsCaption.landing3"),
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
        <p className="text-center md:text-lg">{t("yanclone.info")}</p>
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
        </div>
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
          <br />
          <p>{t("yanclone.text.thirdPart")}</p>
        </div>
      </div>
    </>
  );
}

const CarouselItem = ({ caption, imageUrl, imageAlt, width }) => {
  return (
    <div
      style={{ flexBasis: width }}
      className={`flex h-[80vh] w-full flex-[50%] shrink-0 grow-0  flex-col items-center justify-evenly bg-white shadow`}
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
