import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Gautier EDEL</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
