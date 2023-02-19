import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

export default function RobertsAdventure() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const carouselContainer = useRef(null);

  const controls = useAnimationControls();

  useEffect(() => {
    if (carouselContainer.current) {
      setCarouselWidth(carouselContainer.current.offsetWidth);
    }
  }, [carouselContainer]);

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
      <div className="mx-auto my-0 flex max-w-[1400px] flex-col">
        <h2 className="mt-20 mb-20 text-4xl text-center text-black select-none">
          Robert&apos;s Adventure
        </h2>
        <div>
          <button onClick={moveToPrevious}>{"<<"}</button>
          <div className="w-full overflow-x-hidden">
            <motion.div
              className="flex"
              ref={carouselContainer}
              animate={controls}
            >
              {carouselWidth !== 0 && (
                <>
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselWidth}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselWidth}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselWidth}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselWidth}
                  />
                  <CarouselItem
                    caption="a"
                    imageUrl="/projects/robert/robert_background.png"
                    imageAlt="a"
                    width={carouselWidth}
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
          <button onClick={moveToNext}>{">>"}</button>
        </div>
      </div>
    </div>
  );
}

const CarouselItem = ({ caption, imageUrl, imageAlt, width }) => {
  return (
    <div
      className={`m-2 flex min-h-[600px] w-full  flex-[50%] shrink-0 grow-0 basis-[${width}px] flex-col items-center justify-evenly bg-[#f5f4fc] shadow`}
    >
      <div className="relative w-10/12 mt-3 mb-1 h-5/6">
        <Image src={imageUrl} alt={imageAlt} fill={true} />
      </div>
      <div className="w-full pt-2 pl-5 text-center h-1/6 bg-slate-200">
        <p className="text-sm">{caption}</p>
      </div>
    </div>
  );
};
