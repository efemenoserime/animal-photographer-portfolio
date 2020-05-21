import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";

const ImagePagination = ({ path, pageContext, numPages }) => {
  const { currentPage } = pageContext;

  const activeStyle = { background: "#3D314A", color: "#fff" };

  // Initialize array for paginationKeys
  const paginationKeys = [];

  // Push pagination index into 'paginationKeys'
  for (let i = 0; i < numPages; i++) {
    paginationKeys.push(i + 1);
  }
  // TODO Create pagination components to navigate back and further between pages
  return (
    <Paginate className="my-3">
      {paginationKeys.map(pageIndex => (
        <li key={pageIndex}>
          {" "}
          <PaginationItem
            style={currentPage === pageIndex ? activeStyle : null}
            cover
            to={`${path}/${pageIndex === 1 ? null : pageIndex}`} // Concat pathname with pageIndex if not equal to one
          >
            {pageIndex}
          </PaginationItem>{" "}
        </li>
      ))}
    </Paginate>
  );
};

ImagePagination.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.object.isRequired,
  numPages: PropTypes.number.isRequired,
};

const Paginate = styled(Pagination)`
  margin: 1rem 0;
`;

const PaginationItem = styled(AniLink)`
  padding: 0.75rem;
  border: thin solid #d3d3d3;

  &:hover {
    background: #a393bf;
    color: #fff;
  }

  &:active {
    background: #3d314a;
    color: #fff;
  }
`;

export default ImagePagination;
