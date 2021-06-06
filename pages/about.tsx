import { GetServerSideProps } from "next";
import Link from "next/link";
import { getURLStreaming } from "src/services/audio";

const AboutPage = () => (
  <>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
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
