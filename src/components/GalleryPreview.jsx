import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/**
 * GalleryPreview component displays 12 images from gallery as a preview.
 * @author Efeme Noserime
 */
const GalleryPreview = () => {
  // Collect image data from contentful
  const data = useStaticQuery(graphql`
    query GalleryPreviewQuery {
      allContentfulImage(limit: 12) {
        edges {
          node {
            id
            image {
              title
              fluid {
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

  // Destructor data object and rename edges object
  const { edges: previewImages } = data.allContentfulImage;

  return (
    <Container
      as="section"
      className="py-4 d-flex flex-column align-items-center"
    >
      <h2>Gallery</h2>
      <Row
        lg="3"
        md="3"
        sm="2"
        xs="2"
        className="w-100"
        style={{ minHeight: "750px" }}
      >
        {previewImages.map((img, index) => (
          <ImageContainer key={index}>
            <Img fluid={img.node.image.fluid} className="h-100" />
          </ImageContainer>
        ))}
      </Row>
    </Container>
  );
};

const ImageContainer = styled(Col)`
  margin-bottom: 16px;
  width: 100%;
`;

export default GalleryPreview;
