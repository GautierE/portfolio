import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import robertTitle from "../../../public/projects/robert/robert_title.png";
import game1 from "../../../public/projects/robert/game1.png";
import game2 from "../../../public/projects/robert/game2.png";
import game3 from "../../../public/projects/robert/game3.png";
import menu from "../../../public/projects/robert/menu.png";
import levelSelection from "../../../public/projects/robert/level_selection.png";
import questions from "../../../public/projects/robert/questions.png";
import csharpLogo from "../../../public/projects/robert/csharp_logo.svg";
import unityLogo from "../../../public/projects/robert/unity_logo.svg";
import gitLogo from "../../../public/skills/git_logo.svg";
import agileIcon from "../../../public/skills/agile_icon.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BackArrow from "@/components/icons/BackArrow";
import useSize from "@/hooks/useSize";
import GithubIcon from "@/components/icons/GithubIcon";
import handleGoBack from "./utils/handleGoBack";

export default function RobertsAdventure() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const technoLogos = [
    { url: csharpLogo, desc: "C#" },
    { url: unityLogo, desc: "Unity" },
    { url: gitLogo, desc: "Git" },
    { url: agileIcon, desc: "Agile" },
  ];
  const carouselContent = [
    {
      caption: t("robert.screenshotsCaption.game1"),
      imageUrl: game1,
      imageAlt: t("robert.screenshotsCaption.game1"),
    },
    {
      caption: t("robert.screenshotsCaption.game2"),
      imageUrl: game2,
      imageAlt: t("robert.screenshotsCaption.game2"),
    },
    {
      caption: t("robert.screenshotsCaption.game3"),
      imageUrl: game3,
      imageAlt: t("robert.screenshotsCaption.game3"),
    },
    {
      caption: t("robert.screenshotsCaption.menu"),
      imageUrl: menu,
      imageAlt: t("robert.screenshotsCaption.menu"),
    },
    {
      caption: t("robert.screenshotsCaption.levelSelection"),
      imageUrl: levelSelection,
      imageAlt: t("robert.screenshotsCaption.levelSelection"),
    },
    {
      caption: t("robert.screenshotsCaption.questions"),
      imageUrl: questions,
      imageAlt: t("robert.screenshotsCaption.questions"),
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
        <span className="md:mr-2 md:font-bold">{t("robert.gobackBtn")}</span>
      </motion.button>
      <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
        <Image
          src={robertTitle}
          alt="Robert's adventure"
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
        </div>
        <motion.a
          className="mb-5 flex items-center self-center rounded-lg border-2 border-black bg-black fill-white px-4 py-2 text-xl text-white"
          whileHover={{
            scale: 1.02,
            color: "#000000",
            fill: "#000000",
            backgroundColor: "#ffffff",
          }}
          href="https://github.com/GautierE/Roberts-Adventures"
          target="_blank"
          rel="noreferrer"
        >
          Github
          <GithubIcon width={40} height={40} />
        </motion.a>
        <div className="mx-5 flex flex-wrap items-center justify-center border-t-2 border-purple bg-white py-5 md:mx-auto md:w-[46vw]">
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
              <p className="whitespace-nowrap lg:text-[1.4vh]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            maxWidth: carouselSize ? (carouselSize.width * 70) / 100 : "auto",
          }}
          className="mx-auto mb-5 border-y-2 border-purple py-5 text-justify md:text-lg "
        >
          <b>{t("robert.text.firstPart.title")}</b>
          <br />
          {t("robert.text.firstPart.text")}
          <br />
          <br />
          <b>{t("robert.text.secondPart.title")}</b>
          <br />
          {t("robert.text.secondPart.text")}
          <br />
          <br />
          {t("robert.text.secondPart.text2")}
          <br />
          <br />
          <b>{t("robert.text.thirdPart.title")}</b>
          <br />
          {t("robert.text.thirdPart.text")}
          <br />
          <a
            className="cursor-pointer underline underline-offset-4"
            href="https://drive.google.com/file/d/1gQTPh11cIBeEMjgDHGm7QHcjfTvRLhJQ/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            {t("robert.text.thirdPart.downloadLink")}
          </a>
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
      <div className="relative mt-5 mb-5 h-[95%] w-11/12">
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
