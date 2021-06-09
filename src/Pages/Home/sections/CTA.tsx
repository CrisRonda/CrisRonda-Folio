import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Grid,
  Stack,
  GridItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useRouter } from "next/router";
import useWindowSize from "src/hooks/useWindowSize";
import GlichText from "src/components/GlichText";
import { CONTAINER_WIDTH } from "src/constants";
const Programmer = dynamic(() => import("src/components/Programmer"), {
  ssr: false,
});

export default function CallToActionWithAnnotation() {
  const t = useTranslations("Home");
  const { locale } = useRouter();
  const { height } = useWindowSize();
  const URL =
    locale === "es"
      ? process.env.NEXT_PUBLIC_CCV_ES
      : process.env.NEXT_PUBLIC_CCV_EN;

  return (
    <Container
      height={`calc(${height}px - 64px)`}
      maxW={CONTAINER_WIDTH}
      px={{ base: 4, lg: 8 }}
    >
      <Grid
        templateRows={{
          base: "1fr 1fr",
          lg: "1fr",
        }}
        templateColumns="repeat(2, 1fr)"
        gap={4}
        height="100%"
      >
        <GridItem colSpan={{ base: 2, lg: 1 }} display="flex">
          <Flex
            direction="column"
            justify="center"
            alignItems={{ base: "center", lg: "flex-start" }}
            flex={1}
          >
            <Box bg="black">
              <GlichText
                fontWeight={600}
                fontSize={{ base: "7xl" }}
                lineHeight={"110%"}
              >
                Cristian
              </GlichText>
              <GlichText
                fontWeight={600}
                color="blue.300"
                fontSize={{ base: "7xl" }}
                lineHeight={"110%"}
              >
                Ronda
              </GlichText>
            </Box>

            <Text
              my="4"
              color={"white.600"}
              dangerouslySetInnerHTML={{ __html: `${t("title")}` }}
              transition="all .3s ease"
              _hover={{
                color: "white",
              }}
            ></Text>
            <Button
              my={2}
              bg="blue.500"
              rightIcon={<AiOutlineCloudDownload />}
              onClick={() => window.open(URL, "_blank")}
              colorScheme="blue"
              _hover={{
                bg: "blue.700",
              }}
              _focus={{
                bg: "blue.700",
              }}
            >
              {t("downloadResume")}
            </Button>
          </Flex>
        </GridItem>
        <GridItem position="relative" colSpan={{ base: 2, lg: 1 }}>
          <Programmer />
        </GridItem>
      </Grid>
    </Container>
  );
}
