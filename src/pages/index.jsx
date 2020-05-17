import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";
import GalleryPreview from "../components/GalleryPreview";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <GalleryPreview />
  </Layout>
);

export default IndexPage;
