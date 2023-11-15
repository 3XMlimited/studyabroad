import { Html, Head, Main, NextScript } from "next/document";

import FACEBOOK_PIXEL_2 from "../components/pixel-2";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <FACEBOOK_PIXEL_2 />
      </Head>
      <body>
        {/* <body style={{backgroundColor:'black'}}> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
