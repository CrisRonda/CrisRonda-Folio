import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({
  title,
  colors,
  fontSize,
  reverse,
}: {
  title: string;
  colors: string[];
  fontSize: string;
  reverse?: boolean;
}) => {
  const gradient = reverse ? colors.reverse().join(",") : colors.join(",");

  return (
    <Flex bgGradient={`linear(to-l, ${gradient})`} bgClip="text" my="4">
      <Heading fontSize={fontSize}>{title}</Heading>
    </Flex>
  );
};

Hero.defaultProps = {
  title: "title here",
  colors: ["primary", "js_primary"],
};
