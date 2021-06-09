import { GetServerSideProps } from "next";
import { getURLStreaming } from "src/services/audio";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Programmer = dynamic(() => import("src/components/Programmer"), {
  ssr: false,
});

const AboutPage = () => (
  <Box width="100vw" height="calc(100vh - 64px)" position="relative">
    <Programmer />
  </Box>
);
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const data = await getURLStreaming();
  return {
    props: {
      data,
      messages: { ...require(`../i18n/${locale}.json`) },
    },
  };
};
export default AboutPage;
