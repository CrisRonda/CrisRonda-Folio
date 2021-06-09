import { HomeProps } from "interfaces/Pages";
import { GetServerSideProps } from "next";
import { FC } from "react";
import Home from "src/Pages/Home";
import { getURLStreaming } from "src/services/audio";

const Index: FC<HomeProps> = (props) => <Home {...props} />;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const data = await getURLStreaming();

  return {
    props: {
      data,
      messages: { ...require(`../i18n/${locale}.json`) },
    },
  };
};

export default Index;
