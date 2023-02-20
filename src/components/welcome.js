import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="to-background-white sticky top-0 flex  h-screen items-center bg-gradient-to-b from-[#5a5fbf]">
      <div className="mx-auto h-1/6 w-7/12 select-none ">
        <h1 className="bordered-text sticky z-10 text-8xl text-white">
          Hi, my name is{" "}
          <span className="font-bold text-black" style={{ textShadow: "none" }}>
            Gautier
          </span>
          .
        </h1>
        <p className="bordered-text sticky z-10 text-5xl text-white">
          I&apos;m a{" "}
          <span className="text-black" style={{ textShadow: "none" }}>
            fullstack
          </span>{" "}
          web and mobile <br /> developer
        </p>
      </div>
      <Image
        className="absolute right-80 top-6 z-0 rounded-full"
        src={"/Picsou.png"}
        alt={"Profile picture"}
        width={648 / 1.4}
        height={533 / 1.4}
        quality={100}
        priority={true}
      />
    </div>
  );
}
