import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";

export default function RobertsAdventure() {
  const carouselContainer = useRef(null);
  const carouselSize = useSize(carouselContainer);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: carouselPosition * -101 + "%",
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [carouselPosition, controls]);

  const moveToPrevious = () => {
    setCarouselPosition((old) => (old > 0 ? old - 1 : old));
  };

  const moveToNext = () => {
    setCarouselPosition((old) => (old < 4 ? old + 1 : old));
  };

  return (
    <div className="h-screen w-screen bg-[#f5f4fc]">
      <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
        <h2 className="mt-20 mb-20 text-4xl text-center text-black select-none">
          Robert&apos;s Adventure
        </h2>
        <div className="flex">
          <button onClick={moveToPrevious} className="mr-5">
            ◀
          </button>
          <div className="w-full overflow-x-hidden">
            <motion.div
              className="flex"
              ref={carouselContainer}
              animate={controls}
            >
              {carouselSize && (
                <>
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselSize.width}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselSize.width}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselSize.width}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselSize.width}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselSize.width}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={
                      carouselContainer.style
                        ? carouselContainer.style.width
                        : 1000
                    }
                  />
                </>
              )}
            </motion.div>
          </div>
          <button onClick={moveToNext} className="ml-5">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

const CarouselItem = ({ caption, imageUrl, imageAlt, width }) => {
  return (
    <div
      style={{ flexBasis: width }}
      className={`m-2 flex max-h-[40vw] min-h-[38vw] w-full  flex-[50%] shrink-0 grow-0 flex-col items-center justify-evenly bg-[#f5f4fc] shadow`}
    >
      <div className="relative mt-5 mb-5 h-[95%] w-11/12">
        <Image src={imageUrl} alt={imageAlt} fill={true} />
      </div>
      <div className="h-[5%] w-full bg-slate-200 pt-2 pl-5 text-center">
        <p className="text-sm">{caption}</p>
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
