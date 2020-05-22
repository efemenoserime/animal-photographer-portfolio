import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Img from "gatsby-image";

/**
 *
 * Gallery image held by a column component.
 * @param {string} fluid Image data provided through a gatsby query
 * @param {string} className Classes applied to image container
 * @param {string} style Inline styles for image container
 * @param {string} onClick Click event handler
 *
 * NOTE: All passed properties that weren't defined in the docs will be set
 * directly to the underlying Image component.
 */
const GalleryImage = ({ fluid, className, style, onClick }) => {
  return (
    <ImageContainer
      className={className}
      style={style}
      onClick={() => onClick()}
    >
      <Img
        fluid={fluid}
        style={{ height: "80vh", width: "100%", cursor: "pointer" }}
        className="h-100"
        imgStyle={{ objectFit: "cover" }}
      />
    </ImageContainer>
  );
};

GalleryImage.propTypes = {
  fluid: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const ImageContainer = styled(Col)`
  margin-bottom: 16px;
  width: 100%;
  min-height: 260px;
`;

export default GalleryImage;
