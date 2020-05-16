import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
  </Layout>
);

export default IndexPage;
