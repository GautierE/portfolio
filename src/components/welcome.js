import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="sticky top-0 flex flex-col h-screen bg-gradient-to-t from-background-white via-mint to-mint">
      <div className="relative flex items-center w-full h-1/2">
        <div className="ml-32 select-none">
          <h1 className="text-white bordered-text text-7xl">
            Hi, my name is{" "}
            <span
              className="font-bold text-custom-blue"
              style={{ textShadow: "none" }}
            >
              Gautier
            </span>
            .
          </h1>
          <p className="sticky z-10 text-4xl text-white bordered-text">
            I&apos;m a{" "}
            <span className="text-custom-blue" style={{ textShadow: "none" }}>
              fullstack
            </span>{" "}
            web and mobile <br /> developer
          </p>
        </div>
        <Image
          className="absolute z-0 rounded-full top-20 right-64"
          src="/Picsou.png"
          alt="Profile picture"
          width={648 / 1.4}
          height={533 / 1.4}
          quality={100}
        />
      </div>
      <div className="flex items-center w-full px-20 mb-10 h-1/2">
        <div className="flex self-end justify-start w-1/2">
          <Image
            src="/welcome/github_logo.svg"
            alt="Github logo"
            width={60}
            height={60}
            quality={100}
            className="mr-5"
          />
          <Image
            src="/welcome/github_logo.svg"
            alt="Github logo"
            width={60}
            height={60}
            quality={100}
            className="mx-5"
          />
          <Image
            src="/welcome/github_logo.svg"
            alt="Github logo"
            width={60}
            height={60}
            quality={100}
            className="mx-5"
          />
          <Image
            src="/welcome/github_logo.svg"
            alt="Github logo"
            width={60}
            height={60}
            quality={100}
            className="ml-5"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className="mb-5 text-3xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            laoreet tincidunt sodales. Phasellus non placerat justo. In accumsan
            quis justo vitae molestie.
          </p>
          <button className="self-end w-1/2 p-2 mr-2 text-4xl text-white rounded bg-custom-blue">
            Let&apos;s work together
          </button>
        </div>
      </div>
    </div>
  );
}
