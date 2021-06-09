import CTA from "./sections/CTA";
import { FC } from "react";
import { HomeProps } from "interfaces/Pages";
import Contact from "./sections/Contact";
import Section from "./sections/Section";
import Techs from "./components/Techs";
import { techs } from "src/constants";
import { ProgrammerSVG, BackendSVG, MobileSVG } from "src/assets/Icons";
import { useTranslations } from "next-intl";

const Home: FC<HomeProps> = () => {
  const t = useTranslations("Home");

  return (
    <>
      <CTA />
      <div id="tecnologias">
        <Section
          id="movil"
          title={`${t("tech1.title")}`}
          subtitle={`${t("tech1.subtitle")}`}
          content={`${t("tech1.description")}`}
          Image={<MobileSVG height="325px" />}
          customComponent={
            <Techs
              values={techs.mobile}
              example={{
                label: `${t("tech1.buttonText")}`,
                url: process.env.NEXT_PUBLIC_MOVIL_APP,
              }}
            />
          }
        />
        <Section
          id="Desarrollo web"
          title={`${t("tech2.title")}`}
          subtitle={`${t("tech2.subtitle")}`}
          content={`${t("tech2.description")}`}
          Image={<ProgrammerSVG width="325px" />}
          reverse
          customComponent={
            <Techs
              values={techs.front}
              example={{
                label: `${t("tech2.buttonText")}`,
                url: process.env.NEXT_PUBLIC_ECOMMERCE_WEB,
              }}
            />
          }
        />
        <Section
          id="Desarrollo backend"
          title={`${t("tech3.title")}`}
          subtitle={`${t("tech3.subtitle")}`}
          content={`${t("tech3.description")}`}
          Image={<BackendSVG width="325px" />}
          customComponent={
            <Techs
              values={techs.back}
              example={{
                label: `${t("tech3.buttonText")}`,
                url: process.env.NEXT_PUBLIC_DBZ_API,
              }}
            />
          }
        />
      </div>
      <Contact id="contacto" />
    </>
  );
};

export default Home;
