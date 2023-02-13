import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="sticky top-0 flex h-[110vh] items-center bg-mint">
      <div className="w-7/12 mx-auto h-1/6">
        <h1 className="sticky z-10 text-white bordered-text text-8xl">
          Hi, my name is <span className="font-bold text-navy">Gautier</span>.
        </h1>
        <p className="sticky z-10 text-5xl text-white bordered-text">
          I&apos;m a <span className="text-navy">fullstack</span> web and mobile{" "}
          <br /> developer
        </p>
      </div>
      <Image
        className="absolute z-0 rounded-full right-80 top-6"
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
