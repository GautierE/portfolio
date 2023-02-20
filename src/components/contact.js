import React from "react";

export default function Contact() {
  return (
    <div className="sticky top-0 w-full h-screen mx-auto my-0 bg-background-white">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-40 text-center text-navy">
          <h2 className="mb-3 text-5xl font-bold ">Send me a message !</h2>
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
                className="p-4 text-lg border-b border-light-purple bg-background-white"
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
                className="p-4 text-lg border-b border-light-purple bg-background-white"
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
              className="p-4 text-lg border-b resize-none h-28 border-light-purple bg-background-white"
              id="message"
              placeholder="Enter your message"
              type="text"
              required
              minLength={30}
            />
          </div>
        </div>
        <button>Send !</button>
      </div>
    </div>
  );
}
