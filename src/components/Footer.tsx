import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";

const LOGO = process.env.NEXT_PUBLIC_LOGO_DARK;

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("l_bg", "d_bg")}
      color={useColorModeValue("l_text", "d_text")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          loading="lazy"
          src={LOGO}
          alt="cristia-ronda-logo"
          objectFit="cover"
          width="156px"
        />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            © {new Date().getFullYear()} Cristian Ronda. All rights reserved
          </Text>
          <Text>
            Powered by{" "}
            <Link
              color="blue.400"
              fontWeight="bold"
              href="https://nextjs.org/"
              target="_blank"
            >
              Next JS and Vercel
            </Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
