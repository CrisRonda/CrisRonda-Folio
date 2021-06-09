import { Container } from "@chakra-ui/react";
import { CONTAINER_WIDTH, socialNetworks, contacts } from "src/constants";
import { Hero } from "src/components/Hero";
import ContactsLinks from "../components/ContactsLinks";
import { useTranslations } from "next-intl";

const Contact = ({ id }) => {
  const t = useTranslations("Home.contact");
  return (
    <Container id={id} maxW={CONTAINER_WIDTH}>
      <Hero title={`${t("title")}`} fontSize="4xl" />
      <ContactsLinks data={socialNetworks} />
      <Hero title={`${t("subtitle")}`} fontSize="2xl" />
      <ContactsLinks data={contacts} />
    </Container>
  );
};

export default Contact;
