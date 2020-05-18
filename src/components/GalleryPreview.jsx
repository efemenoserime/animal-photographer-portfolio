import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

/**
 * GalleryPreview component displays 3 images from gallery as a preview.
 * @author Efeme Noserime
 */
const GalleryPreview = () => {
  // Collect image data from contentful
  const data = useStaticQuery(graphql`
    query GalleryPreviewQuery {
      allContentfulImage(limit: 3) {
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
      fluid
    >
      <Link to="/gallery">
        <h2 className="my-3">Gallery</h2>
      </Link>
      <Row
        lg="3"
        md="1"
        sm="1"
        xs="1"
        className="w-100"
        style={{ minHeight: "400px" }}
      >
        {previewImages.map((img, index) => (
          <ImageContainer
            key={index}
            className="w-100"
            style={{ height: "400px" }}
          >
            <Img
              fluid={img.node.image.fluid}
              className="h-100"
              imgStyle={{ objectFit: "cover" }}
            />
          </ImageContainer>
        ))}
      </Row>
    </Container>
  );
};

const ImageContainer = styled(Col)`
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 991) {
    height: 400px;
  }
`;

export default GalleryPreview;
