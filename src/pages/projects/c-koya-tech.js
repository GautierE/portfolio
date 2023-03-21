import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
import cKoyaLogo from "../../../public/projects/c_koya_tech/ckoya_logo.png";
import calendarPlanning from "../../../public/projects/c_koya_tech/calendarPlanning.png";
import chantierDetails from "../../../public/projects/c_koya_tech/chantierDetails.png";
import clockingIn from "../../../public/projects/c_koya_tech/clockingIn.png";
import editListing from "../../../public/projects/c_koya_tech/edit_listing.png";
import eventEdit from "../../../public/projects/c_koya_tech/eventEdit.png";
import planningAtelier from "../../../public/projects/c_koya_tech/planning_atelier.png";
import holidayManagement from "../../../public/projects/c_koya_tech/holidayManagement.png";
import listing from "../../../public/projects/c_koya_tech/listing.png";
import mobileAll from "../../../public/projects/c_koya_tech/mobileAll.png";
import poseEventEdit from "../../../public/projects/c_koya_tech/poseEventEdit.png";
import totalClockingIn from "../../../public/projects/c_koya_tech/totalClockingIn.png";
import htmlLogo from "../../../public/skills/html_logo.svg";
import cssLogo from "../../../public/skills/css_logo.svg";
import jsLogo from "../../../public/skills/js_logo.svg";
import reactLogo from "../../../public/skills/react_logo.svg";
import reactQueryLogo from "../../../public/skills/react_query_logo.svg";
import jqueryLogo from "../../../public/skills/jquery_logo.svg";
import bootstrapLogo from "../../../public/skills/bootstrap_logo.svg";
import phpLogo from "../../../public/skills/php_logo.svg";
import symfonyLogo from "../../../public/skills/symfony_logo.svg";
import doctrineLogo from "../../../public/skills/doctrine_logo.svg";
import mysqlLogo from "../../../public/skills/mysql_logo.svg";
import gitLogo from "../../../public/skills/git_logo.svg";
import apiIcon from "../../../public/skills/api_icon.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function RobertsAdventure() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const technoLogos = [
    { url: htmlLogo, desc: "HTML" },
    { url: cssLogo, desc: "CSS" },
    { url: jsLogo, desc: "Javascript" },
    { url: reactLogo, desc: "React" },
    { url: jqueryLogo, desc: "jQuery" },
    { url: reactQueryLogo, desc: "React Query" },
    { url: bootstrapLogo, desc: "Bootstrap" },
    { url: reactLogo, desc: "React Native" },
    { url: phpLogo, desc: "PHP" },
    { url: symfonyLogo, desc: "Symfony" },
    { url: doctrineLogo, desc: "Doctrine" },
    { url: mysqlLogo, desc: "MySQL" },
    { url: gitLogo, desc: "Git" },
    { url: apiIcon, desc: "RESTful API" },
  ];

  const carouselContent = [
    {
      caption: t("ckoya.screenshotsCaption.calendarPlanning"),
      imageUrl: calendarPlanning,
      imageAlt: t("ckoya.screenshotsCaption.calendarPlanning"),
    },
    {
      caption: t("ckoya.screenshotsCaption.poseEventEdit"),
      imageUrl: poseEventEdit,
      imageAlt: t("ckoya.screenshotsCaption.poseEventEdit"),
    },
    {
      caption: t("ckoya.screenshotsCaption.eventEdit"),
      imageUrl: eventEdit,
      imageAlt: t("ckoya.screenshotsCaption.eventEdit"),
    },
    {
      caption: t("ckoya.screenshotsCaption.chantierDetails"),
      imageUrl: chantierDetails,
      imageAlt: t("ckoya.screenshotsCaption.chantierDetails"),
    },
    {
      caption: t("ckoya.screenshotsCaption.listing"),
      imageUrl: listing,
      imageAlt: t("ckoya.screenshotsCaption.listing"),
    },
    {
      caption: t("ckoya.screenshotsCaption.editListing"),
      imageUrl: editListing,
      imageAlt: t("ckoya.screenshotsCaption.editListing"),
    },
    {
      caption: t("ckoya.screenshotsCaption.planningAtelier"),
      imageUrl: planningAtelier,
      imageAlt: t("ckoya.screenshotsCaption.planningAtelier"),
    },
    {
      caption: t("ckoya.screenshotsCaption.holidayManagement"),
      imageUrl: holidayManagement,
      imageAlt: t("ckoya.screenshotsCaption.holidayManagement"),
    },
    {
      caption: t("ckoya.screenshotsCaption.clockingIn"),
      imageUrl: clockingIn,
      imageAlt: t("ckoya.screenshotsCaption.clockingIn"),
    },
    {
      caption: t("ckoya.screenshotsCaption.totalClockingIn"),
      imageUrl: totalClockingIn,
      imageAlt: t("ckoya.screenshotsCaption.totalClockingIn"),
    },
    {
      caption: t("ckoya.screenshotsCaption.mobileAll"),
      imageUrl: mobileAll,
      imageAlt: t("ckoya.screenshotsCaption.mobileAll"),
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
    if (document.referrer.includes(window?.location?.host)) {
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
        <span className="md:mr-2 md:font-bold">{t("ckoya.gobackBtn")}</span>
      </motion.button>
      <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <h2 className="mt-5 select-none text-center font-title text-3xl font-bold text-black md:mt-0 md:text-6xl">
            C-Koya Tech
          </h2>
          <Image src={cKoyaLogo} alt={"C-Koya logo"} priority />
        </div>
        <p className="text-center md:text-lg">{t("ckoya.info")}</p>
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
          className="mx-auto mb-5 border-y-2 border-purple py-5 text-justify md:text-lg "
        >
          <p>{t("ckoya.text.firstPart")}</p>
          <br />
          <p>{t("ckoya.text.secondPart")}</p>
          <br />
          <p>{t("ckoya.text.thirdPart")}</p>
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
