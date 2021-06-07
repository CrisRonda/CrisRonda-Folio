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
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Programmer = dynamic(() => import("src/components/Programmer"), {
  ssr: false,
});

export default function CallToActionWithAnnotation() {
  return (
    <Container
      height="calc(100vh - 64px)"
      maxW="1440px"
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
            <Heading
              fontWeight={600}
              fontSize={{ base: "7xl" }}
              lineHeight={"110%"}
            >
              Cristian <br />
              <Text as={"span"} color={"blue.400"}>
                Ronda
              </Text>
            </Heading>
            <Text color={"gray.500"}>Frontend developer</Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <Programmer />
        </GridItem>
      </Grid>
    </Container>
  );
}
