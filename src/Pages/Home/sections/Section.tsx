import { GridItem, Container, Text, Grid } from "@chakra-ui/react";
import { CONTAINER_WIDTH } from "src/constants";
import { Hero } from "src/components/Hero";
import { ReactElement } from "react";
const Section = ({
  title,
  subtitle,
  Image,
  content,
  id,
  reverseColorTitle,
  reverse,
  colors,
  customComponent,
}: {
  id: string;
  title: string;
  subtitle?: string;
  Image: ReactElement;
  content: string;
  reverse?: boolean;
  reverseColorTitle?: boolean;
  colors?: string[];
  customComponent?: ReactElement;
}) => {
  const order = reverse ? { image: 0, content: 1 } : { image: 1, content: 0 };
  return (
    <Container
      id={id}
      maxW={CONTAINER_WIDTH}
      as={Grid}
      py={12}
      gridTemplateRows="1fr"
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
      mb="4"
    >
      <GridItem
        ml={{ base: "0", lg: 8 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        order={order.content}
      >
        <Hero
          title={title}
          reverse={reverseColorTitle}
          colors={colors}
          fontSize="4xl"
        />
        {subtitle && (
          <Text as="i" color="js_primary" fontSize="md" mb="2">
            {subtitle}
          </Text>
        )}
        <Text
          textAlign="justify"
          fontSize="1xl"
          as="div"
          dangerouslySetInnerHTML={{ __html: content }}
          transition="all .3s ease"
          _hover={{
            color: "white",
          }}
        />
        {customComponent}
      </GridItem>
      <GridItem
        justifyContent="center"
        alignItems="center"
        display="flex"
        order={order.image}
      >
        {Image}
      </GridItem>
    </Container>
  );
};

Section.defaulProps = {
  reverse: false,
};
export default Section;
