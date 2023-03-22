import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
import cloudMateBanner from "../../../public/projects/cloudmate/cloudmate_banner.png";
import linkOpenerScreen from "../../../public/projects/cloudmate/app.png";
import jigScreen from "../../../public/projects/cloudmate/jig_features.png";
import extensionScreen from "../../../public/projects/cloudmate/extension_showcase.png";
import landingPage1 from "../../../public/projects/cloudmate/landing_page.png";
import landingPage2 from "../../../public/projects/cloudmate/landing_page2.png";
import htmlLogo from "../../../public/skills/html_logo.svg";
import cssLogo from "../../../public/skills/css_logo.svg";
import jsLogo from "../../../public/skills/js_logo.svg";
import nextLogo from "../../../public/skills/nextjs_logo.svg";
import reactLogo from "../../../public/skills/react_logo.svg";
import tailwindLogo from "../../../public/skills/tailwind_logo.svg";
import gitLogo from "../../../public/skills/git_logo.svg";
import chromeLogo from "../../../public/skills/chrome_logo.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function RobertsAdventure() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const technoLogos = [
    { url: htmlLogo, desc: "HTML" },
    { url: cssLogo, desc: "CSS" },
    { url: jsLogo, desc: "Javascript" },
    { url: nextLogo, desc: "Next.js" },
    { url: reactLogo, desc: "React" },
    { url: tailwindLogo, desc: "Tailwind CSS" },
    { url: gitLogo, desc: "Git" },
    { url: chromeLogo, desc: "Chrome extension" },
  ];

  const carouselContent = [
    {
      caption: t("cloudMate.screenshotsCaption.landingPage1"),
      imageUrl: landingPage1,
      imageAlt: t("cloudMate.screenshotsCaption.landingPage1"),
    },
    {
      caption: t("cloudMate.screenshotsCaption.landingPage2"),
      imageUrl: landingPage2,
      imageAlt: t("cloudMate.screenshotsCaption.landingPage2"),
    },
    {
      caption: t("cloudMate.screenshotsCaption.linkOpenerScreen"),
      imageUrl: linkOpenerScreen,
      imageAlt: t("cloudMate.screenshotsCaption.linkOpenerScreen"),
    },
    {
      caption: t("cloudMate.screenshotsCaption.jigScreen"),
      imageUrl: jigScreen,
      imageAlt: t("cloudMate.screenshotsCaption.jigScreen"),
    },
    {
      caption: t("cloudMate.screenshotsCaption.extensionScreen"),
      imageUrl: extensionScreen,
      imageAlt: t("cloudMate.screenshotsCaption.extensionScreen"),
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
        <span className="md:mr-2 md:font-bold">{t("cloudMate.gobackBtn")}</span>
      </motion.button>
      <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
        <Image
          src={cloudMateBanner}
          alt="CloudMate title"
          className="mt-5 w-4/5 self-center rounded-lg lg:w-1/2"
        />
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
              className="mb-2 block rounded-lg bg-[#1D1C22] px-4 py-2 text-center text-xl text-white"
              href="https://cloudmate.vercel.app/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 0.98,
                backgroundColor: "#161616",
              }}
            >
              {t("cloudMate.openAppBtnFirstPart")}
              <span className="text-[#E8D5B5]">
                {t("cloudMate.openAppBtnSecondPart")}
              </span>
              {t("cloudMate.openAppBtnThirdPart")}
            </motion.a>
          </div>
        </div>
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
          className="project-details-text mx-auto mb-5 border-y-2 border-purple py-5 text-justify md:text-lg "
        >
          <p>{t("cloudMate.text.firstPart")}</p>
          <br />
          <p>{t("cloudMate.text.secondPart")}</p>
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
