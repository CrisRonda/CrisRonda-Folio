import { Box, Button, Flex, Image, Tooltip } from "@chakra-ui/react";

type value = {
  title: string;
  image: string;
};
interface ValuesProps {
  values: value[];
  example?: {
    url: string;
    label: string;
  };
}
const Techs = ({ values, example }: ValuesProps) => (
  <Box>
    <Flex justifyContent="center" alignItems="center" height="80px">
      {values.map((item) => (
        <Box
          key={item.title}
          width={10}
          m={{ base: 2, lg: 4 }}
          position="relative"
        >
          <Tooltip hasArrow label={item.title}>
            <Image
              src={item.image}
              loading="lazy"
              position="absolute"
              objectFit="contain"
              margin="auto"
            />
          </Tooltip>
        </Box>
      ))}
    </Flex>
    {example && (
      <Button
        size="sm"
        mt="8"
        onClick={() => window.open(example.url, "_blank")}
      >
        {example.label}
      </Button>
    )}
  </Box>
);

export default Techs;
