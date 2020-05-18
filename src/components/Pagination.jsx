import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import { imagesPerPage } from "../../constants";

const ImagePagination = ({ path, pageContext, paginationHandlers }) => {
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
      <Pagination.First onClick={() => paginationHandlers.onClickFirst(path)} />
      <Pagination.Prev
        disabled={pageContext.currentPage === 1 ? true : false}
        onClick={() =>
          paginationHandlers.onClickPrevious(path, pageContext.currentPage - 1)
        }
      />
      {paginationItems.map(item => (
        <Pagination.Item
          href=""
          key={item}
          onClick={() => paginationHandlers.onClickIndex(path, item)}
          active={pageContext.currentPage === item ? true : false} // active if currentPage matches pagination index
        >
          {item}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={
          pageContext.currentPage === pageContext.numPages ? true : false
        }
        onClick={() =>
          paginationHandlers.onClickNext(path, pageContext.currentPage + 1)
        }
      />
      <Pagination.Last
        onClick={() =>
          paginationHandlers.onClickLast(path, pageContext.numPages)
        }
      />
    </Pagination>
  );
};

ImagePagination.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.object.isRequired,
  paginationHandlers: PropTypes.objectOf(PropTypes.func),
};

export default ImagePagination;
