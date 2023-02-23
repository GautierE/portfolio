import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="sticky w-full bg-white">
      <div className="mx-auto max-w-[1200px] pb-32">
        <div className="pt-48">
          <h2 className="relative select-none pb-7 font-title text-6xl font-bold after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-24 after:bg-purple  after:content-['']">
            About me
          </h2>
          <p className="max-w-[900px] pt-5 text-3xl">
            I am a computer science graduate developer who has been building
            applications since 2019.
            <br />
            With my expertise in accessibility, performance, and usability, I
            aim to create unique solutions without compromising functionality.
          </p>
        </div>
        <div className="flex mt-40">
          <p className="w-1/2 pt-20 mr-20 text-2xl">
            For 2 years, reselling sneakers has allowed me to combine passion
            and income, making it an extremely rewarding activity in every
            aspect.
            <br />
            <br />
            By seeking out the rarest and most in-demand shoes, I have learned
            to understand the market and find profitable opportunities where
            others only see shoes.
            <br />
            <br />I started my own business in early 2022 and was able to
            fulfill my dream of working for myself. I am now able to manage my
            own company, make my own decisions, and live off my passion!
            {/* French translation
            Depuis 2 ans, la revente de sneakers me permet d&apos;allier passion
            et source de revenu, ce qui en fait une activité extrêmement
            enrichissante sur tous les plans.
            <br />
            <br />
            En cherchant les chaussures les plus rares et les plus demandées,
            j&apos;ai appris à connaître le marché et à trouver des opportunités
            de profit là où d&apos;autres ne voient que de simples chaussures.
            <br />
            <br />
            J&apos;ai créé ma propre entreprise début 2022 et ai pu réaliser mon
            rêve de travailler pour moi-même. Je suis désormais en mesure de
            gérer ma propre entreprise, de prendre mes propres décisions et de
            vivre de ma passion ! */}
          </p>
          <div className="relative h-[601px] w-[450px]">
            <Image
              src={"/about/sneakers.png"}
              alt={"Sneakers picture"}
              fill={true}
            />
          </div>
        </div>
        <div className="flex mt-32">
          <div className="relative h-[601px] w-[450px]">
            <Image src={"/about/skate.png"} alt={"Skate picture"} fill={true} />
          </div>
          <p className="w-1/2 pt-20 ml-20 text-2xl">
            I have been passionate about skateboarding for 6 years, and for me,
            it&apos;s more than just a hobby it&apos;s an activity that allows
            me to let loose, clear my mind, and focus on the present moment.
            <br />
            <br />
            Through this passion, I have learned to be persistent, creative, and
            confident in myself. Skateboarding has taught me to push myself
            beyond my limits and to conquer challenges that I never thought were
            possible.
            {/* French translation
            Je suis passionné par le skateboard depuis 6 ans, c&apos;est pour
            moi plus qu&apos;un simple loisir, c&apos;est une activité qui me
            permet de me défouler, de libérer mon esprit et de me concentrer sur
            le moment présent.
            <br />
            <br />
            Grâce à cette passion, j&apos;ai appris à être persévérant, créatif
            et à avoir confiance en moi-même. Le skateboard m&apos;a appris à me
            dépasser et à relever des défis que je n&apos;aurais jamais cru
            possible. */}
          </p>
        </div>
      </div>
    </div>
  );
}
