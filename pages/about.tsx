import { GetServerSideProps } from "next";
import Link from "next/link";
import { getURLStreaming } from "src/services/audio";
import dynamic from "next/dynamic";
const Programmer = dynamic(() => import("src/components/Programmer"), {
  ssr: false,
});

const AboutPage = () => (
  <>
    <Programmer />
  </>
);
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getURLStreaming();
  return {
    props: {
      data,
    },
  };
};
export default AboutPage;
