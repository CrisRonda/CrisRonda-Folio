import { HomeProps } from "interfaces/Pages";
import { GetServerSideProps } from "next";
import { FC } from "react";
import Home from "src/Pages/Home";
import { getURLStreaming } from "src/services/audio";

const Index: FC<HomeProps> = (props) => <Home {...props} />;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getURLStreaming();
  return {
    props: {
      data,
    },
  };
};

export default Index;
