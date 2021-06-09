import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

const ContactsLinks = ({ data }) => {
  const t = useTranslations("Home.contact");

  return (
    <Flex justifyContent="center" flexWrap="wrap" my="4">
      {data.map(({ img, label, link, translate }, index) => (
        <Box
          key={index}
          onClick={() => window.open(link, "_blank")}
          cursor="pointer"
          mx="4"
          _first={{
            ml: 0,
          }}
          _last={{
            mr: 0,
          }}
        >
          <Image
            src={img}
            alt={`cristian-ronda-${label}`}
            width="16"
            height="16"
          />
          <Text display="block" textAlign="center" mt="2" as="sub">
            {translate ? t(label) : label}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
export default ContactsLinks;
