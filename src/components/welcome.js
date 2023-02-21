import React from "react";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="sticky top-0 flex h-screen flex-col bg-gradient-to-t from-background-white via-mint to-mint">
      <div className="relative flex h-1/2 w-full items-center">
        <div className="ml-32 select-none">
          <h1 className="bordered-text text-7xl text-white">
            Hi, my name is{" "}
            <span
              className="font-bold text-custom-blue"
              style={{ textShadow: "none" }}
            >
              Gautier
            </span>
            .
          </h1>
          <p className="sticky z-10 text-4xl text-black">
            I&apos;m a{" "}
            <span className="text-custom-blue" style={{ textShadow: "none" }}>
              fullstack
            </span>{" "}
            web and mobile <br /> developer
          </p>
        </div>
        <Image
          className="absolute top-20 right-64 z-0 rounded-full"
          src="/Picsou.png"
          alt="Profile picture"
          width={648 / 1.4}
          height={533 / 1.4}
          quality={100}
        />
      </div>
      <div className="relative mb-10 flex h-1/2 w-full items-center px-20">
        <div className="flex w-1/2 justify-start self-end">
          <a
            href="https://github.com/GautierE"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/welcome/github_logo.svg"
              alt="Github logo"
              width={50}
              height={50}
              quality={100}
              className="mr-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/gautier-edel/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/welcome/linkedin_logo.svg"
              alt="Linkeding logo"
              width={40}
              height={40}
              quality={100}
              className="mx-5"
            />
          </a>
          <a
            href="mailto:gautier.edel.info@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <Image
              src="/welcome/email_icon.svg"
              alt="Email icon"
              width={40}
              height={40}
              quality={100}
              className="mx-5"
            />
          </a>
        </div>
        <div className="flex w-1/2 flex-col items-end">
          <p className="mb-5 w-2/3 text-justify text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            laoreet tincidunt sodales. Phasellus non placerat justo. In accumsan
            quis justo vitae molestie.
          </p>
          <button className="w-1/2 rounded bg-gradient-to-r from-custom-blue via-custom-blue to-lighter-blue p-2 text-4xl text-white shadow-lg">
            Let&apos;s work together
          </button>
        </div>
        <span className="absolute left-1/3 bottom-32 text-2xl  after:absolute after:left-1/2 after:top-10 after:h-56 after:w-0.5 after:bg-lighter-blue after:content-[''] ">
          Scroll
        </span>
      </div>
    </div>
  );
}
