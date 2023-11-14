import { Html, Head, Main, NextScript } from "next/document";

import FACEBOOK_PIXEL_1 from "../components/pixel-1";
import FACEBOOK_PIXEL_2 from "../components/pixel-2";
import { usePathname } from "next/navigation";
export default function Document() {
  const pathname = usePathname();
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {pathname?.includes("studyabroad") ? (
          <FACEBOOK_PIXEL_1 />
        ) : (
          <FACEBOOK_PIXEL_2 />
        )}
      </Head>
      <body>
        {/* <body style={{backgroundColor:'black'}}> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
