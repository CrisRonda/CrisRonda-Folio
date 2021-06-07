import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";
import theme from "src/theme";
import { AppProps } from "next/app";
import AudioPlayer from "src/components/AudioPlayer";
import NavBar from "src/nav";

function MyApp({ Component, pageProps }: AppProps) {
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
        <AudioPlayer data={pageProps.data} />
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
