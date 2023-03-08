module.exports = {
  i18n: {
    defaultLocale:
      typeof navigator !== "undefined" && navigator.languages.includes("fr")
        ? "fr"
        : "en",
    locales: ["en", "fr"],
  },
};
