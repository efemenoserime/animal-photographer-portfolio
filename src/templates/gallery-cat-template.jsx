import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, Row, Modal } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImagePagination from "../components/Pagination";
import paginationHandlers from "../events/pagination";
import GalleryImage from "../components/GalleryImage";

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
          {result.map(img => (
            <GalleryImage
              key={img.id}
              fluid={img.image.fluid}
              onClick={() => openLightBox(img)}
            />
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

export default GalleryPage;
