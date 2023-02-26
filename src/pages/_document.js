import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/portfolio.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Ubuntu"
        />{" "}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Gautier's portfolio" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
