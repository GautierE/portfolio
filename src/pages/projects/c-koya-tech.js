import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimationControls } from "framer-motion";
import useResizeObserver from "@react-hook/resize-observer";
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
                className="z-10 flex items-center self-center w-auto p-2 mx-auto mt-10 text-xl bg-white border-2 border-black rounded-lg shadow-lg top-10 left-10 justify-evenly stroke-black lg:sticky lg:mx-0 lg:mt-0 lg:p-4"
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
                    <h2 className="mt-5 text-3xl font-bold text-center text-black select-none font-title md:mt-0 md:text-6xl">
                        C-Koya Tech
                    </h2>
                    <Image src={cKoyaLogo} alt={"C-Koya logo"} priority />
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
                        maxWidth: "900px"
                    }}
                    className="py-5 mx-auto mb-5 text-justify border-y-2 border-purple md:text-lg "
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

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    };
}
