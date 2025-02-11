import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation("common");

  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const animateText = {
    hidden: { x: 30, opacity: 0 },
    visible: ({ delay }) => {
      return {
        x: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeInOut",
        },
      };
    },
  };

  const handleSubmit = () => {
    if (formContent.name === "") {
      toast.warning(t("contact.toast.name"));
      return;
    }

    if (formContent.email === "" || !validateEmail(formContent.email)) {
      toast.warning(t("contact.toast.email"));
      return;
    }

    if (formContent.message === "") {
      toast.warning(t("contact.toast.message"));
      return;
    }

    setFormContent({
      name: "",
      email: "",
      message: "",
    });
    setIsSending(true);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formContent),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSending(false);
        toast.success(
          data.message === "success" ? t("contact.toast.success") : data.message
        );
      })
      .catch((error) => toast.error(error));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="sticky my-0 mt-5 w-full bg-white tall:top-0 tall:mt-0 tall:h-screen">
      <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-center md:w-auto">
        <div className="mb-5 text-center md:mb-28 ">
          <motion.h2
            className="mb-3 font-title text-2xl font-bold text-purple md:text-5xl lg:text-6xl"
            variants={animateText}
            custom={{ delay: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="sm:text-xl md:text-2xl"
            custom={{ delay: 0.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("contact.subtitleFirstPart")}
            <br />
            {t("contact.subtitleSecondPart")}
          </motion.p>
        </div>
        <div className="mb-10 flex w-11/12 max-w-[845px] flex-col items-center justify-center md:mb-20 md:w-8/12">
          <motion.div
            className="mb-5 flex w-full flex-col justify-around md:mb-20 md:flex-row"
            custom={{ delay: 1 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:mr-10 md:w-1/2">
              <label htmlFor="name" className="ml-2">
                {t("contact.form.name.label")}
              </label>
              <input
                className="border-b border-purple bg-transparent p-4 text-lg"
                id="name"
                placeholder={t("contact.form.name.placeholder")}
                type="text"
                required
                value={formContent.name}
                onChange={(e) =>
                  setFormContent((old) => {
                    return { ...old, name: e.target.value };
                  })
                }
              />
            </div>
            <div className="flex flex-col md:ml-10 md:w-1/2">
              <label htmlFor="email" className="ml-2">
                {t("contact.form.email.label")}
              </label>
              <input
                className="border-b border-purple bg-transparent p-4 text-lg "
                id="email"
                placeholder={t("contact.form.email.placeholder")}
                type="email"
                value={formContent.email}
                required
                onChange={(e) =>
                  setFormContent((old) => {
                    return { ...old, email: e.target.value };
                  })
                }
              />
            </div>
          </motion.div>
          <motion.div
            className="flex w-full flex-col"
            custom={{ delay: 1.5 }}
            variants={animateText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="ml-2">
              {t("contact.form.message.label")}
            </label>
            <textarea
              className="h-28 resize-none border-b border-purple bg-transparent p-4 text-lg "
              id="message"
              placeholder={t("contact.form.message.placeholder")}
              type="text"
              required
              minLength={30}
              onChange={(e) =>
                setFormContent((old) => {
                  return { ...old, message: e.target.value };
                })
              }
              value={formContent.message}
            />
          </motion.div>
        </div>
        <motion.button
          className="mb-1 flex items-center justify-center rounded-lg border-2 border-purple stroke-purple px-3 py-2 text-purple md:mb-0 md:w-1/6 md:p-5"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#592d8c",
            color: "rgb(255, 255, 255)",
            stroke: "rgb(255, 255, 255)",
          }}
          custom={{ delay: 1.7 }}
          variants={animateText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={handleSubmit}
        >
          <span className="mr-5 font-bold">{t("contact.form.sendBtn")}</span>
          {isSending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              style={{
                background: "transparent",
                display: "block",
                shapeRendering: "auto",
              }}
              width="30px"
              height="30px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
                ></animateTransform>
              </circle>
            </svg>
          ) : (
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
          )}
        </motion.button>
      </div>
    </div>
  );
}
