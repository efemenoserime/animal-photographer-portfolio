import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";
import GalleryPreview from "../components/GalleryPreview";
import AboutSection from "../components/AboutSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <GalleryPreview />
    <AboutSection />
  </Layout>
);

export default IndexPage;
