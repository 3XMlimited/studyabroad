// pages/_app.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Dynamic Pixel ID based on pathname
    const currentPath = router.pathname;
    const pixelIdMap = {
      "/path1": "your_pixel_id_1",
      "/path2": "your_pixel_id_2",
      "/path3": "your_pixel_id_3",
      // Add more paths and Pixel IDs as needed
    };
    const currentPixelId = pixelIdMap[currentPath] || "your_default_pixel_id";

    // Load Facebook Pixel with the current Pixel ID
    fbq("init", currentPixelId);
    fbq("track", "PageView");
  }, [router.pathname]);

  return (
    <>
      <Head>
        {/* Facebook Pixel base code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                  n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'your_default_pixel_id'); // Replace with your default Pixel ID
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
