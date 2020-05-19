import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled, { createGlobalStyle } from "styled-components";
import { Container, Row, Col, Modal } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePagination from "../components/Pagination";
import paginationHandlers from "../events/pagination";

const GlobalStyle = createGlobalStyle`
  body.modal-open {
    padding-right: 0 !important;
  }
`;

const GalleryPage = ({ data, pageContext }) => {
  const result = data.allContentfulImage.nodes;
  const [showLightBox, setshowLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightBox = image => {
    setSelectedImage(image);
    setshowLightBox(true);
  };

  useEffect(() => {}, [showLightBox]);

  return (
    <Layout>
      <GlobalStyle />
      <SEO title="Galerie" />
      <Container
        fluid
        as="section"
        className="d-flex flex-column align-items-center py-5"
      >
        <h1 className="mb-5">Gallery</h1>
        <Row
          lg="3"
          md="2"
          sm="2"
          xs="1"
          className="w-100"
          style={{ minHeight: "750px" }}
        >
          {result.map((img, index) => (
            <ImageContainer key={index} onClick={() => openLightBox(img)}>
              <Img key={index} fluid={img.image.fluid} className="h-100" />
            </ImageContainer>
          ))}
        </Row>
        <ImagePagination
          paginationHandlers={paginationHandlers}
          path="/gallery/cats"
          pageContext={pageContext}
          numPages={pageContext.numPagesCats}
        />
        {showLightBox ? (
          <Modal
            size="xl"
            show={showLightBox}
            className=" w-100"
            backdrop={"static"}
            centered
          >
            <Img
              fluid={selectedImage.image.fluid}
              style={{ height: "80vh", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
            <button type="button" onClick={() => setshowLightBox(false)}>
              Close
            </button>
          </Modal>
        ) : null}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query GalleryCatQuery($skip: Int!, $limit: Int!) {
    allContentfulImage(
      skip: $skip
      limit: $limit
      filter: { category: { eq: "Cats" } }
    ) {
      nodes {
        id
        title
        image {
          fluid(maxWidth: 1920) {
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  }
`;

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

const ImageContainer = styled(Col)`
  margin-bottom: 16px;
  width: 100%;
  min-height: 260px;
`;

export default GalleryPage;
