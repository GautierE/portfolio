import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="sticky top-0 flex flex-col h-screen bg-background-white ">
      <div className="absolute right-0 z-0 w-3/5 h-full">
        <Image
          src="/welcome/profile_picture.png"
          alt="Profile picture"
          fill={true}
          quality={100}
        />
      </div>
      <div className="flex items-center w-full h-1/2">
        <div className="relative select-none ml-14">
          <h1 className="ml-10 text-black text-8xl">
            Hi, my name is{" "}
            <span className="font-bold text-white">Gautier.</span>
          </h1>
          <p className="sticky mt-5 text-5xl text-black">
            I&apos;m a <span className="text-purple">fullstack</span> web and
            mobile <br /> developer
          </p>
        </div>
      </div>
      <motion.button
        className="flex items-center justify-center w-2/12 p-3 ml-10 text-2xl border-2 rounded-lg shadow-lg border-purple bg-purple fill-background-white text-background-white"
        whileHover={{
          scale: 1.02,
          backgroundColor: "#f5f4fc",
          color: "#592d8c",
          fill: "#592d8c",
        }}
      >
        <span className="mr-5 font-bold">Download CV</span>
        {/* /welcome/chat_icon.svg code */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width={30}
          height={30}
        >
          <path d="m504.441 172.066-36.506-36.506c-10.078-10.078-26.428-10.078-36.506 0L230.623 336.358a25.657 25.657 0 0 0-6.238 10.095l-18.253 54.758c-.913 2.748-1.203 5.572-1.178 8.38H51.202v25.6H230.402v-.154c2.807.026 5.632-.256 8.38-1.178l54.758-18.253a25.853 25.853 0 0 0 10.095-6.238L504.433 208.57c10.086-10.068 10.086-26.417.008-36.504zM230.623 409.378l18.253-54.758 36.506 36.506-54.759 18.252zm73.02-36.505-36.514-36.514 182.554-182.545 36.506 36.506-182.546 182.553zM137.73 51.2c-42.351 0-76.8 34.449-76.8 76.8s34.449 76.8 76.8 76.8 76.8-34.449 76.8-76.8-34.449-76.8-76.8-76.8zm0 128c-28.279 0-51.2-22.921-51.2-51.2s22.921-51.2 51.2-51.2c28.279 0 51.2 22.921 51.2 51.2s-22.921 51.2-51.2 51.2z" />
          <path d="M214.12 225.826c-2.219-12.177-12.817-21.026-25.19-21.026H86.53c-12.373 0-22.972 8.849-25.182 21.026L51.202 281.6H77.22l9.31-51.2h38.4v51.2h25.6v-51.2h38.4l9.31 51.2h26.018l-10.138-55.774zM230.402 76.8h153.6v25.6h-153.6zM51.202 332.8v25.6h142.217l6.682-20.053c.657-1.954 1.732-3.703 2.611-5.547H51.202zM230.402 153.6v25.6h121.181l25.6-25.6z" />
          <path d="M413.331 117.444c6.17-6.17 13.722-10.351 21.871-12.74V0H.002v512h435.2V314.027l-25.6 25.6V486.4h-384V25.6h384v95.573l3.729-3.729z" />
        </svg>
      </motion.button>

      <div className="relative flex items-center w-full px-20 mb-10 h-1/2">
        <div className="flex self-end justify-start w-1/2">
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
      </div>
      <motion.span
        animate={{
          translateY: -10,
          transition: {
            repeat: Infinity,
            repeatDelay: 5,
          },
        }}
        className="absolute left-1/3 bottom-28 text-xl  after:absolute after:left-1/2 after:top-10 after:h-56 after:w-0.5 after:bg-purple after:content-[''] "
      >
        Scroll
      </motion.span>
      <motion.button
        className="absolute flex items-center justify-center p-3 text-xl border-2 border-white rounded-lg shadow-lg z-2 right-10 top-10 bg-background-white stroke-black"
        whileHover={{
          scale: 1.02,
          color: "#592d8c",
          stroke: "#592d8c",
          borderColor: "#592d8c",
        }}
      >
        <span className="mr-2 font-bold">Let&apos;s work together !</span>
        {/* /welcome/chat_icon.svg code */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={35}
          height={35}
          viewBox="0 0 40 30"
        >
          <g fill="#808184">
            <path d="m6.371 20.055-1.924 4.103a.5.5 0 0 0 .662.665l6.774-3.139a17.79 17.79 0 0 0 2.17.141c7.779 0 14.107-4.896 14.107-10.913C28.161 4.896 21.833 0 14.054 0S-.053 4.896-.053 10.912c0 3.733 2.391 7.12 6.424 9.143zM14.054 1c7.227 0 13.107 4.446 13.107 9.912s-5.88 9.913-13.107 9.913a17.17 17.17 0 0 1-2.187-.15.523.523 0 0 0-.273.042l-5.658 2.621 1.551-3.307a.499.499 0 0 0-.243-.666C3.301 17.542.947 14.382.947 10.912.947 5.446 6.827 1 14.054 1z" />
            <path d="M7.197 13.328a2.1 2.1 0 0 0 .491.059 1.99 1.99 0 0 0 1.572-.763 2.012 2.012 0 0 0 .369-1.728 1.984 1.984 0 0 0-1.451-1.451 2.014 2.014 0 0 0-2.062.705 2.01 2.01 0 0 0-.369 1.727c.17.71.739 1.279 1.45 1.451zm-.296-2.558a.996.996 0 0 1 .787-.383.987.987 0 0 1 .968.744c.076.317.011.628-.183.874-.244.31-.645.445-1.042.351a.987.987 0 0 1-.713-.713 1.003 1.003 0 0 1 .183-.873zM13.098 13.328a2.1 2.1 0 0 0 .491.059c.617 0 1.189-.278 1.571-.763a2.012 2.012 0 0 0 .369-1.728 1.984 1.984 0 0 0-1.451-1.451 2.016 2.016 0 0 0-2.062.705 2.013 2.013 0 0 0-.37 1.727 1.987 1.987 0 0 0 1.452 1.451zm-.296-2.558a.996.996 0 0 1 .787-.383.986.986 0 0 1 .968.744 1 1 0 0 1-.183.874 1.01 1.01 0 0 1-1.042.351.989.989 0 0 1-.714-.713 1 1 0 0 1 .184-.873zM18.998 13.328a2.1 2.1 0 0 0 .491.059 1.99 1.99 0 0 0 1.572-.763 2.012 2.012 0 0 0 .369-1.728 1.984 1.984 0 0 0-1.451-1.451 2.015 2.015 0 0 0-2.062.705 2.01 2.01 0 0 0-.369 1.727c.171.71.74 1.279 1.45 1.451zm-.296-2.558a.996.996 0 0 1 .787-.383.987.987 0 0 1 .968.744c.076.317.011.628-.183.874-.244.31-.646.445-1.042.351a.989.989 0 0 1-.714-.713 1.007 1.007 0 0 1 .184-.873zM29.908 12.218a.5.5 0 1 0-.286.959c3.847 1.146 6.431 4.009 6.431 7.121 0 2.683-1.917 5.206-5.003 6.585a.5.5 0 0 0-.286.557l.59 2.861-3.17-2.395a.525.525 0 0 0-.373-.096 13.48 13.48 0 0 1-1.916.142c-3.661 0-7.203-1.87-8.613-4.548a.5.5 0 1 0-.884.465c1.575 2.993 5.481 5.083 9.498 5.083.601 0 1.223-.041 1.851-.123l4.065 3.07a.496.496 0 0 0 .568.024.5.5 0 0 0 .223-.523l-.779-3.774c3.236-1.577 5.229-4.354 5.229-7.327 0-3.615-2.804-6.786-7.145-8.081z" />
          </g>
        </svg>
      </motion.button>
    </div>
  );
}
