import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="sticky min-h-[2320px] w-full bg-background-white">
      <div className="mx-auto my-0 max-w-[1200px]">
        <div className="pt-64">
          <h2 className="relative select-none pb-7 text-7xl text-black after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-24 after:bg-custom-blue  after:content-['']">
            About me
          </h2>
          <p className="max-w-[900px] pt-5 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            laoreet tincidunt sodales. Phasellus non placerat justo. In accumsan
            quis justo vitae molestie.
          </p>
        </div>
        <div className="mt-64 flex">
          <p className="mr-20 w-1/2 pt-20 text-2xl">
            aPraesent sodales ex at tincidunt porttitor. Pellentesque nec auctor
            enim. Aenean at urna ut metus dictum tempor. Curabitur quis ex quis
            justo malesuada efficitur. Mauris malesuada semper ultricies.
            Quisque ac nulla ut nibh laoreet pharetra.
            <br />
            <br />
            aPraesent sodales ex at tincidunt porttitor. Pellentesque nec auctor
            enim. Aenean at urna ut metus dictum tempor. Curabitur quis ex quis
            justo malesuada efficitur. Mauris malesuada semper ultricies.
            Quisque ac nulla ut nibh laoreet pharetra.
          </p>
          <div className="relative h-[601px] w-[450px]">
            <Image
              src={"/about/sneakers.jpg"}
              alt={"Sneakers picture"}
              fill={true}
            />
          </div>
        </div>
        <div className="mt-64 flex">
          <div className="relative h-[601px] w-[450px]">
            <Image src={"/about/skate.jpg"} alt={"Skate picture"} fill={true} />
          </div>
          <p className="ml-20 w-1/2 pt-20 text-2xl">
            Praesent sodales ex at tincidunt porttitor. Pellentesque nec auctor
            enim. Aenean at urna ut metus dictum tempor. Curabitur quis ex quis
            justo malesuada efficitur. Mauris malesuada semper ultricies.
            Quisque ac nulla ut nibh laoreet pharetra.
            <br />
            <br />
            aPraesent sodales ex at tincidunt porttitor. Pellentesque nec auctor
            enim. Aenean at urna ut metus dictum tempor. Curabitur quis ex quis
            justo malesuada efficitur. Mauris malesuada semper ultricies.
            Quisque ac nulla ut nibh laoreet pharetra.
          </p>
        </div>
      </div>
    </div>
  );
}
