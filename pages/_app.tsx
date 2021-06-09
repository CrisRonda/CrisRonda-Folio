import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";
import theme from "src/theme";
import { AppProps } from "next/app";
import AudioPlayer from "src/components/AudioPlayer";
import NavBar from "src/nav";
import Footer from "src/components/Footer";
import SEO from "src/components/SEO";
import { useEffect } from "react";
import * as ga from "analytics/index";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { statusCode } = pageProps;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
      }}
      messages={pageProps.messages}
      timeZone="America/Guayaquil"
    >
      <ChakraProvider resetCSS theme={theme}>
        {!statusCode && <SEO />}
        {!statusCode && <AudioPlayer data={pageProps.data} />}
        {!statusCode && <NavBar />}
        <Component {...pageProps} />
        {!statusCode && <Footer />}
      </ChakraProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
