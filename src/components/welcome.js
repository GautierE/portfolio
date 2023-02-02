import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div class="flex h-screen w-screen items-center bg-mint">
      <div class="relative mx-auto h-3/5 w-7/12">
        <h1 class=" bordered-text sticky z-10 text-8xl text-white">
          Hi, my name is <span class="font-bold text-navy">Gautier</span>.
        </h1>
        <p class="bordered-text sticky z-10 text-5xl text-white">
          I&apos;m a <span class="text-navy">fullstack</span> web and mobile{" "}
          <br /> developer
        </p>
        <Image
          class="right-100 absolute top-20 right-0 z-0 rounded-full"
          src={"/Picsou.png"}
          alt={"Profile picture"}
          width={648 / 1.2}
          height={533 / 1.2}
          quality={100}
          priority={true}
        />
      </div>
    </div>
  );
}
