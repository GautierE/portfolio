import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
import robertTitle from "../../../public/projects/robert/robert_title.png";
import game1 from "../../../public/projects/robert/game1.png";
import game2 from "../../../public/projects/robert/game2.png";
import game3 from "../../../public/projects/robert/game3.png";
import menu from "../../../public/projects/robert/menu.png";
import levelSelection from "../../../public/projects/robert/level_selection.png";
import questions from "../../../public/projects/robert/questions.png";

export default function RobertsAdventure() {
  const carouselContent = [
    {
      caption: "Game screenshot",
      imageUrl: game1,
      imageAlt: "Game screenshot",
    },
    {
      caption: "Game screenshot",
      imageUrl: game2,
      imageAlt: "Game screenshot",
    },
    {
      caption: "Game screenshot",
      imageUrl: game3,
      imageAlt: "Game screenshot",
    },
    {
      caption: "Home menu",
      imageUrl: menu,
      imageAlt: "Home menu",
    },
    {
      caption: "Level selection menu",
      imageUrl: levelSelection,
      imageAlt: "Level selection menu",
    },
    {
      caption: "Question to get an extra life",
      imageUrl: questions,
      imageAlt: "Question to get an extra life",
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
    <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
      <motion.button
        onClick={() =>
          document.referrer.includes("localhost:3000/")
            ? history.back()
            : (window.location.href = "/")
        }
        className="flex items-center self-center w-auto p-2 mt-10 text-xl border-2 border-black rounded-lg shadow-lg top-10 left-10 justify-evenly stroke-black lg:absolute lg:mt-0 lg:p-4"
        whileHover={{
          scale: 1.02,
          color: "#592d8c",
          stroke: "#592d8c",
          borderColor: "#592d8c",
        }}
      >
        {/* /projects/backk_arrow.svg code */}
        <svg
          width="35px"
          height="35px"
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
        <span className="md:mr-2 md:font-bold">Go back !</span>
      </motion.button>
      <Image
        src={robertTitle}
        alt="Robert's adventure"
        className="self-center w-4/5 mt-5 rounded-lg lg:w-1/2"
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
        <div className="flex justify-center mx-auto mt-5 mb-10">
          {carouselContent.map((item, index) => (
            <button
              key={index}
              className="w-3 h-3 mx-2 bg-black rounded-full"
              onClick={() => setCarouselPosition(index)}
              style={{
                backgroundColor: carouselPosition === index ? "black" : "gray",
              }}
            />
          ))}
        </div>
      </div>
      <motion.a
        className="flex items-center self-center px-4 py-2 mb-5 text-xl text-white bg-black border-2 border-black rounded-lg fill-white"
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
      <div
        style={{
          maxWidth: carouselSize ? (carouselSize.width * 70) / 100 : "auto",
        }}
        className="py-5 mx-auto mb-5 text-justify border-y-2 border-purple md:text-lg "
      >
        <b>What is &quot;Robert&apos;s Adventure&quot; ?</b>
        <br />
        Robert&apos;s Adventure is a free serious game that we with two other
        students developed during the year 2020/2021 at the Robert Schuman
        Institute of Technology (IUT).
        <br />
        <br />
        <b>Game overview:</b>
        <br />
        The game is based on rhythm, you control a small character who must
        navigate through deadly traps using a grappling hook. The game is
        divided into levels, which can be modified at the player&apos;s
        discretion in order to test what characterizes &quot;flow&quot; and the
        feeling of self-efficacy. The game also offers an endless mode in which
        the player&apos;s objective is to go as far as possible with increasing
        difficulty.
        <br />
        <br />
        The main goal is to reach the end of the level by dodging obstacles and
        projectiles using the grappling hook, which allows the player to cling
        to surfaces and gain speed. The player loses when they collide with an
        obstacle. It is also possible to obtain bonuses throughout the game that
        allow the player to stay alive longer. To help the player understand the
        different principles involved, they can check or uncheck checkboxes
        before starting the game to enable or disable certain features that
        highlight the principles of &quot;flow&quot; and self-efficacy.
      </div>
    </div>
  );
}

const CarouselItem = ({ caption, imageUrl, imageAlt, width }) => {
  return (
    <div
      style={{ flexBasis: width }}
      className={`flex h-[80vh] w-full flex-[50%] shrink-0 grow-0  flex-col items-center justify-evenly bg-white shadow`}
    >
      <div className="relative mt-5 mb-5 h-[95%] w-11/12">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill={true}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="mb-5 h-[5%] w-full text-center">
        <p className="text-lg">{caption}</p>
      </div>
    </div>
  );
};

const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

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
