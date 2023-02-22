import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="sticky top-0 w-full h-screen mx-auto my-0 bg-background-white">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center mb-28 ">
          <h2 className="mb-3 text-5xl font-bold text-purple ">
            Send me a message !
          </h2>
          <p className="text-2xl">
            Got a question or proposal, or just want <br /> to say hello? Go
            ahead.
          </p>
        </div>
        <div className="mb-20 flex w-8/12 max-w-[845px] flex-col items-center justify-center">
          <div className="flex justify-around w-full mb-20">
            <div className="flex flex-col w-1/2 mr-10">
              <label htmlFor="name" className="ml-2">
                Name
              </label>
              <input
                className="p-4 text-lg bg-transparent border-b border-purple"
                id="name"
                placeholder="Enter your name"
                type="text"
                required
              />{" "}
            </div>
            <div className="flex flex-col w-1/2 ml-10">
              <label htmlFor="email" className="ml-2">
                Email
              </label>
              <input
                className="p-4 text-lg bg-transparent border-b border-purple "
                id="email"
                placeholder="Enter your email"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="ml-2">
              Message
            </label>
            <textarea
              className="p-4 text-lg bg-transparent border-b resize-none h-28 border-purple "
              id="message"
              placeholder="Enter your message"
              type="text"
              required
              minLength={30}
            />
          </div>
        </div>
        <motion.button
          className="flex items-center justify-center w-1/6 p-5 border-2 rounded-sm border-purple stroke-purple text-purple"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#592d8c",
            color: "rgb(255, 255, 255)",
            stroke: "rgb(255, 255, 255)",
          }}
        >
          <span className="mr-5 font-bold">SEND</span>
          <svg
            width="52"
            height="22"
            viewBox="0 0 72 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="0"
              d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
            ></path>
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
