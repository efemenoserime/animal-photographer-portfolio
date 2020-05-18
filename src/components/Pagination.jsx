import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import { imagesPerPage } from "../../constants";

const ImagePagination = ({ onClick, path }) => {
  const data = useStaticQuery(graphql`
    query ImagePaginationQuery {
      allContentfulImage {
        nodes {
          id
          title
        }
      }
    }
  `);

  // Get result out of data object and
  // calculate needed pages to display all images
  const images = data.allContentfulImage.nodes;
  const pages = Math.ceil(images.length / imagesPerPage);

  // Initialize array for paginationItems
  const paginationItems = [];

  // Push pagination index into 'paginationItems'
  for (let i = 0; i < pages; i++) {
    paginationItems.push(i + 1);
  }

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {paginationItems.map(item => (
        <Pagination.Item href="" key={item} onClick={() => onClick(path, item)}>
          {item}
        </Pagination.Item>
      ))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

ImagePagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default ImagePagination;
