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

export default function CallToActionWithAnnotation() {
  return (
    <Container height="calc(100vh - 64px)" maxW="7xl">
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
        <GridItem colSpan={{ base: 2, lg: 1 }}></GridItem>
      </Grid>
    </Container>
  );
}
