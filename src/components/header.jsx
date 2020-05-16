import { Link } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <Navbar
    collapseOnSelect
    variant="dark"
    expand="lg"
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem",
    }}
  >
    <Container>
      <Navbar.Brand>
        <Link style={{ color: "white", textDecoration: "none" }}>
          {" "}
          {siteTitle}{" "}
        </Link>
      </Navbar.Brand>
      <Toggler aria-controls="responsive-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className="nav-link"
            to="/"
            activeStyle={{
              color: "rgba(255, 255, 255, .80)",
            }}
          >
            Home
          </Link>
          <Link className="nav-link" to="#link">
            Galerie
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

const Toggler = styled(Navbar.Toggle)`
  border: none;
  color: "white";

  &:focus,
  &:visited {
    border: none;
    outline: none;
  }
`;

export default Header;
