import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
  </Layout>
);

export default IndexPage;
