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
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [carouselPosition, controls]);

  const moveToPrevious = () => {
    setCarouselPosition((old) => (old > 0 ? old - 1 : old));
  };

  const moveToNext = () => {
    setCarouselPosition((old) => (old < 4 ? old + 1 : old));
  };

  return (
    <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
      <h2 className="mt-20 mb-20 text-4xl font-bold text-center text-black select-none">
        Robert&apos;s Adventure
      </h2>
      <div className="flex justify-center mb-5">
        <button onClick={moveToPrevious} className="mr-5">
          ◀
        </button>
        <div className="w-10/12 overflow-x-hidden">
          <motion.div
            className="flex"
            ref={carouselContainer}
            animate={controls}
          >
            {carouselSize && (
              <>
                <CarouselItem
                  caption="Game screenshot"
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
      <div
        style={{ maxWidth: (carouselSize?.width * 70) / 100 }}
        className="py-5 mx-auto text-lg border-y-2 border-light-purple "
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
      className={`m-2 flex max-h-[40vw] min-h-[38vw] w-full  flex-[50%] shrink-0 grow-0 flex-col items-center justify-evenly bg-[#f5f4fc] shadow`}
    >
      <div className="relative mt-5 mb-5 h-[95%] w-11/12">
        <Image src={imageUrl} alt={imageAlt} fill={true} />
      </div>
      <div className="mb-3 h-[5%] w-full text-center">
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
