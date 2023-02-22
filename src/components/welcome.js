import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
          <p className="sticky z-10 text-4xl text-black">
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
        <div className="flex flex-col items-end w-1/2">
          <p className="w-2/3 mb-5 text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            laoreet tincidunt sodales. Phasellus non placerat justo. In accumsan
            quis justo vitae molestie.
          </p>
          <motion.button
            className="flex items-center justify-center w-1/2 p-3 text-3xl border-2 rounded-sm shadow-lg border-custom-blue stroke-custom-blue text-custom-blue"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4831d4",
              color: "rgb(255, 255, 255)",
              stroke: "rgb(255, 255, 255)",
            }}
          >
            <span className="mr-5">Let&apos;s work together!</span>
            {/* /welcome/chat_icon.svg code */}
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="40px"
              viewBox="0 0 37 32"
              enableBackground="new 0 0 37 32"
              space="preserve"
            >
              <g>
                <path
                  fill="#808184"
                  d="M6.371,20.055l-1.924,4.103c-0.089,0.189-0.05,0.416,0.098,0.564c0.096,0.097,0.224,0.147,0.354,0.147
		c0.071,0,0.143-0.015,0.21-0.046l6.774-3.139c0.777,0.095,1.489,0.141,2.17,0.141c7.779,0,14.107-4.896,14.107-10.913
		C28.161,4.896,21.833,0,14.054,0S-0.053,4.896-0.053,10.912C-0.053,14.645,2.338,18.032,6.371,20.055z M14.054,1
		c7.227,0,13.107,4.446,13.107,9.912s-5.88,9.913-13.107,9.913c-0.681,0-1.396-0.049-2.187-0.15
		c-0.092-0.011-0.188,0.004-0.273,0.042l-5.658,2.621l1.551-3.307c0.057-0.12,0.062-0.258,0.017-0.383s-0.139-0.228-0.26-0.283
		c-3.943-1.823-6.297-4.983-6.297-8.453C0.947,5.446,6.827,1,14.054,1z"
                />
                <path
                  fill="#808184"
                  d="M7.197,13.328c0.162,0.039,0.327,0.059,0.491,0.059c0.617,0,1.19-0.278,1.572-0.763
		c0.382-0.485,0.517-1.115,0.369-1.728c-0.171-0.71-0.74-1.279-1.451-1.451c-0.775-0.188-1.58,0.091-2.062,0.705
		c-0.382,0.485-0.517,1.115-0.369,1.727C5.917,12.587,6.486,13.156,7.197,13.328z M6.901,10.77c0.191-0.243,0.478-0.383,0.787-0.383
		c0.084,0,0.17,0.011,0.255,0.031c0.344,0.083,0.63,0.369,0.713,0.713c0.076,0.317,0.011,0.628-0.183,0.874
		c-0.244,0.31-0.645,0.445-1.042,0.351c-0.344-0.083-0.63-0.369-0.713-0.713C6.642,11.326,6.707,11.016,6.901,10.77z"
                />
                <path
                  fill="#808184"
                  d="M13.098,13.328c0.162,0.039,0.327,0.059,0.491,0.059c0.617,0,1.189-0.278,1.571-0.763
		c0.382-0.485,0.517-1.115,0.369-1.728c-0.171-0.71-0.74-1.279-1.451-1.451c-0.774-0.188-1.579,0.091-2.062,0.705
		c-0.382,0.485-0.517,1.114-0.37,1.727C11.817,12.586,12.387,13.156,13.098,13.328z M12.802,10.77
		c0.191-0.243,0.478-0.383,0.787-0.383c0.084,0,0.17,0.011,0.255,0.031c0.344,0.083,0.631,0.369,0.713,0.713
		c0.077,0.317,0.012,0.628-0.183,0.874c-0.243,0.311-0.644,0.446-1.042,0.351c-0.344-0.083-0.631-0.369-0.714-0.713
		C12.542,11.326,12.607,11.016,12.802,10.77z"
                />
                <path
                  fill="#808184"
                  d="M18.998,13.328c0.162,0.039,0.327,0.059,0.491,0.059c0.617,0,1.19-0.278,1.572-0.763
		c0.382-0.485,0.517-1.115,0.369-1.728c-0.171-0.71-0.74-1.279-1.451-1.451c-0.774-0.188-1.58,0.091-2.062,0.705
		c-0.382,0.485-0.517,1.114-0.369,1.727C17.719,12.587,18.288,13.156,18.998,13.328z M18.702,10.77
		c0.191-0.243,0.478-0.383,0.787-0.383c0.084,0,0.17,0.011,0.255,0.031c0.344,0.083,0.63,0.369,0.713,0.713
		c0.076,0.317,0.011,0.628-0.183,0.874c-0.244,0.31-0.646,0.445-1.042,0.351c-0.344-0.083-0.631-0.369-0.714-0.713
		C18.443,11.326,18.508,11.016,18.702,10.77z"
                />
                <path
                  fill="#808184"
                  d="M29.908,12.218c-0.268-0.075-0.543,0.073-0.622,0.337c-0.079,0.265,0.071,0.543,0.336,0.622
		c3.847,1.146,6.431,4.009,6.431,7.121c0,2.683-1.917,5.206-5.003,6.585c-0.214,0.096-0.333,0.327-0.286,0.557l0.59,2.861
		l-3.17-2.395c-0.107-0.08-0.24-0.11-0.373-0.096c-0.652,0.094-1.296,0.142-1.916,0.142c-3.661,0-7.203-1.87-8.613-4.548
		c-0.128-0.245-0.432-0.338-0.675-0.21c-0.244,0.129-0.338,0.431-0.209,0.675c1.575,2.993,5.481,5.083,9.498,5.083
		c0.601,0,1.223-0.041,1.851-0.123l4.065,3.07C31.9,31.966,32.006,32,32.113,32c0.093,0,0.186-0.025,0.267-0.077
		c0.176-0.111,0.265-0.32,0.223-0.523l-0.779-3.774c3.236-1.577,5.229-4.354,5.229-7.327C37.053,16.684,34.249,13.513,29.908,12.218
		z"
                />
              </g>
            </svg>
          </motion.button>
        </div>
        <motion.span
          animate={{
            translateY: -10,
            scale: 1.1,
            transition: {
              repeat: Infinity,
              repeatDelay: 5,
            },
          }}
          className="absolute left-1/3 bottom-28 text-xl  after:absolute after:left-1/2 after:top-10 after:h-56 after:w-0.5 after:bg-lighter-blue after:content-[''] "
        >
          Scroll
        </motion.span>
      </div>
    </div>
  );
}
