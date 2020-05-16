// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/**
 * Slider component for hero section.
 * It utilizes `useStaticQuery` hook to retrieve
 * all HeroSection images.
 * @author Efeme Noserime
 */
const HeroSlider = () => {
  // Collect slider images by using `useStaticQuery` hook
  const data = useStaticQuery(graphql`
    query HeroSliderImageQuery {
      allContentfulImage(filter: { sliderImage: { eq: true } }) {
        edges {
          node {
            title
            node_locale
            image {
              fluid(maxWidth: 2400, quality: 90) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `);
  console.log("Data", data);

  // Destructor data object for further use
  // and rename `edges` object to sliderImages
  const { edges: sliderImages } = data.allContentfulImage;

  return (
    <Carousel as="section" className="d-flex" style={{ height: "80vh" }}>
      {/* Map through all slider images and create carousel item for each */}
      {sliderImages.map((node, index) => (
        <Carousel.Item className="h-100" key={index}>
          <Img fluid={node.node.image.fluid} className="w-100 h-100" />
          <Carousel.Caption>{node.node.title}</Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
