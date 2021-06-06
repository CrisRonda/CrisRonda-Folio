import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title, colors }: { title: string; colors: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient={`linear(to-l, ${colors})`}
    bgClip="text"
  >
    <Heading fontSize="4vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "title here",
  colors: "primary, secondary",
};
