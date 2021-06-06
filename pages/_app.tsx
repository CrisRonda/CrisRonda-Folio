import { ChakraProvider } from "@chakra-ui/react";

import theme from "src/theme";
import { AppProps } from "next/app";
import AudioPlayer from "src/components/AudioPlayer";
import NavBar from "src/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AudioPlayer data={pageProps.data} />
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
