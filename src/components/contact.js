import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const animateText = {
    hidden: { y: 30, opacity: 0 },
    visible: ({ delay }) => {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      };
    },
  };
  return (
    <div className="sm:-full sticky top-0 mx-auto my-0 h-screen w-[90%] bg-white">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-10 text-center sm:mb-28 ">
          <motion.h2
            className="mb-3 text-4xl font-bold font-title text-purple sm:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Send me a message !
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Got a question or proposal, or just want <br /> to say hello ? Go
            ahead.
          </motion.p>
        </div>
        <div className="mb-20 flex max-w-[845px] flex-col items-center justify-center sm:w-8/12">
          <div className="flex flex-col justify-around w-full mb-20 sm:flex-row">
            <motion.div
              className="flex flex-col sm:mr-10 sm:w-1/2"
              custom={{ delay: 1 }}
              variants={animateText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="ml-2">
                Name
              </label>
              <input
                className="p-4 text-lg bg-transparent border-b border-purple"
                id="name"
                placeholder="Enter your name"
                type="text"
                required
              />
            </motion.div>
            <motion.div
              className="flex flex-col mt-10 sm:ml-10 sm:mt-0 sm:w-1/2"
              custom={{ delay: 1 }}
              variants={animateText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col w-full"
            custom={{ delay: 1 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
        <motion.button
          className="flex items-center justify-center p-5 border-2 rounded-lg border-purple stroke-purple text-purple sm:w-1/6"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#592d8c",
            color: "rgb(255, 255, 255)",
            stroke: "rgb(255, 255, 255)",
          }}
          custom={{ delay: 1.2 }}
          variants={animateText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
