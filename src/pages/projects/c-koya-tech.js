import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
import calendarPlanning from "../../../public/projects/c_koya_tech/calendarPlanning.png";
import chantierDetails from "../../../public/projects/c_koya_tech/chantierDetails.png";
import clockingIn from "../../../public/projects/c_koya_tech/clockingIn.png";
import editListing from "../../../public/projects/c_koya_tech/editListing.png";
import eventEdit from "../../../public/projects/c_koya_tech/eventEdit.png";
import holidayManagement from "../../../public/projects/c_koya_tech/holidayManagement.png";
import listing from "../../../public/projects/c_koya_tech/listing.png";
import mobileAll from "../../../public/projects/c_koya_tech/mobileAll.png";
import poseEventEdit from "../../../public/projects/c_koya_tech/poseEventEdit.png";
import totalClockingIn from "../../../public/projects/c_koya_tech/totalClockingIn.png";

export default function RobertsAdventure() {
  const carouselContent = [
    {
      caption:
        "Calendar to manage cottages installation and employees absences",
      imageUrl: calendarPlanning,
      imageAlt:
        "Calendar to manage cottages installation and employees absences",
    },
    {
      caption: "Installation event creation modal",
      imageUrl: poseEventEdit,
      imageAlt: "Installation event creation modal",
    },
    {
      caption: "Absence event creation modal",
      imageUrl: eventEdit,
      imageAlt: "Absence event creation modal",
    },
    {
      caption: "Project details page",
      imageUrl: chantierDetails,
      imageAlt: "Project details page",
    },
    {
      caption: "Typical listing",
      imageUrl: listing,
      imageAlt: "Typical listing",
    },
    {
      caption: "Typical edit listing (Symfony) form",
      imageUrl: editListing,
      imageAlt: "Typical edit listing (Symfony) form",
    },
    {
      caption: "Holiday management calendar",
      imageUrl: holidayManagement,
      imageAlt: "Holiday management calendar",
    },
    {
      caption: "C-Koya Tech employee clocking in management page",
      imageUrl: clockingIn,
      imageAlt: "C-Koya Tech employee clocking in management page",
    },
    {
      caption:
        "Weekly total clocking of C-Koya Tech employees on different projects",
      imageUrl: totalClockingIn,
      imageAlt:
        "Weekly total clocking of C-Koya Tech employees on different projects",
    },
    {
      caption:
        "Mobile screens for entering/moving/removing pallets in a warehouse",
      imageUrl: mobileAll,
      imageAlt:
        "Mobile screens for entering/moving/removing pallets in a warehouse",
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
      <h2 className="mt-10 mb-10 text-3xl font-bold text-center text-black select-none font-title md:text-6xl lg:mt-20">
        C-Koya Tech
      </h2>
      <p className="text-center md:text-lg">
        Sorry for the low quality screenshots, I unfortunately don&apos;t have
        access to these projects anymore.
      </p>
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
      <div
        style={{
          maxWidth: carouselSize ? (carouselSize.width * 70) / 100 : "auto",
        }}
        className="py-5 mx-auto mb-5 text-justify border-y-2 border-purple md:text-lg "
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          laoreet tincidunt sodales. Phasellus non placerat justo. In accumsan
          quis justo vitae molestie. Suspendisse hendrerit, massa in ultricies
          euismod, justo dolor convallis lacus, quis vehicula velit metus quis
          odio. Praesent sodales ex at tincidunt porttitor. Pellentesque nec
          auctor enim. Aenean at urna ut metus dictum tempor. Curabitur quis ex
          quis justo malesuada efficitur. Mauris malesuada semper ultricies.
          Quisque ac nulla ut nibh laoreet pharetra.
        </p>
        <br />
        <p>
          Nunc mi odio, luctus quis sapien sed, consectetur sodales est. Proin
          varius tempor diam eu lobortis. In hac habitasse platea dictumst.
          Integer tincidunt interdum arcu, in dapibus magna posuere ut. Donec
          tempus massa a urna ullamcorper, eget varius sapien pulvinar. Aliquam
          pellentesque finibus urna, sed pellentesque arcu viverra a. Integer a
          odio ut lectus imperdiet congue. Praesent pellentesque massa quis diam
          ullamcorper, in semper arcu consequat. Nunc blandit pretium justo vel
          tempor. Donec varius dui a cursus tristique. Nullam eget nunc gravida,
          fringilla tellus sit amet, dignissim nisi. Etiam auctor odio est, sit
          amet commodo enim aliquet ac. Fusce nec tempor tortor.
        </p>
        <br />
        <p>
          Donec vitae sollicitudin urna, quis elementum ante. Suspendisse in ex
          sit amet ipsum semper suscipit et id lacus. Pellentesque non commodo
          dui, nec rhoncus eros. Integer mollis magna purus, in lacinia mauris
          iaculis in. Ut sed ante vel quam auctor auctor. Donec nec eleifend
          lacus. Integer quis libero quam. Sed malesuada eros nibh, sed maximus
          massa condimentum et. Aenean elementum tortor eget placerat egestas.
          Donec nec sollicitudin odio, quis semper tortor. Curabitur sagittis
          finibus dapibus. Sed ut venenatis urna. Aenean dignissim efficitur
          dolor et egestas. Donec faucibus augue diam, et pharetra ante
          porttitor in.
        </p>
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

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};
