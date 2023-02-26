import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
import cKoyaLogo from "../../../public/projects/c_koya_tech/ckoya_logo.png";
import calendarPlanning from "../../../public/projects/c_koya_tech/calendarPlanning.png";
import chantierDetails from "../../../public/projects/c_koya_tech/chantierDetails.png";
import clockingIn from "../../../public/projects/c_koya_tech/clockingIn.png";
import editListing from "../../../public/projects/c_koya_tech/edit_listing.png";
import eventEdit from "../../../public/projects/c_koya_tech/eventEdit.png";
import holidayManagement from "../../../public/projects/c_koya_tech/holidayManagement.png";
import listing from "../../../public/projects/c_koya_tech/listing.png";
import mobileAll from "../../../public/projects/c_koya_tech/mobileAll.png";
import poseEventEdit from "../../../public/projects/c_koya_tech/poseEventEdit.png";
import totalClockingIn from "../../../public/projects/c_koya_tech/totalClockingIn.png";
import htmlLogo from "../../../public/skills/html_logo.svg";
import cssLogo from "../../../public/skills/css_logo.svg";
import jsLogo from "../../../public/skills/js_logo.svg";
import reactLogo from "../../../public/skills/react_logo.svg";
import jqueryLogo from "../../../public/skills/jquery_logo.svg";
import bootstrapLogo from "../../../public/skills/bootstrap_logo.svg";
import phpLogo from "../../../public/skills/php_logo.svg";
import symfonyLogo from "../../../public/skills/symfony_logo.svg";
import doctrineLogo from "../../../public/skills/doctrine_logo.svg";
import mysqlLogo from "../../../public/skills/mysql_logo.svg";
import gitLogo from "../../../public/skills/git_logo.svg";
import apiIcon from "../../../public/skills/api_icon.svg";

export default function RobertsAdventure() {
  const technoLogos = [
    { url: htmlLogo, desc: "HTML" },
    { url: cssLogo, desc: "CSS" },
    { url: jsLogo, desc: "Javascript" },
    { url: reactLogo, desc: "React" },
    { url: jqueryLogo, desc: "jQuery" },
    { url: bootstrapLogo, desc: "Bootstrap" },
    { url: reactLogo, desc: "React Native" },
    { url: phpLogo, desc: "PHP" },
    { url: symfonyLogo, desc: "Symfony" },
    { url: doctrineLogo, desc: "Doctrine" },
    { url: mysqlLogo, desc: "MySQL" },
    { url: gitLogo, desc: "Git" },
    { url: apiIcon, desc: "RESTful API" },
  ];

  const carouselContent = [
    {
      caption:
        "Calendar to manage cottages installation and employees absences",
      imageUrl: calendarPlanning,
      imageAlt:
        "Calendar to manage cottages installation and employees absences",
    },
    {
      caption: "Installation event creation modal",
      imageUrl: poseEventEdit,
      imageAlt: "Installation event creation modal",
    },
    {
      caption: "Absence event creation modal",
      imageUrl: eventEdit,
      imageAlt: "Absence event creation modal",
    },
    {
      caption: "Project details page",
      imageUrl: chantierDetails,
      imageAlt: "Project details page",
    },
    {
      caption: "Typical listing",
      imageUrl: listing,
      imageAlt: "Typical listing",
    },
    {
      caption: "Typical edit listing (Symfony) form",
      imageUrl: editListing,
      imageAlt: "Typical edit listing (Symfony) form",
    },
    {
      caption: "Holiday management calendar",
      imageUrl: holidayManagement,
      imageAlt: "Holiday management calendar",
    },
    {
      caption: "C-Koya Tech employee clocking in management page",
      imageUrl: clockingIn,
      imageAlt: "C-Koya Tech employee clocking in management page",
    },
    {
      caption:
        "Weekly total clocking of C-Koya Tech employees on different projects",
      imageUrl: totalClockingIn,
      imageAlt:
        "Weekly total clocking of C-Koya Tech employees on different projects",
    },
    {
      caption:
        "Mobile screens for entering/moving/removing pallets in a warehouse",
      imageUrl: mobileAll,
      imageAlt:
        "Mobile screens for entering/moving/removing pallets in a warehouse",
    },
  ];

  const carouselContainer = useRef(null);
  const carouselSize = useSize(carouselContainer);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: carouselPosition * -100 + "%",
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [carouselPosition, controls]);

  const moveToPrevious = () => {
    setCarouselPosition((old) => (old > 0 ? old - 1 : old));
  };

  const moveToNext = () => {
    setCarouselPosition((old) =>
      old < carouselContent.length - 1 ? old + 1 : old
    );
  };

  return (
    <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
      <motion.button
        onClick={() =>
          document.referrer.includes("localhost:3000/")
            ? history.back()
            : (window.location.href = "/")
        }
        className="flex items-center self-center w-auto p-2 mt-10 text-xl border-2 border-black rounded-lg shadow-lg top-10 left-10 justify-evenly stroke-black lg:absolute lg:mt-0 lg:p-4"
        whileHover={{
          scale: 1.02,
          color: "#592d8c",
          stroke: "#592d8c",
          borderColor: "#592d8c",
        }}
      >
        <BackArrow width={35} height={35} />
        <span className="md:mr-2 md:font-bold">Go back !</span>
      </motion.button>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <h2 className="mt-5 text-3xl font-bold text-center text-black select-none font-title md:mt-0 md:text-6xl">
          C-Koya Tech
        </h2>
        <Image src={cKoyaLogo} alt={"C-Koya logo"} priority />
      </div>
      <p className="text-center md:text-lg">
        Sorry for the low quality screenshots, I unfortunately don&apos;t have
        access to these projects anymore.
      </p>
      <div>
        <div className="flex justify-center">
          <button onClick={moveToPrevious} className="mr-5">
            ◀
          </button>
          <div className="w-10/12 overflow-hidden">
            <motion.div
              className="flex"
              ref={carouselContainer}
              animate={controls}
            >
              {carouselSize &&
                carouselContent.map((item, index) => (
                  <CarouselItem
                    key={index}
                    caption={item.caption}
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt}
                    width={carouselSize.width}
                  />
                ))}
            </motion.div>
          </div>
          <button onClick={moveToNext} className="ml-5">
            ▶
          </button>
        </div>
        <div className="flex justify-center mx-auto mt-5 mb-10">
          {carouselContent.map((item, index) => (
            <button
              key={index}
              className="w-3 h-3 mx-2 bg-black rounded-full"
              onClick={() => setCarouselPosition(index)}
              style={{
                backgroundColor: carouselPosition === index ? "black" : "gray",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center py-5 mx-5 bg-white border-t-2 border-purple md:mx-auto">
        {technoLogos.map((item, i) => (
          <div
            key={i}
            className="mx-4 flex w-[50px] flex-col items-center justify-center md:mx-2 md:w-auto"
          >
            <img
              src={item.url?.src}
              alt={item.desc}
              width={"55vw"}
              className="p-2 border-2 rounded-full border-purple"
            />
            <p className="whitespace-nowrap lg:text-[1.3vh]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: carouselSize ? (carouselSize.width * 70) / 100 : "auto",
        }}
        className="py-5 mx-auto mb-5 text-justify border-y-2 border-purple md:text-lg "
      >
        {/* French
        Pendant une année chez C-Koya Tech, j'ai eu l'opportunité
        de travailler sur le développement d'applications complexes pour aider
        les entreprises à accélérer leur transformation digitale. Dans ce
        contexte, nous avons conçu plusieurs applications destinées à un usage
        interne dans les entreprises. Ces applications ne sont donc pas
        accessibles au public.
        
        En grande majorité, nous avons développé des ERP
        (Enterprise Resource Planning) sous forme d'applications web. Selon les
        besoins de nos clients, nous avons également développé des versions
        mobiles de ces applications. Les fonctionnalités proposées étaient très
        variées et personnalisées pour chaque entreprise. Les applications web
        permettaient par exemple la gestion de stocks, de la facturation, du
        temps de travail, tandis que les applications mobiles offraient une plus
        grande flexibilité pour l'accès à l'information en temps réel.
        
        Toutes les applications contenaient toutes plusieurs listings (listes triables et filtrables sur
        chacune de leurs colonnes), ainsi que des modules plus spécifiques tels
        que des outils de planification pour organiser l'utilisation de machines, des tableaux de gestion des congés...
        Ces fonctionnalités ont été développées pour aider les entreprises à mieux organiser leur travail, à
        gagner en efficacité et à maximiser leur productivité. */}
        <p>
          During a year at C-Koya Tech, I had the opportunity to work on the
          development of complex applications to help companies through digital
          transformation. In this context, we designed several applications for
          internal use within companies, so these applications are not
          accessible by the public.
        </p>
        <br />
        <p>
          Primarily, we developed ERP (Enterprise Resource Planning) in the form
          of web applications. Depending on our clients&apos; needs, we also
          developed mobile versions of these applications. The proposed features
          were highly varied and personalized for each company. Web
          applications, for example, allowed for stock management, invoicing,
          time tracking... while mobile applications offered greater flexibility
          for real-time access to information.
        </p>
        <br />
        <p>
          All of the applications were a lot based on multiple listings that
          could be sorted and filtered on each column, as well as more specific
          modules such as planning tools to organize the use of machines, leave
          management tables... These features were developed to help companies
          better organize their work, increase efficiency, and maximize
          productivity.
        </p>
      </div>
    </div>
  );
}

const CarouselItem = ({ caption, imageUrl, imageAlt, width }) => {
  return (
    <div
      style={{ flexBasis: width }}
      className={`flex h-[80vh] w-full flex-[50%] shrink-0 grow-0  flex-col items-center justify-evenly bg-white shadow`}
    >
      <div className="relative mt-5 mb-5">
        <Image src={imageUrl} alt={imageAlt} priority />
      </div>
      <div className="mb-5 h-[5%] w-full text-center">
        <p className="text-lg">{caption}</p>
      </div>
    </div>
  );
};

const useSize = (target) => {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

const BackArrow = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 18V14C19 11.7909 17.2091 10 15 10H5M5 10L9 6M5 10L9 14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
