import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
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
import BackArrow from "@/components/icons/BackArrow";
import useSize from "@/hooks/useSize";
import GithubIcon from "@/components/icons/GithubIcon";

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
        className="top-10 left-10 z-10 mx-auto mt-10 flex w-auto items-center justify-evenly self-center rounded-lg border-2 border-black bg-white stroke-black p-2 text-xl shadow-lg lg:sticky lg:mx-0 lg:mt-0 lg:p-4"
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
          <h2 className="mt-5 select-none text-center font-title text-3xl font-bold text-black md:mt-0 md:text-6xl">
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
          <div className="mx-auto mt-5 mb-10 flex justify-center">
            {carouselContent.map((item, index) => (
              <button
                key={index}
                className="mx-2 h-3 w-3 rounded-full bg-black"
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
          className="mb-2 flex items-center self-center rounded-lg border-2 border-black bg-black fill-white px-4 py-2 text-xl text-white"
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
          Github - Frontend
          <GithubIcon width={40} height={40} />
        </motion.a>
        <motion.a
          className="mb-5 flex items-center self-center rounded-lg border-2 border-black bg-white fill-black px-4 py-2 text-xl text-black"
          whileHover={{
            scale: 1.02,
            color: "#ffffff",
            fill: "#ffffff",
            backgroundColor: "#000000",
          }}
          href="https://github.com/GautierE/real-estate-data-api"
          target="_blank"
          rel="noreferrer"
        >
          Github - Backend
          <GithubIcon width={40} height={40} />
        </motion.a>
        <div className="mx-5 flex flex-wrap items-center justify-center border-t-2 border-purple bg-white py-5 md:mx-auto">
          {technoLogos.map((item, i) => (
            <div
              key={i}
              className="mx-4 flex w-[50px] flex-col items-center justify-center md:mx-2 md:w-auto"
            >
              <img
                src={item.url?.src}
                alt={item.desc}
                width={"55vw"}
                className="rounded-full border-2 border-purple p-2"
              />
              <p className="whitespace-nowrap lg:text-[1.3vh]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            maxWidth: carouselSize ? (carouselSize.width * 70) / 100 : "auto",
          }}
          className="mx-auto mb-5 border-y-2 border-purple py-5 text-justify md:text-lg "
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      // Will be passed to the page component as props
    },
  };
}
