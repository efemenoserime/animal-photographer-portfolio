import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import ImagePagination from "../components/Pagination";

import { onClick } from "../events/pagination";

const GalleryPage = ({ data }) => {
  const result = data.allContentfulImage.nodes;

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
          md="3"
          sm="2"
          xs="2"
          className="w-100"
          style={{ minHeight: "750px" }}
        >
          {result.map((img, index) => (
            <ImageContainer key={index}>
              <Img fluid={img.image.fluid} className="h-100" />
            </ImageContainer>
          ))}
        </Row>
        <ImagePagination onClick={onClick} path="/gallery" />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query GalleryPageQuery($skip: Int!, $limit: Int!) {
    allContentfulImage(skip: $skip, limit: $limit) {
      nodes {
        id
        title
        image {
          fluid(maxWidth: 400) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`;

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

const ImageContainer = styled(Col)`
  margin-bottom: 16px;
  width: 100%;
`;

export default GalleryPage;