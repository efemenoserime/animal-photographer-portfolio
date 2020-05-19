import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/HeroSlider";
import GalleryCategories from "../components/GalleryCategories";
import AboutSection from "../components/AboutSection";

//import ContactForm from "../components/ContactForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <GalleryCategories />
    <AboutSection />

    {/*<ContactForm /> */}
  </Layout>
);

export default IndexPage;
