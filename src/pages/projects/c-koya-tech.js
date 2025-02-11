import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import cKoyaLogo from "../../../public/projects/c_koya_tech/ckoya_logo.png";
import htmlLogo from "../../../public/skills/html_logo.svg";
import cssLogo from "../../../public/skills/css_logo.svg";
import jsLogo from "../../../public/skills/js_logo.svg";
import tsLogo from "../../../public/skills/typescript_logo.svg";
import reactLogo from "../../../public/skills/react_logo.svg";
import reactQueryLogo from "../../../public/skills/react_query_logo.svg";
import jqueryLogo from "../../../public/skills/jquery_logo.svg";
import bootstrapLogo from "../../../public/skills/bootstrap_logo.svg";
import phpLogo from "../../../public/skills/php_logo.svg";
import symfonyLogo from "../../../public/skills/symfony_logo.svg";
import doctrineLogo from "../../../public/skills/doctrine_logo.svg";
import mysqlLogo from "../../../public/skills/mysql_logo.svg";
import gitLogo from "../../../public/skills/git_logo.svg";
import apiIcon from "../../../public/skills/api_icon.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BackArrow from "@/components/icons/BackArrow";

export default function RobertsAdventure() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const technoLogos = [
    { url: htmlLogo, desc: "HTML" },
    { url: cssLogo, desc: "CSS" },
    { url: jsLogo, desc: "Javascript" },
    { url: tsLogo, desc: "Typescript" },
    { url: reactLogo, desc: "React" },
    { url: jqueryLogo, desc: "jQuery" },
    { url: reactQueryLogo, desc: "React Query" },
    { url: bootstrapLogo, desc: "Bootstrap" },
    { url: reactLogo, desc: "React Native" },
    { url: phpLogo, desc: "PHP" },
    { url: symfonyLogo, desc: "Symfony" },
    { url: doctrineLogo, desc: "Doctrine" },
    { url: mysqlLogo, desc: "MySQL" },
    { url: gitLogo, desc: "Git" },
    { url: apiIcon, desc: "RESTful API" },
  ];

  const handleGoBack = () => {
    if (
      history.length > 1 &&
      document.referrer.includes(window?.location?.host)
    ) {
      history.back();
    } else {
      if (router.locale === "fr") {
        window.location.href = "/fr";
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <>
      <motion.button
        onClick={handleGoBack}
        className="top-10 left-10 z-10 mx-auto mt-10 flex w-auto items-center justify-evenly self-center rounded-lg border-2 border-black bg-white stroke-black p-2 text-xl shadow-lg lg:sticky lg:mx-0 lg:mt-0 lg:p-4"
        whileHover={{
          scale: 0.98,
          color: "#592d8c",
          stroke: "#592d8c",
          borderColor: "#592d8c",
        }}
      >
        <BackArrow width={35} height={35} />
        <span className="md:mr-2 md:font-bold">{t("ckoya.gobackBtn")}</span>
      </motion.button>
      <div className="mx-auto my-0 flex max-w-[1500px] flex-col">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <h2 className="mt-5 select-none text-center font-title text-3xl font-bold text-black md:mt-0 md:text-6xl">
            C-Koya Tech
          </h2>
          <Image src={cKoyaLogo} alt={"C-Koya logo"} priority />
        </div>
        <div className="mx-5 flex flex-wrap items-center justify-center border-t-2 border-purple bg-white py-5 md:mx-auto">
          {technoLogos.map((item, i) => (
            <div
              key={i}
              className="mx-4 flex w-[50px] flex-col items-center justify-center md:mx-2 md:w-auto"
            >
              <img
                src={item.url?.src}
                alt={item.desc}
                width={"55vw"}
                className="rounded-full border-2 border-purple p-2"
              />
              <p className="whitespace-nowrap lg:text-[1.3vh]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          style={{
            maxWidth: "900px",
          }}
          className="mx-auto mb-5 border-y-2 border-purple py-5 text-justify md:text-lg "
        >
          <p>{t("ckoya.text.firstPart")}</p>
          <br />
          <p>{t("ckoya.text.secondPart")}</p>
          <br />
          <p>{t("ckoya.text.thirdPart")}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
}
