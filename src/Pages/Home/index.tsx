import CTA from "./sections/CTA";
import Footer from "src/components/Footer";
import { FC } from "react";
import { HomeProps } from "interfaces/Pages";
import Contact from "./sections/Contact";

const Home: FC<HomeProps> = (props) => (
  <>
    <CTA />
    <Contact />
    <Footer />
  </>
);

export default Home;
