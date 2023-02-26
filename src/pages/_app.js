import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gautier EDEL</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
