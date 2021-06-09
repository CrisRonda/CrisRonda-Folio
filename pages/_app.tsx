import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";
import theme from "src/theme";
import { AppProps } from "next/app";
import AudioPlayer from "src/components/AudioPlayer";
import NavBar from "src/nav";
import Footer from "src/components/Footer";
import SEO from "src/components/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  const { statusCode } = pageProps;

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
