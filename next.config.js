const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  redirects() {
    return [
    process.env.MAINTENANCE_MODE === "1"
    ? { source: "/((?!maintenance).*)", destination: "/maintenance.html", permanent: false }
    : null,
    ].filter(Boolean);
  }
};

module.exports = nextConfig;
